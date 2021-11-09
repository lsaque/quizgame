import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NOT_FOUND, ROOT } from '../utils/constants/routes.constants';

import Home from '../views/Home';
import NotFound from '../views/NotFound';

const navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<Home/>} />
        <Route path={NOT_FOUND} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default navigation;