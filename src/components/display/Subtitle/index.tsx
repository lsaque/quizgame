import React from 'react';
import { Typography } from '@mui/material';

import Container from '../../layout/InternalGrid';

const Subtitle: React.FC = ({ children }) => {
  return (
    <Container>
      <Typography 
        color="text.secondary"
        marginTop={3.4}
        maxWidth={400}
        fontSize={18}
      >
        {children}
      </Typography>
    </Container>
  );
}

export default Subtitle;