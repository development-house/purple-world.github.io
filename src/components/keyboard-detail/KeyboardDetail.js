import React from 'react'
import {nanoid} from 'nanoid'

import style from './KeyboardDetail.module.scss'

import keyStyle from '../keyboard/Key.module.scss'

const KeyboardDetail = ({currentKey}) => {
  return (
    <div className={style.detail}>
      <div className={`${style.key} ${keyStyle.key}`}>
        <div className={`${style.inner} ${keyStyle.inner} ${currentKey ? style.active : ''}`}>
          <div className={keyStyle.label}>
            <span>{currentKey ? currentKey.key : 'No key selected'}</span>
          </div>
          <div className={keyStyle.actions}>
            {currentKey?.keybinds && currentKey.keybinds.map(keybind => (
              <div
                key={nanoid()}
                className={`${style.action_item} ${keyStyle.item}`}
              >
                <div className={keyStyle.tags}>
                  {keybind.modifier && (
                    <span>{keybind.modifier}+</span>
                  )}
                </div>
                <span>{keybind.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyboardDetail

