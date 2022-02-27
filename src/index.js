import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

// import {rerenderEntireTree} from './rerender'
// import { BrowserRouter } from 'react-router-dom';




let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
       
        <App state={state} dispatch={store.dispatch.bind(store)} />
    
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
// debugger
rerenderEntireTree(store.getState())
// debugger
store.subscribe( () => {
  let state = store.getState()
  rerenderEntireTree(state)
  }
)

// store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
