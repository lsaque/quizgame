import React, { useEffect, useContext } from 'react';
import { FooterModeContext } from '../../contexts/FooterModeContext';
import ApiContext from '../../contexts/ApiContext';

const Quiz: React.FC = () => {
  const { setState: setGlobalState } = useContext(FooterModeContext);
  const { apiState } = useContext(ApiContext);
  const { clientState } = useContext(ApiContext);
  
  useEffect(() => {
    setGlobalState({ isPagination: true });
    console.log(apiState)
    console.log(clientState)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div>
      <h1>Quiz</h1>
    </div>
  );
}

export default Quiz;