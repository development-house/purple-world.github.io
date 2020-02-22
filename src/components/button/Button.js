import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import buttonStyle from './assets/Button.module.scss'

const Button = ({
  to, href, target, className, children, primary, disabled, ...other
}) => {
  let Tag = null
  if (to) {
    Tag = Link
  } else if (href) {
    Tag = 'a'
  } else {
    // eslint-disable-next-line no-console
    console.error('Tag for Button not specified')
  }

  const classNamesArray = [buttonStyle.button]
  if (className) {
    classNamesArray.push(className)
  }
  if (primary) {
    classNamesArray.push(buttonStyle.primary)
  }
  const classNames = classNamesArray.join(' ')

  return (
    <Tag
      to={!disabled && (to || null)}
      href={!disabled && (href || null)}
      target={target || null}
    >
      <div
        className={classNames}
        {...other}
      >
        {children}
      </div>
    </Tag>
  )
}

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
