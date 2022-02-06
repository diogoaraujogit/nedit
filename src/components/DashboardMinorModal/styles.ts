import Popup from 'reactjs-popup';
import styled from 'styled-components';

export const MinorModalContainer = styled(Popup)`
  &-content {
    display: flex;
    flex-direction: column;
    height: 24.8rem;
    width: 90%;
    max-width: 40.5rem;

    background-color: ${props => props.theme.colors.dashboardBackground};
  }
`;

export const MinorModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 2.2rem;
  gap: 1.2rem;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.headText};
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: ${props => props.theme.colors.cardText};
  }
`;

export const MinorModalButtons = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: auto;
  align-self: flex-end;

  button {
    background-color: transparent;
  }
`;

export const MinorButtonSecondary = styled.button`
  color: ${props => props.theme.colors.headText};
`;

export const MinorButtonPrimary = styled.button`
  color: ${props => props.theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .MuiCircularProgress-colorPrimary {
    color: ${props => props.theme.colors.secondary};
  }
`;
