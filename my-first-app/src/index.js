import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import storeApp from './Test/storeApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider storeApp={storeApp}>
      <App />
  </Provider>

);

