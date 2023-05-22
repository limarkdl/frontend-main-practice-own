import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import Button, {ButtonTheme} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggleLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then(r => console.log(r));
    }
    return (
        <Button
            className={classNames(cls.LangSwitcher,{},[className])}
            onClick={toggleLanguage}
            theme={ButtonTheme.CLEAR}
        >
            {t('Language')}
        </Button>
    );
};

export default LangSwitcher;
