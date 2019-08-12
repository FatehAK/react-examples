import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Higher from './components/Higher';
import './scss/index.scss'

const WrappedApp = Higher(App, 'moo');
ReactDOM.render(<WrappedApp p1="foo" p2="boo"/>, document.getElementById('root'));
