import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Router, Route, hasHistory } from 'react-router';

ReactDOM.render(
    <Router history={hasHistory}><Route path="/" component={App}></Route></Router>,
    document.getElementById('root'));
registerServiceWorker();