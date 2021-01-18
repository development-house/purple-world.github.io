import React, {memo} from 'react'
import {nanoid} from 'nanoid'

import Key from './Key'

import parseKeybindsData from './helpers/parseKeybindsData'

import keysConfig from './config/keys.yml'
import tagsConfig from './config/tags.yml'
import keybindsData from '../../../configuration/keybindings/keybinds.yml'

import style from './Keyboard.module.scss'

const Keyboard = memo(({keyEvent, activeTags}) => {
  const keymap = parseKeybindsData(keybindsData)

  return (
    <div className={style.keyboard}>
      {keysConfig.length && keysConfig.map(({row, keys}) => (
        <div key={row} className={style.row}>
          {keys.length && keys.map(({key, width}) => (
            <Key
              key={nanoid()}
              width={width}
              isSpacer={key === '__spacer'}
              label={key}
              keybinds={keymap[key]}
              keyEvent={keyEvent}
              activeTags={activeTags}
              tagsConfig={tagsConfig}
            />
          ))}
        </div>
      ))}
    </div>
  )
})

export default Keyboard