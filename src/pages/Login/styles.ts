import { darken } from 'polished';
import styled from 'styled-components';
import backgroundArt from '../../assets/backgroundArt.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 196rem;
  padding: 0rem 2rem;
  background-image: url(${backgroundArt});
  background-size: 196rem;
  background-repeat: no-repeat;
  background-position: center bottom -20rem;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 32.8rem;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const Version = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.secondaryText};
`;

export const LoginLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 13.4rem;
    /* height: 5.3rem; */
  }
`;

export const SideLoginLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 4.75rem 3.625rem 0rem 0rem;
  img {
    width: 17.1rem;
    height: 2.5rem;
  }
`;

export const LoginFormArea = styled.div`
  display: flex;
  width: 100%;

  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 3rem;

    h4 {
      height: 2rem;
      color: ${props => props.theme.colors.error};
      text-align: center;
    }

    .forgot-password {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${props => props.theme.colors.secondaryText};
      cursor: pointer;
      font-size: 1.4rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 8.2rem;
    }

    span {
      color: ${props => props.theme.colors.error};
    }

    button {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      height: 3.6rem;
      background-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.primary};
      border-radius: 0.4rem;
      transition: background 0.2s;
      font-size: 1.4rem;

      &:hover {
        background: ${props => darken(0.05, props.theme.colors.secondary)};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .MuiCircularProgress-colorPrimary {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

interface InputProps {
  readonly error?: boolean;
}

export const IconInput = styled.div<InputProps>`
  display: flex;
  align-items: center;
  width: 100%;
  color: gray;

  input {
    height: 5.6rem;
    padding: 0rem 5rem 0rem 1.6rem;
    width: 100%;
    border: ${props =>
      props.error ? `1px solid ${props.theme.colors.error}` : 'none'};
    border-radius: 0.4rem;
    color: ${props => props.theme.colors.text};
    font-size: 1.6rem;
  }

  svg {
    margin-left: -4rem;
    font-size: 2rem;
    cursor: pointer;
  }
`;
