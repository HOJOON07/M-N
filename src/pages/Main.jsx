import React from 'react';
import styled from 'styled-components';

const MyMainContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
`;

export default function Main() {
  return <MyMainContainer>컨텐츠</MyMainContainer>;
}
