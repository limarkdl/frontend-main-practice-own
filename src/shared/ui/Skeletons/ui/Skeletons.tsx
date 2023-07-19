import Skeleton from 'react-loading-skeleton';
import { Separator } from 'widgets/Separator';
import 'react-loading-skeleton/dist/skeleton.css';
import Logo from 'shared/assets/UCLan_Logo.svg';
import clsNavbar from 'widgets/Navbar/ui/Navbar.module.css';
import clsSidebar from 'widgets/Sidebar/ui/Sidebar.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

export const RegularPageSkeleton = () => (
    <div className="page-container">
        <div className="page-wrapper">
            <Skeleton height={37} width={200} />
            <Separator />
        </div>
    </div>
);

export const GlobalAppSkeleton = () => (
    <div style={{
        height: '100vh', width: '100vw',
        // animation: 'breathe 4s ease-in-out infinite'
    }}
    >
        <div className={clsNavbar.Navbar}>
            <div className={clsNavbar.name}>
                <Logo />
            </div>

        </div>
        <div className={
            classNames(clsSidebar.Sidebar, {}, [clsSidebar.collapsed])
        }
        >
            <div className={clsSidebar.Items}>
                <Skeleton width={28} height={28} />
                <Skeleton width={28} height={28} />
            </div>
            <div
                className={clsSidebar.ToggleBt}
                style={{ borderRadius: '10px' }}
            >
                {'>'}
            </div>

            <div className={clsSidebar.switchers}>
                <Skeleton width={56} height={56} />
                <Skeleton width={56} height={38} />
            </div>
        </div>
    </div>
);
