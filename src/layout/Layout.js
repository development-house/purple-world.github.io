import React from 'react'
import PropTypes from 'prop-types'

import Head from './head/Head'
import Wrapper from './wrapper/Wrapper'
import Background from '../components/background/Background';
import Header from './header/Header'
// import Main from './main/Main'
import Footer from './footer/Footer'

const Layout = ({ children }) => (
  <>
    <Head />
    <Wrapper>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Wrapper>
    <Background />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
