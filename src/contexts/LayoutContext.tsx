import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../hooks/usePersistantState';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface LayoutItemProps {
  color?: string;
  currency?: string;
  description?: string;
  id?: string;
  maxresURL?: string;
  price?: string;
  thumbnailURL?: string;
  size?: string;
  quantity?: string;
}

interface LayoutContextProps {
  layoutItem?: LayoutItemProps;
  updateLayoutItem(newLayoutItem: LayoutItemProps): void;
  toggleTheme(): void;
  isCollapsed: boolean;
  isBusCollapsed: boolean;
  triggerCollapse: () => void;
  triggerBusCollapse: () => void;
}

const LayoutContext = createContext<LayoutContextProps>(
  {} as LayoutContextProps,
);

const LayoutProvider: React.FC = ({ children }) => {
  const [layoutItem, setLayoutItem] = useState<LayoutItemProps>({});
  const [themeTitle, setThemeTitle] = usePersistedState<string>(
    'themeTitle',
    'light',
  );
  const [theme, setTheme] = useState<DefaultTheme>(light);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isBusCollapsed, setIsBusCollapsed] = useState<boolean>(false);

  const triggerCollapse = () => setIsCollapsed(!isCollapsed);
  const triggerBusCollapse = () => setIsBusCollapsed(!isBusCollapsed);

  const toggleTheme = () => {
    setThemeTitle(themeTitle === 'dark' ? 'light' : 'dark');
  };

  const updateLayoutItem = (newLayoutItem: LayoutItemProps): void => {
    setLayoutItem(newLayoutItem);
  };

  useEffect(() => {
    setTheme(themeTitle === 'dark' ? light : dark);
  }, [themeTitle]);

  return (
    <LayoutContext.Provider
      value={{
        layoutItem,
        updateLayoutItem,
        toggleTheme,
        isCollapsed,
        isBusCollapsed,
        triggerCollapse,
        triggerBusCollapse,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LayoutContext.Provider>
  );
};

export { LayoutContext, LayoutProvider };
