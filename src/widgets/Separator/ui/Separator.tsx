import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Separator.module.css';

interface SeparatorProps {
    className?: string;
}

export const Separator = ({ className }: SeparatorProps) => (
    <div className={classNames(cls.Separator, {}, [className])} />
);

export default Separator;
