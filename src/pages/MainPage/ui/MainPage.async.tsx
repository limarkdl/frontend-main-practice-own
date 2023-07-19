import { lazy, Suspense } from 'react';
import MainPageSkeleton from './MainPage.skeleton';

const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));

const MainPageWithSkeleton = () => (
    <Suspense fallback={<MainPageSkeleton />}>
        <MainPageAsync />
    </Suspense>
);

export default MainPageWithSkeleton;
