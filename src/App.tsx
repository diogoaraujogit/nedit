import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './contexts/AuthContext';
import { IntlProvider } from './contexts/IntlContext';
import { LayoutProvider } from './contexts/LayoutContext';
import { DashboardProvider } from './contexts/DashboardContext';
import Routes from './routes';
import GlobalStyles from './styles/global';
import { ConfirmDismissModal } from './components/DashboardMinorModal';

const App: React.FC = () => {
  return (
    <>
      <IntlProvider>
        <AuthProvider>
          <LayoutProvider>
            <DashboardProvider>
              <Routes />
              <ConfirmDismissModal />
              <ToastContainer />
              <GlobalStyles />
            </DashboardProvider>
          </LayoutProvider>
        </AuthProvider>
      </IntlProvider>
    </>
  );
};

export default App;
