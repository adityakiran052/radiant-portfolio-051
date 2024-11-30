import React, { createContext, useContext, useState } from 'react';

type Theme = 'purple' | 'blue' | 'green';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const themes = {
  purple: {
    primary: '#8B5CF6',
    secondary: '#D946EF',
    accent: '#F97316',
  },
  blue: {
    primary: '#0EA5E9',
    secondary: '#3B82F6',
    accent: '#6366F1',
  },
  green: {
    primary: '#10B981',
    secondary: '#34D399',
    accent: '#6EE7B7',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('purple');

  const value = {
    theme,
    setTheme,
    colors: themes[theme],
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};