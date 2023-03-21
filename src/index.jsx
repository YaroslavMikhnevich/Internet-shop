import React from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './App/App2';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App2 />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);


