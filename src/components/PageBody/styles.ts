import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: ${props => props.theme.colors.dashboardBackground};
`;

export const PageContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 192rem;
  height: 100%;
`;
