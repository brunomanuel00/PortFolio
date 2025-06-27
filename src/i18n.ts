import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

import translationEn from './locales/en/translation.json'
import translationEs from './locales/es/translation.json'

const resources = {
    en: {
        translation: translationEn
    },
    es: {
        translation: translationEs
    }
}

const savedLanguage = localStorage.getItem('language')

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage || 'en',
        fallbackLng: 'en',
        load: 'languageOnly',
        supportedLngs: ['es', 'en'],
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },
    });

export default i18n