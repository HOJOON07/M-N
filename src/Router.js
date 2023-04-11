import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';

// Pages Components
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import WorkspaceList from './pages/WorkspaceList';
import CreateWorkspace from './pages/CreateWorkspace';
import Workflow from './pages/Workflow';
import NotFound from './pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/workspace" element={<WorkspaceList />} />
        <Route path="/create" element={<CreateWorkspace />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
