import React, { useContext } from 'react';

import { IoHomeOutline } from 'react-icons/io5';

import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import Flag from 'react-flagkit';
import {
  ButtonsHeader,
  Container,
  Content,
  FeaturesHeader,
  GoHome,
  LanguageSelector,
  LogoHeader,
  ReactSelectorContainer,
  UserAction,
} from './styles';
import logoNeditWhite from '../../assets/logoNeditWhite2.png';
import { IntlContext } from '../../contexts/IntlContext';
import { DropdownHeader } from '../DropdownMenu';
import ThemeToggle from '../ThemeToggle';
import useIntl from '../../hooks/useIntl';

const Header: React.FC = ({ children }) => {
  const languageOptions = [
    {
      value: 'pt',
      label: <Flag country="BR" />,
    },
    {
      value: 'en',
      label: <Flag country="US" />,
    },
    {
      value: 'es',
      label: <Flag country="ES" />,
    },
  ];

  const { pathname } = useLocation();
  const isHome = pathname === '/dashboard';
  const { currentLanguage, switchLanguage } = useContext(IntlContext);
  const intl = useIntl();
  const selectValue = languageOptions.filter(
    option => option.value === currentLanguage,
  );

  return (
    <Container>
      <Content>
        <LogoHeader
          title={intl.reloadPage}
          onClick={() => window.location.reload()}
        >
          <img src={logoNeditWhite} alt="Inova" />
        </LogoHeader>
        <ButtonsHeader>{children}</ButtonsHeader>
        <FeaturesHeader>
          <ThemeToggle />
          {!isHome && (
            <GoHome>
              <IoHomeOutline />
            </GoHome>
          )}
          <LanguageSelector>
            <ReactSelectorContainer>
              <Select
                className="select-container"
                classNamePrefix="select"
                options={languageOptions}
                value={selectValue}
                onChange={e => {
                  switchLanguage(e?.value || '');
                  window.location.reload();
                }}
                isSearchable={false}
                title={intl.language}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
            </ReactSelectorContainer>
          </LanguageSelector>
          <UserAction>
            <DropdownHeader />
          </UserAction>
        </FeaturesHeader>
      </Content>
    </Container>
  );
};

export default Header;
