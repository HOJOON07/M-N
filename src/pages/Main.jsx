import React from 'react';
import MainSec from '../pages/components/Main/MainSec';
import MainFir from '../pages/components/Main/MainFir';
import MainThir from './components/Main/MainThir';
import MainLast from './components/Main/MainLast';

export default function Main() {
  return (
    <>
      <MainFir />
      <MainSec />
      <MainLast />
      <MainThir />
    </>
  );
}
