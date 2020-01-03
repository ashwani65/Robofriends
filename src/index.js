import React from 'react';//view library
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



//React uses JSX to create their virtual DOM ,that they built based on what we give it to them ,then they look at the virtual DOM 
// and Reak DOM and say this part has changed i'm going to change DOM now based on  virtual DOM