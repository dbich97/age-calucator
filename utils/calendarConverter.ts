// This is an implementation of the Tabular Islamic calendar.
// It's a rule-based calendar, not based on observation, so it may differ 
// by a day or two from observational calendars used in different countries.

function isHijriLeap(year: number): boolean {
    return (14 + 11 * year) % 30 < 11;
}

function hijriMonthLength(year: number, month: number): number {
    // Odd months have 30 days
    if (month % 2 === 1) {
        return 30;
    }
    // Dhū al-Hijjah (month 12) has 30 days in a leap year
    if (month === 12 && isHijriLeap(year)) {
        return 30;
    }
    // Even months have 29 days
    return 29;
}

/**
 * Converts a Hijri date to a Gregorian date.
 * @param hy - Hijri year
 * @param hm - Hijri month (1-12)
 * @param hd - Hijri day (1-30)
 * @returns A JavaScript Date object (in UTC) representing the Gregorian date, or null if the Hijri date is invalid.
 */
export function hijriToGregorian(hy: number, hm: number, hd: number): Date | null {
    if (hy <= 0 || hm < 1 || hm > 12 || hd < 1 || hd > hijriMonthLength(hy, hm)) {
        return null; // Invalid Hijri date
    }

    const jd = Math.floor((11 * hy + 3) / 30) + 354 * hy + 30 * hm - Math.floor((hm - 1) / 2) + hd + 1948440 - 385;

    let l = jd + 68569;
    const n = Math.floor((4 * l) / 146097);
    l = l - Math.floor((146097 * n + 3) / 4);
    const i = Math.floor((4000 * (l + 1)) / 1461001);
    l = l - Math.floor((1461 * i) / 4) + 31;
    const j = Math.floor((80 * l) / 2447);
    const day = l - Math.floor((2447 * j) / 80);
    l = Math.floor(j / 11);
    const month = j + 2 - 12 * l;
    const year = 100 * (n - 49) + i + l;
    
    return new Date(Date.UTC(year, month - 1, day));
}

/**
 * Gets an approximation of the current Hijri year.
 */
export const getApproxCurrentHijriYear = (): number => {
    const gregorianYear = new Date().getUTCFullYear();
    // The Hijri year is approximately the Gregorian year minus 622, multiplied by 1.031
    return Math.round((gregorianYear - 622) * 1.031);
}
