import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme;
        switch(theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            case Theme.DARK:
                newTheme = Theme.CARROT;
                break;
            case Theme.CARROT:
                newTheme = Theme.LIGHT;
                break;
            default:
                newTheme = Theme.DARK;
        }
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme, toggleTheme };
}
