import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routerConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <Routes>
        {Object.values(routerConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<div className="page--wrapper">Loading...</div>}>
                        <div className="page--wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);

export default AppRouter;
