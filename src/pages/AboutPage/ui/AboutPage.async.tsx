import { lazy, Suspense } from 'react';
import AboutPageSkeleton from './AboutPage.skeleton';

const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));

const AboutPageWithSkeleton = () => (
    <Suspense fallback={<AboutPageSkeleton />}>
        <AboutPageAsync />
    </Suspense>
);

export default AboutPageWithSkeleton;
