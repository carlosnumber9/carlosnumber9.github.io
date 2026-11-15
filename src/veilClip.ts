type Rectangle = Pick<
  DOMRectReadOnly,
  'left' | 'top' | 'right' | 'bottom' | 'width' | 'height'
>;

interface Point {
  x: number;
  y: number;
}

const rectanglePoints = (left: number, top: number, right: number, bottom: number) => [
  { x: left, y: top },
  { x: right, y: top },
  { x: right, y: bottom },
  { x: left, y: bottom },
];

const clipPolygon = (points: Point[], distance: (point: Point) => number) => {
  const clipped: Point[] = [];
  let previous = points[points.length - 1];
  let previousDistance = distance(previous);

  for (const point of points) {
    const currentDistance = distance(point);
    if ((previousDistance >= 0) !== (currentDistance >= 0)) {
      const fraction = previousDistance / (previousDistance - currentDistance);
      clipped.push({
        x: previous.x + fraction * (point.x - previous.x),
        y: previous.y + fraction * (point.y - previous.y),
      });
    }
    if (currentDistance >= 0) clipped.push(point);
    previous = point;
    previousDistance = currentDistance;
  }

  return clipped;
};

const polygonPath = (points: Point[]) =>
  points.length < 3
    ? ''
    : `M${points.map(({ x, y }) => `${x.toFixed(3)} ${y.toFixed(3)}`).join('L')}Z`;

export const createVeilClipPath = (
  layer: Rectangle,
  exclusions: Rectangle[],
  revealSize?: number,
) => {
  if (layer.width <= 0 || layer.height <= 0) return 'path("M0 0Z")';

  const distance =
    revealSize === undefined
      ? ({ x, y }: Point) => layer.height * x - layer.width * y
      : ({ x, y }: Point) => y - x + layer.width - revealSize;
  const outline = clipPolygon(
    rectanglePoints(0, 0, layer.width, layer.height),
    distance,
  );
  const paths = [polygonPath(outline)];

  for (const exclusion of exclusions) {
    const left = Math.max(0, exclusion.left - layer.left);
    const top = Math.max(0, exclusion.top - layer.top);
    const right = Math.min(layer.width, exclusion.right - layer.left);
    const bottom = Math.min(layer.height, exclusion.bottom - layer.top);
    if (right <= left || bottom <= top) continue;

    const hole = clipPolygon(rectanglePoints(left, top, right, bottom), distance);
    paths.push(polygonPath(hole));
  }

  return `path(evenodd, "${paths.join('') || 'M0 0Z'}")`;
};
