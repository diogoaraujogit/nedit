/* eslint-disable */
import Popup from 'reactjs-popup';
import styled from 'styled-components';

export const ModalContainer = styled(Popup)`
  &-content {
    display: flex;
    width: 90%;
    max-width: 118.9rem;
    height: 90%;
    max-height: 80rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.dashboardBackground};
  padding: 5.5rem 7.3rem 4.2rem 8.75rem;
`;

export const Modalfeedback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 2rem;
    color: ${props => props.theme.colors.cardText};
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.3rem;

  h2 {
    font-size: 2.4rem;
    font-weight: 400;
    color: ${props => props.theme.colors.headText};
  }

  p {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.cardText};
    max-width: 48rem;
    line-height: 2rem;
  }

  span {
    height: 2rem;
    color: ${props => props.theme.colors.error};
    font-size: 1.6rem;
    text-align: center;
    font-weight: 500;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  padding: 2rem 1rem 0rem 0rem;
  margin-bottom: 2rem;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #db191a;
  }
`;

export const ModalName = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem;

  margin-bottom: 3.2rem;
`;

export const ModalItemsList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 1rem;
`;

export const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3.2rem;
`;

export const ModalItemName = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  h2 {
    color: ${props => props.theme.colors.headText};
    font-size: 2.4rem;
    font-weight: 400;
  }

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  svg {
    color: ${props => props.theme.colors.lightText};
    font-size: 2.2rem;
    cursor: pointer;
  }
`;

export const ModalItemProps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem 2.2rem;
`;

export const AddItem = styled.div`
  margin-bottom: 3rem;

  button {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${props => props.theme.colors.error};
    background-color: transparent;
    font-size: 1.2rem;
  }

  svg {
    font-size: 2.2rem;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.4rem;

  button {
    height: 3.6rem;
    width: 20.3rem;
    border-radius: 0.4rem;
    color: ${props => props.theme.colors.primary};
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;

export const SecondaryButton = styled.button`
  background-color: ${props => props.theme.colors.lightText};
`;

export const PrimaryButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};

  .MuiCircularProgress-colorPrimary {
    color: ${props => props.theme.colors.primary};
  }
`;
