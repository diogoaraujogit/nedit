import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
  border-left: 1px solid ${props => props.theme.colors.line};
  padding: 0rem 0.5rem;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const GridContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const GridBackground = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    max-width: 14.6rem;
    height: auto;
    color: ${props => props.theme.colors.iconBackground};
  }
`;
