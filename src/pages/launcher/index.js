import React, {useState, useEffect} from 'react'

import Layout from '../../layout/Layout'
import Logo from '../../components/logo/Logo'
import Link from '../../components/link/Link'
import Button from '../../components/button/Button'

import launcherData from '../../../configuration/launcher/launcher.yml'

import style from './Launcher.module.scss'

const downloadModes = {
  automatic: 'automatic',
  manual: 'manual'
}

const LauncherPage = () => {
  const [version, setVersion] = useState(null)
  const [downloadMode, setDownloadMode] = useState(downloadModes.automatic)

  const {owner, repository, filename, extension} = launcherData

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repository}/releases/latest`)
      .then(res => res.json())
      .then(data => {
        setVersion(data.tag_name)
        setTimeout(() => setDownloadMode(downloadModes.manual), 1000)
      })
      // eslint-disable-next-line no-console
      .catch(err => {
        setDownloadMode(downloadModes.manual)
        console.error('Could not fetch the latest launcher version tag. Error: ', err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let link = `https://github.com/${owner}/${repository}/releases`

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (version) {
        window.location = `${link}/download/${version}/${filename}-${version.substr(1)}.${extension}`
      } else if (version === undefined) {
        window.location = `${link}/latest`
      }
    }
  }, [version, link, extension, filename])

  return (
    <Layout title="Launcher">
      <div className={style.launcher}>
        <Logo />
        <div className={style.content}>
          {downloadMode === downloadModes.automatic
            ? (<Button disabled><span>Download will begin shortly...</span></Button>)
            : (<Link href={link}><Button><span>Download manually</span></Button></Link>)
          }
        </div>
      </div>
    </Layout>
  )
}

export default LauncherPage
