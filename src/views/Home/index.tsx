import { Button, Container } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FooterModeContext } from '../../context/FooterModeContext';
import { NOT_FOUND } from '../../utils/constants/routes.constants';

const Home: React.FC = () => {

  const { setState: setGlobalState } = useContext(FooterModeContext);
  
  function handleSubmit() {
    setGlobalState({isPagination: true});
  }

  return (
    <Container>
      <h1>Hello is.a.question</h1>
      <Link to={NOT_FOUND}>Go to 404 Page</Link>
      <Button onClick={handleSubmit}>Mudar</Button>
    </Container>
  );
}

export default Home;