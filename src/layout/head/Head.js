import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import colors from '../../styles/colors.scss'

const SEO = ({ lang, title }) => {
  useEffect(() => {
    document.getElementById('preloader').classList.add('preloader_inactive')
  }, [])

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description,
            siteUrl
            author,
            assets
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{ lang }}
      titleTemplate={`${title} - ${site.siteMetadata.title}`}
      defaultTitle={site.siteMetadata.title}
    >
      <meta httpEquiv="Content-Type" content="text/html" />
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="author" content={site.siteMetadata.author} />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:image" content={`${site.siteMetadata.assets}/og-image.jpg`} />
      <meta property="og:image:height" content="943" />
      <meta property="og:image:width" content="629" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${site.siteMetadata.assets}/apple-touch-icon.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${site.siteMetadata.assets}/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${site.siteMetadata.assets}/favicon-16x16.png`} />
      <link rel="manifest" href={`${site.siteMetadata.assets}/site.webmanifest`} />
      <link rel="mask-icon" href={`${site.siteMetadata.assets}/safari-pinned-tab.svg`} color={colors.purple_secondary} />
      <meta name="msapplication-config" content={`${site.siteMetadata.assets}/browserconfig.xml`} />
      <meta name="msapplication-TileColor" content={colors.purple_primary} />
      <meta name="theme-color" content={colors.purple_primary} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en'
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
}

export default SEO
