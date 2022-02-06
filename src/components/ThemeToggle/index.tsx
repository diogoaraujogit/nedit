import React, { useContext } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { ThemeContext } from 'styled-components';
import { LayoutContext } from '../../contexts/LayoutContext';
import { Container } from './styles';
import useIntl from '../../hooks/useIntl';

const ThemeToggle: React.FC = () => {
  const { toggleTheme } = useContext(LayoutContext);
  const { title } = useContext(ThemeContext);
  const intl = useIntl();
  return (
    <Container>
      <button title={intl.theme} type="button" onClick={toggleTheme}>
        {title === 'dark' ? <MdOutlineDarkMode /> : <MdDarkMode />}
      </button>
    </Container>
  );
};

export default ThemeToggle;
