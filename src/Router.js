import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';

// Pages Components
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import WorkspaceList from './pages/WorkspaceList';
import CreateWorkspace from './pages/CreateWorkspace';
import Workflow from './pages/Workflow';
import NotFound from './pages/NotFound';
import Kakao from './pages/components/Kakao';
import GitHub from './pages/components/GitHub';
import Calendar from './pages/Calendar';
import LoginNeeded from './pages/components/LoginNeeded';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        {localStorage.getItem('accessToken') && (
          <>
            <Route path="/workspace" element={<WorkspaceList />} />
            <Route path="/create" element={<CreateWorkspace />} />
            <Route path="/workflow" element={<Workflow />} />
          </>
        )}
        {/* {localStorage.getItem('accessToken') && (
          <Route path="/create" element={<CreateWorkspace />} />
        )}
        {localStorage.getItem('accessToken') && (
          <Route path="/workflow" element={<Workflow />} />
        )} */}

        <Route path="/workflow" element={<Workflow />} />
        <Route path="/oauth/kakao/callback" element={<Kakao />} />
        <Route path="/oauth/github/callback" element={<GitHub />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/plzlogin" element={<LoginNeeded />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
