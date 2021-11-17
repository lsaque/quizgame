import React, { createContext, useState } from 'react';
import ApiData from '../types/ApiData';
import Client from '../types/ClientData';

// setClientName: (value: string) => void,

const DEFAULT_VALUE = {
  apiState: {
    responseCode: 0,
    results: [],
  },
  clientState: {
    name: '',
    answers: [],
    alternatives: [],
  },
  setClientState: () => {},
  setApiState: () => {},
}

type PropsApiContext = {
  apiState: ApiData,
  clientState: Client,
  setClientState: React.Dispatch<React.SetStateAction<Client>>
  setApiState: React.Dispatch<React.SetStateAction<ApiData>>
}

const ApiContext = createContext<PropsApiContext>(DEFAULT_VALUE);

const ApiProvider: React.FC = ({ children }) => {
  const [apiState, setApiState] = useState<ApiData>(DEFAULT_VALUE.apiState);
  const [clientState, setClientState] = useState<Client>(DEFAULT_VALUE.clientState);

  const value = {
    apiState,
    setApiState,
    clientState,
    setClientState,
  }

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
}

export { ApiProvider };
export default ApiContext;