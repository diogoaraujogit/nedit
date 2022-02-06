import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineProject } from 'react-icons/ai';
import {
  MdAdd,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdSearch,
} from 'react-icons/md';
// import { HiOutlineRefresh } from 'react-icons/hi';
import { toast } from 'react-toastify';
import GridItem from '../../../components/GridItem';
import Loading from '../../../components/Loading';
import api from '../../../services/api';

import {
  Container,
  FilterContainer,
  FloatButton,
  FloatCollapse,
  InputSearch,
  LoadingContainer,
  MessageContainer,
  ProjectCard,
  ProjectsBody,
  ProjectsList,
} from './styles';

import { DashboardContext } from '../../../contexts/DashboardContext';
import { ProjectProps } from '../../../types';
import { DropdownMenuProject } from '../../../components/DropdownMenu';
import { DashboardModalProjects } from '../../../components/DashboardModal';
import { LayoutContext } from '../../../contexts/LayoutContext';
import useIntl from '../../../hooks/useIntl';
import { convertSnakeCaseProjectsArrayToCamelCase } from '../../../utils/convertArrayForm';
import { handleRegularCall } from '../../../utils/handleError';

const Projects: React.FC = () => {
  // CONTEXT
  const intl = useIntl();
  const {
    currentProject,
    setCurrentProject,
    triggerGetProjects,
    setCurrentBusRoute,
    setOpenDismissModal,
    hasChangeOnEditor,
  } = useContext(DashboardContext);

  const { triggerCollapse, isCollapsed } = useContext(LayoutContext);

  // INNER STATES
  const [allProjects, setAllProjects] = useState<ProjectProps[]>([]);
  const [projectsArray, setProjectsArray] = useState<ProjectProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [projectsMessage, setProjectsMessage] = useState<string>('');
  const [projectsLoading, setProjectsLoading] = useState<boolean>(true);

  // API CALLS
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

  // COMPONENT FUNCTIONS

  const projectSelection = (project: ProjectProps) => {
    setCurrentProject(project);
    setCurrentBusRoute({});
  };

  const handleProjectSelection = (project: ProjectProps) => {
    if (hasChangeOnEditor) {
      setOpenDismissModal({
        status: true,
        action: () => projectSelection(project),
      });
    } else {
      projectSelection(project);
    }
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

  // COMPONENT SIDE EFFECTS
  useEffect(() => {
    getProjects();
  }, [triggerGetProjects]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  useEffect(() => {
    emptyProjectsArray();
  }, [projectsArray]);

  return (
    <GridItem icon={AiOutlineProject} isItemCollapsed={isCollapsed}>
      <Container>
        <FilterContainer>
          <InputSearch>
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            {!isCollapsed && <MdSearch />}
          </InputSearch>
        </FilterContainer>
        <ProjectsBody>
          {projectsLoading ? (
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          ) : projectsMessage ? (
            <MessageContainer>{projectsMessage}</MessageContainer>
          ) : (
            <ProjectsList>
              {projectsArray.map(project => {
                const id = project?.id || '-';
                const name = project?.description || '?';
                const routes = project?.totalPanels || '0';
                const key = allProjects.indexOf(project) + 1;

                // const nfrotaStatus = project?.nfrotaStatus;

                return (
                  <ProjectCard
                    key={id}
                    onClick={() => handleProjectSelection(project)}
                    selected={currentProject.id === id}
                  >
                    <span id="id">{key}</span>
                    {!isCollapsed && (
                      <>
                        <h4>{name}</h4>
                        <span id="routes">{`${routes} ${intl.panels}`}</span>

                        <button
                          type="button"
                          id="icons"
                          onClick={e => e.stopPropagation()}
                        >
                          {/* <HiOutlineRefresh id="update" /> */}
                          <DropdownMenuProject project={project} />
                        </button>
                      </>
                    )}
                  </ProjectCard>
                );
              })}
            </ProjectsList>
          )}
        </ProjectsBody>
        {!isCollapsed && (
          <FloatButton>
            <DashboardModalProjects>
              <button type="button">
                <MdAdd />
              </button>
            </DashboardModalProjects>
          </FloatButton>
        )}
        <FloatCollapse>
          <button type="button" onClick={() => triggerCollapse()}>
            {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
          </button>
        </FloatCollapse>
      </Container>
    </GridItem>
  );
};

export default Projects;
