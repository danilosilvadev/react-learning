import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render((
<Router history={hashHistory}><Route path="/" component={App}></Route></Router>),
    document.getElementById('root'));
registerServiceWorker();