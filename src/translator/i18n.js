import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // detection: { order: ["path", "navigator"] },
        // whitelist: ['ua','ru'], 
        // supportedLngs:['ua','ru'],
        // lng:"ua",
        fallbackLng: 'ua',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage']
        }
        // wait: process && !process.release,

    },

    );

export default i18n;