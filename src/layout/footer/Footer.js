import React from 'react'
import SVG from 'react-inlinesvg'

import Button from '../../components/button/Button'

import footerStyle from './assets/Footer.module.scss'

import primaryButtonData from '../../config/buttons/primary.yaml'
import secondaryButtonData from '../../config/buttons/secondary.yaml'

const Footer = () => (
  <footer className={footerStyle.footer}>
    <div className={footerStyle.group}>
      {primaryButtonData
        .sort((a, b) => ((a.priority > b.priority) ? 1 : -1))
        .map(button => (
          button.visible && (
            <Button
              href={button.url}
              target={button.tab && '_blank'}
              primary
              disabled={button.disabled}
            >
              <span>{button.text}</span>
              {button.icon && (<SVG src={`/icons/${button.icon}`} />)}
            </Button>
          )
        ))}
    </div>

    <div className={footerStyle.group}>
      {secondaryButtonData
        .sort((a, b) => ((a.priority > b.priority) ? 1 : -1))
        .map(button => (
          button.visible && (
            <Button
              key={button.name}
              href={button.url}
              target={button.tab && '_blank'}
            >
              {button.icon && (<SVG src={`/icons/${button.icon}`} />)}
            </Button>
          )
        ))}
    </div>
  </footer>
)

export default Footer
