import type { Lecture } from '../../types';

type LectureCardProps = {
  lecture: Lecture;
  selected: boolean;
  onToggle: (id: string) => void;
};

const getSpeakerInitials = (speaker: string) => {
  const parts = speaker.split(' ').filter(Boolean);
  return parts.slice(0, 2).map((part) => part[0]).join('').toUpperCase() || 'PR';
};

export const LectureCard = ({ lecture, selected, onToggle }: LectureCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onToggle(lecture.id)}
      className={`group flex w-full gap-4 rounded-[14px] border p-4 text-left shadow-card transition duration-200 hover:-translate-y-0.5 sm:p-5 ${
        selected
          ? 'border-cyan bg-[linear-gradient(135deg,rgba(76,165,255,0.25)_0%,rgba(10,28,58,0.96)_100%)] shadow-glow'
          : 'border-white/5 bg-[linear-gradient(135deg,rgba(23,52,94,0.95)_0%,rgba(9,23,49,0.96)_100%)] hover:border-cyan/45'
      }`}
      aria-pressed={selected}
    >
      <div
        className={`grid h-[88px] w-[72px] flex-none place-items-center rounded-[10px] border text-xl font-semibold text-white ${
          lecture.accent
            ? 'border-cyan/55 bg-[linear-gradient(135deg,#0b2b64_0%,#6abdd3_100%)]'
            : 'border-white/10 bg-[linear-gradient(135deg,#0e2146_0%,#5f8ec9_100%)]'
        }`}
      >
        {getSpeakerInitials(lecture.speaker)}
      </div>

      <div className="min-w-0 flex-1">
        <span className="inline-flex rounded-full border border-cyan/45 bg-white/5 px-3 py-1 text-[11px] text-white/88">
          {lecture.time}
        </span>
        <h4 className="mt-3 text-lg font-semibold leading-snug text-white sm:text-[28px] sm:leading-[1.16] lg:text-[24px]">
          {lecture.title}
        </h4>
        <p className="mt-2 text-sm leading-6 text-white/76 sm:text-[15px]">
          {lecture.speaker}, {lecture.role}
          <br />
          {lecture.company}
        </p>
      </div>
    </button>
  );
};
