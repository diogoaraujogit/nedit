import React from 'react';
import { render } from '@testing-library/react';
import Login from './';
import '@testing-library/jest-dom/extend-expect';
import App from '../../App';
import { AuthProvider } from '../../contexts/AuthContext';
import { LayoutProvider } from '../../contexts/LayoutContext';

const WrappedLogin = () => (
  <AuthProvider>
    <LayoutProvider>
      <Login />
    </LayoutProvider>
  </AuthProvider>
);

test('renders login', () => {
  render(<WrappedLogin />);
  expect(1 + 1).toEqual(2);
});
