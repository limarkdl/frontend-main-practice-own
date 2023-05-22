import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button className={classNames(cls.Button,{[cls[theme]]: theme},[className])}
                {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;