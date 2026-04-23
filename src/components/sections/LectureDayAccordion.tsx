import { useState } from 'react';
import type { LectureDay } from '../../types';
import { ChevronIcon } from '../icons/Icons';
import { LectureCard } from './LectureCard';

type LectureDayAccordionProps = {
  day: LectureDay;
  selectedIds: string[];
  onToggleLecture: (lectureId: string) => void;
  defaultOpen?: boolean;
};

export const LectureDayAccordion = ({
  day,
  selectedIds,
  onToggleLecture,
  defaultOpen = false,
}: LectureDayAccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-cyan/55 pb-5 last:pb-0">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[24px] font-semibold text-white sm:text-[28px]">{day.label}</span>
        <ChevronIcon className={`h-5 w-5 flex-none text-white transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen ? (
        <div className="space-y-4 pt-4 sm:space-y-5">
          {day.lectures.map((lecture) => (
            <LectureCard
              key={lecture.id}
              lecture={lecture}
              selected={selectedIds.includes(lecture.id)}
              onToggle={onToggleLecture}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
