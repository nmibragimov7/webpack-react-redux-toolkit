import React, {Suspense, useState} from "react";
import {Routes, Route, Link} from "react-router-dom";

import {MainLazy} from "./pages/Main/Main.lazy";
import {AboutLazy} from "./pages/About/About.lazy";
import {useTheme} from "./theme/useTheme";
import "./styles/index.scss";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainLazy/>}/>
                    <Route path={"/about"} element={<AboutLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
