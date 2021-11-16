import React from 'react';
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import CircleIcon from '@mui/icons-material/Circle';
import Container from '../../layout/InternalGrid';

interface ISubtitleProps{
  difficulty?: string | undefined;
}

const Subtitle: React.FC<ISubtitleProps> = ({ children, difficulty }) => {
  
  const icon = (
    <Chip 
      icon={<CircleIcon fontSize="small"/>} 
      label={difficulty} 
      sx={{ marginLeft: 1, marginBottom: '5px' }}
      size="small"
    />
  )
  const renderIcon = typeof difficulty === 'undefined' ? null : icon;

  return (
    <Container>
      <Typography 
        color="text.secondary"
        marginTop={3.4}
        maxWidth={400}
        fontSize={18}
      >
        {children} 
        {renderIcon}
      </Typography>
    </Container>
  );
}

export default Subtitle;