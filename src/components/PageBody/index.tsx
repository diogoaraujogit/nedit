import React from 'react';

import { Container, PageContent } from './styles';

const PageBody: React.FC = ({ children }) => {
  return (
    <Container>
      <PageContent>{children}</PageContent>
    </Container>
  );
};

export default PageBody;
