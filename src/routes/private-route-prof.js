import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRouteProfessor({ element, children, ...rest }) {
  const user = localStorage.getItem('devtest:userData')

  if (!user) {
    return <Navigate replace to="/proflogin" />
  }
  return children
}

export default PrivateRouteProfessor

PrivateRouteProfessor.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.any])
}
