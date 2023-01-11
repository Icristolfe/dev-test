import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRouteAluno({ element, children, ...rest }) {
  const user = localStorage.getItem('devtestaluno:userData')

  if (!user) {
    return <Navigate replace to="/alunologin" />
  }
  return children
}

export default PrivateRouteAluno

PrivateRouteAluno.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.any])
}
