import React, { FC, ComponentType } from 'react';
import {
  Route as ReactDOMRoute,
  Redirect,
  RouteProps as RouteDOMRouteProps,
} from 'react-router-dom';
import { useAuth } from '../hooks/Auth';

interface RouteProps extends RouteDOMRouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

// eslint-disable-next-line import/prefer-default-export
export const AppRoute: FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      // eslint-disable-next-line no-confusing-arrow
      render={({ location }) =>
        // eslint-disable-next-line brace-style
        isPrivate === !!user ? (
          <Component />
        ) : (
          // eslint-disable-next-line no-restricted-globals
          <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard', state: { from: location } }} />
        )
      }
    />
  );
};
