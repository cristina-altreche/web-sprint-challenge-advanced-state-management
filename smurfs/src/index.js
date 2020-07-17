import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import reducer  from './reducers'

import "./index.css";

import NewSmurf from './components/NewSmurf'
import Village from './components/Village'

const store = createStore(reducer, applyMiddleware(thunk))

function App() {
    return (
        <div className="App">
            <h1>Smurfs</h1>
            <Village/>
            <NewSmurf/>
        </div>
    )
}


const rootElement = document.getElementById('root');

ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
