export type Lecture = {
  id: string;
  day: string;
  time: string;
  title: string;
  speaker: string;
  role: string;
  company: string;
  accent?: boolean;
};

export type LectureDay = {
  label: string;
  lectures: Lecture[];
};

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: 'stack' | 'shield' | 'doc' | 'sound';
};

export type Format = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  buttonLabel: string;
  icon: 'people' | 'podium';
};

export type RoundTableTopic = {
  id: string;
  tag: string;
  title: string;
  description: string;
  accent?: boolean;
};

export type LectoryRegistrationFormValues = {
  fullName: string;
  phone: string;
  company: string;
  position: string;
  email: string;
  questions: string;
};

export type RoundTableFormValues = {
  fullName: string;
  phone: string;
  company: string;
  position: string;
  email: string;
};
