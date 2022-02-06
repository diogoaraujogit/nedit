import styled from 'styled-components';

export const ProjectsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  button {
    height: 3.6rem;
    padding: 0 1.3rem;
    box-shadow: 0px 1px 3px #00000033;
    border-radius: 0.4rem;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.1rem;
    font-size: 1.2rem;
  }

  svg {
    font-size: 2rem;
  }
`;

interface ProjectsTabsProps {
  readonly isCollapsed: boolean;
  readonly isBusCollapsed: boolean;
}

export const ProjectsTabs = styled.div<ProjectsTabsProps>`
  display: grid;
  width: 100%;
  grid-template-columns: ${props =>
    props.isCollapsed && props.isBusCollapsed
      ? '5% 5% 25% 65%'
      : props.isCollapsed
      ? '5% 25% 25% 45%'
      : props.isBusCollapsed
      ? '25% 5% 25% 45%'
      : '1fr 1fr 0.8fr 1.2fr'};

  color: ${props => props.theme.colors.primary};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
