
import React, { useState } from 'react';
import { type AgeResult } from '../types';
import { ShareIcon } from './icons/ShareIcon';
import { CakeIcon } from './icons/CakeIcon';

interface ResultCardProps {
  result: AgeResult;
  t: (key: string) => string;
  isVisible: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, t, isVisible }) => {
  const [copyStatus, setCopyStatus] = useState(t('copy_result'));
  
  const { 
    years, months, days, 
    birthDayOfWeek, birthDate,
    totalDays, totalMonths, totalWeeks,
    nextBirthdayDate, nextBirthdayDayOfWeek, nextBirthdayDays 
  } = result;

  const summaryItems = [
      { label: t('summary_birth_date'), value: birthDate },
      { label: t('summary_day_of_birth'), value: birthDayOfWeek },
      { label: t('summary_age_in_days'), value: totalDays.toLocaleString() },
      { label: t('summary_age_in_months'), value: totalMonths.toLocaleString() },
      { label: t('summary_age_in_weeks'), value: totalWeeks.toLocaleString() },
      { label: t('summary_next_birthday_date'), value: nextBirthdayDate },
      { label: t('summary_next_birthday_weekday'), value: nextBirthdayDayOfWeek },
      { label: t('summary_days_remaining'), value: nextBirthdayDays.toLocaleString() },
  ];

  const fullResultString = `${t('result_intro')} ${years} ${t('result_years')}, ${months} ${t('result_months')} ${t('result_and')} ${days} ${t('result_days')}.
${summaryItems.map(item => `${item.label}: ${item.value}`).join('\n')}`;

  const handleShare = async () => {
    const shareData = {
      title: t('title'),
      text: fullResultString,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Couldn't share content", err);
      }
    } else {
      navigator.clipboard.writeText(fullResultString);
      setCopyStatus(t('copied_success'));
      setTimeout(() => setCopyStatus(t('copy_result')), 2000);
    }
  };

  const renderCountdownMessage = () => {
    if (nextBirthdayDays === 0) {
      return t('countdown_happy_birthday');
    }
    if (nextBirthdayDays === 1) {
      return t('countdown_tomorrow');
    }
    return t('countdown_days_remaining').replace('{days}', nextBirthdayDays.toLocaleString());
  };

  const isBirthday = nextBirthdayDays === 0;

  const countdownContainerClasses = `text-center p-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 ${
    isBirthday 
      ? "bg-gradient-to-r from-yellow-100 to-orange-200 dark:from-yellow-800/50 dark:to-orange-900/60 ring-2 ring-yellow-400"
      : "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700/50 dark:to-slate-800/60"
  }`;

  const cakeIconClasses = `w-8 h-8 flex-shrink-0 ${
    isBirthday
      ? "text-orange-500 animate-pulse"
      : "text-purple-500"
  }`;

  return (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="text-left bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
        <p className="text-lg text-center font-medium text-gray-600 dark:text-gray-400 mb-4">
          {t('result_intro')}
        </p>
        <div className="flex justify-center items-end gap-x-3 sm:gap-x-5 text-center mb-6">
          <div>
            <span className="text-6xl sm:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 leading-none">{years}</span>
            <span className="block text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">{t('result_years')}</span>
          </div>
          <div>
            <span className="text-6xl sm:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 leading-none">{months}</span>
            <span className="block text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">{t('result_months')}</span>
          </div>
          <div>
            <span className="text-6xl sm:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 leading-none">{days}</span>
            <span className="block text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">{t('result_days')}</span>
          </div>
        </div>

        <div className={countdownContainerClasses}>
            <CakeIcon className={cakeIconClasses} />
            <p className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">
              {renderCountdownMessage()}
            </p>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-700 pt-6 mt-6">
          <h3 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">
            {t('summary_title')}
          </h3>
          <ul className="space-y-3 text-base">
            {summaryItems.map(item => (
              <li key={item.label} className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                <span className="font-medium text-gray-600 dark:text-gray-300">{item.label}</span>
                <span className="font-bold text-gray-900 dark:text-white text-right">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleShare}
          className="w-full mt-8 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-4 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800 transition-all duration-300 transform hover:scale-105"
        >
          <ShareIcon className="w-5 h-5" />
          <span>{navigator.share ? t('share_result') : copyStatus}</span>
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
