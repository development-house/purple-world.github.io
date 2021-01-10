import React from 'react'
import SVG from 'react-inlinesvg'

import Layout from '../layout/Layout'
import Logo from '../components/logo/Logo'
import Link from '../components/link/Link'
import Button from '../components/button/Button'
import Background from '../components/background/Background'

import parseYmlContent from '../util/parsers/parseYmlContent'

import contentData from '../../configuration/index/content.yml'
import linksData from '../../configuration/index/links.yml'
import socialsData from '../../configuration/index/socials.yml'

import style from './index/Index.module.scss'

const IndexPage = () => (
  <Layout>
    <div className={style.index}>
      <div className={style.logo}>
        <Logo to="/" />
      </div>
      <div className={style.content}>
        <h1 dangerouslySetInnerHTML={{__html: parseYmlContent(contentData.title)}} />
        <p dangerouslySetInnerHTML={{__html: parseYmlContent(contentData.desc)}} />
      </div>
      <div className={style.navigation}>
        <div className={style.list}>
          {linksData
            .sort((a, b) => ((a.priority > b.priority) ? 1 : -1))
            .map(link => (
              <Link
                key={link.name}
                className={style.item}
                href={link.href}
                to={link.to}
                target={link.tab && '_blank'}
              >
                <Button primary>
                  <span>{link.text}</span>
                </Button>
              </Link>
            ))
          }
        </div>
        <div className={style.list}>
          {socialsData
            .sort((a, b) => ((a.priority > b.priority) ? 1 : -1))
            .map(social => (
              <Link
                key={social.name}
                className={style.item}
                href={social.href}
                target="_blank"
              >
                <Button>
                  {social.icon && (<SVG src={`/icons/${social.icon}`} />)}
                </Button>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
    <Background />
  </Layout>
)

export default IndexPage