
import { type AgeResult, type Language } from '../types';

export const calculateAge = (birthDate: Date, locale: Language): AgeResult => {
    const today = new Date();
    const todayUTC = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
    
    let years = todayUTC.getUTCFullYear() - birthDate.getUTCFullYear();
    let months = todayUTC.getUTCMonth() - birthDate.getUTCMonth();
    let days = todayUTC.getUTCDate() - birthDate.getUTCDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(Date.UTC(todayUTC.getUTCFullYear(), todayUTC.getUTCMonth(), 0));
        days += prevMonth.getUTCDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const oneDayMs = 24 * 60 * 60 * 1000;
    
    // Total calculations
    const totalDays = Math.floor((todayUTC.getTime() - birthDate.getTime()) / oneDayMs);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    
    // Date formatting options
    const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const weekdayOptions: Intl.DateTimeFormatOptions = { weekday: 'long', timeZone: 'UTC' };

    const birthDateString = birthDate.toLocaleDateString(locale, dateOptions);
    const birthDayOfWeek = birthDate.toLocaleDateString(locale, weekdayOptions);

    // Next birthday calculation
    let nextBirthdayDateObj = new Date(Date.UTC(todayUTC.getUTCFullYear(), birthDate.getUTCMonth(), birthDate.getUTCDate()));
    
    if (nextBirthdayDateObj.getTime() < todayUTC.getTime()) {
        nextBirthdayDateObj.setUTCFullYear(todayUTC.getUTCFullYear() + 1);
    }

    const nextBirthdayDays = Math.round((nextBirthdayDateObj.getTime() - todayUTC.getTime()) / oneDayMs);
    const nextBirthdayDateString = nextBirthdayDateObj.toLocaleDateString(locale, dateOptions);
    const nextBirthdayDayOfWeek = nextBirthdayDateObj.toLocaleDateString(locale, weekdayOptions);

    return {
        years,
        months,
        days,
        birthDayOfWeek,
        birthDate: birthDateString,
        totalDays,
        totalMonths,
        totalWeeks,
        nextBirthdayDate: nextBirthdayDateString,
        nextBirthdayDayOfWeek,
        nextBirthdayDays,
    };
};