import { Controller, useForm } from 'react-hook-form';
import { roundTableFormDefaults } from '../../data/defaults';
import type { RoundTableFormValues } from '../../types';
import { isPhoneValid, formatPhone } from '../../utils/phone';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { InputField } from '../ui/FormField';
import { SectionHeader } from '../ui/SectionHeader';

export const RoundTableRegistrationSection = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RoundTableFormValues>({
    defaultValues: roundTableFormDefaults,
  });

  const onSubmit = handleSubmit(async () => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    reset(roundTableFormDefaults);
  });

  return (
    <section id="round-table-registration" className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          title="Регистрация на круглый стол"
          description="Для участия в закрытой дискуссии необходимо заполнить информацию о себе"
          align="center"
        />

        <div className="mx-auto mt-10 max-w-[920px] rounded-[18px] border border-cyan/50 bg-card p-6 shadow-card sm:p-8 lg:p-10">
          <form onSubmit={onSubmit} className="grid gap-x-5 gap-y-1 md:grid-cols-2">
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

            <div className="mt-3 md:col-span-2">
              <Button type="submit" fullWidth disabled={isSubmitting}>
                {isSubmitting ? 'Отправляем...' : 'Запросить приглашение'}
              </Button>
              <p className="mt-4 text-center text-xs leading-6 text-white/35">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};
