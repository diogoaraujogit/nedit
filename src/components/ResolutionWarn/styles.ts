import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.red200};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  gap: 4.2rem;
  padding: 2rem;

  svg {
    font-size: 4rem;
  }

  img {
    height: 1.9rem;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 300;

  strong {
    font-weight: bold;
  }
`;
