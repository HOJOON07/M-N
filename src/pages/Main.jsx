import React from 'react';
import MainSec from '../pages/components/Main/MainSec';
import MainFir from '../pages/components/Main/MainFir';
import MainThir from './components/Main/MainThir';
import MainLast from './components/Main/MainLast';

export default function Main() {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  console.log(accessToken, refreshToken);
  return (
    <>
      <MainFir />
      <MainSec />
      <MainLast />
      <MainThir />
    </>
  );
}
