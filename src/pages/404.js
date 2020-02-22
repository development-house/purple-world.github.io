import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

import Layout from '../layout/Layout'

const NotFoundPage = () => {
  useEffect(() => {
    navigate('/')
  }, [])
  return (
    <Layout>
      <p>Redirecting...</p>
    </Layout>
  )
}

export default NotFoundPage
