import React, { useCallback, useContext, useState } from 'react';

interface ContextProps {
  error: string | null;
  dispatchError: (message: string) => void;
}

const ErrorContext = React.createContext({} as ContextProps);

type Props = {
  children: any;
};

export const ErrorProvider: React.FC<Props> = ({ children }) => {
  const [error, setError] = useState(null);

  const dispatchError = useCallback((message) => {
    setError(message);
  }, []);

  return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!errorContext) {
    throw Error('useError needs to be used inside ErrorContext');
  }

  return errorContext;
};
