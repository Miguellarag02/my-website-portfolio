import { createContext, useContext, useMemo } from "react";
import { DEFAULT_UI_LANG, getContentByLang, getUITextsByLang } from "../constants/index.js";

const LanguageContext = createContext({
  language: DEFAULT_UI_LANG,
  setLanguage: () => {},
  UI_TEXTS: getUITextsByLang(DEFAULT_UI_LANG),
  AboutMe: getContentByLang(DEFAULT_UI_LANG).aboutMe,
  ...getContentByLang(DEFAULT_UI_LANG),
});

export const LanguageProvider = ({ language, setLanguage, children }) => {
  const content = useMemo(() => getContentByLang(language), [language]);
  const UI_TEXTS = useMemo(() => getUITextsByLang(language), [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      UI_TEXTS,
      AboutMe: content.aboutMe,
      ...content,
    }),
    [language, setLanguage, UI_TEXTS, content]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
