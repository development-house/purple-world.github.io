import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Head from './head/Head'
import Background from '../components/background/Background'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'

const Layout = ({ children }) => {
  useEffect(() => {
    document.getElementById('preloader').classList.add('preloader_inactive')
  }, [])

  return (
    <>
      <Head />
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
      <Background />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
