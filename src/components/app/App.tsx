import React, { FC } from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  color: white;
  height: 100%;
  padding: 20px;
`;

const Button = styled.button`
  height: 300px;
  background-color: white;
  border-radius: 168px;
  cursor: pointer;
  font-size: 32px;

  &:hover {
    background-color: #e6e6e6;
    border: 2px solid white;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #b7b6b6;
  }
`;

const Image = styled.img`
  margin-bottom: 30px;
`;

const App: FC = () => {
  return (
  <AppWrapper>
    <h1>Epidemiology Rulesss</h1>
    <Image src="https://images-na.ssl-images-amazon.com/images/I/61b3sIWfghL._SL1286_.jpg" />
    <Button>BUY THE SHIRT</Button>


  </AppWrapper>
  );
};

export default App;
