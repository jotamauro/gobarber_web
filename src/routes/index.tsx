import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';
import { AppRoute } from './routes';
import { ForgotPassword } from '../pages/ForgotPassword';
import { ResetPassword } from '../pages/ResetPassword';
import { Profile } from '../pages/Profile';

// eslint-disable-next-line import/prefer-default-export
export const Routes: FC = () => (
  <Switch>
    <AppRoute path="/" exact component={SignIn}></AppRoute>
    <AppRoute path="/signup" component={SignUp}></AppRoute>
    <AppRoute path="/profile" component={Profile} isPrivate></AppRoute>
    <AppRoute path="/dashboard" component={Dashboard} isPrivate></AppRoute>
    <AppRoute path="/forgot-password" component={ForgotPassword}></AppRoute>
    <AppRoute path="/reset-password" component={ResetPassword}></AppRoute>
  </Switch>
);
