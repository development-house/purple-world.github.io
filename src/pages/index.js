import React from 'react'

import Layout from '../layout/Layout'

import indexStyle from './assets/Index.module.scss'

const IndexPage = () => (
  <Layout>
    <div className={indexStyle.index}>
      <h2>Your favorite purple<br />FiveM roleplay community</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    </div>
  </Layout>
)

export default IndexPage
