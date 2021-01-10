import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

import colors from '../../styles/colors.scss'

const Head = ({title}) => {
  const metaVersion = "s60ylnjhk7"

  useEffect(() => {
    document.getElementById('preloader').classList.add('preloader_inactive')
  }, [])

  const {site} = useStaticQuery(
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
    <Helmet>
      <html lang="en" />
      <title>{`${title ? `${title} - ` : ""}Purple World`}</title>
      <meta httpEquiv="Content-Type" content="text/html" />
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="author" content={site.siteMetadata.author} />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:image" content={`${site.siteMetadata.assets}/og-image.jpg?v=${metaVersion}`} />
      <meta property="og:image:height" content="943" />
      <meta property="og:image:width" content="629" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${site.siteMetadata.assets}/apple-touch-icon.png?v=${metaVersion}`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${site.siteMetadata.assets}/favicon-32x32.png?v=${metaVersion}`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${site.siteMetadata.assets}/favicon-16x16.png?v=${metaVersion}`} />
      <link rel="manifest" href={`${site.siteMetadata.assets}/site.webmanifest?v=${metaVersion}`} />
      <link rel="mask-icon" href={`${site.siteMetadata.assets}/safari-pinned-tab.svg?v=${metaVersion}`} color={colors.purple_secondary} />
      <meta name="msapplication-config" content={`${site.siteMetadata.assets}/browserconfig.xml?v=${metaVersion}`} />
      <meta name="msapplication-TileColor" content={colors.purple_primary} />
      <meta name="theme-color" content={colors.purple_primary} />
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string,
}

export default Head
