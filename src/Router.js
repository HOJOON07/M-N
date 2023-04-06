import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CreateProject from './pages/CreateProject';
import Login from './pages/Login';
import ProjectList from './pages/ProjectList';
import SignUp from './pages/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ProjectList />} />
        <Route path="/create" element={<CreateProject />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
