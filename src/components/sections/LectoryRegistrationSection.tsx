import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { lectoryFormDefaults } from '../../data/defaults';
import type { LectoryRegistrationFormValues } from '../../types';
import { formatPhone, isPhoneValid } from '../../utils/phone';
import { Button } from '../ui/Button';
import { InputField, TextareaField } from '../ui/FormField';
import { Modal } from '../ui/Modal';

type LectoryRegistrationSectionProps = {
  selectedLecturesCount: number;
  onSuccessfulSubmit?: () => void;
};

export const LectoryRegistrationSection = ({
  selectedLecturesCount,
  onSuccessfulSubmit,
}: LectoryRegistrationSectionProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LectoryRegistrationFormValues>({
    defaultValues: lectoryFormDefaults,
  });

  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const onSubmit = handleSubmit(async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const shouldFail = values.email.toLowerCase().includes('error') || Math.random() < 0.25;

    if (shouldFail) {
      setErrorOpen(true);
      return;
    }

    setSuccessOpen(true);
    reset(lectoryFormDefaults);
    onSuccessfulSubmit?.();
  });

  return (
    <>
      <div className="rounded-[18px] border border-cyan/50 bg-card p-6 shadow-card sm:p-8">
        <h3 className="text-[40px] font-semibold leading-[1.06] text-white sm:text-[52px] lg:text-[56px]">
          Регистрация <br /> на лекторий
        </h3>

        <form onSubmit={onSubmit} className="mt-8 grid gap-x-4 gap-y-1 md:grid-cols-2 lg:mt-10">
          <InputField
            label="ФИО*"
            placeholder="Иванов Иван Иванович"
            error={errors.fullName?.message}
            {...register('fullName', {
              required: 'Введите ФИО',
              minLength: {
                value: 6,
                message: 'Укажите полное имя',
              },
            })}
          />

          <Controller
            control={control}
            name="phone"
            rules={{
              validate: (value) => isPhoneValid(value) || 'Введите телефон в формате +7 (999) 999-99-99',
            }}
            render={({ field }) => (
              <InputField
                label="Телефон*"
                placeholder="+7 (987) 654-32-10"
                error={errors.phone?.message}
                value={field.value}
                onChange={(event) => field.onChange(formatPhone(event.target.value))}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
              />
            )}
          />

          <InputField
            label="Компания*"
            placeholder="Название компании"
            error={errors.company?.message}
            {...register('company', {
              required: 'Введите название компании',
            })}
          />

          <InputField
            label="Должность*"
            placeholder="Руководитель отдела..."
            error={errors.position?.message}
            {...register('position', {
              required: 'Введите должность',
            })}
          />

          <InputField
            label="Email*"
            placeholder="example@company.ru"
            error={errors.email?.message}
            wrapperClassName="md:col-span-2"
            {...register('email', {
              required: 'Введите email',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Введите корректный email',
              },
            })}
          />

          <TextareaField
            label="Ваши вопросы к обсуждению"
            placeholder="Какие темы вам особенно интересны?"
            error={errors.questions?.message}
            wrapperClassName="md:col-span-2"
            {...register('questions')}
          />

          <div className="mt-2 md:col-span-2">
            <div className="mb-5 text-sm text-white/85">Выбрано {selectedLecturesCount} лекций</div>
            <Button type="submit" variant="secondary" fullWidth disabled={isSubmitting}>
              {isSubmitting ? 'Отправляем...' : 'Зарегистрироваться'}
            </Button>
              <p className="mt-3 text-center text-[12px] leading-4 text-white/40">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a
                href="/privacy-policy.html"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 transition hover:text-white/70"
                >
                политикой обработки персональных данных
                </a>
                .
              </p>
          </div>
        </form>
      </div>

      <Modal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        title="Регистрация отправлена"
        description="Спасибо! Мы сохранили вашу заявку на участие в лектории. Менеджер свяжется с вами для подтверждения выбранных лекций."
        tone="success"
      >
        <Button fullWidth onClick={() => setSuccessOpen(false)}>
          Отлично
        </Button>
      </Modal>

      <Modal
        open={errorOpen}
        onClose={() => setErrorOpen(false)}
        title="Не удалось отправить заявку"
        description="Сервер временно недоступен. Попробуйте ещё раз чуть позже. Для быстрой проверки ошибки можно ввести email со словом error."
        tone="error"
      >
        <Button fullWidth variant="secondary" onClick={() => setErrorOpen(false)}>
          Понятно
        </Button>
      </Modal>
    </>
  );
};
