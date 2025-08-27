
import { useState, useCallback } from 'react';
import { locales } from '../i18n/locales';
import { type Language } from '../types';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants';

const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
        // 1. Check for URL path
        const pathLang = window.location.pathname.split('/')[1] as Language;
        if (pathLang && SUPPORTED_LANGUAGES.some(l => l.code === pathLang)) {
            return pathLang;
        }

        // 2. Check for stored language in localStorage
        const storedLang = localStorage.getItem('language') as Language;
        if (storedLang && SUPPORTED_LANGUAGES.some(l => l.code === storedLang)) {
            return storedLang;
        }

        // 3. Check for browser language
        const browserLang = navigator.language.split('-')[0] as Language;
        if (SUPPORTED_LANGUAGES.some(l => l.code === browserLang)) {
            return browserLang;
        }
    }
    // 4. Fallback to default language
    return DEFAULT_LANGUAGE;
};

export const useLocalization = () => {
    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    const setLanguage = useCallback((lang: Language) => {
        if (typeof window !== 'undefined') {
            const currentHash = window.location.hash || '';
            const pathSegments = window.location.pathname.split('/').filter(Boolean);
            const currentLang = pathSegments[0];

            if (lang !== currentLang) {
                localStorage.setItem('language', lang);
                window.location.href = `/${lang}${currentHash}`;
            }
        }
    }, []);

    const t = useCallback((key: string): string => {
        return locales[language][key] || key;
    }, [language]);

    const dir = language === 'ar' ? 'rtl' : 'ltr';

    return { language, setLanguage, t, dir };
};