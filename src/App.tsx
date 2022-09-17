import React, {Suspense} from "react";
import {Routes, Route, Link} from "react-router-dom";

import {MainLazy} from "./pages/Main/Main.lazy";
import {AboutLazy} from "./pages/About/About.lazy";
import "./index.scss";

const App = () => {
    return (
        <div className={"app"}>
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
