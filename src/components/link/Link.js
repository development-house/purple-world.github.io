import React from 'react'
import PropTypes from 'prop-types'
import {Link as GatsbyLink} from 'gatsby'

import style from './Link.module.scss'

const Link = ({to, href, target, children, className, ...props}) => {
  let Tag = null
  if (to) {
    Tag = GatsbyLink
  } else if (href) {
    Tag = 'a'
  } else {
    // eslint-disable-next-line no-console
    console.error('[Link.js] Tag not specified!')
  }

  return (
    <Tag
      to={to || ''}
      href={href || ''}
      target={target || null}
      className={`${style.link} ${className || ''}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Link