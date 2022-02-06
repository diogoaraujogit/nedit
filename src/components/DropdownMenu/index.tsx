import React, { useContext } from 'react';
import {
  MdKeyboardArrowDown,
  MdMoreHoriz,
  MdOutlineInsertDriveFile,
  MdOutlineLogout,
} from 'react-icons/md';
import {
  AiOutlineCopy,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineQuestionCircle,
  // AiOutlineSend,
} from 'react-icons/ai';
import { RiFilterFill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { Button, MenuButton, StyledMenu } from './styles';
import {
  DashboardModalBusRoutes,
  DashboardModalProjects,
} from '../DashboardModal';
import { BusRouteProps, ProjectProps } from '../../types';
import { DashboardContext } from '../../contexts/DashboardContext';

import Loading from '../Loading';
import {
  DeleteBusRouteModal,
  DeleteProjectModal,
} from '../DashboardMinorModal';
// import { DuplicateModal, SendNfrotaModal } from '../DashboardSimpleModal';
import { DuplicateModal } from '../DashboardSimpleModal';
import { busRouteModeOptions } from '../../config/options';
import { AuthContext } from '../../contexts/AuthContext';
import useIntl from '../../hooks/useIntl';

interface DropdownMenuProjectProps {
  project: ProjectProps;
}

export const DropdownMenuProject: React.FC<DropdownMenuProjectProps> = ({
  project,
}) => {
  const intl = useIntl();
  const { setOnActionProject } = useContext(DashboardContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuLoading = false;
  const menuMessage = '';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOnActionProject(project);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickItem = () => {
    setAnchorEl(null);
  };

  // API CALL

  // const getProject = async () => {
  //   setMenuLoading(true);
  //   setOnActionProject({});

  //   try {
  //     const response = await api.get(`/projects/${project?.id}`);

  //     if (response.data) {
  //       const camelCaseArray = convertSnakeCaseArrayToCamelCase(
  //         response.data.panels,
  //       );
  //       setOnActionProject({ ...response.data, panels: camelCaseArray });

  //       setMenuMessage('');
  //     }
  //   } catch (e) {
  //     const error = handleRegularCall(e, intl.networkError, intl.serverError);

  //     toast.error(error);
  //     setMenuMessage(error);
  //   }

  //   setMenuLoading(false);
  // };

  return (
    <>
      <Button onClick={handleClick}>
        <MdMoreHoriz />
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuLoading || menuMessage ? (
          <MenuButton>{menuLoading ? <Loading /> : menuMessage}</MenuButton>
        ) : (
          <>
            <DashboardModalProjects edit onOpen={handleClickItem}>
              <MenuButton>
                {intl.edit}
                <AiOutlineEdit />
              </MenuButton>
            </DashboardModalProjects>
            <DuplicateModal onClick={handleClickItem} item="project">
              <MenuButton>
                {intl.duplicate}
                <AiOutlineCopy />
              </MenuButton>
            </DuplicateModal>
            <DeleteProjectModal onOpen={handleClickItem}>
              <MenuButton>
                {intl.delete}
                <AiOutlineDelete />
              </MenuButton>
            </DeleteProjectModal>
            {/* <SendNfrotaModal onClick={handleClickItem}>
              <MenuButton disabled>
                {intl.sendNFrota}
                <AiOutlineSend />
              </MenuButton>
            </SendNfrotaModal> */}
          </>
        )}
      </StyledMenu>
    </>
  );
};

interface DropdownMenuBusRoute {
  busRoute: BusRouteProps;
}

export const DropdownMenuBusRoute: React.FC<DropdownMenuBusRoute> = ({
  busRoute,
}) => {
  const { setOnActionBusRoute, onActionBusRoute } =
    useContext(DashboardContext);
  const intl = useIntl();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const [menuLoading, setMenuLoading] = useState<boolean>(true);
  // const [menuMessage, setMenuMessage] = useState<string>('');
  const menuLoading = false;
  const menuMessage = '';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOnActionBusRoute(busRoute);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickItem = () => {
    setAnchorEl(null);
  };

  // API CALL

  return (
    <>
      <Button onClick={handleClick}>
        <MdMoreHoriz />
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuLoading || menuMessage || onActionBusRoute.id !== busRoute.id ? (
          <MenuButton>{menuLoading ? <Loading /> : menuMessage}</MenuButton>
        ) : (
          <>
            <DashboardModalBusRoutes edit onOpen={handleClickItem}>
              <MenuButton>
                {intl.edit}
                <AiOutlineEdit />
              </MenuButton>
            </DashboardModalBusRoutes>
            <DuplicateModal item="busRoute" onClick={handleClickItem}>
              <MenuButton>
                {intl.duplicate}
                <AiOutlineCopy />
              </MenuButton>
            </DuplicateModal>
            <DeleteBusRouteModal onOpen={handleClickItem}>
              <MenuButton>
                {intl.delete}
                <AiOutlineDelete />
              </MenuButton>
            </DeleteBusRouteModal>
          </>
        )}
      </StyledMenu>
    </>
  );
};

// DROPDOWN MENU FILTER

interface DropdownMenuFilterProps {
  busRoute?: BusRouteProps;
}

export const DropdownMenuFilter: React.FC<DropdownMenuFilterProps> = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const intl = useIntl();
  const { setModeFilter } = useContext(DashboardContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickItem = (id: number) => {
    setAnchorEl(null);
    setModeFilter(id);
  };

  // API CALL

  return (
    <>
      <Button onClick={handleClick}>
        <RiFilterFill />
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {busRouteModeOptions.map(modeOption => (
          <MenuButton
            key={modeOption.id}
            onClick={() => handleClickItem(modeOption.id)}
            className={modeOption?.color}
          >
            {intl[modeOption.label]}
          </MenuButton>
        ))}
      </StyledMenu>
    </>
  );
};

// HEADER USER ACTIONS

interface DropdownHeaderProps {
  children?: React.ReactElement;
}

export const DropdownHeader: React.FC<DropdownHeaderProps> = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const intl = useIntl();
  const { logout, username } = useContext(AuthContext);
  const history = useHistory();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    history.push('/');
    setAnchorEl(null);
  };

  const handleFaq = () => {
    setAnchorEl(null);
  };
  const intl = useIntl();

  // API CALL

  return (
    <>
      <Button className="white" onClick={handleClick}>
        {username}
        <MdKeyboardArrowDown />
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <a
          href={process.env.REACT_APP_FAQ}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MenuButton onClick={() => handleFaq()}>
            FAQ <AiOutlineQuestionCircle />
          </MenuButton>
        </a>
        <MenuButton disabled title={intl.manual} onClick={() => handleLogout()}>
          {intl.manual} <MdOutlineInsertDriveFile />
        </MenuButton>
        <MenuButton title={intl.logout} onClick={() => handleLogout()}>
          {intl.logout}
          <MdOutlineLogout />
        </MenuButton>
      </StyledMenu>
    </>
  );
};
