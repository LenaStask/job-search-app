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
      fontFamily: 'Inter, sans-serif',
      colors: {
        blueColor: ['#5E96FC'],
        greyColor: ['#F7F7F8'],
      },
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
