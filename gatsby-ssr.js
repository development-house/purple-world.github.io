const React = require('react')

exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setBodyAttributes,
  setPostBodyComponents
}) => {
  setHeadComponents([
    <link as="script" rel="preload" href="/scripts/no-js.js" />,
    <link as="script" rel="preload" href="/scripts/preloader.js" />
  ])
  setPreBodyComponents([
    <div id="preloader">
      <img src="/images/logo/logo.png" alt="logo" style={{'height': 'calc(3.23625vw + 77.86408px)'}} />
      <div className="preloader_animation"></div>
    </div>
  ])
  setBodyAttributes({
    className: 'no_js preloader_active'
  })
  setPostBodyComponents([
    <script src="/scripts/no-js.js" />,
    <script src="/scripts/preloader.js" />
  ])
}
