import React, { Suspense } from 'react';

import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
// import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

// const { theme } = useTheme();
// useEffect(() => {
//     if (Math.random() < 0.5) {
//         throw new Error(); // выкидывает ошибку что проект сломался
//     }
// }, []);
const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
            <Navbar />
            <div className="content__page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);
export default App;
