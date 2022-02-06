import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 9.7rem;
  background-color: ${props => props.theme.colors.secondary};
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 192rem;
  padding: 0rem 6.3rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);

  > div {
    align-items: center;
  }
`;

export const LogoHeader = styled.div`
  display: flex;
  width: 15rem;
  cursor: pointer;
  img {
    height: 3rem;
  }
`;

export const ButtonsHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const FeaturesHeader = styled.div`
  display: flex;
  justify-content: flex-end;

  > div {
    padding: 0rem 2rem;
    border-right: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:last-child {
      border: none;
    }
  }
`;

export const GoHome = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 1.6rem;
`;

export const LanguageSelector = styled.div`
  display: flex;
`;

export const ReactSelectorContainer = styled.div`
  width: 6rem;
  position: relative;
  z-index: 2;

  .select-container {
    font-size: 2.5rem;
  }

  .select__control {
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
  }

  .select__value-container {
    padding: 0rem;
    align-items: center;
    justify-content: center;
  }

  .select__single-value {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .select__dropdown-indicator {
    padding: 0rem;
  }

  .select__indicators {
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const UserAction = styled.div`
  display: flex;
  font-size: 1.4rem;
`;

export const Logout = styled.div`
  display: flex;

  button {
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
  }

  svg {
    font-size: 2rem;
  }
`;
