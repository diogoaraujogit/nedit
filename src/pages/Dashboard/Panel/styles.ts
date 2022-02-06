import styled from 'styled-components';
import { ProjectCard } from '../Projects/styles';

export const PanelCard = styled(ProjectCard)`
  grid-template-columns: 1fr 3fr 3fr;

  #position,
  #dimensions {
    text-align: center;
  }
`;
