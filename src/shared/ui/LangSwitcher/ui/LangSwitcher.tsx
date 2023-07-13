import React from 'react';
import { useTranslation } from 'react-i18next';

import cls from './LangSwitcher.module.css';

const Select = React.lazy(() => import('react-select'));

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const languageOptions = [
        { value: 'en', label: 'EN' },
        { value: 'gr', label: 'GR' },
        { value: 'ru', label: 'RU' },
        { value: 'fr', label: 'FR' },
        { value: 'et', label: 'ET' },
        { value: 'es', label: 'ES' },
        { value: 'de', label: 'DE' },
    ];

    const currentLanguage = languageOptions.find(
        (option) => option.value === i18n.language,
    );

    const handleLanguageChange = (selectedOption: { value: string; }) => {
        i18n.changeLanguage(selectedOption.value);
    };

    return (
        <div data-testid="lang-switcher">
            <Select
                maxMenuHeight={null}
                className={cls.select}
                menuPlacement="top"
                defaultValue={currentLanguage || languageOptions.find((option) => option.value === 'en')}
                options={languageOptions}
                onChange={handleLanguageChange}
                isSearchable={false}
                styles={{
                    input: (provided) => ({
                        ...provided,
                        caretColor: 'transparent',
                        whiteSpace: 'nowrap',
                        minWidth: 'fit-content',
                    }),
                    dropdownIndicator: () => ({
                        display: 'none',
                    }),
                    indicatorSeparator: () => ({
                        display: 'none',
                    }),
                    option: (provided) => ({
                        ...provided,
                        color: 'black',
                        whiteSpace: 'nowrap',
                    }),
                    container: (provided) => ({
                        ...provided,
                        textAlign: 'center',
                    }),
                    menuList: (provided) => ({
                        ...provided,
                    }),

                }}

            />

        </div>

    );
};

export default LanguageSwitcher;
