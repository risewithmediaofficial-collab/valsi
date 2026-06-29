import { createContext, useContext, useState, useCallback } from 'react';

const LanguageContext = createContext(null);

export const LANGUAGES = {
  EN: 'en',
  TA: 'ta',
};

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem('valsii_lang') || LANGUAGES.EN;
    } catch {
      return LANGUAGES.EN;
    }
  });

  const setLang = useCallback((newLang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('valsii_lang', newLang);
    } catch {
      /* ignore */
    }
  }, []);

  const isTamil = lang === LANGUAGES.TA;
  const toggleLang = useCallback(() => {
    setLang(lang === LANGUAGES.EN ? LANGUAGES.TA : LANGUAGES.EN);
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, isTamil, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}

/** Helper: returns the correct string based on current language */
export function t(en, ta, lang) {
  return lang === LANGUAGES.TA && ta ? ta : en;
}
