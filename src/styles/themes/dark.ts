import { transparentize } from 'polished';

export default {
  title: 'dark',

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
    dashboardBackground: '#292F33',
    cardBackground: '#475056', // card, input search, filter option,
    cardText: '#fafafa', // card, input search, filter option, modal sub
    headText: '#fafafa', // modal header
    inputBackground: transparentize(0.9, '#ffffff'), // input
    iconBackground: transparentize(0.98, '#ffffff'),
  },

  shadows: {
    primary: '0rem 0.3rem 0.6rem #00000029',
  },
};
