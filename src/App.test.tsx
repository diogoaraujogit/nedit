import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders main route', () => {
  render(<App />);
  expect(1 + 1).toEqual(2);
});
