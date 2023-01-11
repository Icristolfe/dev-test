import PropTypes from 'prop-types'
import React from 'react'

import { ContainerButton } from './styles.js'

export function Button({props, children, ...rest }) {
  return (
  <ContainerButton {...rest}>{children}</ContainerButton>
  )
}

Button.propTypes = {
  children: PropTypes.any
}
