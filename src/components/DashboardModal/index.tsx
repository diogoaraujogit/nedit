import React, { useContext, useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import {
  defaultPanel,
  defaultProjectPanelsList,
} from '../../config/defaultItems';
import {
  busRouteModeOptions,
  colorOptions,
  prefixColorOptions,
  prefixOptions,
} from '../../config/options';
import { DashboardContext } from '../../contexts/DashboardContext';

import useIntl from '../../hooks/useIntl';
import api from '../../services/api';
import { PanelProps, OptionProps, ProjectProps } from '../../types';
import {
  convertCamelCaseArrayToSnakeCase,
  convertSnakeCaseArrayToCamelCase,
} from '../../utils/convertArrayForm';
import {
  getErrorMessage,
  handleMessageErrorCall,
  handleRegularCall,
} from '../../utils/handleError';
import { DeletePanelModal } from '../DashboardMinorModal';
import Loading from '../Loading';
import { ModalInput, ModalSelect } from '../ModalInputs';

import {
  AddItem,
  ModalBody,
  ModalButtons,
  ModalContainer,
  ModalContent,
  Modalfeedback,
  ModalHeader,
  ModalItem,
  ModalItemName,
  ModalItemProps,
  ModalItemsList,
  ModalName,
  PrimaryButton,
  SecondaryButton,
} from './styles';

interface DashboardModalProps {
  children: React.ReactElement;
  edit?: boolean;
  onOpen?: any;
}

const parseType = (value: unknown): string | number => {
  if (Number.isInteger(value)) {
    return Number(value);
  }

  return '';
};

const DashboardModalProjects: React.FC<DashboardModalProps> = ({
  children,
  edit = false,
  onOpen,
}) => {
  const {
    goGetProjects,
    onActionProject,
    setCurrentProject,
    // setOnActionProject,
  } = useContext(DashboardContext);

  const intl = useIntl();

  // const initalStates = {
  //   projectDescription: (edit && onActionProject?.description) || '',
  //   projectPanelsList:
  //     (edit && onActionProject?.panels) || defaultProjectPanelsList,
  // };

  const [projectDescription, setProjectDescription] = useState<string>('');
  const [projectPanelsList, setProjectPanelsList] = useState<PanelProps[]>(
    defaultProjectPanelsList,
  );

  const [canWork, setCanWork] = useState<boolean>(false);
  const [working, setWorking] = useState<boolean>(false);
  const [workMessage, setWorkMessage] = useState<string>('');
  const [backFormatOptions, setBackFormatOptions] = useState<OptionProps[]>([]);
  const [modalLoading, setModalLoading] = useState<boolean>(true);
  const [modalMessage, setModalMessage] = useState<string>('');
  const [workingProject, setWorkingProject] = useState<ProjectProps>({});

  const clearFields = () => {
    setWorking(false);
    setWorkMessage('');
    setProjectDescription('');
    setProjectPanelsList([{}]);
  };

  const createProject = async (close: any) => {
    setWorking(true);

    const panels = convertCamelCaseArrayToSnakeCase(projectPanelsList);

    try {
      const response = await api.post(`projects/panels`, {
        panels,
        project: {
          description: projectDescription,
        },
      });

      if (response.data) {
        toast.success(intl.createSuccess);
        setCurrentProject({});
        clearFields();
        goGetProjects();
        close();
      } else {
        const error = intl.serverError;
        toast.error(error);
        setWorkMessage(error);
      }
    } catch (e) {
      const message = getErrorMessage(e);
      const intlMessage = intl[message];
      const error = handleMessageErrorCall(
        e,
        intl.networkError,
        intlMessage,
        intl.serverError,
      );

      toast.error(error);
      setWorkMessage(error);
    }

    setWorking(false);
  };

  const splitPanelsByType = () => {
    const actualPanelsListIds = projectPanelsList.map(panel => panel.id);
    const originalPanelsListIds = workingProject?.panels?.map(
      panel => panel.id,
    );

    const newPanelsCamel = [...projectPanelsList].filter(panel => !panel.id);

    const editPanelsCamel = [...projectPanelsList].filter(panel =>
      originalPanelsListIds?.includes(panel.id),
    );

    const deletePanels = originalPanelsListIds?.filter(
      id => !actualPanelsListIds.includes(id),
    );

    const newPanels = convertCamelCaseArrayToSnakeCase(newPanelsCamel);
    const editPanels = convertCamelCaseArrayToSnakeCase(editPanelsCamel);

    return { newPanels, editPanels, deletePanels };
  };

  const editProject = async (close: any) => {
    setWorking(true);
    const { id } = workingProject;
    const { newPanels, editPanels, deletePanels } = splitPanelsByType();

    try {
      await api.put(`projects/panels/${id}`, {
        project: {
          description: projectDescription,
        },
        new_panels: newPanels,
        edit_panels: editPanels,
        delete_panels: deletePanels,
      });

      toast.success(intl.editSuccess);
      clearFields();
      setCurrentProject({});
      goGetProjects();
      close();
    } catch (e) {
      const message = getErrorMessage(e);
      const intlMessage = intl[message];
      const error = handleMessageErrorCall(
        e,
        intl.networkError,
        intlMessage,
        intl.serverError,
      );

      toast.error(error);
      setWorkMessage(error);
    }

    setWorking(false);
  };

  const handleAddPanelToProject = () => {
    const panelsAdresses = projectPanelsList.map(panel => Number(panel.order));

    const maxAdress = Number.isInteger(Math.max(...panelsAdresses))
      ? Math.max(...panelsAdresses)
      : 0;

    const newPanel: PanelProps = {
      ...defaultPanel,
      order: maxAdress + 1,
    };
    setProjectPanelsList([...projectPanelsList, newPanel]);
  };

  const handleWork = (close: any) => {
    if (edit) {
      editProject(close);
    } else {
      createProject(close);
    }
  };

  const handleFormChange = (
    value: unknown,
    prop: string,
    internalId: number,
  ) => {
    let newProjectPanelsList = [...projectPanelsList];

    newProjectPanelsList = newProjectPanelsList.map((panel, idx) => {
      if (idx === internalId) {
        const newPanel = { ...panel };

        newPanel[prop] =
          value || value === '0'
            ? Number(value) >= 0
              ? Number(value)
              : newPanel[prop] || ''
            : value;

        if (prop === 'prefix' && value === 0) {
          newPanel.prefixColor = 0;
        }

        if (prop === 'alignment') {
          newPanel.alignment = `${value}`;
        }

        return newPanel;
      }
      return panel;
    });

    // console.log(newProjectPanelsList);
    setProjectPanelsList(newProjectPanelsList);
  };

  const checkIfHasValidProps = (panel: PanelProps): boolean => {
    const { order, format, color, prefixColor, prefix, alignment } = panel;

    // console.log('Verificando paienl');
    // console.log(panel);

    const validProps = [order, format, color, prefix].filter(prop =>
      Number.isInteger(prop),
    );

    const validPrefixColor =
      prefix === 0 ? true : Number.isInteger(prefixColor) && prefixColor !== 0;

    if (validProps.length !== 4 || !validPrefixColor || !alignment) {
      return false;
    }
    return true;
  };

  const handleCanWork = () => {
    // console.log('Verificando paienl');
    // console.log(projectPanelsList);
    if (projectDescription) {
      const notReadyPanels = [...projectPanelsList].filter(
        panel =>
          Object.values(panel).length !== (panel.id ? 9 : 6) ||
          !checkIfHasValidProps(panel),
      );

      if (notReadyPanels.length) {
        setCanWork(false);
      } else {
        setCanWork(true);
      }
    } else {
      setCanWork(false);
    }
  };

  useEffect(() => {
    handleCanWork();
  }, [projectDescription, projectPanelsList]);

  const getFormatOptions = async () => {
    setModalLoading(true);
    setModalMessage('');

    try {
      const responseFormats = await api.get('panel-formats');
      const responseProject = edit
        ? await api.get(`/projects/${onActionProject?.id}`)
        : responseFormats;

      if (responseFormats.data) {
        setBackFormatOptions(responseFormats.data);
      }

      if (edit && responseProject?.data) {
        const camelCaseArray = convertSnakeCaseArrayToCamelCase(
          responseProject.data.panels,
        );
        setWorkingProject({ ...responseProject.data, panels: camelCaseArray });
        setProjectPanelsList(camelCaseArray || defaultProjectPanelsList);
        setProjectDescription(responseProject?.data?.description || '');
      }
    } catch (e) {
      const error = handleRegularCall(e, intl.networkError, intl.serverError);

      toast.error(error);
      setModalMessage(error);
    }

    setModalLoading(false);
  };

  const handleOpen = () => {
    getFormatOptions();
    if (onOpen) {
      onOpen();
    }
  };

  const handleClose = () => {
    clearFields();
  };

  return (
    <ModalContainer
      closeOnDocumentClick={false}
      onOpen={handleOpen}
      onClose={handleClose}
      nested
      modal
      trigger={children}
    >
      {(close: any) => (
        <ModalContent>
          <ModalHeader>
            <h2>{edit ? intl.editProject : intl.createProject}</h2>
            <p>{intl.createProjectDescription}</p>
            <span>{workMessage}</span>
          </ModalHeader>
          <ModalBody>
            {modalLoading || modalMessage ? (
              <Modalfeedback>
                {modalLoading ? <Loading /> : <p>{modalMessage}</p>}
              </Modalfeedback>
            ) : (
              <>
                <ModalName>
                  <ModalInput
                    label={intl.projectName}
                    value={projectDescription}
                    inputProps={{ maxLength: 40 }}
                    error={!projectDescription}
                    onChange={e => setProjectDescription(e.target.value)}
                  />
                </ModalName>
                <ModalItemsList>
                  {projectPanelsList.map((panel, idx) => {
                    const {
                      order,
                      format,
                      alignment,
                      color,
                      prefix,
                      prefixColor,
                    } = panel;
                    const canDelete = projectPanelsList.length > 1;
                    const internalId = idx;

                    return (
                      <ModalItem key={internalId}>
                        <ModalItemName>
                          <h2>
                            {intl.panelModal} {internalId + 1}
                          </h2>
                          {canDelete && (
                            <DeletePanelModal
                              projectPanelsList={projectPanelsList}
                              setProjectPanelsList={setProjectPanelsList}
                              internalId={internalId}
                            />
                          )}
                        </ModalItemName>
                        <ModalItemProps>
                          <ModalInput
                            label={intl.address}
                            value={order}
                            error={order === ''}
                            inputProps={{
                              inputMode: 'numeric',
                              pattern: '[0-9]*',
                              maxLength: 5,
                            }}
                            onChange={e =>
                              handleFormChange(
                                e.target.value,
                                'order',
                                internalId,
                              )
                            }
                          />
                          <ModalSelect
                            options={backFormatOptions}
                            label={intl.format}
                            value={parseType(format)}
                            error={parseType(format) === ''}
                            onChange={e =>
                              handleFormChange(
                                e.target.value,
                                'format',
                                internalId,
                              )
                            }
                          />

                          <ModalInput
                            label={intl.position}
                            value={alignment}
                            error={!alignment}
                            onChange={e =>
                              handleFormChange(
                                e.target.value,
                                'alignment',
                                internalId,
                              )
                            }
                          />

                          <ModalSelect
                            options={colorOptions}
                            label={intl.color}
                            value={parseType(color)}
                            error={parseType(color) === ''}
                            onChange={e =>
                              handleFormChange(
                                e.target.value,
                                'color',
                                internalId,
                              )
                            }
                          />
                          <ModalSelect
                            options={prefixOptions}
                            label={intl.prefix}
                            value={parseType(prefix)}
                            error={parseType(prefix) === ''}
                            onChange={e =>
                              handleFormChange(
                                e.target.value,
                                'prefix',
                                internalId,
                              )
                            }
                          />
                          <ModalSelect
                            options={prefixColorOptions}
                            label={intl.prefixColor}
                            value={parseType(prefixColor)}
                            disabled={prefix === 0}
                            error={
                              prefix !== 0 &&
                              (parseType(prefixColor) === '' ||
                                parseType(prefixColor) === 0)
                            }
                            onChange={e =>
                              handleFormChange(
                                e.target.value,
                                'prefixColor',
                                internalId,
                              )
                            }
                          />
                        </ModalItemProps>
                      </ModalItem>
                    );
                  })}
                </ModalItemsList>
              </>
            )}
          </ModalBody>
          <AddItem>
            <button type="button" onClick={() => handleAddPanelToProject()}>
              <MdAdd />
              <span>{intl.addPanel}</span>
            </button>
          </AddItem>
          <ModalButtons>
            <SecondaryButton onClick={() => close()}>
              {intl.exit}
            </SecondaryButton>
            <PrimaryButton
              disabled={working || !canWork}
              onClick={() => handleWork(close)}
            >
              {edit ? intl.save : intl.create} {intl.project}
              {working && <Loading />}
            </PrimaryButton>
          </ModalButtons>
        </ModalContent>
      )}
    </ModalContainer>
  );
};

// ROTEIRO

const DashboardModalBusRoutes: React.FC<DashboardModalProps> = ({
  children,
  edit = false,
  ...rest
}) => {
  const {
    triggerCreateBusRouteFlag,
    onActionBusRoute,
    currentProject,
    setCurrentBusRoute,
    triggerEditBusRouteFlag,
    extraNumber,
    normalNumber,
  } = useContext(DashboardContext);
  const intl = useIntl();
  const initalStates = {
    busRouteDescription: (edit && onActionBusRoute?.description) || '',
    busRouteOrder: (edit && onActionBusRoute?.order) || normalNumber,
    busRouteMode: (edit && onActionBusRoute?.mode) || 2,
  };

  const [busRouteDescription, setBusRouteDescription] = useState<string>(
    initalStates.busRouteDescription,
  );
  const [busRouteOrder, setBusRouteOrder] = useState<number | string>(
    initalStates.busRouteOrder,
  );
  const [busRouteMode, setBusRouteMode] = useState<unknown>(
    initalStates.busRouteMode,
  );

  const [canWork, setCanWork] = useState<boolean>(false);
  const [working, setWorking] = useState<boolean>(false);
  const [workMessage, setWorkMessage] = useState<string>('');

  const clearFields = () => {
    setWorking(false);
    setWorkMessage('');
    setBusRouteDescription('');
    setBusRouteOrder(initalStates.busRouteOrder);
    setBusRouteMode(initalStates.busRouteMode);
  };

  const createBusRoute = async (close: any) => {
    setWorking(true);

    try {
      const response = await api.post(`scripts`, {
        description: busRouteDescription,
        number: busRouteOrder,
        script_mode_id: busRouteMode,
        project_id: currentProject.id,
      });

      if (response.data) {
        toast.success(intl.createSuccess);

        setCurrentBusRoute({});
        triggerCreateBusRouteFlag();
        clearFields();
        close();
      } else {
        const error = intl.serverError;
        toast.error(error);
        setWorkMessage(error);
      }
    } catch (e) {
      const message = getErrorMessage(e);
      const intlMessage = intl[message];
      const error = handleMessageErrorCall(
        e,
        intl.networkError,
        intlMessage,
        intl.serverError,
      );

      toast.error(error);
      setWorkMessage(error);
    }

    setWorking(false);
  };

  const editBusRoute = async (close: any) => {
    setWorking(true);
    const { id } = onActionBusRoute;

    try {
      await api.put(`scripts/${id}`, {
        description: busRouteDescription,
        number: busRouteOrder,
        script_mode_id: busRouteMode,
        project_id: onActionBusRoute.projectId,
      });

      toast.success(intl.editSuccess);
      clearFields();
      setCurrentBusRoute({});
      triggerEditBusRouteFlag();
      close();
    } catch (e) {
      const message = getErrorMessage(e);
      const intlMessage = intl[message];
      const error = handleMessageErrorCall(
        e,
        intl.networkError,
        intlMessage,
        intl.serverError,
      );

      toast.error(error);
      setWorkMessage(error);
    }

    setWorking(false);
  };

  const handleWork = (close: any) => {
    if (edit) {
      editBusRoute(close);
    } else {
      createBusRoute(close);
    }
  };

  const handleCanWork = () => {
    if (
      !busRouteDescription ||
      !Number.isInteger(busRouteOrder) ||
      !Number.isInteger(busRouteMode)
    ) {
      setCanWork(false);
    } else {
      setCanWork(true);
    }
  };

  useEffect(() => {
    handleCanWork();
  }, [busRouteDescription, busRouteMode, busRouteOrder]);

  useEffect(() => {
    if (edit) {
      if (initalStates.busRouteMode === busRouteMode) {
        setBusRouteOrder(initalStates.busRouteOrder);
      } else if (initalStates.busRouteMode === 3) {
        setBusRouteOrder(normalNumber);
      } else if (busRouteMode === 3) {
        setBusRouteOrder(extraNumber);
      } else {
        setBusRouteOrder(initalStates.busRouteOrder);
      }
    } else if (busRouteMode === 3) {
      setBusRouteOrder(extraNumber);
    } else {
      setBusRouteOrder(normalNumber);
    }

    // Se for criar, usar acima. Se for editar, tem que ver qual é o mode
  }, [busRouteMode, extraNumber, normalNumber]);

  const handleClose = () => {
    clearFields();
  };

  return (
    <ModalContainer
      closeOnDocumentClick={false}
      nested
      modal
      onClose={handleClose}
      trigger={children}
      {...rest}
    >
      {(close: any) => (
        <ModalContent>
          <ModalHeader>
            <h2>
              {edit ? intl.edit : intl.createModal} {intl.busRouteModal}
            </h2>
            <p>{intl.createBusRouteDescription}</p>
            <span>{workMessage}</span>
          </ModalHeader>
          <ModalBody>
            <ModalItemsList>
              <ModalItem>
                <ModalItemName>
                  <h2>{intl.busRouteModal}</h2>
                </ModalItemName>
                <ModalItemProps>
                  <ModalInput
                    label={intl.busNumber}
                    value={busRouteOrder}
                    inputProps={{
                      inputMode: 'numeric',
                      pattern: '[0-9]*',
                      maxLength: 5,
                    }}
                    onChange={e =>
                      setBusRouteOrder(
                        e.target.value
                          ? Number(e.target.value) > 0
                            ? Number(e.target.value)
                            : busRouteOrder
                          : e.target.value,
                      )
                    }
                  />
                  <ModalInput
                    label={intl.busName}
                    value={busRouteDescription}
                    inputProps={{ maxLength: 40 }}
                    onChange={e => setBusRouteDescription(e.target.value)}
                  />
                  <ModalSelect
                    options={busRouteModeOptions}
                    label={intl.busMode}
                    value={parseType(busRouteMode)}
                    onChange={e =>
                      setBusRouteMode(
                        Number.isInteger(e.target.value)
                          ? Number(e.target.value)
                          : e.target.value,
                      )
                    }
                  />
                </ModalItemProps>
              </ModalItem>
            </ModalItemsList>
          </ModalBody>

          <ModalButtons>
            <SecondaryButton onClick={() => close()}>
              {intl.exit}
            </SecondaryButton>
            <PrimaryButton
              disabled={working || !canWork}
              onClick={() => handleWork(close)}
            >
              {edit ? intl.save : intl.create} {intl.busRoute}
              {working && <Loading />}
            </PrimaryButton>
          </ModalButtons>
        </ModalContent>
      )}
    </ModalContainer>
  );
};

export { DashboardModalProjects, DashboardModalBusRoutes };
