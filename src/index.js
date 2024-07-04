import React from 'react';
import ReactDOM from 'react-dom/client';
import './asset/css/index.css';
import './asset/css/retro.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* history 기반으로 사용하는  */}
    <BrowserRouter basename='/selfDevelopment'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
