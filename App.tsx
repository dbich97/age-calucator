import React, { useState, useEffect, useCallback } from 'react';
import { useLocalization } from './hooks/useLocalization';
import { type AgeResult, type CalendarType, type Language } from './types';
import { calculateAge } from './utils/ageCalculator';
import DateInput from './components/DateInput';
import ResultCard from './components/ResultCard';
import LanguageSwitcher from './components/LanguageSwitcher';
import { hijriToGregorian } from './utils/calendarConverter';
import { SUPPORTED_LANGUAGES } from './constants';

type Page = 'home' | 'about' | 'privacy' | 'contact';

// Add type declaration for AdSense
declare global {
  interface Window {
    adsbygoogle: any;
  }
}

// Reusable AdSense Component
const AdsenseAd: React.FC<{
  slot: string;
  style: React.CSSProperties;
  className?: string;
}> = ({ slot, style, className }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, [slot]);

  return (
    <div className={className}>
      <ins className="adsbygoogle"
           style={style}
           data-ad-client="ca-pub-7009948592297613"
           data-ad-slot={slot}></ins>
    </div>
  );
};


// Page Components
const HomePage: React.FC<{t: (key: string) => string; language: Language;}> = ({ t, language }) => {
  const [ageResult, setAgeResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = useCallback((data: { day: string, month: string, year: string, calendar: CalendarType }) => {
    const { day, month, year, calendar } = data;
    setIsCalculated(false);

    if (!day || !month || !year) {
      setError(t('error_date_required'));
      setAgeResult(null);
      return;
    }

    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    let birthDateObj: Date | null;

    if (calendar === 'hijri') {
      birthDateObj = hijriToGregorian(yearNum, monthNum, dayNum);
      if (!birthDateObj) {
        setError(t('error_invalid_date'));
        setAgeResult(null);
        return;
      }
    } else {
      birthDateObj = new Date(Date.UTC(yearNum, monthNum - 1, dayNum));
      if (
          isNaN(birthDateObj.getTime()) ||
          birthDateObj.getUTCFullYear() !== yearNum || 
          birthDateObj.getUTCMonth() !== monthNum - 1 || 
          birthDateObj.getUTCDate() !== dayNum
      ) {
          setError(t('error_invalid_date'));
          setAgeResult(null);
          return;
      }
    }

    const today = new Date();
    const todayUTC = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));

    if (birthDateObj > todayUTC) {
      setError(t('error_future_date'));
      setAgeResult(null);
      return;
    }

    setError(null);
    setAgeResult(calculateAge(birthDateObj, language));
    setIsCalculated(true);
  }, [t, language]);

  return (
    <>
      <div className="w-full max-w-6xl mx-auto flex justify-center gap-8">
        {/* Main Content Column */}
        <div className="flex-grow w-full max-w-4xl">

            {/* Top 728x90 Ad */}
            <div className="my-8 hidden md:flex justify-center">
                <AdsenseAd 
                    slot="8264560218"
                    style={{ display: 'inline-block', width: '728px', height: '90px' }}
                />
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8 items-start py-12">
                <main className="lg:col-span-2">
                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-center transition-all duration-300">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                            {t('title')}
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            {t('subtitle')}
                        </p>
                        <DateInput onCalculate={handleCalculate} t={t} />
                        {error && <p className="text-red-500 mt-4 animate-fade-in">{error}</p>}
                    </div>
                </main>
                <aside className="lg:col-span-3">
                    {ageResult && (
                        <>
                            <ResultCard result={ageResult} t={t} isVisible={isCalculated} />
                            {/* 300x250 Ad below results */}
                            <div className="mt-8 flex justify-center">
                                <AdsenseAd 
                                    slot="5474745346"
                                    style={{ display: 'inline-block', width: '300px', height: '250px' }}
                                />
                            </div>
                        </>
                    )}
                </aside>
            </div>
            
            <section className="w-full max-w-4xl mx-auto mt-12 bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">{t('seo_content_title')}</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 !mt-0">{t('seo_title_gregorian')}</h3>
                    <p>{t('seo_p_gregorian')}</p>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{t('seo_title_hijri')}</h3>
                    <p>{t('seo_p_hijri')}</p>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{t('seo_title_details')}</h3>
                    <p>{t('seo_p_details')}</p>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{t('fun_fact_title')}</h3>
                    <ul>
                        <li>{t('fun_fact_1')}</li>
                        <li>{t('fun_fact_2')}</li>
                    </ul>
                </div>
            </section>
            
            {/* Bottom 728x90 Ad */}
            <div className="my-8 hidden md:flex justify-center">
                <AdsenseAd 
                    slot="8264560218"
                    style={{ display: 'inline-block', width: '728px', height: '90px' }}
                />
            </div>

        </div>

        {/* Right Sidebar 160x600 Ad */}
        <aside className="hidden xl:block w-[160px] flex-shrink-0 py-12">
           <div className="sticky top-20">
              <AdsenseAd 
                slot="4208128655"
                style={{ display: 'inline-block', width: '160px', height: '600px' }}
              />
           </div>
        </aside>

      </div>
    </>
  );
};


