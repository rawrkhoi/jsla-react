import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css';
import App from './components/App';
import registerServiceWorker from './helpers/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
