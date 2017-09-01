import React from 'react';
import ReactDOM from 'react-dom';
import App from './app_comp/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
//import { BrowserRouter as Router, Route, Redirect } from 'react-router';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


ReactDOM.render(

    <App />,
    document.getElementById('root')
);
registerServiceWorker();
