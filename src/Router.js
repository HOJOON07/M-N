import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

import Test from './Test';

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const accessToken = () => {
    axios.get('http://localhost:5500/token/accessToken', {
      withCredentials: true,
    });
  };
  const refreshToken = () => {
    axios.get('http://localhost:5500/token/accessToken', {
      withCredentials: true,
    });
  };
  const logout = async (req, res) => {
    axios.post('http://localhost:5500/token/accessToken');
  };
  const loginsuccess = async (req, res) => {
    axios
      .get('http://localhost:5500/user/loginsuccess', {
        withCredentials: true,
      })
      .then(res => {
        if (res.data) {
          setIsLogin(true);
          setUser(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  // useEffect(() => {
  //   loginsuccess();
  // }, []);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/workspace" element={<WorkspaceList />} />
        <Route path="/create" element={<CreateWorkspace />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/oauth/kakao/callback" element={<Kakao />} />
        <Route path="/oauth/github/callback" element={<GitHub />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
