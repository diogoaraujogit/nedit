import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { DashboardContext } from '../../contexts/DashboardContext';
import useIntl from '../../hooks/useIntl';
import api from '../../services/api';
import { BusRouteProps, IntlProps, ProjectProps } from '../../types';
import { handleRegularCall } from '../../utils/handleError';
import Loading from '../Loading';

import { SimpleModalContainer, SimpleModalContent } from './styles';

const duplicateProject = async (
  onActionProject: ProjectProps,
  goGetProjects: () => void,
  intl: IntlProps,
) => {
  const { id } = onActionProject;

  try {
    const response = await api.post(`/projects/duplicator/${id}`);

    if (response.data) {
      toast.success(intl.duplicateSuccess);
    }
  } catch (e) {
    const error = handleRegularCall(e, intl.networkError, intl.serverError);

    toast.error(error);
  }

  goGetProjects();
};

const sendToNFrota = async (
  onActionProject: ProjectProps,
  goGetProjects: () => void,
  intl: IntlProps,
) => {
  const { id } = onActionProject;

  try {
    const response = await api.post(`/projects/${id}/integrarion-nfrota`);

    if (response.data) {
      toast.success(intl.nfrotaSuccess);
    }
  } catch (e) {
    const error = handleRegularCall(e, intl.networkError, intl.serverError);

    toast.error(error);
  }

  goGetProjects();
};

const duplicateBusRoute = async (
  onActionBusRoute: BusRouteProps,
  triggerDuplicateBusRouteFlag: () => void,
  intl: IntlProps,
) => {
  const { id } = onActionBusRoute;

  try {
    const response = await api.post(`/scripts/duplicator/${id}`);

    if (response.data) {
      toast.success(intl.duplicateSuccess);
    }
  } catch (e) {
    const error = handleRegularCall(e, intl.networkError, intl.serverError);

    toast.error(error);
  }

  triggerDuplicateBusRouteFlag();
};

interface DashboardModalProps {
  children: React.ReactElement;
  onClick?: any;
  item?: string;
}

export const DuplicateModal: React.FC<DashboardModalProps> = ({
  children,
  onClick,
  item,
  ...rest
}) => {
  const {
    onActionProject,
    goGetProjects,
    onActionBusRoute,
    triggerDuplicateBusRouteFlag,
  } = useContext(DashboardContext);
  const intl = useIntl();

  const handleDuplicate = () => {
    onClick();
    if (item === 'project') {
      duplicateProject(onActionProject, goGetProjects, intl);
    } else if (item === 'busRoute') {
      duplicateBusRoute(onActionBusRoute, triggerDuplicateBusRouteFlag, intl);
    }
  };

  return (
    <SimpleModalContainer
      nested
      modal
      trigger={children}
      onOpen={handleDuplicate}
      {...rest}
    >
      {() => (
        <SimpleModalContent>
          <Loading />
        </SimpleModalContent>
      )}
    </SimpleModalContainer>
  );
};

export const SendNfrotaModal: React.FC<DashboardModalProps> = ({
  children,
  onClick,
  ...rest
}) => {
  const { onActionProject, goGetProjects } = useContext(DashboardContext);
  const intl = useIntl();

  const handleDuplicate = () => {
    onClick();
    sendToNFrota(onActionProject, goGetProjects, intl);
  };

  return (
    <SimpleModalContainer
      nested
      modal
      trigger={children}
      onOpen={handleDuplicate}
      {...rest}
    >
      {() => (
        <SimpleModalContent>
          <Loading />
        </SimpleModalContent>
      )}
    </SimpleModalContainer>
  );
};
