import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';//This is used to provide tha dat to the container
import {createStore} from 'redux';//used to create store where it acts as container
import allReducers from './reducers/index';


const store = createStore(allReducers);


ReactDOM.render(
	<Provider store = {store}>
	    <App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
