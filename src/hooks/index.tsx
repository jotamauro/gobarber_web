import React, { FC } from 'react';

import { AuthProvider } from './Auth';
import { ToastProvider } from './Toats';

// eslint-disable-next-line import/prefer-default-export
export const AppProvider: FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);
