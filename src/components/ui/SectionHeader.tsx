import type { ReactNode } from 'react';

type SectionHeaderProps = {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
};

export const SectionHeader = ({ title, description, align = 'left', action }: SectionHeaderProps) => (
  <div className={align === 'center' ? 'text-center' : 'text-left'}>
    <div className={align === 'center' ? 'mx-auto max-w-[760px]' : 'max-w-[560px]'}>
      <h2 className="text-[32px] font-semibold leading-[1.08] text-white sm:text-[42px]">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">{description}</p>
      ) : null}
    </div>
    {action ? <div className="mt-6">{action}</div> : null}
  </div>
);
