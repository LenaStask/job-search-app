import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import './index.css';
import './assets/fonts/Inter/static/Inter-Regular.ttf';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomFonts from './components/UI/CustomFonts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider
    withNormalizeCSS
    theme={{
      colors: {
        brand: ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#5E96FC', '#92C1FF', '#5E96FC', '#5E96FC'],
      },
      primaryColor: 'brand',
    }}
  >
    <CustomFonts />
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
