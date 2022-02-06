import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Container } from './styles';

const Loading: React.FC = ({ ...rest }) => {
  return (
    <Container>
      <CircularProgress size="2rem" color="primary" {...rest} />
    </Container>
  );
};

export default Loading;
