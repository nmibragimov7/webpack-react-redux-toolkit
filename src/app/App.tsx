import React, {Suspense, useState} from "react";
import {Routes, Route, Link} from "react-router-dom";

import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/About";
import {MainPage} from "pages/Main";
import "./styles/index.scss";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
