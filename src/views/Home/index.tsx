import React from 'react';
import { Link } from 'react-router-dom';
import { NOT_FOUND } from '../../utils/constants/routes.constants';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hello is.a.question</h1>
      <Link to={NOT_FOUND}>Go to 404 Page</Link>
    </div>
  );
}

export default Home;