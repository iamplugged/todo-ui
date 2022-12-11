import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
const Login = React.lazy(() => import('./views/login'));
const SignUp = React.lazy(() => import('./views/sign-up'));
const Todo = React.lazy(() => import('./views/todo'));

const AppRoutes = () => (
  <Suspense>
    <BrowserRouter fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/todos" element={<Todo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default AppRoutes;
