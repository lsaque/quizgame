import React, { createContext } from "react";

type PaginationType = {
  isPagination: boolean;
}

type FooterModeContextType = {
  state: PaginationType;
  setState: React.Dispatch<React.SetStateAction<PaginationType>>;
}

 const DEFAULT_VALUE = {
  state: {
    isPagination: false,
  },
  setState: () => {},
}

const FooterModeContext = createContext<FooterModeContextType>(DEFAULT_VALUE);

export { FooterModeContext, DEFAULT_VALUE }