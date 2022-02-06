/* eslint-disable */
import { PanelProps } from '../types';

export const convertCamelCaseArrayToSnakeCase = (
  camelCaseArray: PanelProps[],
) => {
  const snakeCaseArray = camelCaseArray.map(panel => {
    let snakeCaseObject = {
      address: panel.order,
      panel_format_id: panel.format,
      position_description: panel.alignment,
      prefix: {
        size: panel.prefix,
        color_type: panel.prefixColor,
        color: '#ffffff',
      },
      color_type: panel.color,
      color: '#ffffff',
      id: panel.id,
    };

    return snakeCaseObject;
  });

  return snakeCaseArray;
};

export const convertSnakeCaseArrayToCamelCase = (snakeCaseArray: any[]) => {
  const camelCaseArray = snakeCaseArray.map(panel => {
    const camelCaseObject = {
      format: panel.panel_format_id,
      order: panel.address,
      alignment: panel.position_description,
      color: panel.color_type,
      prefix: panel.prefix?.size,
      prefixColor: panel.prefix?.color_type,
      id: panel.id,
      nfrotaStatus: panel.send_to_n_frota,
      totalPanels: panel.total_panels,
    };

    return camelCaseObject;
  });

  return camelCaseArray;
};

export const convertSnakeCaseBusRouteArrayToCamelCase = (
  snakeCaseArray: any[],
) => {
  const camelCaseArray = snakeCaseArray.map(busRoute => {
    const camelCaseObject = {
      order: busRoute.number,
      id: busRoute.id,
      mode: busRoute.script_mode_id,
      projectId: busRoute.project_id,
      description: busRoute.description,
    };

    return camelCaseObject;
  });

  return camelCaseArray;
};

export const convertSnakeCaseProjectsArrayToCamelCase = (
  snakeCaseArray: any[],
) => {
  const camelCaseArray = snakeCaseArray.map(project => {
    const camelCaseObject = {
      id: project.id,
      description: project.description,
      totalPanels: project.total_panels,
    };

    return camelCaseObject;
  });

  return camelCaseArray;
};
