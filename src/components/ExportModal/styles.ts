import Popup from 'reactjs-popup';
import styled from 'styled-components';
import {
  ProjectCard,
  ProjectsList,
} from '../../pages/Dashboard/Projects/styles';
import { ModalButtons } from '../DashboardModal/styles';

export const PopupContainer = styled(Popup)`
  &-content {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background-color: ${props => props.theme.colors.dashboardBackground};

    height: 90%;
    max-height: 89.7rem;
    width: 90%;
    max-width: 57.3rem;
  }
`;

export const ImportContainer = styled(Popup)`
  &-content {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background-color: ${props => props.theme.colors.dashboardBackground};

    height: 90%;
    max-height: 39.2rem;
    width: 90%;
    max-width: 57.3rem;
  }
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 3.2rem 4.8rem;
  overflow: auto;
`;

export const ExportHeader = styled.div`
  margin-bottom: 3rem;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2.4rem;
    font-weight: 500;
    color: ${props => props.theme.colors.headText};
  }

  p {
    color: ${props => props.theme.colors.cardText};
    font-size: 1.4rem;
  }
`;

export const ExportMessage = styled.div`
  color: ${props => props.theme.colors.error};
  text-align: center;
  display: flex;
  margin-bottom: 2rem;
  /* height: 2rem; */
  /* padding: 1rem; */
`;

export const ExportBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 4.3rem;
  overflow: auto;
`;

export const ExportList = styled(ProjectsList)`
  padding-bottom: 5rem;
  display: flex;

  &.fixed {
    padding-bottom: 1rem;
    height: auto;
  }
`;

export const ExportProjectCard = styled(ProjectCard)`
  display: grid;
  grid-template-columns: 1fr 2fr 5fr 3fr 1fr;
  align-items: center;

  h4,
  div {
    text-align: center;
  }

  #name {
    text-align: left;
  }
`;

export const ExportFooter = styled.div``;

export const FormatSelector = styled.div`
  margin-bottom: 5.7rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ExtraImport = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DownloadTemplate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  a {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    color: ${props => props.theme.colors.error};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.4rem;
  }

  svg {
    font-size: 2.2rem;
  }
`;

export const ExportActions = styled(ModalButtons)`
  justify-content: space-between;
  margin-top: auto;
`;
