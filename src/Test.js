import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Test() {
  const Navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  console.log(accessToken);
  const userData = {
    user_id: 'ghwns1007',
    user_password: 'testtest2',
  };
  const login = () => {
    axios
      .post('http://localhost:5500/user/login', userData, {
        withCredentials: true,
      })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('accessToken', res.data.accessToken);
        }
      })
      .catch(err => {
        alert('ID 또는 비밀번호가 일치하지 않습니다');
        console.log(err.response.data, err);
      });
  };
  const logout = async (req, res) => {
    axios
      .post('http://localhost:5500/user/logout', {
        withCredentials: true,
      })
      .then(res => {
        if (res.status === 200) {
          // window.open('/', '_self');
        }
      });
  };
  // const accessToken = () => {
  //   axios
  //     .get('http://localhost:5500/token/accesstoken', {
  //       withCredentials: true,
  //     })
  //     .then(res => {
  //       if (res.status === 200) {
  //         alert('액세스 잇음');
  //       }
  //     })
  //     .catch(refreshToken());
  // };

  // const refreshToken = () => {
  //   axios({
  //     url: 'http://localhost:5500/token/refreshtoken',
  //     method: 'GET',
  //     withCredentials: true,
  //   });
  // };
  // useEffect(() => {
  //   accessToken();
  // }, []);

  // const test = () => {
  //   axios({
  //     url: 'http://localhost:5500/user/test',
  //     method: 'POST',
  //     withCredentials: true,
  //   })
  //     .then(data => {
  //       alert(data.status);
  //     })
  //     .catch(err => {
  //       alert(err);
  //     });
  // };
  const test = () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const headers = {
      'Content-Type': 'application/json',
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
    axios
      .post(
        'http://localhost:5500/user/test',
        { data: 'data' },
        {
          headers: headers,
        }
      )
      .then(res => {
        console.log('성공');
        // localStorage.setItem('accessToken', res.data.accessToken);
      })
      .catch(err => {
        console.log(err);
        Navigate('/login');
      });
  };

  return (
    <>
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그아읏</button>
      {/* <button onClick={accessToken}>엑세스</button>
      <button onClick={refreshToken}>리프레쉬</button> */}
      <button onClick={test}>테스트</button>
    </>
  );
}