const StaticPage: React.FC<{titleKey: string, children: React.ReactNode}> = ({ titleKey, children }) => {
    const { t } = useLocalization();
    return (
        <div className="w-full max-w-4xl mx-auto py-12 bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6 sm:p-8 my-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">{t(titleKey)}</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                {children}
            </div>
        </div>
    );
};

const AboutPage: React.FC<{ t: (key: string) => string }> = ({ t }) => (
    <StaticPage titleKey="about_title">
        <p>{t('about_p1')}</p>
        <p>{t('about_p2')}</p>
        <p>{t('about_p3')}</p>
    </StaticPage>
);

const PrivacyPolicyPage: React.FC<{ t: (key: string) => string }> = ({ t }) => (
    <StaticPage titleKey="privacy_title">
        <p>{t('privacy_p1')}</p>
        <p>{t('privacy_p2')}</p>
        <p>{t('privacy_p3')}</p>
    </StaticPage>
);

const ContactPage: React.FC<{ t: (key: string) => string }> = ({ t }) => (
    <StaticPage titleKey="contact_title">
        <p>{t('contact_p1')}</p>
        <p>{t('contact_p2')} <a href={`mailto:${t('contact_email')}`} className="text-blue-500 hover:underline">{t('contact_email')}</a>.</p>
    </StaticPage>
);

// Layout Components
const Header: React.FC<{ t: (key: string) => string; language: Language; setLanguage: (lang: Language) => void; currentPage: Page }> = ({ t, language, setLanguage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks: { page: Page, key: string }[] = [
    { page: 'home', key: 'nav_home' },
    { page: 'about', key: 'nav_about' },
    { page: 'privacy', key: 'nav_privacy' },
    { page: 'contact', key: 'nav_contact' },
  ];

  return (
    <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md sticky top-0 z-20 w-full">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">{t('title')}</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(link => (
              <a key={link.page} href={`#${link.page}`} className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === link.page ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}>{t(link.key)}</a>
            ))}
            <LanguageSwitcher currentLanguage={language} setLanguage={setLanguage} />
          </div>
          <div className="md:hidden flex items-center">
            <LanguageSwitcher currentLanguage={language} setLanguage={setLanguage} />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(link => (
                 <a key={link.page} href={`#${link.page}`} onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${currentPage === link.page ? 'text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}>{t(link.key)}</a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const Footer: React.FC<{ t: (key: string) => string }> = ({ t }) => {
  return (
    <footer className="w-full bg-white dark:bg-slate-800 mt-12 border-t border-slate-200 dark:border-slate-700">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#home" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">{t('nav_home')}</a>
                <a href="#about" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">{t('nav_about')}</a>
                <a href="#privacy" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">{t('nav_privacy')}</a>
                <a href="#contact" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">{t('nav_contact')}</a>
            </div>
            <p className="mt-4 text-sm text-gray-400">&copy; {new Date().getFullYear()} {t('title')}. {t('footer_rights')}</p>
        </div>
    </footer>
  );
};

// Main App Component
const App: React.FC = () => {
  const { t, language, setLanguage, dir } = useLocalization();
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'about', 'privacy', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };
    
    window.addEventListener('hashchange', handleHashChange, false);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;

    const pageTitleKey = `${currentPage}_html_title`;
    const pageDescKey = `${currentPage}_meta_description`;

    document.title = t(pageTitleKey);
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t(pageDescKey));
    }
    
    // Update hreflang links for SEO
    // FIX: This comparison appears to be unintentional because the types have no overlap.
    const hash = currentPage === 'home' ? '' : `#${currentPage}`;
    SUPPORTED_LANGUAGES.forEach(lang => {
        const link = document.querySelector(`link[rel="alternate"][hreflang="${lang.code}"]`);
        if (link) {
            link.setAttribute('href', `https://lazfan.com/?lang=${lang.code}${hash}`);
        }
    });
    const defaultLink = document.querySelector(`link[rel="alternate"][hreflang="x-default"]`);
    if (defaultLink) {
        defaultLink.setAttribute('href', `https://lazfan.com/${hash}`);
    }

    window.scrollTo(0, 0);

  }, [currentPage, language, dir, t]);

  const renderPage = () => {
    switch(currentPage) {
      case 'about': return <AboutPage t={t} />;
      case 'privacy': return <PrivacyPolicyPage t={t} />;
      case 'contact': return <ContactPage t={t} />;
      case 'home':
      default:
        return <HomePage t={t} language={language} />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 dark:text-gray-200 bg-slate-100 dark:bg-slate-900">
      <Header t={t} language={language} setLanguage={setLanguage} currentPage={currentPage} />
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full">
          {renderPage()}
        </div>
      </div>
      <Footer t={t} />
    </div>
  );
};

export default App;
