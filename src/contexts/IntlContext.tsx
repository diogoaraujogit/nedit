import React, { createContext } from 'react';
import usePersistedState from '../hooks/usePersistantState';

interface IntlProps {
  currentLanguage?: string;
}

interface IntlContextProps extends IntlProps {
  switchLanguage(settedLanguage: string): void;
}

const IntlContext = createContext<IntlContextProps>({} as IntlContextProps);

const IntlProvider: React.FC = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = usePersistedState<string>(
    '@nedit/intl',
    'pt',
  );

  const switchLanguage = (settedLanguage: string) => {
    setCurrentLanguage(settedLanguage);
  };

  return (
    <IntlContext.Provider value={{ currentLanguage, switchLanguage }}>
      {children}
    </IntlContext.Provider>
  );
};

export { IntlContext, IntlProvider };
