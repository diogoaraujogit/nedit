import styled from 'styled-components';

interface ButtonProps {
  readonly color: string;
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  color: ${props => props.color};
`;
