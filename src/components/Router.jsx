import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./NotFound";
import App from "./App";
import LandingContainer from "./LandingContainer";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'hot-burgers/'} element={<LandingContainer/>}/>
                <Route path={'restaurant/:restaurantId'} element={<App/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;