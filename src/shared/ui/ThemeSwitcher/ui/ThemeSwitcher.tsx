/* eslint-disable no-nested-ternary */
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faLightbulb, faDroplet } from '@fortawesome/free-solid-svg-icons';

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
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            style={{ opacity: 0.5 }}
                        />
                    &nbsp;|&nbsp;
                        <FontAwesomeIcon
                            icon={faMoon}
                        />
                        <br />
                        <FontAwesomeIcon
                            icon={faDroplet}
                            style={{ opacity: 0.5 }}
                        />

                    </>
                )
                : theme === Theme.LIGHT ? (
                    <>
                        <FontAwesomeIcon
                            icon={faLightbulb}
                        />
                    &nbsp;|&nbsp;
                        <FontAwesomeIcon
                            icon={faMoon}
                            style={{ opacity: 0.5 }}
                        />
                        <br />
                        <FontAwesomeIcon
                            icon={faDroplet}
                            style={{ opacity: 0.5 }}
                        />
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            style={{ opacity: 0.5 }}
                        />
                        &nbsp;|&nbsp;
                        <FontAwesomeIcon
                            icon={faMoon}
                            style={{ opacity: 0.5 }}
                        />
                        <br />
                        <FontAwesomeIcon
                            icon={faDroplet}
                        />
                    </>
                )}
        </Button>
    );
};

export default ThemeSwitcher;
