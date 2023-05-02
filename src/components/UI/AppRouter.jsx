import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/Main';
import Favorites from '../../pages/favorites/Favorites';

function AppRouter() {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default AppRouter;
