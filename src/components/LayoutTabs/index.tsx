import React from 'react';

import { Container, Content } from './styles';

const LayoutTabs: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default LayoutTabs;
