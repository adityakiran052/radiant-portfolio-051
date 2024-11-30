import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-400 hover:bg-purple-900/50 hover:text-purple-300"
    >
      {i18n.language.toUpperCase()}
    </Button>
  );
};

export default LanguageSwitcher;