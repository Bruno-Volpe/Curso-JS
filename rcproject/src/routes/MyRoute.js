import React from "react";
import { Route, Redirect } from "react-router-dom";

import PropTypes from 'prop-types'
// npm i prop-types

import { useSelector } from "react-redux";

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  // verificar se user esta logado
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    )
  }

  // passar user para frente
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />
}

MyRoute.defaultProps = {
  isClosed: false
}

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
}
