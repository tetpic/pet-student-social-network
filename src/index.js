import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

// import {rerenderEntireTree} from './rerender'
// import { BrowserRouter } from 'react-router-dom';



// state={state} dispatch={store.dispatch.bind(store)} 
// let rerenderEntireTree = (state) => {
  // debugger
    ReactDOM.render(
     <React.StrictMode>
        <Provider store={store}>
          <App/>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  // }
// debugger
// rerenderEntireTree()
// debugger
// store.subscribe( () => {
  // let state = store.getState()
//   rerenderEntireTree()
//   }
// )
reportWebVitals();
