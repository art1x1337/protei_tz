import type { SVGProps } from 'react';

const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const StackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="4" y="5" width="16" height="4" rx="1.5" {...baseProps} />
    <rect x="4" y="10" width="16" height="4" rx="1.5" {...baseProps} />
    <rect x="4" y="15" width="16" height="4" rx="1.5" {...baseProps} />
  </svg>
);

export const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 4l6 2.5V12c0 4.3-2.3 6.9-6 8-3.7-1.1-6-3.7-6-8V6.5L12 4Z" {...baseProps} />
    <path d="M12 8v6" {...baseProps} />
    <path d="M9 11h6" {...baseProps} />
  </svg>
);

export const DocIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M8 4h6l4 4v12H8V4Z" {...baseProps} />
    <path d="M14 4v4h4" {...baseProps} />
    <path d="M10 13h6" {...baseProps} />
    <path d="M10 17h5" {...baseProps} />
  </svg>
);

export const SoundIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M6 10h3l4-4v12l-4-4H6v-4Z" {...baseProps} />
    <path d="M16 9c1.4 1 2 2.3 2 3s-.6 2-2 3" {...baseProps} />
    <path d="M18.5 6.5c2.3 1.6 3.5 3.7 3.5 5.5s-1.2 3.9-3.5 5.5" {...baseProps} />
  </svg>
);

export const PeopleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <circle cx="12" cy="8" r="2.4" {...baseProps} />
    <circle cx="6" cy="9" r="2" {...baseProps} />
    <circle cx="18" cy="9" r="2" {...baseProps} />
    <path d="M4 18c0-2.4 1.8-4 4.4-4h7.2C18.2 14 20 15.6 20 18" {...baseProps} />
    <path d="M2.5 17c0-1.4.8-2.4 2.2-3" {...baseProps} />
    <path d="M21.5 17c0-1.4-.8-2.4-2.2-3" {...baseProps} />
  </svg>
);

export const PodiumIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M8 6h8l-1 4H9L8 6Z" {...baseProps} />
    <path d="M7 10h10l1 7H6l1-7Z" {...baseProps} />
    <path d="M12 6V3" {...baseProps} />
    <path d="M12 17v3" {...baseProps} />
  </svg>
);

export const CheckCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="9" {...baseProps} />
    <path d="m8.5 12.2 2.3 2.3 4.8-5" {...baseProps} />
  </svg>
);

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M4 7h16" {...baseProps} />
    <path d="M4 12h16" {...baseProps} />
    <path d="M4 17h16" {...baseProps} />
  </svg>
);

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M6 6l12 12" {...baseProps} />
    <path d="M18 6 6 18" {...baseProps} />
  </svg>
);

export const ChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="m6 9 6 6 6-6" {...baseProps} />
  </svg>
);
