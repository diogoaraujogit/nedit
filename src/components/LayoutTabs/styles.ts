import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 4.8rem;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
  box-shadow: ${props => props.theme.shadows.primary};
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 192rem;
  height: 100%;
`;
