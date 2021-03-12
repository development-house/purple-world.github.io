import React, {memo} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import YAML from 'yaml'
import {nanoid} from 'nanoid'

import Key from './Key'

import parseKeybindsData from './helpers/parseKeybindsData'

import keysConfig from './config/keys.yml'

import style from './Keyboard.module.scss'

const Keyboard = memo(({keyEvent, activeTags}) => {
  const keybindingsData = useStaticQuery(
    graphql`
      query Keyboard {
        allKeybindings {
          nodes {
            keybinds
            tags
          }
        }
      }
    `
  ).allKeybindings?.nodes[0]

  const keymap = parseKeybindsData(YAML.parse(keybindingsData.keybinds))

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
              tagsConfig={YAML.parse(keybindingsData.tags)}
            />
          ))}
        </div>
      ))}
    </div>
  )
})

export default Keyboard