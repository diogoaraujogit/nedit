interface ObjectProps {
  [key: string]: any;
}

export interface ProjectProps {
  id?: number;
  description?: string;
  routes?: string;
  panels?: PanelProps[];
  nfrotaStatus?: boolean;
  totalPanels?: number;
}

export interface PanelProps extends ObjectProps {
  id?: number;
  address?: number;
  format?: number;
  alignment?: string;
  color?: number;
  prefix?: number;
  prefixColor?: number;
}

export interface BusRouteProps {
  id?: number;
  order?: number;
  description?: string;
  mode?: number;
  projectId?: number;
}

export interface FontProps {
  [key: string]: any[][];
}

export interface IntlProps {
  [key: string]: any;
}

export interface OptionProps {
  id: number;
  label?: string;
  description?: string;
}

export interface OpenDismissModalProps {
  status: boolean;
  action: () => void;
}
