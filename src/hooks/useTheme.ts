import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export type ThemeName = 'dark' | 'light';

export type UseThemeReturn = [ThemeName, Dispatch<SetStateAction<ThemeName>>];

export const useTheme: (initialState?: ThemeName) => UseThemeReturn = (
  initialState = 'dark'
) => {
  const [theme, setTheme] = useState<ThemeName>(initialState);

  useEffect(() => {
    document.documentElement.className = `${theme}-theme`;
  }, [theme]);

  return [theme, setTheme];
};
