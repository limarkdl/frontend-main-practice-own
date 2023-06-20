import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.css';

export enum ButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    OUTLINE = 'outline',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    backgroundColor?: string;
    color?: string;
    borderRadius?: string;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        backgroundColor,
        color,
        borderRadius,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Btn, { [cls[theme]]: theme }, [className])}
            style={{ backgroundColor, color, borderRadius }}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
