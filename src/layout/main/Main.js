import React from 'react'
import PropTypes from 'prop-types'

import style from './Main.module.scss'

const Main = ({children}) => (
  <main className={style.main}>
    <div className={style.wrapper}>
      {children}
    </div>
  </main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
