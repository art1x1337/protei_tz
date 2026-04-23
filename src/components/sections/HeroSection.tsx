import { eventMeta } from '../../data/metadata';
import { Button } from '../ui/Button';
import { DecorativeLines } from '../ui/DecorativeLines';
import { Container } from '../layout/Container';

export const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative overflow-hidden bg-hero py-20 sm:py-24 lg:py-28">
      <DecorativeLines className="pointer-events-none absolute left-0 top-0 h-[300px] w-[420px] opacity-80 sm:h-[360px] sm:w-[520px]" />
      <DecorativeLines
        flip
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[420px] opacity-60 sm:h-[380px] sm:w-[560px]"
      />

      <Container className="relative z-10">
        <div className="max-w-[840px]">
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/76 sm:text-base">
            {eventMeta.map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                {index > 0 ? <span className="hidden h-6 w-px bg-cyan/45 sm:block" /> : null}
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h1 className="mt-10 text-[44px] font-semibold leading-[0.98] text-white sm:text-[58px] lg:text-[72px]">
            Импортозамещение <br /> или <span className="text-cyanSoft">локализация</span>
          </h1>

          <p className="mt-8 max-w-[760px] text-xl font-semibold leading-snug text-white sm:text-[32px] sm:leading-[1.2]">
            Стратегия повышения контролируемости и управляемости ИТ‑решений для государства и КИИ — какой путь выбрать?
          </p>

          <p className="mt-4 max-w-[620px] text-base leading-7 text-white/75 sm:text-lg">
            Закрытая дискуссия и практический лекторий для ИТ и телекоммуникационной отрасли.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="sm:min-w-[280px]" onClick={() => scrollTo('round-table-registration')}>
              Участвовать в круглом столе
            </Button>
            <Button variant="secondary" className="sm:min-w-[280px]" onClick={() => scrollTo('lectory')}>
              Зарегистрироваться на лекторий
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
