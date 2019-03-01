import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/index.css';
import SelectWidget from './SelectWidget';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SelectWidget />, document.getElementById('root'));

serviceWorker.unregister();
