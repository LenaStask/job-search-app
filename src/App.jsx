import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Favorites from './pages/favorites/Favorites';
import Vacancy from './pages/vacancy/Vacancy';

function App() {
  return (
    <BrowserRouter>
      <Header links={[
        { path: '/', label: 'Поиск Вакансий' },
        { path: '/favorites', label: 'Избранное' },
      ]}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/vacancy/:id" element={<Vacancy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
