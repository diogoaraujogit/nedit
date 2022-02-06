import React from 'react';

import { Container, Content } from './styles';

const AppLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default AppLayout;
