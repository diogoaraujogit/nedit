import React from 'react';
import MyButton from '../../components/MyButton';

import { Container } from './styles';

const Boilerplate: React.FC = () => {
  return (
    <Container>
      Boilerplate <MyButton color="#ff00ff" />{' '}
    </Container>
  );
};

export default Boilerplate;
