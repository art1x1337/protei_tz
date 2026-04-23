import type { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
