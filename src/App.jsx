import React from 'react';
import './App.css';
import HeaderSimple from './components/header/HeaderSimple';
import Main from './pages/main/Main';

function App() {
  return (
    <div>
      <HeaderSimple links={[{ link: '/#1', label: 'Поиск Вакансий' }, { link: '/#2', label: 'Избранное' }]} />
      <Main />
    </div>
  );
}

export default App;
