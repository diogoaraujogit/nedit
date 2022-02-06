import { transparentize } from 'polished';

export default {
  title: 'light',

  colors: {
    primary: '#FFFFFF',
    secondary: '#B0191A',
    red200: '#D94247',

    background: '#292f33',
    lightBackground: '#ebebeb', // #00000014

    text: '#292F33',
    lightText: '#757575', // #00000089
    secondaryText: '#FAFAFA',
    line: transparentize(0.82, '#707070'), // '#707070 opacity 0.18

    error: '#ED3237',
    success: '#19AA8C',

    normalTag: '#60AF9F',
    doubleWayTag: '#4F81AC',
    extraTag: '#F1B864',

    // NOVO
    dashboardBackground: '#ffffff',
    cardBackground: '#ffffff',
    cardText: '#757575', // #00000089,
    headText: '#292F33', // modal header
    inputBackground: transparentize(0.9, '#ffffff'), // #ffffff opacity 0.1
    iconBackground: transparentize(0.97, '#000000'),
  },

  shadows: {
    primary: '0px 3px 6px #00000029',
  },
};
