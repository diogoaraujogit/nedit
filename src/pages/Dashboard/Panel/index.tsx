import React, { useContext, useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { RiGridFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import GridItem from '../../../components/GridItem';
import Loading from '../../../components/Loading';
import { formatOptions } from '../../../config/options';
import { DashboardContext } from '../../../contexts/DashboardContext';
import useIntl from '../../../hooks/useIntl';
import api from '../../../services/api';
import { PanelProps } from '../../../types';
import { handleRegularCall } from '../../../utils/handleError';
import {
  Container,
  FilterContainer,
  InputSearch,
  LoadingContainer,
  MessageContainer,
  ProjectsBody,
  ProjectsList,
} from '../Projects/styles';
import { PanelCard } from './styles';

const Panel: React.FC = () => {
  // CONTEXT
  const {
    currentBusRoute,
    currentProject,
    setCurrentPanel,
    currentPanel,
    setOpenDismissModal,
    hasChangeOnEditor,
  } = useContext(DashboardContext);
  const intl = useIntl();

  // COMPONENT INNER STATES
  const [allPanels, setAllPanels] = useState<PanelProps[]>([]);
  const [panelsArray, setPanelsArray] = useState<PanelProps[]>([]);
  const [panelMessage, setPanelMessage] = useState<string>('');
  const [panelLoading, setPanelLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // COMPONENT FUNCTIONS
  const checkIfHasPanels = (panels: PanelProps[]) => {
    const panelsLength = panels.length;

    if (!panelsLength) {
      setPanelMessage(intl.noPanelFound);
    } else {
      setPanelMessage('');
    }
  };

  const parseFormat = (formatId: unknown): string => {
    if (Number.isInteger(formatId)) {
      const format = formatOptions.find(option => option.id === formatId);
      const label = format?.label ?? '';
      const parsedFormat = intl[label] ?? label;
      return parsedFormat;
    }
    return '';
  };

  const handleSearch = () => {
    const searchItemsArray = [...allPanels].filter(
      panel =>
        parseFormat(panel.panel_format_id)
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        panel.address?.toString().includes(searchTerm) ||
        panel.position_description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
    );

    if (currentBusRoute?.id) {
      checkIfHasPanels(searchItemsArray);
      setPanelsArray(searchItemsArray);
    } else if (searchTerm) {
      setPanelMessage(intl.noRouteSelected);
    } else {
      setPanelMessage('');
    }
  };

  // API CALLS

  const getPanels = async (projectId: number) => {
    setPanelLoading(true);

    try {
      const response = await api.get(`/panels?project_id=${projectId}`);

      if (response.data) {
        setAllPanels(response.data);
        checkIfHasPanels(response.data);
      }
    } catch (e: any) {
      const error = handleRegularCall(e, intl.networkError, intl.serverError);

      toast.error(error);
      setPanelMessage(error);
    }

    setPanelLoading(false);
  };

  // COMPONENT FUNCTIONS
  const handleGetPanels = () => {
    const projectId = currentProject?.id;
    const busRouteId = currentBusRoute?.id;
    setCurrentPanel({});

    if (projectId && busRouteId) {
      getPanels(projectId);
    } else {
      setAllPanels([]);
      setPanelsArray([]);
    }
  };

  const panelSelection = (panel: PanelProps) => {
    setCurrentPanel(panel);
  };

  const handlePanelSelection = (panel: PanelProps) => {
    if (hasChangeOnEditor) {
      setOpenDismissModal({
        status: true,
        action: () => panelSelection(panel),
      });
    } else {
      panelSelection(panel);
    }
  };

  const autoSelectFirstPanel = () => {
    const hasPanel =
      Array.isArray(allPanels) &&
      allPanels.length &&
      allPanels[0] &&
      allPanels[0].id;
    if (hasPanel) {
      setCurrentPanel(allPanels[0]);
    }
  };

  // COMPONENT SIDE EFFECTS
  useEffect(() => {
    handleGetPanels();
  }, [currentBusRoute]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, allPanels]);

  useEffect(() => {
    autoSelectFirstPanel();
  }, [allPanels]);

  return (
    <GridItem icon={RiGridFill}>
      <Container>
        <FilterContainer>
          <InputSearch>
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <MdSearch />
          </InputSearch>
        </FilterContainer>
        <ProjectsBody>
          {panelLoading ? (
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          ) : panelMessage ? (
            <MessageContainer>{panelMessage}</MessageContainer>
          ) : (
            <ProjectsList>
              {panelsArray.map(panel => {
                const address = panel?.address ?? 0;
                const position = panel.position_description;
                const format = parseFormat(panel.panel_format_id);
                const id = panel?.id;

                return (
                  <PanelCard
                    key={id}
                    onClick={() => handlePanelSelection(panel)}
                    selected={currentPanel.id === id}
                  >
                    <span id="name">{address}</span>
                    <span id="position">{format}</span>
                    <span id="dimensions">{position}</span>
                    {/* <div id="icons"><MdMoreHoriz /></div> */}
                  </PanelCard>
                );
              })}
            </ProjectsList>
          )}
        </ProjectsBody>
      </Container>
    </GridItem>
  );
};

export default Panel;
