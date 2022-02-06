import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

const MyButton: React.FC<MyButtonProps> = ({ color }) => {
  return <Container color={color}>My Botão</Container>;
};

export default MyButton;
