import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    }
  },
  es: {
    translation: {
      welcome: 'Bienvenido',
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;