import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";

import {routerConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routerConfig).map(({path, element}) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<div>Loading...</div>}>
                            {element}
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
