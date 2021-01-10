import React from 'react'
import PropTypes from 'prop-types'

import style from './Button.module.scss'

const Button = ({
  className, primary, disabled, children, ...props
}) => (
  <div
    className={`${style.button} ${primary ? style.primary : ''} ${disabled ? style.disabled : ''} ${className || ''}`}
    {...props}
  >
    {children}
  </div>
)

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Button