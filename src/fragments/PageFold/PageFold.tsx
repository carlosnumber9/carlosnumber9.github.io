import { useCallback, useEffect, useRef, useState } from 'react';
import { StyledPageFold } from './StyledPageFold';

type FoldState = 'idle' | 'peeling';

interface Point {
  x: number;
  y: number;
}

const FOLD_SIZE = 64;
const ANIM_DURATION = 1200;

/** Circular ease-out — same as turn.js */
function easeOut(t: number): number {
  return Math.sqrt(1 - (t - 1) * (t - 1));
}

/** Quadratic Bézier interpolation */
function bezier2(a: Point, cp: Point, b: Point, t: number): Point {
  const u = 1 - t;
  return {
    x: u * u * a.x + 2 * u * t * cp.x + t * t * b.x,
    y: u * u * a.y + 2 * u * t * cp.y + t * t * b.y,
  };
}

/**
 * Core draw routine — inspired by turn.js _fold for "sheet" effect.
 *
 * `corner` is the current position of the page corner being dragged.
 * We compute the fold line (perpendicular bisector between the resting
 * corner and dragged corner), then clip and draw front + back surfaces.
 */
function drawFold(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  corner: Point,
) {
  const origin: Point = { x: w, y: 0 }; // resting position (top-right)
  ctx.clearRect(0, 0, w, h);

  // Vector from corner → origin
  const dx = origin.x - corner.x;
  const dy = origin.y - corner.y;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // If the corner is at (or very near) its resting position, nothing to draw
  if (dist < 1) return;

  // Midpoint between resting and dragged corner
  const mid: Point = { x: (origin.x + corner.x) / 2, y: (origin.y + corner.y) / 2 };

  // Fold line angle (perpendicular to the drag vector)
  const angle = Math.atan2(dy, dx);
  const foldAngle = angle + Math.PI / 2;

  // Distance the fold line extends (enough to cross the whole viewport)
  const diag = Math.sqrt(w * w + h * h);

  // Two points on the fold line
  const fA: Point = {
    x: mid.x + Math.cos(foldAngle) * diag,
    y: mid.y + Math.sin(foldAngle) * diag,
  };
  const fB: Point = {
    x: mid.x - Math.cos(foldAngle) * diag,
    y: mid.y - Math.sin(foldAngle) * diag,
  };

  const offsetDir = { x: Math.cos(angle) * diag, y: Math.sin(angle) * diag };

  // ── SHADOW on the flat part along the fold line ──
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(fA.x, fA.y);
  ctx.lineTo(fB.x, fB.y);
  ctx.lineTo(fB.x + offsetDir.x, fB.y + offsetDir.y);
  ctx.lineTo(fA.x + offsetDir.x, fA.y + offsetDir.y);
  ctx.closePath();
  ctx.clip();

  const shadowDist = dist * 0.15;
  if (shadowDist > 2) {
    const grd = ctx.createLinearGradient(
      mid.x - Math.cos(angle) * shadowDist,
      mid.y - Math.sin(angle) * shadowDist,
      mid.x,
      mid.y,
    );
    grd.addColorStop(0, 'rgba(0,0,0,0)');
    grd.addColorStop(1, 'rgba(0,0,0,0.1)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, w, h);
  }
  ctx.restore();

  // ── BACK OF PAGE (the curled-over part, mirrored) ──
  ctx.save();

  // Clip to the opposite side of the fold line
  ctx.beginPath();
  ctx.moveTo(fA.x, fA.y);
  ctx.lineTo(fB.x, fB.y);
  ctx.lineTo(fB.x - offsetDir.x, fB.y - offsetDir.y);
  ctx.lineTo(fA.x - offsetDir.x, fA.y - offsetDir.y);
  ctx.closePath();
  ctx.clip();

  // Mirror transform — reflect across the fold line
  ctx.translate(mid.x, mid.y);
  ctx.rotate(foldAngle);
  ctx.scale(1, -1);
  ctx.rotate(-foldAngle);
  ctx.translate(-mid.x, -mid.y);

  // Paper back color — white
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);

  ctx.restore();

  // ── DROP SHADOW under the curled part ──
  if (dist > 10) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(fA.x, fA.y);
    ctx.lineTo(fB.x, fB.y);
    ctx.lineTo(fB.x - offsetDir.x, fB.y - offsetDir.y);
    ctx.lineTo(fA.x - offsetDir.x, fA.y - offsetDir.y);
    ctx.closePath();
    ctx.clip();

    const shadowGrd = ctx.createLinearGradient(
      mid.x - Math.cos(angle) * 15,
      mid.y - Math.sin(angle) * 15,
      mid.x + Math.cos(angle) * 8,
      mid.y + Math.sin(angle) * 8,
    );
    shadowGrd.addColorStop(0, 'rgba(0,0,0,0)');
    shadowGrd.addColorStop(0.5, 'rgba(0,0,0,0.06)');
    shadowGrd.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = shadowGrd;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }
}

export const PageFold = () => {
  const [state, setState] = useState<FoldState>('idle');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  const handleClick = () => {
    if (state === 'idle') setState('peeling');
  };

  const animate = useCallback(
    (isPeeling: boolean) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = canvas.width;
      const h = canvas.height;

      // Start: top-right corner (idle position, slightly inset for the fold)
      const start: Point = { x: w - FOLD_SIZE, y: FOLD_SIZE };
      // End: far past the bottom-left corner so the fold fully exits the screen
      const end: Point = { x: -w, y: h * 2 };
      // Control point for the Bézier path — gives a nice arc
      const cp: Point = { x: w * 0.15, y: h * 0.1 };

      const startTime = performance.now();

      const step = (now: number) => {
        let t = Math.min((now - startTime) / ANIM_DURATION, 1);
        t = easeOut(t);

        if (!isPeeling) t = 1 - t;

        const corner = bezier2(start, cp, end, t);
        drawFold(ctx, w, h, corner);

        if ((isPeeling && t < 1) || (!isPeeling && t > 0)) {
          animRef.current = requestAnimationFrame(step);
        } else {
          // Animation done — always return to idle with fold visible
          ctx.clearRect(0, 0, w, h);
          drawIdleFold(ctx, w, FOLD_SIZE);
          setState('idle');
        }
      };

      animRef.current = requestAnimationFrame(step);
    },
    [],
  );

  // Draw the static fold corner
  const drawIdleFold = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, size: number) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Shadow under fold
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(w - size, 0);
      ctx.lineTo(w, 0);
      ctx.lineTo(w, size);
      ctx.closePath();
      ctx.fillStyle = '#c8c4ba';
      ctx.fill();
      ctx.restore();

      // The folded triangle — white with black border
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(w - size, 0);
      ctx.lineTo(w, size);
      ctx.lineTo(w - size, size);
      ctx.closePath();

      ctx.fillStyle = '#ffffff';
      ctx.fill();

      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    },
    [],
  );

  // Setup canvas + draw initial fold
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');
      if (ctx && state === 'idle') {
        drawIdleFold(ctx, canvas.width, FOLD_SIZE);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [state, drawIdleFold]);

  // Trigger animations on state change
  useEffect(() => {
    if (state === 'peeling') {
      animate(true);
    }
    return () => cancelAnimationFrame(animRef.current);
  }, [state, animate]);

  return (
    <StyledPageFold>
      <canvas ref={canvasRef} className="fold-canvas" />
      {state === 'idle' && (
        <div className="fold-hitarea" onClick={handleClick} />
      )}
    </StyledPageFold>
  );
};
