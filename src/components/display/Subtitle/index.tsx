import React from 'react';
import { Typography, useTheme } from '@mui/material';
import Chip from '@mui/material/Chip';
import CircleIcon from '@mui/icons-material/Circle';
import Container from '../../layout/InternalGrid';

interface ISubtitleProps{
  difficulty?: string | undefined;
}

const Subtitle: React.FC<ISubtitleProps> = ({ children, difficulty }) => {
  const theme = useTheme();
  const icon = (
    <Chip 
      icon={<CircleIcon fontSize="small"/>} 
      label={difficulty} 
      sx={{ marginLeft: 1, marginBottom: '4.5px' }}
      color={theme.palette.mode === 'dark' ? 'default' : 'primary'}
      size="small"
    />
  )
  const renderIcon = typeof difficulty === 'undefined' ? null : icon;

  return (
    <Container>
      <Typography 
        color="text.secondary"
        marginTop={3.4}
        fontSize={18}
        sx={{ maxWidth: typeof difficulty !== 'undefined' ? null : 400 }}
      >
        {children} 
        {renderIcon}
      </Typography>
    </Container>
  );
}

export default Subtitle;