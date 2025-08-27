
export type Language = 'en' | 'ar' | 'fr' | 'es' | 'de' | 'tr';
export type CalendarType = 'gregorian' | 'hijri';

export interface AgeResult {
  years: number;
  months: number;
  days: number;
  birthDayOfWeek: string;
  // New detailed fields
  birthDate: string;
  totalDays: number;
  totalMonths: number;
  totalWeeks: number;
  nextBirthdayDate: string;
  nextBirthdayDayOfWeek: string;
  nextBirthdayDays: number;
}

export interface Translations {
  [key: string]: string;
}

export type LocaleData = {
  [key in Language]: Translations;
};