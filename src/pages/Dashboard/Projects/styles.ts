import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
`;
export const FilterContainer = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  height: 4.2rem;
  width: 100%;
  gap: 0.8rem;
  padding: 0rem 0.5rem;
`;

export const InputSearch = styled.div`
  display: flex;
  align-items: center;
  box-shadow: ${props => props.theme.shadows.primary};
  color: ${props => props.theme.colors.cardText};
  font-size: 1.2rem;
  height: 100%;
  background-color: ${props => props.theme.colors.cardBackground};

  flex: 1;
  padding: 1.2rem 2.2rem;

  input {
    border: none;
    width: 100%;
    background-color: transparent;
    color: ${props => props.theme.colors.cardText};
  }

  svg {
    font-size: 2rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;

  color: ${props => props.theme.colors.lightText};
  font-size: 2rem;
  text-align: center;
`;

export const ProjectsBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  padding: 0rem 0.5rem 20rem;
  height: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

interface ProjectCardProps {
  selected?: boolean;
}

export const ProjectCard = styled.div<ProjectCardProps>`
  background-color: ${props =>
    props.selected
      ? props.theme.colors.lightBackground
      : props.theme.colors.cardBackground};
  box-shadow: ${props => props.theme.shadows.primary};
  padding: 1rem 1.6rem;
  color: ${props =>
    props.selected
      ? props.theme.colors.lightText
      : props.theme.colors.cardText};
  font-size: 1.2rem;
  cursor: pointer;
  background-size: 50% 50%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 6fr 4fr 1fr;
  word-break: break-word;

  svg {
    font-size: 1.8rem;
    cursor: pointer;
  }

  #id {
    text-align: left;
    word-break: normal;
  }

  #routes {
    text-align: center;
  }

  #icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    background-color: transparent;

    svg {
      color: ${props =>
        props.selected
          ? props.theme.colors.lightText
          : props.theme.colors.cardText};
    }
  }

  #update {
    color: ${props => props.theme.colors.success};
  }
`;

export const FloatButton = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;

  button {
    border-radius: 50%;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    height: 5.6rem;
    width: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
`;

export const FloatCollapse = styled.div`
  position: absolute;
  top: 50%;
  right: -0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.text};
    height: 2.4rem;
    width: 2rem;
    border-radius: 0.7rem 0rem 0rem 0.7rem;
    color: ${props => props.theme.colors.primary};
    border: solid #909091;
    border-width: thin;
    svg {
      font-size: 1.8rem;
    }
  }
`;
