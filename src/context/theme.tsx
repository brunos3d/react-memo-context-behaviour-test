import { createContext, ReactNode, useContext, useState } from 'react';

export enum ThemeModeValues {
  dark = 'dark',
  light = 'light',
}

export type ThemeContext = {
  mode: ThemeModeValues;
};

export type ThemeProviderProps = ThemeContext & {
  children: ReactNode;
};

export const themeContext = createContext<ThemeContext>({
  get mode(): never {
    throw new Error('You forgot to wrap your app in <ThemeProvider>');
  },
});

export function useThemeState(initialValue: ThemeModeValues = ThemeModeValues.dark) {
  return useState<ThemeModeValues>(initialValue);
}

export function ThemeProvider({ children, ...values }: ThemeProviderProps) {
  return <themeContext.Provider value={values}>{children}</themeContext.Provider>;
}

export function useTheme(): ThemeContext {
  return useContext(themeContext);
}
