import React, { useContext, useEffect, useState } from 'react';
// import { HiOutlineRefresh } from 'react-icons/hi';
import { MdSearch, MdOutlineFileDownload } from 'react-icons/md';
import { toast } from 'react-toastify';
import readXlsxFile from 'read-excel-file';
import {
  Modalfeedback,
  PrimaryButton,
  SecondaryButton,
} from '../DashboardModal/styles';

import {
  ExportBody,
  ExportFooter,
  ExportHeader,
  ExportList,
  PopupContainer,
  PopupContent,
  ExportActions,
  FormatSelector,
  ExportProjectCard,
  ImportContainer,
  ExtraImport,
  DownloadTemplate,
  ExportMessage,
} from './styles';

import { ModalFile, ModalInput, ModalSelect } from '../ModalInputs';
import { exportOptions, importOptions } from '../../config/options';
import { Checkbox } from '../Checkbox';
import {
  FilterContainer,
  InputSearch,
  LoadingContainer,
  MessageContainer,
} from '../../pages/Dashboard/Projects/styles';
import { OptionProps, ProjectProps } from '../../types';
import api from '../../services/api';
import Loading from '../Loading';
import useIntl from '../../hooks/useIntl';
import { convertSnakeCaseProjectsArrayToCamelCase } from '../../utils/convertArrayForm';
import {
  getErrorMessage,
  handleMessageErrorCall,
  handleRegularCall,
} from '../../utils/handleError';
import { DashboardContext } from '../../contexts/DashboardContext';

interface ExportModalProps {
  children: React.ReactElement;
}

