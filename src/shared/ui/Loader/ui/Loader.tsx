import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.css';

interface LoaderProps {
    className?: string;
}

const Loader = ({ className }: LoaderProps) => (
    <div className="loader">
        <div className="justify-content-center jimu-primary-loading" />
    </div>
);

export default Loader;
