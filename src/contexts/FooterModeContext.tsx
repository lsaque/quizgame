import React, { createContext, useState } from "react";

const DEFAULT_VALUE = {
  isPagination: false,
  isLoading: false,
  isLastStep: false,
  maxSteps: 0,
  activeStep: 0,
  numberQuestionsAnswered: 0,
  setPagination: () => {},
  setLoading: () => {},
  setLastStep: () => {},
  setMaxSteps: () => {},
  setActiveStep: () => {},
  setNumberQuestionsAnswered: () => {},
  handlePaginationChange: (step: number) => {},
}

type PropsFooterModeContext = {
  isPagination: boolean,
  isLoading: boolean,
  isLastStep: boolean,
  maxSteps: number,
  activeStep: number,
  numberQuestionsAnswered: number,
  setPagination: React.Dispatch<React.SetStateAction<boolean>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setLastStep: React.Dispatch<React.SetStateAction<boolean>>,
  setMaxSteps: React.Dispatch<React.SetStateAction<number>>,
  setActiveStep: React.Dispatch<React.SetStateAction<number>>,
  setNumberQuestionsAnswered: React.Dispatch<React.SetStateAction<number>>,
  handlePaginationChange: any | React.Dispatch<React.SetStateAction<number>>,
}

const FooterModeContext = createContext<PropsFooterModeContext>(DEFAULT_VALUE);

const FooterModeProvider: React.FC = ({ children }) => {

  const [isPagination, setPagination] = useState<boolean>(DEFAULT_VALUE.isPagination);
  const [isLoading, setLoading] = useState<boolean>(DEFAULT_VALUE.isLoading);
  const [isLastStep, setLastStep] = useState<boolean>(DEFAULT_VALUE.isLastStep);
  const [maxSteps, setMaxSteps] = useState<number>(DEFAULT_VALUE.maxSteps);
  const [activeStep, setActiveStep] = useState<number>(DEFAULT_VALUE.activeStep);
  const [numberQuestionsAnswered, setNumberQuestionsAnswered] = useState<number>(DEFAULT_VALUE.activeStep);
  
  const handlePaginationChange = (event: React.ChangeEvent<unknown>, step: number) => {
    setActiveStep(step - 1);
  }
  
  const value = {
    isPagination,
    setPagination,
    isLoading,
    setLoading,
    isLastStep,
    setLastStep,
    maxSteps,
    setMaxSteps,
    activeStep,
    setActiveStep,
    numberQuestionsAnswered,
    setNumberQuestionsAnswered,
    handlePaginationChange,
  }

  return (
    <FooterModeContext.Provider value={value}>
      {children}
    </FooterModeContext.Provider>
  )
}

export { FooterModeProvider };
export default FooterModeContext;