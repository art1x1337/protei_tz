import { forwardRef } from 'react';
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type BaseFieldProps = {
  label: string;
  error?: string;
  wrapperClassName?: string;
};

type InputFieldProps = BaseFieldProps & InputHTMLAttributes<HTMLInputElement>;

type TextareaFieldProps = BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(function InputField(
  { label, error, className = '', wrapperClassName = '', ...props },
  ref,
) {
  return (
    <label className={`block ${wrapperClassName}`}>
      <span className="mb-2 block text-sm text-white/92">{label}</span>
      <input
        ref={ref}
        className={`h-11 w-full rounded-[7px] border border-transparent bg-[#081a35]/90 px-4 text-sm text-white outline-none transition placeholder:text-white/24 focus:border-cyan/70 focus:bg-[#0b1f40] ${error ? 'border-rose-400/70' : ''} ${className}`}
        {...props}
      />
      <span className="mt-1.5 block min-h-[20px] text-xs text-rose-300">{error ?? ' '}</span>
    </label>
  );
});

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(function TextareaField(
  { label, error, className = '', wrapperClassName = '', ...props },
  ref,
) {
  return (
    <label className={`block ${wrapperClassName}`}>
      <span className="mb-2 block text-sm text-white/92">{label}</span>
      <textarea
        ref={ref}
        className={`min-h-[112px] w-full resize-none rounded-[7px] border border-transparent bg-[#081a35]/90 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/24 focus:border-cyan/70 focus:bg-[#0b1f40] ${error ? 'border-rose-400/70' : ''} ${className}`}
        {...props}
      />
      <span className="mt-1.5 block min-h-[20px] text-xs text-rose-300">{error ?? ' '}</span>
    </label>
  );
});
