import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import HeaderSimple from './components/header/HeaderSimple';
import AppRouter from './components/UI/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <HeaderSimple links={[{ link: '/main', label: 'Поиск Вакансий' }, { link: '/favorites', label: 'Избранное' }]} />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
