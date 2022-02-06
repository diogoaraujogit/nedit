import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { DashboardContext } from '../../contexts/DashboardContext';
import useIntl from '../../hooks/useIntl';
import api from '../../services/api';
import { PanelProps } from '../../types';
import { handleRegularCall } from '../../utils/handleError';
import Loading from '../Loading';

import {
  MinorModalContainer,
  MinorModalContent,
  MinorModalButtons,
  MinorButtonSecondary,
  MinorButtonPrimary,
} from './styles';

interface DeletePanelModalProps {
  projectPanelsList: PanelProps[];
  setProjectPanelsList: Dispatch<SetStateAction<PanelProps[]>>;
  internalId: number;
}

export const DeletePanelModal: React.FC<DeletePanelModalProps> = ({
  projectPanelsList,
  setProjectPanelsList,
  internalId,
}) => {
  const intl = useIntl();
  const handleDeletePanelFromProject = (closeDelete: () => void) => {
    const panelsListWithoutSelectedPanel = [...projectPanelsList].filter(
      (panel, idx) => internalId !== idx,
    );

    setProjectPanelsList([...panelsListWithoutSelectedPanel]);
    closeDelete();
  };

  return (
    <MinorModalContainer
      nested
      modal
      trigger={
        <button type="button">
          <RiDeleteBin7Line />
        </button>
      }
    >
      {(closeDelete: () => void) => (
        <MinorModalContent>
          <h3>{intl.removePanel}</h3>
          <p>{intl.removePanelDescription}</p>
          <MinorModalButtons>
            <MinorButtonSecondary type="button" onClick={() => closeDelete()}>
              {intl.cancel}
            </MinorButtonSecondary>
            <MinorButtonPrimary
              type="button"
              onClick={() => handleDeletePanelFromProject(closeDelete)}
            >
              {intl.remove}
            </MinorButtonPrimary>
          </MinorModalButtons>
        </MinorModalContent>
      )}
    </MinorModalContainer>
  );
};

interface DeleteProjectModalProps {
  children: React.ReactElement;
  onOpen?(): void;
}

export const DeleteProjectModal: React.FC<DeleteProjectModalProps> = ({
  children,
  onOpen,
}) => {
  const intl = useIntl();
  const [deleting, setDeleting] = useState(false);
  const { onActionProject, goGetProjects, setCurrentProject } =
    useContext(DashboardContext);

  const deleteProject = async (closeDelete: () => void) => {
    setDeleting(true);
    const { id } = onActionProject;

    try {
      const response = await api.delete(`/projects/${id}`);

      if (response) {
        const message = intl.deleteSuccess;
        goGetProjects();
        setCurrentProject({});
        closeDelete();
        toast.info(message);
      }
    } catch (e) {
      const error = handleRegularCall(e, intl.networkError, intl.serverError);

      toast.error(error);
    }

    setDeleting(false);
  };

  const handleDeleteProject = (closeDelete: () => void) => {
    deleteProject(closeDelete);
  };

  return (
    <MinorModalContainer nested modal trigger={children} onOpen={onOpen}>
      {(closeDelete: () => void) => (
        <MinorModalContent>
          <h3>{intl.removeProject}</h3>
          <p>{intl.removeProjectDescription}</p>
          <MinorModalButtons>
            <MinorButtonSecondary type="button" onClick={() => closeDelete()}>
              {intl.cancel}
            </MinorButtonSecondary>
            <MinorButtonPrimary
              type="button"
              disabled={deleting}
              onClick={() => handleDeleteProject(closeDelete)}
            >
              {intl.remove} {deleting && <Loading />}
            </MinorButtonPrimary>
          </MinorModalButtons>
        </MinorModalContent>
      )}
    </MinorModalContainer>
  );
};

// DELETE BUS ROUTE MODAL

export const DeleteBusRouteModal: React.FC<DeleteProjectModalProps> = ({
  children,
  onOpen,
}) => {
  const intl = useIntl();
  const [deleting, setDeleting] = useState(false);
  const { onActionBusRoute, triggerDeleteBusRouteFlag } =
    useContext(DashboardContext);

  const deleteBusRoute = async (closeDelete: () => void) => {
    setDeleting(true);
    const { id } = onActionBusRoute;

    try {
      const response = await api.delete(`/scripts/${id}`);

      if (response) {
        const message = intl.deleteSuccess;
        triggerDeleteBusRouteFlag();
        // setCurrentProject({});
        closeDelete();
        toast.info(message);
      }
    } catch (e) {
      const error = handleRegularCall(e, intl.networkError, intl.serverError);

      toast.error(error);
    }

    setDeleting(false);
  };

  const handleDeleteProject = (closeDelete: () => void) => {
    deleteBusRoute(closeDelete);
  };

  return (
    <MinorModalContainer nested modal trigger={children} onOpen={onOpen}>
      {(closeDelete: () => void) => (
        <MinorModalContent>
          <h3>{intl.removeBusRoute}</h3>
          <p>{intl.removeBusRouteDescription}</p>
          <MinorModalButtons>
            <MinorButtonSecondary type="button" onClick={() => closeDelete()}>
              {intl.cancel}
            </MinorButtonSecondary>
            <MinorButtonPrimary
              type="button"
              disabled={deleting}
              onClick={() => handleDeleteProject(closeDelete)}
            >
              {intl.remove} {deleting && <Loading />}
            </MinorButtonPrimary>
          </MinorModalButtons>
        </MinorModalContent>
      )}
    </MinorModalContainer>
  );
};

// MODAL CONFIRM DISCARD changes

// interface ConfirmDismissModalProps {
//   onClose: () => void;
// }

export const ConfirmDismissModal: React.FC = () => {
  const intl = useIntl();
  const { setOpenDismissModal, openDismissModal, setHasChangeOnEditor } =
    useContext(DashboardContext);

  const handleDismissRoutine = () => {
    openDismissModal.action();
    setHasChangeOnEditor(false);
    setOpenDismissModal({ ...openDismissModal, status: false });
  };

  return (
    <MinorModalContainer
      nested
      modal
      closeOnDocumentClick={false}
      open={openDismissModal.status}
    >
      {() => (
        <MinorModalContent>
          <h3>{intl.discardChanges}</h3>
          <p>{intl.discardChangesDescription}</p>
          <MinorModalButtons>
            <MinorButtonSecondary
              type="button"
              onClick={() =>
                setOpenDismissModal({ ...openDismissModal, status: false })
              }
            >
              {intl.keep}
            </MinorButtonSecondary>
            <MinorButtonPrimary
              type="button"
              onClick={() => handleDismissRoutine()}
            >
              {intl.discard}
            </MinorButtonPrimary>
          </MinorModalButtons>
        </MinorModalContent>
      )}
    </MinorModalContainer>
  );
};
