import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

import style from './Logo.module.scss'

import logoImage from '../../../static/images/logo/logo.png'

const Logo = ({to, className}) => (
  <div className={`${style.logo} ${className || ''}`}>
    {to
      ? (
        <Link to={to}>
          <img src={logoImage} alt="Purple World logo" />
        </Link>
      ) : (
        <img src={logoImage} alt="Purple World logo" />
      )
    }
  </div>
)

Logo.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string
}

export default Logo