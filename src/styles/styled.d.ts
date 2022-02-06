import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      red200: string;
      error: string;
      background: string;
      lightBackground: string;
      text: string;
      lightText: string;
      secondaryText: string;
      success: string;
      normalTag: string;
      doubleWayTag: string;
      extraTag: string;
      line: string;
      dashboardBackground: string;
      cardBackground: string;
      cardText: string;
      headText: string;
      inputBackground: string;
      iconBackground: string;
    };

    shadows: {
      primary: string;
    };
  }
}