const ExportModal: React.FC<ExportModalProps> = ({ children }) => {
  const [format, setFormat] = useState<number>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [allProjects, setAllProjects] = useState<ProjectProps[]>([]);
  const [projectsArray, setProjectsArray] = useState<ProjectProps[]>([]);
  const [projectsMessage, setProjectsMessage] = useState<string>('');
  const [projectsLoading, setProjectsLoading] = useState<boolean>(true);
  const [selectedProjects, setSelectedProjects] = useState<number[]>([]);
  const [canExport, setCanExport] = useState<boolean>(false);
  const [exporting, setExporting] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const intl = useIntl();

  const handleCancel = (close: () => void) => {
    close();
  };

  const handleChange = (value: number) => {
    setFormat(value);
  };

  const getProjects = async () => {
    setProjectsLoading(true);
    setProjectsMessage('');

    try {
      const response = await api.get('/projects');

      if (response.data) {
        const parsedProjects = convertSnakeCaseProjectsArrayToCamelCase(
          response.data,
        );
        setAllProjects(parsedProjects);
        setProjectsArray(parsedProjects);
      }
    } catch (e) {
      const error = handleRegularCall(e, intl.networkError, intl.serverError);

      toast.error(error);
      setProjectsMessage(error);
    }

    setProjectsLoading(false);
  };

  const getIdFromString = (stringJson: string): number => {
    const parsedObject = JSON.parse(stringJson);

    const projectId = parsedObject?.project_id ?? 0;

    return projectId;
  };

  const getProjectById = (id: number) => {
    const requiredProject = allProjects.find(project => project.id === id);

    return requiredProject;
  };

  const exportProjects = async (close: () => void) => {
    setExporting(true);
    setModalMessage('');

    try {
      const responses = await Promise.allSettled(
        selectedProjects.map(item =>
          api.post(
            '/exports',
            {
              project_id: item,
              file_type: format === 1 ? 'isi' : 'pdf',
            },
            { responseType: 'blob' },
          ),
        ),
      );
      responses.forEach((response: any) => {
        if (response?.value?.data) {
          const url = window.URL.createObjectURL(
            new Blob([response?.value?.data]),
          );
          const link = document.createElement('a');

          const content =
            response?.value?.headers['content-disposition']?.split('filename=');
          const fileName = content[1] ?? '';

          link.href = url;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();
          toast.success(`${fileName}: ${intl.exportSuccess}`);
        } else {
          const requestData = response?.reason?.config?.data;
          const projectId = getIdFromString(requestData);
          const project = getProjectById(projectId);
          const fileName = project?.description ?? '';
          const error = `${fileName}: ${intl.serverError}`;
          setModalMessage(error);
          toast.error(error);
        }
      });

      const rejectedRequests = responses.filter(
        response => response.status !== 'fulfilled',
      );

      if (!rejectedRequests.length) {
        close();
      }
    } catch (e) {
      const error = handleRegularCall(e, intl.networkError, intl.serverError);

      toast.error(error);
    }

    setExporting(false);
  };

  const handleSearch = () => {
    const searchItemsArray = [...allProjects].filter(
      project =>
        project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.id?.toString().includes(searchTerm),
    );

    setProjectsArray(searchItemsArray);
  };

  const emptyProjectsArray = () => {
    if (!projectsArray.length) {
      setProjectsMessage(intl.noProjectFound);
    } else {
      setProjectsMessage('');
    }
  };

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedProjects([...selectedProjects, Number(event.target.name)]);
    } else {
      setSelectedProjects(
        selectedProjects.filter(
          project => project !== Number(event.target.name),
        ),
      );
    }
  };

  const handleClickProject = (checked: boolean, name: number) => {
    if (!checked) {
      setSelectedProjects([...selectedProjects, Number(name)]);
    } else {
      setSelectedProjects(
        selectedProjects.filter(project => project !== Number(name)),
      );
    }
  };

  const handleClickProjectAll = (checked: boolean) => {
    const projectsId = projectsArray.map(project => Number(project.id));

    if (!checked) {
      setSelectedProjects([...projectsId]);
    } else {
      setSelectedProjects([]);
    }
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const projectsId = projectsArray.map(project => Number(project.id));

    if (event.target.checked) {
      setSelectedProjects([...projectsId]);
    } else {
      setSelectedProjects([]);
    }
  };

  const handleAllChecked = () => {
    const projectsId = allProjects.map(project => Number(project.id));

    const isAllChecked =
      projectsId.filter(project => !selectedProjects.includes(project))
        .length === 0;

    if (isAllChecked) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  };

  const handleExport = (close: () => void) => {
    exportProjects(close);
  };

  const handleCanExport = () => {
    if (format && selectedProjects.length) {
      setCanExport(true);
    } else {
      setCanExport(false);
    }
  };

  const clearAllFields = () => {
    setSelectedProjects([]);
    setSearchTerm('');
    setModalMessage('');
  };

  const handleOpenModal = () => {
    clearAllFields();
    getProjects();
  };

  const handleCloseModal = () => {
    clearAllFields();
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  useEffect(() => {
    handleCanExport();
  }, [selectedProjects, format]);

  useEffect(() => {
    emptyProjectsArray();
  }, [projectsArray]);

  useEffect(() => {
    handleAllChecked();
  }, [selectedProjects, allProjects]);

  return (
    <PopupContainer
      trigger={children}
      modal
      closeOnDocumentClick={false}
      onOpen={handleOpenModal}
      onClose={handleCloseModal}
    >
      {(close: () => void) => (
        <PopupContent>
          <ExportHeader>
            <h2>{intl.exportProject}</h2>
            <p>{intl.exportProjectDescription}</p>
          </ExportHeader>
          <ExportMessage>{modalMessage}</ExportMessage>
          <FilterContainer>
            <InputSearch>
              <input
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <MdSearch />
            </InputSearch>
          </FilterContainer>
          <ExportBody>
            {projectsLoading ? (
              <LoadingContainer>
                <Loading />
              </LoadingContainer>
            ) : projectsMessage ? (
              <MessageContainer>{projectsMessage}</MessageContainer>
            ) : (
              <>
                <ExportList className="fixed">
                  <ExportProjectCard
                    onClick={() => handleClickProjectAll(allChecked)}
                  >
                    <div>
                      <Checkbox
                        checked={allChecked}
                        onChange={handleSelectAll}
                      />
                    </div>
                    <h4>-</h4>
                    <h4 id="name">Selecionar todos</h4>
                  </ExportProjectCard>
                </ExportList>
                <ExportList>
                  {projectsArray.map(project => {
                    const id = project?.id || 0;
                    const name = project?.description || '?';
                    const routes = project?.totalPanels || '0';

                    const key = allProjects.indexOf(project) + 1;
                    const checked = selectedProjects.includes(Number(id));

                    return (
                      <ExportProjectCard
                        key={id}
                        onClick={() => handleClickProject(checked, id)}
                      >
                        <div>
                          <Checkbox
                            checked={checked}
                            onChange={handleSelect}
                            name={`${id}`}
                          />
                        </div>
                        <h4>{key}</h4>
                        <h4 id="name">{name}</h4>
                        <h4>{`${routes} ${intl.panels}`}</h4>
                        <div>{/* <HiOutlineRefresh /> */}</div>
                      </ExportProjectCard>
                    );
                  })}
                </ExportList>
              </>
            )}
          </ExportBody>
          <ExportFooter>
            <FormatSelector>
              <ModalSelect
                options={exportOptions}
                label={intl.fileExtension}
                value={format}
                onChange={e => handleChange(Number(e.target.value))}
              />
            </FormatSelector>
            <ExportActions>
              <SecondaryButton onClick={() => handleCancel(close)}>
                {intl.cancel}
              </SecondaryButton>
              <PrimaryButton
                disabled={!canExport || exporting}
                onClick={() => handleExport(close)}
              >
                {intl.exportModal}
              </PrimaryButton>
            </ExportActions>
          </ExportFooter>
        </PopupContent>
      )}
    </PopupContainer>
  );
};

