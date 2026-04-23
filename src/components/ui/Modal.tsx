import type { PropsWithChildren } from 'react';
import { CloseIcon } from '../icons/Icons';

type ModalProps = PropsWithChildren<{
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tone?: 'success' | 'error';
}>;

export const Modal = ({ open, onClose, title, description, tone = 'success', children }: ModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020817]/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-[18px] border border-cyan/35 bg-[linear-gradient(135deg,rgba(13,37,76,0.98)_0%,rgba(6,20,44,0.98)_100%)] p-6 shadow-[0_28px_60px_rgba(1,8,25,0.55)] sm:p-7">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition hover:text-white"
          aria-label="Закрыть"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        <div
          className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border ${tone === 'success' ? 'border-cyan/50 bg-cyan/15 text-cyanSoft' : 'border-rose-400/40 bg-rose-400/10 text-rose-300'}`}
        >
          <span className="text-xl font-semibold">{tone === 'success' ? '✓' : '!'}</span>
        </div>

        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/78">{description}</p>
        {children ? <div className="mt-5">{children}</div> : null}
      </div>
    </div>
  );
};
