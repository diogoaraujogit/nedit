import React, { useContext } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import ProjectsLayout from '../../components/ProjectsLayout';

import { Container, Content } from './styles';
import Projects from './Projects';
import Panel from './Panel';
import BusRoute from './BusRoute';
import Editor from './Editor';
import { LayoutContext } from '../../contexts/LayoutContext';
import ResolutionWarn from '../../components/ResolutionWarn';

const Dashboard: React.FC = () => {
  const { isCollapsed, isBusCollapsed } = useContext(LayoutContext);
  const biggerThan960 = useMediaPredicate('(min-width: 960px)');
  const biggerThan540 = useMediaPredicate('(min-height: 540px)');

  return (
    <>
      {biggerThan960 && biggerThan540 ? (
        <ProjectsLayout>
          <Container>
            <Content isCollapsed={isCollapsed} isBusCollapsed={isBusCollapsed}>
              <Projects />
              <BusRoute />
              <Panel />
              <Editor />
            </Content>
          </Container>
        </ProjectsLayout>
      ) : (
        <ResolutionWarn />
      )}
    </>
  );
};

export default Dashboard;
