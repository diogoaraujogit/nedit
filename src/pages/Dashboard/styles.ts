import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

interface ContentProps {
  readonly isCollapsed: boolean;
  readonly isBusCollapsed: boolean;
}

export const Content = styled.div<ContentProps>`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: ${props =>
    props.isCollapsed && props.isBusCollapsed
      ? '5% 5% 25% 65%'
      : props.isCollapsed
      ? '5% 25% 25% 45%'
      : props.isBusCollapsed
      ? '25% 5% 25% 45%'
      : '1fr 1fr 0.8fr 1.2fr'};
  padding: 1rem 0rem;
`;
