import React from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container, Content, GridBackground, GridContent } from './styles';

interface GridItemProps {
  icon: React.ComponentType<IconBaseProps>;
  isItemCollapsed?: boolean;
}

const GridItem: React.FC<GridItemProps> = ({
  children,
  icon: Icon,
  isItemCollapsed = false,
}) => {
  return (
    <Container>
      <Content>
        <GridContent>{children}</GridContent>
        <GridBackground>{!isItemCollapsed && <Icon />}</GridBackground>
      </Content>
    </Container>
  );
};

export default GridItem;
