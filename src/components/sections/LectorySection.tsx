import { useMemo, useState } from 'react';
import { lectureDays } from '../../data/landing';
import { Container } from '../layout/Container';
import { DecorativeLines } from '../ui/DecorativeLines';
import { LectureDayAccordion } from './LectureDayAccordion';
import { LectoryRegistrationSection } from './LectoryRegistrationSection';

export const LectorySection = () => {
  const [selectedLectureIds, setSelectedLectureIds] = useState<string[]>(['7-1', '7-2', '7-3']);

  const toggleLecture = (lectureId: string) => {
    setSelectedLectureIds((current) =>
      current.includes(lectureId) ? current.filter((id) => id !== lectureId) : [...current, lectureId],
    );
  };

  const selectedLecturesCount = selectedLectureIds.length;

  const selectedTitles = useMemo(() => {
    const titles = new Set(selectedLectureIds);
    return lectureDays
      .flatMap((day) => day.lectures)
      .filter((lecture) => titles.has(lecture.id))
      .map((lecture) => lecture.title);
  }, [selectedLectureIds]);

  return (
    <section id="lectory" className="relative overflow-hidden py-20 sm:py-24">
      <DecorativeLines className="pointer-events-none absolute bottom-[-40px] left-[-30px] h-[280px] w-[360px] opacity-80 sm:h-[320px] sm:w-[420px]" />

      <Container className="relative z-10">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_420px] xl:gap-12">
          <div>
            <div className="max-w-[620px]">
              <h2 className="text-[38px] font-semibold leading-[1.06] text-white sm:text-[52px]">Программа лектория</h2>
              <p className="mt-4 text-base leading-8 text-white/78">
                Выберите интересующие вас темы и составьте индивидуальное расписание. Регистрация доступна на каждое событие отдельно.
              </p>
            </div>

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-6">
              {lectureDays.map((day, index) => (
                <LectureDayAccordion
                  key={day.label}
                  day={day}
                  defaultOpen={index === 0}
                  selectedIds={selectedLectureIds}
                  onToggleLecture={toggleLecture}
                />
              ))}
            </div>
          </div>

          <div className="xl:sticky xl:top-28 xl:self-start">
            <LectoryRegistrationSection
              selectedLecturesCount={selectedLecturesCount}
              onSuccessfulSubmit={() => setSelectedLectureIds([])}
            />

            <div className="mt-6 rounded-[14px] border border-cyan/25 bg-white/5 p-4 text-sm leading-7 text-white/72">
              <div className="mb-2 font-medium text-white/90">Выбранные темы</div>
              {selectedTitles.length > 0 ? (
                <ul className="space-y-2">
                  {selectedTitles.map((title) => (
                    <li key={title} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyanSoft" />
                      <span>{title}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Пока ничего не выбрано. Кликните по карточкам лекций слева.</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
