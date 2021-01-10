import React from 'react'
import PropTypes from 'prop-types'

import Head from '../head/Head'
import Main from '../main/Main'

const Layout = ({title, children}) => (
  <>
    <Head title={title} />
    <Main>
      {children}
    </Main>
  </>
)

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Layout
