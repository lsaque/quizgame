import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NOT_FOUND, ROOT, PREPARE, QUIZ } from '../utils/constants/routes.constants';

import Home from '../views/Home';
import Prepare from '../views/Prepare';
import Quiz from '../views/Quiz';
import NotFound from '../views/NotFound';

const navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<Home/>} />
        <Route path={PREPARE} element={<Prepare/>} />
        <Route path={QUIZ} element={<Quiz/>} />
        <Route path={NOT_FOUND} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default navigation;