import styled from 'styled-components';
import { ProjectCard } from '../Projects/styles';

export const FilterOptions = styled.div`
  display: flex;
  box-shadow: ${props => props.theme.shadows.primary};

  height: 100%;
  align-items: center;
  justify-content: center;

  width: 7.2rem;
  cursor: pointer;
  background-color: ${props => props.theme.colors.cardBackground};

  > button {
    width: 100%;
    height: 100%;
    color: ${props => props.theme.colors.cardText};
  }
`;

export const CurrentFilters = styled.div`
  display: flex;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem 1rem;
    border-radius: 2rem;
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
  }

  .doubleWayTag {
    background-color: ${props => props.theme.colors.doubleWayTag};
  }
  .normalTag {
    background-color: ${props => props.theme.colors.normalTag};
  }
  .extraTag {
    background-color: ${props => props.theme.colors.extraTag};
  }
`;

export const BusRouteCard = styled(ProjectCard)`
  #way {
    width: 7rem;
    color: ${props => props.theme.colors.primary};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.1rem;
  }

  .doubleWayTag {
    background-color: ${props => props.theme.colors.doubleWayTag};
  }
  .normalTag {
    background-color: ${props => props.theme.colors.normalTag};
  }
  .extraTag {
    background-color: ${props => props.theme.colors.extraTag};
  }
`;
