import React from 'react';
import ReactDOM from 'react-dom';
import './build/index.css';
import App from './client/pages/entrance/App';
import * as serviceWorker from './build/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//this page must be here "src/index.js is the JavaScript entry point." - react website