import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import {
  BusRouteProps,
  OpenDismissModalProps,
  PanelProps,
  ProjectProps,
} from '../types';

interface DashboardContextProps {
  currentProject: ProjectProps;
  onActionProject: ProjectProps;
  currentBusRoute: BusRouteProps;
  onActionBusRoute: BusRouteProps;
  currentPanel: PanelProps;
  currentEditor: PanelProps;
  setCurrentProject: Dispatch<SetStateAction<ProjectProps>>;
  setOnActionProject: Dispatch<SetStateAction<ProjectProps>>;
  setCurrentBusRoute: Dispatch<SetStateAction<BusRouteProps>>;
  setOnActionBusRoute: Dispatch<SetStateAction<BusRouteProps>>;
  setCurrentPanel: Dispatch<SetStateAction<PanelProps>>;
  setCurrentEditor: Dispatch<SetStateAction<PanelProps>>;
  triggerGetProjects: boolean;
  goGetProjects: () => void;
  createBusRouteFlag: boolean;
  triggerCreateBusRouteFlag: () => void;
  editBusRouteFlag: boolean;
  triggerEditBusRouteFlag: () => void;
  duplicateBusRouteFlag: boolean;
  triggerDuplicateBusRouteFlag: () => void;
  deleteBusRouteFlag: boolean;
  triggerDeleteBusRouteFlag: () => void;
  modeFilter: number | undefined;
  setModeFilter: Dispatch<SetStateAction<number | undefined>>;
  normalNumber: number;
  setNormalNumber: Dispatch<SetStateAction<number>>;
  extraNumber: number;
  setExtraNumber: Dispatch<SetStateAction<number>>;
  openDismissModal: OpenDismissModalProps;
  setOpenDismissModal: Dispatch<SetStateAction<OpenDismissModalProps>>;
  hasChangeOnEditor: boolean;
  setHasChangeOnEditor: Dispatch<SetStateAction<boolean>>;
}

const DashboardContext = createContext<DashboardContextProps>(
  {} as DashboardContextProps,
);

const DashboardProvider: React.FC = ({ children }) => {
  // PROJECTS STATES
  const [currentProject, setCurrentProject] = useState<ProjectProps>({});
  const [onActionProject, setOnActionProject] = useState<ProjectProps>({});
  const [triggerGetProjects, setTriggerGetProjects] = useState<boolean>(false);

  // BUS ROUTE STATES
  const [currentBusRoute, setCurrentBusRoute] = useState<BusRouteProps>({});
  const [onActionBusRoute, setOnActionBusRoute] = useState<BusRouteProps>({});
  const [createBusRouteFlag, setCreateBusRouteFlag] = useState<boolean>(false);
  const [editBusRouteFlag, setEditBusRouteFlag] = useState<boolean>(false);
  const [duplicateBusRouteFlag, setDuplicateBusRouteFlag] =
    useState<boolean>(false);
  const [deleteBusRouteFlag, setDeleteBusRouteFlag] = useState<boolean>(false);
  const [modeFilter, setModeFilter] = useState<number | undefined>();
  const [extraNumber, setExtraNumber] = useState<number>(1);
  const [normalNumber, setNormalNumber] = useState<number>(1);

  // PANELS STATES
  const [currentPanel, setCurrentPanel] = useState<PanelProps>({});

  // EDITOR STATES
  const [currentEditor, setCurrentEditor] = useState<PanelProps>({});
  const [hasChangeOnEditor, setHasChangeOnEditor] = useState(false);
  const [openDismissModal, setOpenDismissModal] =
    useState<OpenDismissModalProps>({
      status: false,
      action: () => toast.error('Erro inesperado'),
    });

  // PROJECTS FLAG TRIGGERS
  const goGetProjects = () => setTriggerGetProjects(!triggerGetProjects);

  // BUS ROUTE FLAG TRIGGERS
  const triggerCreateBusRouteFlag = () =>
    setCreateBusRouteFlag(!createBusRouteFlag);
  const triggerEditBusRouteFlag = () => setEditBusRouteFlag(!editBusRouteFlag);
  const triggerDuplicateBusRouteFlag = () =>
    setDuplicateBusRouteFlag(!duplicateBusRouteFlag);
  const triggerDeleteBusRouteFlag = () =>
    setDeleteBusRouteFlag(!deleteBusRouteFlag);

  return (
    <DashboardContext.Provider
      value={{
        currentProject,
        setCurrentProject,
        onActionProject,
        setOnActionProject,
        currentBusRoute,
        setCurrentBusRoute,
        onActionBusRoute,
        setOnActionBusRoute,
        currentPanel,
        setCurrentPanel,
        triggerGetProjects,
        goGetProjects,
        createBusRouteFlag,
        triggerCreateBusRouteFlag,
        editBusRouteFlag,
        triggerEditBusRouteFlag,
        duplicateBusRouteFlag,
        triggerDuplicateBusRouteFlag,
        deleteBusRouteFlag,
        triggerDeleteBusRouteFlag,
        modeFilter,
        setModeFilter,
        currentEditor,
        setCurrentEditor,
        normalNumber,
        setNormalNumber,
        extraNumber,
        setExtraNumber,
        openDismissModal,
        setOpenDismissModal,
        hasChangeOnEditor,
        setHasChangeOnEditor,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardProvider };
