import React from 'react'
import PropTypes from 'prop-types'

import wrapperStyle from './assets/Wrapper.module.scss'

const Wrapper = ({ children }) => (
  <div className={wrapperStyle.wrapper}>
    {children}
  </div>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
