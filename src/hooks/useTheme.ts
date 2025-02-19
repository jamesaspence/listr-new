import { useEffect } from 'react';
import {
  changeTheme,
  selectCurrentTheme,
  ThemeName,
} from '../redux/slices/theme.ts';
import { useDispatch, useSelector } from 'react-redux';

export type UseThemeReturn = [ThemeName, (newTheme: ThemeName) => void];

export const useTheme: () => UseThemeReturn = () => {
  const theme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();

  const setTheme = (newTheme: ThemeName) =>
    dispatch(
      changeTheme({
        theme: newTheme,
      })
    );

  useEffect(() => {
    document.documentElement.className = `${theme}-theme`;
  }, [theme]);

  return [theme, setTheme];
};
