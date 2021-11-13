import React from 'react';
import { ROOT } from '../../utils/constants/routes.constants';
import { Link } from 'react-router-dom';

// import React, { useEffect, useContext } from 'react';

// import { FooterModeContext } from '../../context/FooterModeContext';

const NotFound: React.FC = () => {

  // const { setState: setGlobalState } = useContext(FooterModeContext);
  // useEffect(() => {
  //   async () => setGlobalState({ isPagination: true });
  // },[])

  return (
    <div>
      <h1>404 Page</h1>
      <Link to={ROOT}>Something went wrong return to Home</Link>
    </div>
  );
}

export default NotFound;