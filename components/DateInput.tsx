import React, { useState } from 'react';
import { type CalendarType } from '../types';
import { getApproxCurrentHijriYear } from '../utils/calendarConverter';

interface DateInputProps {
  onCalculate: (data: { day: string; month: string; year: string; calendar: CalendarType }) => void;
  t: (key: string) => string;
}

const SelectWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="relative">
        {children}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-400">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
    </div>
);

const DateInput: React.FC<DateInputProps> = ({ onCalculate, t }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [calendar, setCalendar] = useState<CalendarType>('gregorian');

  const handleCalendarChange = (cal: CalendarType) => {
    setCalendar(cal);
    setDay('');
    setMonth('');
    setYear('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate({ day, month, year, calendar });
  };

  const currentGregorianYear = new Date().getFullYear();
  const currentHijriYear = getApproxCurrentHijriYear();

  const years = calendar === 'gregorian'
    ? Array.from({ length: 120 }, (_, i) => currentGregorianYear - i)
    : Array.from({ length: 120 }, (_, i) => currentHijriYear - i);

  const months = calendar === 'gregorian'
    ? Array.from({ length: 12 }, (_, i) => ({ value: String(i + 1), label: t(`month_${i + 1}`) }))
    : Array.from({ length: 12 }, (_, i) => ({ value: String(i + 1), label: t(`hijri_month_${i + 1}`) }));

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));

  const selectClasses = "w-full px-3 py-2 text-base bg-slate-100 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none text-center dark:text-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-700/50 p-1 rounded-xl">
        <button 
            type="button" 
            onClick={() => handleCalendarChange('gregorian')} 
            className={`px-4 py-2 text-sm font-semibold rounded-lg w-1/2 transition-all duration-200 ${calendar === 'gregorian' ? 'bg-white dark:bg-slate-800 shadow' : 'text-gray-500 dark:text-gray-400'}`}
            aria-pressed={calendar === 'gregorian'}
        >
            {t('calendar_gregorian')}
        </button>
        <button 
            type="button" 
            onClick={() => handleCalendarChange('hijri')} 
            className={`px-4 py-2 text-sm font-semibold rounded-lg w-1/2 transition-all duration-200 ${calendar === 'hijri' ? 'bg-white dark:bg-slate-800 shadow' : 'text-gray-500 dark:text-gray-400'}`}
            aria-pressed={calendar === 'hijri'}
        >
            {t('calendar_hijri')}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 text-left">
        <div>
          <label htmlFor="day" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{t('label_day')}</label>
          <SelectWrapper>
            <select
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className={selectClasses}
              required
              aria-label={t('label_day')}
            >
              <option value="" disabled>{t('label_day')}</option>
              {days.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </SelectWrapper>
        </div>
        <div>
          <label htmlFor="month" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{t('label_month')}</label>
          <SelectWrapper>
            <select
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={selectClasses}
              required
              aria-label={t('label_month')}
            >
              <option value="" disabled>{t('label_month')}</option>
              {months.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
            </select>
          </SelectWrapper>
        </div>
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{t('label_year')}</label>
          <SelectWrapper>
            <select
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className={selectClasses}
              required
              aria-label={t('label_year')}
            >
              <option value="" disabled>{t('label_year')}</option>
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </SelectWrapper>
        </div>
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-6 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800 transition-all duration-300 transform hover:scale-105"
      >
        {t('button_calculate')}
      </button>
    </form>
  );
};

export default DateInput;