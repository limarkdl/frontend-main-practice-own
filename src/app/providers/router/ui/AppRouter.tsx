import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/';
import { RegularPageSkeleton } from 'shared/ui/Skeletons';

const AppRouter = () => (

    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<RegularPageSkeleton />}>
                        <div className="page-container">
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>

);

export default AppRouter;
