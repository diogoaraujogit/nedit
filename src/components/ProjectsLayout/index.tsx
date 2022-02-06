import React, { useContext } from 'react';
import AppLayout from '../AppLayout';
import Header from '../Header';
import LayoutBody from '../LayoutBody';
import LayoutTabs from '../LayoutTabs';
import PageBody from '../PageBody';
import { ProjectsHeader, ProjectsTabs } from './styles';
import useIntl from '../../hooks/useIntl';
import { ExportModal, ImportModal } from '../ExportModal';
import { LayoutContext } from '../../contexts/LayoutContext';

const ProjectsLayout: React.FC = ({ children }) => {
  const intl = useIntl();
  const { isCollapsed, isBusCollapsed } = useContext(LayoutContext);

  return (
    <AppLayout>
      <Header>
        <ProjectsHeader>
          <ImportModal>
            <button type="button">{intl.import}</button>
          </ImportModal>
          <ExportModal>
            <button type="button">{intl.export}</button>
          </ExportModal>
        </ProjectsHeader>
      </Header>
      <LayoutBody>
        <LayoutTabs>
          <ProjectsTabs
            isCollapsed={isCollapsed}
            isBusCollapsed={isBusCollapsed}
          >
            <div>{!isCollapsed && intl.project}</div>
            <div>{!isBusCollapsed && intl.busRoute}</div>
            <div>{intl.panel}</div>
            <div>{intl.editor}</div>
          </ProjectsTabs>
        </LayoutTabs>
        <PageBody>{children}</PageBody>
      </LayoutBody>
    </AppLayout>
  );
};

export default ProjectsLayout;
