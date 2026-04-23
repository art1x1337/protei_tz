import { roundTableTopics } from '../../data/landing';
import { Container } from '../layout/Container';
import { DecorativeLines } from '../ui/DecorativeLines';
import { SectionHeader } from '../ui/SectionHeader';

export const RoundTableProgramSection = () => {
  return (
    <section id="round-table" className="relative overflow-hidden py-20 sm:py-24">
      <DecorativeLines
        flip
        className="pointer-events-none absolute right-0 top-6 hidden h-[540px] w-[560px] opacity-70 xl:block"
      />

      <Container className="relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeader title="Программа круглого стола" description="Ключевые векторы дискуссии" />
          <div className="rounded-[10px] border border-cyan/50 bg-white/5 px-5 py-3 text-sm text-white/88">
            Дискуссионный формат <br className="sm:hidden" /> с экспертами отрасли
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[120px_minmax(0,780px)] lg:gap-10">
          <div className="relative hidden lg:block">
            <div className="absolute left-[57px] top-2 h-[calc(100%-22px)] w-px bg-cyan/50" />
            <div className="space-y-28">
              {roundTableTopics.map((topic) => (
                <div key={topic.id} className="flex justify-center">
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-cyan bg-[#113d73] shadow-[0_0_0_8px_rgba(17,61,115,0.35)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyanSoft" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {roundTableTopics.map((topic) => (
              <article key={topic.id} className="max-w-[760px]">
                <span className="inline-flex rounded-full border border-cyan/55 px-3 py-1 text-xs uppercase tracking-[0.14em] text-white/90">
                  {topic.tag}
                </span>
                <div className="mt-4 flex items-start gap-3">
                  <h3 className="text-[28px] font-semibold leading-tight text-white">{topic.title}</h3>
                  {topic.accent ? (
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-full border border-cyan/40 bg-[#117a7c] text-lg font-semibold text-white shadow-[0_0_18px_rgba(76,196,206,0.35)]">
                      K
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-8 text-white/78 sm:text-base">{topic.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