const ImportModal: React.FC<ExportModalProps> = ({ children }) => {
  const { goGetProjects } = useContext(DashboardContext);

  const [fileExtension, setFileExtension] = useState<unknown>();
  const [extension, setExtension] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<unknown>();
  const [canImport, setCanImport] = useState<boolean>(false);
  const [importing, setImporting] = useState(false);
  const [name, setName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [panelsList, setPanelsList] = useState<any[]>([]);
  const [backFormatOptions, setBackFormatOptions] = useState<OptionProps[]>([]);
  const [modalLoading, setModalLoading] = useState<boolean>(true);
  const [modalMessage, setModalMessage] = useState<string>('');

  const intl = useIntl();

  const handleCancel = (close: () => void) => {
    close();
  };

  const handleChangeFormat = (value: unknown) => {
    setFileExtension(value);
  };

  const handleChangeFile = (e: any) => {
    const file = e?.target?.files && e.target.files[0];
    const fileName = e?.target?.value || '';

    setSelectedFile(file);
    setName(fileName);
  };

  const importProjects = async (close: () => void) => {
    setImporting(true);
    const panelsId = panelsList.map(panel => panel?.format);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    const formData = new FormData();
    formData.append('file', selectedFile as Blob);
    formData.append('panels', panelsId.toString());
    formData.append('project_name', projectDescription);

    try {
      const response = await api.post('/import/excel', formData, config);

      if (response.data) {
        toast.success(intl.importSuccess);
        goGetProjects();
        close();
      }
    } catch (e: any) {
      const message = getErrorMessage(e);
      const intlMessage = intl[message];
      const error = handleMessageErrorCall(
        e,
        intl.networkError,
        intlMessage,
        intl.serverError,
      );

      toast.error(error);
    }

    setImporting(false);
  };

  const importXmlProject = async (close: () => void) => {
    setImporting(true);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    const formData = new FormData();
    formData.append('file', selectedFile as Blob);

    try {
      const response = await api.post('/import/xml', formData, config);

      if (response.data) {
        toast.success(intl.importSuccess);
        goGetProjects();

        close();
      }
    } catch (e: any) {
      const message = getErrorMessage(e);
      const intlMessage = intl[message];
      const error = handleMessageErrorCall(
        e,
        intl.networkError,
        intlMessage,
        intl.serverError,
      );

      toast.error(error);
    }

    setImporting(false);
  };

  const handleImport = (close: () => void) => {
    if (fileExtension === 1) {
      importXmlProject(close);
    } else if (fileExtension === 2) {
      importProjects(close);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setName('');
  };

  const clearFields = () => {
    setFileExtension('');
    clearFile();
  };

  const handleCanExport = () => {
    if (fileExtension && selectedFile && !importing) {
      if (fileExtension === 1) {
        setCanImport(true);
      } else if (fileExtension === 2) {
        const copyPanelsList = [...panelsList];
        const unfilledFormats = copyPanelsList.filter(
          panel => !Number.isInteger(panel.format),
        );

        if (projectDescription && unfilledFormats.length === 0) {
          setCanImport(true);
        } else {
          setCanImport(false);
        }
      }
    } else {
      setCanImport(false);
    }
  };

  const handleExtension = () => {
    const currentOption = importOptions.find(
      option => option.id === fileExtension,
    );

    if (currentOption?.extension) {
      setExtension(currentOption.extension);
    }
  };

  const countFormats = () => {
    readXlsxFile(selectedFile as File).then(rows => {
      const selectedRow = rows[1];
      const nullCells = selectedRow.filter(cell => cell === null);
      const panels = nullCells.length + 1;

      handleAddPanelToProject(panels);
    });
  };

  const parseType = (value: unknown): string | number => {
    if (Number.isInteger(value)) {
      return Number(value);
    }

    return '';
  };

  const handleAddPanelToProject = (panels: number) => {
    const newPanel = {
      format: '',
    };
    const newPanels = Array(panels).fill(newPanel);

    setPanelsList([...newPanels]);
  };

  const handleFormChange = (
    value: unknown,
    prop: string,
    internalId: number,
  ) => {
    let newProjectPanelsList = [...panelsList];

    newProjectPanelsList = newProjectPanelsList.map((panel, idx) => {
      if (idx === internalId) {
        const newPanel = { ...panel };

        newPanel[prop] =
          value || value === '0'
            ? Number(value) >= 0
              ? Number(value)
              : newPanel[prop] || ''
            : value;

        return newPanel;
      }
      return panel;
    });
    setPanelsList(newProjectPanelsList);
  };

  const getFormatOptions = async () => {
    setModalLoading(true);
    setModalMessage('');

    try {
      const response = await api.get('panel-formats');

      if (response.data) {
        setBackFormatOptions(response.data);
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
  };

  const handleClose = () => {
    clearFields();
  };

  useEffect(() => {
    handleCanExport();
  }, [selectedFile, fileExtension, projectDescription, panelsList]);

  useEffect(() => {
    clearFile();
    handleExtension();
  }, [fileExtension]);

  useEffect(() => {
    if (fileExtension === 2) {
      countFormats();
    }
  }, [selectedFile]);

  return (
    <ImportContainer
      trigger={children}
      modal
      closeOnDocumentClick={false}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      {(close: () => void) => (
        <PopupContent>
          <ExportHeader>
            <h2>{intl.importProject}</h2>
            <p>{intl.importProjectDescription}</p>
          </ExportHeader>

          <FormatSelector>
            {modalLoading || modalMessage ? (
              <Modalfeedback>
                {modalLoading ? <Loading /> : <p>{modalMessage}</p>}
              </Modalfeedback>
            ) : (
              <>
                <ModalSelect
                  options={importOptions}
                  label={intl.fileExtension}
                  value={fileExtension}
                  onChange={e => handleChangeFormat(e.target.value)}
                />
                {fileExtension && (
                  <ModalFile
                    name={name}
                    label={intl.selectFile}
                    value={selectedFile}
                    accept={`${extension}`}
                    onChange={e => handleChangeFile(e)}
                  />
                )}
                {fileExtension === 2 && (
                  <ExtraImport>
                    <ModalInput
                      label={intl.projectName}
                      value={projectDescription}
                      inputProps={{ maxLength: 40 }}
                      onChange={e => setProjectDescription(e.target.value)}
                    />
                    {panelsList.map((panel, idx) => {
                      const key = panel;
                      const internalId = idx;
                      const { format } = panel;
                      return (
                        <ModalSelect
                          key={key}
                          options={backFormatOptions}
                          label={intl.format}
                          value={parseType(format)}
                          onChange={e =>
                            handleFormChange(
                              e.target.value,
                              'format',
                              internalId,
                            )
                          }
                        />
                      );
                    })}
                  </ExtraImport>
                )}
              </>
            )}
          </FormatSelector>
          <DownloadTemplate>
            <a
              href={process.env.REACT_APP_IMPORT_MODEL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button">
                <MdOutlineFileDownload />
                <p>{intl.downloadTemplate}</p>
              </button>
            </a>
          </DownloadTemplate>
          <ExportActions>
            <SecondaryButton onClick={() => handleCancel(close)}>
              {intl.cancel}
            </SecondaryButton>
            <PrimaryButton
              disabled={!canImport || importing}
              onClick={() => handleImport(close)}
            >
              {intl.importModal}
              {importing && <Loading />}
            </PrimaryButton>
          </ExportActions>
        </PopupContent>
      )}
    </ImportContainer>
  );
};

export { ExportModal, ImportModal };
