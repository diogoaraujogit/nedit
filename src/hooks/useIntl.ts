import { useContext } from 'react';
import { IntlContext } from '../contexts/IntlContext';
import intlDictionary from '../config/intl';

interface IntlProps {
  [key: string]: any;
}

function useIntl(): IntlProps {
  const { currentLanguage } = useContext(IntlContext);

  const intl = currentLanguage
    ? intlDictionary[currentLanguage]
    : intlDictionary.pt;

  return intl;
}

export default useIntl;
