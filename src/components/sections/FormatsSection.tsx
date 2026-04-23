import { formats } from '../../data/landing';
import { CheckCircleIcon, PeopleIcon, PodiumIcon } from '../icons/Icons';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';

const icons = {
  people: PeopleIcon,
  podium: PodiumIcon,
};

export const FormatsSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="formats" className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          title="Форматы участия"
          description="Выберите подходящий формат взаимодействия"
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {formats.map((format) => {
            const Icon = icons[format.icon];
            const targetId = format.id === 'round-table' ? 'round-table-registration' : 'lectory';

            return (
              <article
                key={format.id}
                className="rounded-[18px] border border-cyan/50 bg-card p-7 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-glow sm:p-9"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-[12px] border border-cyan/55 bg-white/5 text-cyanSoft">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-[32px] font-semibold text-white">{format.title}</h3>
                <div className="mt-2 text-sm uppercase tracking-[0.16em] text-cyanSoft">{format.subtitle}</div>
                <p className="mt-5 max-w-[480px] text-base leading-8 text-white/75">{format.description}</p>
                <ul className="mt-6 space-y-3.5">
                  {format.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-white/82 sm:text-base">
                      <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-cyanSoft" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <Button
                    variant={format.id === 'round-table' ? 'primary' : 'secondary'}
                    fullWidth
                    onClick={() => scrollTo(targetId)}
                  >
                    {format.buttonLabel}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
