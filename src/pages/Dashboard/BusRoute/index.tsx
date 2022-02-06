import React, { useEffect, useState, useContext } from 'react';
import { FaRoute } from 'react-icons/fa';
import {
  MdAdd,
  MdClose,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdSearch,
} from 'react-icons/md';
import { toast } from 'react-toastify';
import { DashboardModalBusRoutes } from '../../../components/DashboardModal';
import {
  DropdownMenuBusRoute,
  DropdownMenuFilter,
} from '../../../components/DropdownMenu';
import GridItem from '../../../components/GridItem';
import Loading from '../../../components/Loading';
import { busRouteModeOptions } from '../../../config/options';
import { DashboardContext } from '../../../contexts/DashboardContext';
import { LayoutContext } from '../../../contexts/LayoutContext';
import useIntl from '../../../hooks/useIntl';
import api from '../../../services/api';
import { BusRouteProps } from '../../../types';
import { convertSnakeCaseBusRouteArrayToCamelCase } from '../../../utils/convertArrayForm';
import { handleRegularCall } from '../../../utils/handleError';
import {
  Container,
  FilterContainer,
  FloatButton,
  FloatCollapse,
  InputSearch,
  LoadingContainer,
  MessageContainer,
  ProjectsBody,
  ProjectsList,
} from '../Projects/styles';
import { FilterOptions, BusRouteCard, CurrentFilters } from './styles';

