import React from 'react'
import PropTypes from 'prop-types'

import mainStyle from './assets/Main.module.scss'

const Main = ({ children }) => (
  <main className={mainStyle.main}>
    {children}
  </main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
