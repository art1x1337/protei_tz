import { features } from '../../data/landing';
import { DocIcon, ShieldIcon, SoundIcon, StackIcon } from '../icons/Icons';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';

const icons = {
  stack: StackIcon,
  shield: ShieldIcon,
  doc: DocIcon,
  sound: SoundIcon,
};

export const FeaturesSection = () => {
  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          title="Точка выбора для отрасли ИТ"
          description="Перед отраслью стоит практический вопрос: как обеспечить реальную управляемость инфраструктуры и устойчивость КИИ, а не формальное соответствие требованиям?"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = icons[feature.icon];

            return (
              <article
                key={feature.id}
                className="rounded-[16px] border border-cyan/50 bg-card p-6 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-glow sm:p-7"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-[12px] border border-cyan/55 bg-white/5 text-cyanSoft">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-[26px] font-semibold leading-tight text-white">{feature.title}</h3>
                <p className="mt-3 max-w-[360px] text-sm leading-7 text-white/75 sm:text-base">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
