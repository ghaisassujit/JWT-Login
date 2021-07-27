import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import authenticationService from '../services/AuthenticationService';

interface PrivateRouteProps extends RouteProps {
    component?: any;
    children?: any;
  }
  
  const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, children, ...rest } = props;
  
    return (
      <Route
        {...rest}
        render={(routeProps) =>
            authenticationService.getToken() ? (
              <Component {...routeProps} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: routeProps.location },
              }}
            />
          )
        }
      />
    );
  };
  
  export default PrivateRoute;

