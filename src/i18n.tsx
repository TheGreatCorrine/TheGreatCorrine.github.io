/**
 * 中英双语切换（给爸妈看的临时功能）。默认英文。
 * 用法：const { lang, toggle, t } = useLang();  t(英文, 中文)
 */
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type Lang = 'en' | 'zh';

interface LangValue {
  lang: Lang;
  toggle: () => void;
  t: <T>(en: T, zh: T) => T;
}

const LangContext = createContext<LangValue>({ lang: 'en', toggle: () => {}, t: en => en });

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');
  const toggle = useCallback(() => setLang(l => (l === 'en' ? 'zh' : 'en')), []);

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.classList.toggle('lang-zh', lang === 'zh');
  }, [lang]);

  const value = useMemo<LangValue>(() => ({ lang, toggle, t: (en, zh) => (lang === 'zh' ? zh : en) }), [lang, toggle]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
