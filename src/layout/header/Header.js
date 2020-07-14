import React from 'react'
import {Link} from 'gatsby'

import headerStyle from './assets/Header.module.scss'

import logoImage from "../../../static/logo/logo.png"

const Header = () => (
  <header className={headerStyle.header}>
    <Link to="/">
      {/* <h1>Purple World</h1> */}
      <img src={logoImage} alt="logo" />
    </Link>
  </header>
)

export default Header
