import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import App from './components/App'
import counter from './reducers/counter'

var store = createStore(counter);

function render() {
    console.log(store.getState());
    ReactDOM.render(
        <App
            value={store.getState()}
            onAdd={()=>store.dispatch({type:'ADD'})}
        />,
        document.getElementById('app'))
}

render();
store.subscribe(render)
