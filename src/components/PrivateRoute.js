import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ user: user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
