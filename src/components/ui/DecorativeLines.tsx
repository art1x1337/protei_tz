import type { CSSProperties } from 'react';

type DecorativeLinesProps = {
  className?: string;
  flip?: boolean;
  style?: CSSProperties;
};

export const DecorativeLines = ({ className = '', flip = false, style }: DecorativeLinesProps) => {
  return (
    <svg
      viewBox="0 0 420 280"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined, ...style }}
    >
      {[0, 14, 28, 42, 56].map((offset) => (
        <path
          key={offset}
          d={`M20 ${42 + offset}C118 ${16 + offset}, 180 ${12 + offset}, 248 ${58 + offset}C310 ${100 + offset}, 344 ${168 + offset}, 398 ${258 + offset}`}
          stroke="rgba(220, 245, 255, 0.32)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
};
