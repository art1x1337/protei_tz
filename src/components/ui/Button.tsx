import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'ghost';
    fullWidth?: boolean;
  }
>;

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  fullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary:
      'bg-button text-white shadow-[0_10px_24px_rgba(18,148,205,0.25)] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-cyan/80',
    secondary:
      'border border-cyan/60 bg-white/5 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan/80',
    ghost: 'text-white/85 hover:text-white',
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-[8px] px-6 py-3 text-sm font-medium transition duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
