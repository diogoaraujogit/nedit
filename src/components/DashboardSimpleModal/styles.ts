import Popup from 'reactjs-popup';
import styled from 'styled-components';

export const SimpleModalContainer = styled(Popup)`
  &-content {
    display: flex;
    width: 10rem;
    height: 10rem;

    background-color: ${props => props.theme.colors.dashboardBackground};
  }
`;

export const SimpleModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
