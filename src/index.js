import React from 'react';
import ReactDOM from "react-dom";
import './css/style.css';
import Router from "./components/Router";
import {Provider} from "react-redux";
import {store} from "./redux/store";


ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>,
    document.getElementById('root'));

