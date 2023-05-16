import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import AppRouter from './components/UI/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Header links={[{ link: '/', label: 'Поиск Вакансий' }, { link: '/favorites', label: 'Избранное' }]} />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
