/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

import logoImage from '../static/images/logo/logo.png'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <div
          id="preloader"
          className="preloader"
        >

          <img src={logoImage} alt="logo" style={{"height": "calc(3.23625vw + 77.86408px)"}} />
          <div className="preloader_animation"></div>
        </div>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
        <script src="./scripts/no-js.js"></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
