export const Footer: React.FC = () => (
  <footer
    style={{
      width: '100%',
      height: '120px',
      marginTop: 'auto',
      position: 'relative',
    }}
  >
    <span
      style={{
        position: 'absolute',
        bottom: '10px',
        color: 'lightgray',
        fontSize: 'min(2.5vw, 16px)',
        left: '50%',
        transform: 'translateX(-50%)',
        whiteSpace: 'nowrap',
        maxWidth: '90%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      © 2024 Carlos Pinedo Sánchez. All rights reserved.
    </span>
  </footer>
);