/* eslint-disable no-nested-ternary */
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { FaMoon, FaLightbulb } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (

        <Button
            style={{ color: 'inherit' }}
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            data-testid="theme-switcher"
        >
            {theme === Theme.DARK
                ? (
                    <>
                        <FaLightbulb
                            style={{ opacity: 0.5 }}
                        />
                    &nbsp;|&nbsp;
                        <FaMoon />
                        <br />
                        <FaDroplet
                            style={{ opacity: 0.5 }}
                        />

                    </>
                )
                : theme === Theme.LIGHT ? (
                    <>
                        <FaLightbulb />
                    &nbsp;|&nbsp;
                        <FaMoon
                            style={{ opacity: 0.5 }}
                        />
                        <br />
                        <FaDroplet
                            style={{ opacity: 0.5 }}
                        />
                    </>
                ) : (
                    <>
                        <FaLightbulb
                            style={{ opacity: 0.5 }}
                        />
                        &nbsp;|&nbsp;
                        <FaMoon
                            style={{ opacity: 0.5 }}
                        />
                        <br />
                        <FaDroplet />
                    </>
                )}
        </Button>
    );
};

export default ThemeSwitcher;
