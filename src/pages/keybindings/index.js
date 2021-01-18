import React, {useState} from 'react'

import Layout from '../../layout/Layout'
import Logo from '../../components/logo/Logo'
import Keyboard from '../../components/keyboard/Keyboard'
import KeyboardDetail from '../../components/keyboard-detail/KeyboardDetail'
import KeyboardOptions from '../../components/keyboard-options/KeyboardOptions'

import style from './Keybindings.module.scss'

const KeybindingsPage = () => {
  const [key, setKey] = useState(null)
  const [activeTags, setActiveTags] = useState(['general', 'vehicle', 'jobs'])

  return (
    <Layout title="Keybindings">
      <div className={style.keybindings}>
        <div className={style.header}>
          <div className={style.group}>
            <Logo to="/" className={style.logo} />
            <div className={style.title}>
              <h1>Keybindings guide</h1>
              <span>Hover over the target key to see its detail</span>
            </div>
          </div>
        </div>
        <Keyboard keyEvent={setKey} activeTags={activeTags} />
        <div className={style.footer}>
          <KeyboardDetail currentKey={key} />
          <KeyboardOptions activeTags={activeTags} tagsEvent={setActiveTags} />
        </div>
      </div>
    </Layout>
  )
}

export default KeybindingsPage