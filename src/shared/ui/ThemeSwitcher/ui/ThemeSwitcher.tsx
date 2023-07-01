import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons';

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
                            size="lg"
                            icon={faLightbulb}
                            style={{ opacity: 0.5 }}
                        />
                    &nbsp;|&nbsp;
                        <FontAwesomeIcon
                            size="lg"
                            icon={faMoon}
                        />
                    </>
                )
                : (
                    <>
                        <FontAwesomeIcon
                            size="lg"
                            icon={faLightbulb}
                        />
                    &nbsp;|&nbsp;
                        <FontAwesomeIcon
                            size="lg"
                            icon={faMoon}
                            style={{ opacity: 0.5 }}
                        />
                    </>
                )}
        </Button>
    );
};

export default ThemeSwitcher;
