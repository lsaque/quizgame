import React from 'react';
import { Container } from '@material-ui/core';

const ContentContainer: React.FC = ({ children }) => {
  return (
    <Container className="appContainer" maxWidth="xl">
      { children }
    </Container>
  );
}

export default ContentContainer;