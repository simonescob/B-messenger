import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDLSyXaMONOI9Z6Gg3nQICmg4xDm2I7VzM',
  authDomain: 'messageapp-1061d.firebaseapp.com',
  databaseURL: 'https://messageapp-1061d.firebaseio.com',
  storageBucket: 'messageapp-1061d.appspot.com',
  messagingSenderId: '282127578184'
}
firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
