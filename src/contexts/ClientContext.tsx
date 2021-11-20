import React, { createContext, useState } from 'react';
import Client from '../types/ClientData';
import Result from '../types/ClientData/lib/clientResult';

// setClientName: (value: string) => void,

const DEFAULT_VALUE = {
  name: '',
  quantityQuestion: 0,
  quantityWrongAnswers: 0,
  quantityCorrectAnswers: 0,
  isCorrectAnswer: [],
  results: [],

  setName: () => {},
  setQuantityQuestion: () => {},
  setQuantityWrongAnswers: () => {},
  setQuantityCorrectAnswers: () => {},
  setIsCorrectAnswer: () => {},
  setResults: () => {},
}

type PropsClientContext = {
  // clientState: Client,
  // setClientState: React.Dispatch<React.SetStateAction<Client>>
  name: string,
  quantityQuestion: number,
  quantityWrongAnswers: number,
  quantityCorrectAnswers: number,
  isCorrectAnswer: boolean[],
  results: Result[],
  setName: React.Dispatch<React.SetStateAction<string>>,
  setQuantityQuestion: React.Dispatch<React.SetStateAction<number>>,
  setQuantityWrongAnswers: React.Dispatch<React.SetStateAction<number>>,
  setQuantityCorrectAnswers: React.Dispatch<React.SetStateAction<number>>,
  setIsCorrectAnswer: React.Dispatch<React.SetStateAction<boolean[]>>,
  setResults: React.Dispatch<React.SetStateAction<Result[]>>,
}

const ClientContext = createContext<PropsClientContext>(DEFAULT_VALUE);

const ClientProvider: React.FC = ({ children }) => {
  // const [clientState, setClientState] = useState<Client>(DEFAULT_VALUE.clientState);
  const [name, setName] = useState<string>(DEFAULT_VALUE.name);
  const [quantityQuestion, setQuantityQuestion] = useState<number>(DEFAULT_VALUE.quantityQuestion);
  const [quantityWrongAnswers, setQuantityWrongAnswers] = useState<number>(DEFAULT_VALUE.quantityWrongAnswers);
  const [quantityCorrectAnswers, setQuantityCorrectAnswers] = useState<number>(DEFAULT_VALUE.quantityCorrectAnswers);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean[]>(DEFAULT_VALUE.isCorrectAnswer);
  const [results, setResults] = useState<Result[]>(DEFAULT_VALUE.results);

  const value = {
    // clientState,
    // setClientState,
    name,
    setName,
    quantityQuestion,
    setQuantityQuestion,
    quantityWrongAnswers,
    setQuantityWrongAnswers,
    quantityCorrectAnswers,
    setQuantityCorrectAnswers,
    isCorrectAnswer,
    setIsCorrectAnswer,
    results,
    setResults,
  }

  return (
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  );
}

export { ClientProvider };
export default ClientContext;