/* eslint-disable react/no-danger */
import React from 'react'

import Layout from '../layout/Layout'

import indexStyle from './assets/Index.module.scss'

import indexData from '../config/index-page/content.yaml'

const IndexPage = () => {
  const formattedTitle = indexData.title.split('\n\n').map(p => p.replace(/\n/g, '<br/>')).join('')
  const formattedDesc = indexData.desc.split('\n\n').map(p => p.replace(/\n/g, '<br/>')).join('')

  return (
    <Layout>
      <div className={indexStyle.index}>
        <h2 dangerouslySetInnerHTML={{ __html: formattedTitle }} />
        <p dangerouslySetInnerHTML={{ __html: formattedDesc }} />
      </div>
    </Layout>
  )
}

export default IndexPage
