import { useEffect, useState } from 'react';
import Login from '../Login';
import React from 'react';

export default function Naver() {
  const { naver } = window;
  // 네이버 로그인 기능 및 버튼 구현
  const naverLogin = new naver.LoginWithNaverId({
    clientId: 'yae_p6JQMpDNyLY2oAVg',
    callbackUrl: 'http://localhost:3000/workspace',
    isPopup: true,
    loginButton: {
      // mySocialNaver,
    },
  });

  useEffect(() => {
    naverLogin.init();
    console.log('init!');
  }, []);

  const [user, setUser] = useState(null);

  const getUser = async () => {
    await naverLogin.getLoginStatus(status => {
      console.log(`로그인?: ${status}`);
      if (status) {
        setUser({ ...naverLogin.user });
        window.opener.location.href = 'http://localhost:3000';
        window.close();
      }
    });
  };

  useEffect(() => {
    naverLogin.init();
    console.log('init!');
    getUser();
  }, []);

  return (
    <>
      <mySocialNaver />;
    </>
  );
}