const BusRoute: React.FC = () => {
  // CONTEXT
  const {
    currentProject,
    currentBusRoute,
    setCurrentBusRoute,
    createBusRouteFlag,
    editBusRouteFlag,
    duplicateBusRouteFlag,
    deleteBusRouteFlag,
    modeFilter,
    setModeFilter,
    setExtraNumber,
    setNormalNumber,
    setOpenDismissModal,
    hasChangeOnEditor,
  } = useContext(DashboardContext);
  const intl = useIntl();

  const { triggerBusCollapse, isBusCollapsed } = useContext(LayoutContext);

  // COMPONENT INNER STATES
  const [allBusRoutes, setAllBusRoutes] = useState<BusRouteProps[]>([]);
  const [busRoutesArray, setBusRoutesArray] = useState<BusRouteProps[]>([]);
  const [busRouteMessage, setBusRouteMessage] = useState<string>('');
  const [busRouteLoading, setBusRouteLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // COMPONENT FUNCTIONS
  const checkIfHasBusRoutes = (busRoutes: BusRouteProps[]) => {
    const busRoutesLength = busRoutes.length;

    if (!busRoutesLength) {
      setBusRouteMessage(intl.noRouteFound);
    } else {
      setBusRouteMessage('');
    }
  };

  const handleSearch = () => {
    const compare = (a: BusRouteProps, b: BusRouteProps): number => {
      if (a.mode === 3 && b.mode === 3) {
        return 0;
      }
      if (a.mode === 3) {
        return 1;
      }
      if (b.mode === 3) {
        return -1;
      }

      return 0;
    };

    const sortedByMode = [...allBusRoutes].sort(compare);

    const searchItemsArray = [...sortedByMode].filter(
      busRoute =>
        busRoute.description
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        busRoute.order?.toString().includes(searchTerm),
    );

    const filterItemsArray = modeFilter
      ? [...searchItemsArray].filter(busRoute => busRoute.mode === modeFilter)
      : searchItemsArray;

    if (currentProject?.id) {
      checkIfHasBusRoutes(filterItemsArray);
      setBusRoutesArray(filterItemsArray);
    } else if (searchTerm || modeFilter) {
      setBusRouteMessage(intl.noProjectSelected);
    } else {
      setBusRouteMessage('');
    }
  };

  // API CALLS

  const getBusRoutes = async (projectId: number) => {
    setBusRouteLoading(true);

    try {
      const response = await api.get(`/scripts?project_id=${projectId}`);

      if (response.data) {
        const camelCaseBusRoutes = convertSnakeCaseBusRouteArrayToCamelCase(
          response.data,
        );
        setAllBusRoutes(camelCaseBusRoutes);
      }
    } catch (e: any) {
      const error = handleRegularCall(e, intl.networkError, intl.serverError);

      toast.error(error);
      setBusRouteMessage(error);
    }

    setBusRouteLoading(false);
  };

  // COMPONENT FUNCTIONS
  const handleGetBusRoutes = () => {
    const projectId = currentProject?.id;

    if (projectId) {
      getBusRoutes(projectId);
    } else {
      setAllBusRoutes([]);
      setBusRoutesArray([]);
      setCurrentBusRoute({});
    }
  };

  const busRouteSelection = (busRoute: BusRouteProps) => {
    setCurrentBusRoute(busRoute);
  };

  const handleBusRouteSelection = (busRoute: BusRouteProps) => {
    if (hasChangeOnEditor) {
      setOpenDismissModal({
        status: true,
        action: () => busRouteSelection(busRoute),
      });
    } else {
      busRouteSelection(busRoute);
    }
  };

  const parseBusRouteMode = (id: number | undefined) => {
    const [modeOption] = busRouteModeOptions.filter(
      option => option.id === Number(id),
    );
    const mode = intl[modeOption.label] || '';

    return mode;
  };

  const parseColor = (id: number | undefined) => {
    const modeOption = busRouteModeOptions.find(
      option => option.id === Number(id),
    );
    const color = modeOption?.color ?? '';

    return color;
  };

  const findMaxNumber = (value: number[]) => {
    const maxValue = Number.isInteger(Math.max(...value))
      ? Math.max(...value)
      : 0;

    return maxValue;
  };

  const defineBusRouteNumber = () => {
    const normalRoutes = allBusRoutes.filter(route => route.mode !== 3);
    const extraRoutes = allBusRoutes.filter(route => route.mode === 3);

    const normalRoutesNumbers = normalRoutes.map(route => Number(route.order));
    const extraRoutesNumbers = extraRoutes.map(route => Number(route.order));

    const normalMax = findMaxNumber(normalRoutesNumbers) + 1;
    const extraMax = findMaxNumber(extraRoutesNumbers);
    const extraNumber = extraMax === 0 ? 11 : extraMax + 1;

    setNormalNumber(normalMax);
    setExtraNumber(extraNumber);
  };

  // COMPONENT SIDE EFFECTS
  useEffect(() => {
    handleGetBusRoutes();
  }, [
    currentProject,
    createBusRouteFlag,
    editBusRouteFlag,
    duplicateBusRouteFlag,
    deleteBusRouteFlag,
  ]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, modeFilter, allBusRoutes]);

  useEffect(() => {
    defineBusRouteNumber();
  }, [allBusRoutes]);

  return (
    <GridItem icon={FaRoute} isItemCollapsed={isBusCollapsed}>
      <Container>
        <FilterContainer>
          <InputSearch>
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            {!isBusCollapsed && <MdSearch />}
          </InputSearch>
          {!isBusCollapsed && (
            <FilterOptions>
              <DropdownMenuFilter />
            </FilterOptions>
          )}
        </FilterContainer>
        {modeFilter && !isBusCollapsed && (
          <CurrentFilters>
            <div className={parseColor(modeFilter)}>
              <p>{parseBusRouteMode(modeFilter)}</p>
              <button type="button" onClick={() => setModeFilter(undefined)}>
                <MdClose />
              </button>
            </div>
          </CurrentFilters>
        )}
        <ProjectsBody>
          {busRouteLoading ? (
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          ) : busRouteMessage ? (
            <MessageContainer>{busRouteMessage}</MessageContainer>
          ) : (
            <ProjectsList>
              {busRoutesArray.map(busRoute => {
                const id = busRoute?.id;
                const order = busRoute?.order;
                const name = busRoute?.description || '?';
                const mode = parseBusRouteMode(busRoute?.mode) || '?';
                const color = parseColor(busRoute?.mode);

                return (
                  <BusRouteCard
                    key={id}
                    onClick={() => handleBusRouteSelection(busRoute)}
                    selected={currentBusRoute.id === id}
                  >
                    <span id="id">{order}</span>
                    {!isBusCollapsed && (
                      <>
                        <h4>{name}</h4>
                        <span id="way" className={color}>
                          {mode}
                        </span>
                        <button
                          type="button"
                          id="icons"
                          onClick={e => e.stopPropagation()}
                        >
                          <DropdownMenuBusRoute busRoute={busRoute} />
                        </button>
                      </>
                    )}
                  </BusRouteCard>
                );
              })}
            </ProjectsList>
          )}
        </ProjectsBody>
        {currentProject?.id && !isBusCollapsed && (
          <FloatButton>
            <DashboardModalBusRoutes>
              <button type="button">
                <MdAdd />
              </button>
            </DashboardModalBusRoutes>
          </FloatButton>
        )}
        <FloatCollapse>
          <button type="button" onClick={() => triggerBusCollapse()}>
            {isBusCollapsed ? (
              <MdKeyboardArrowRight />
            ) : (
              <MdKeyboardArrowLeft />
            )}
          </button>
        </FloatCollapse>
      </Container>
    </GridItem>
  );
};

export default BusRoute;
