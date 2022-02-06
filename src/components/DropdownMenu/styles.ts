import { Menu } from '@material-ui/core';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &.white {
    color: ${props => props.theme.colors.primary};
  }
`;

export const StyledMenu = styled(Menu)`
  .MuiList-root {
    background-color: ${props => props.theme.colors.dashboardBackground};
  }

  .MuiList-padding {
    padding: 1rem;
  }

  a {
    text-decoration: none;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: 100%;
  padding: 1rem 2rem;
  transition: background-color 0.2s;
  gap: 5rem;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.headText};
  font-weight: 400;

  &:hover {
    background-color: ${props => props.theme.colors.line};
  }

  svg {
    font-size: 2.2rem;
  }

  &.normalTag {
    background-color: ${props => props.theme.colors.normalTag};
  }
  &.doubleWayTag {
    background-color: ${props => props.theme.colors.doubleWayTag};
  }
  &.extraTag {
    background-color: ${props => props.theme.colors.extraTag};
  }

  &.normalTag,
  &.extraTag,
  &.doubleWayTag {
    transition: filter 0.2s;
    margin: 0.8rem 0rem;

    color: ${props => props.theme.colors.primary};

    &:hover {
      filter: brightness(90%);
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
