import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

// Initialize i18next
i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        fr: { translation: fr }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
});

type Language = 'en' | 'fr';

interface SettingsContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    voiceAccent: string;
    setVoiceAccent: (accent: string) => void;
    availableVoices: SpeechSynthesisVoice[];
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('en');
    const [voiceAccent, setVoiceAccent] = useState<string>('default');
    const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);

    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            setAvailableVoices(voices);
        };

        window.speechSynthesis.onvoiceschanged = loadVoices;
        loadVoices();
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <SettingsContext.Provider value={{
            language,
            setLanguage,
            voiceAccent,
            setVoiceAccent,
            availableVoices
        }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) throw new Error('useSettings must be used within SettingsProvider');
    return context;
};
