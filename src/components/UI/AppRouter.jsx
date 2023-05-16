import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/Main';
import Favorites from '../../pages/favorites/Favorites';
import Vacancy from '../../pages/vacancy/Vacancy';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/vacancy" element={<Vacancy />} />
    </Routes>
  );
}

export default AppRouter;
