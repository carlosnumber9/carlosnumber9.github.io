export const Footer: React.FC = () => (
  <footer
    style={{
      width: '100%',
      height: '120px',
      position: 'relative',
    }}
  >
    <span
      style={{
        position: 'absolute',
        bottom: '10px',
        color: 'lightgray',
        fontSize: 'large',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      © 2024 Carlos Pinedo Sánchez. All rights reserved.
    </span>
  </footer>
);
