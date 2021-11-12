import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { NOT_FOUND } from '../../utils/constants/routes.constants';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Hello is.a.question</h1>
      <Link to={NOT_FOUND}>Go to 404 Page</Link>
    </Container>
  );
}

export default Home;