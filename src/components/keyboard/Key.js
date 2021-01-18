import React from 'react'
import {nanoid} from 'nanoid'

import style from './Key.module.scss'

const Key = ({width, isSpacer, label, keybinds, keyEvent, activeTags, tagsConfig}) => {
  const onKeyEvent = (keyObject) => {
    keyEvent(keyObject)
  }

  let filteredKeybinds = []
  keybinds && keybinds.forEach(keybind => {
    if (activeTags.some(tag => keybind.tags.indexOf(tag) >= 0)) {
      filteredKeybinds.push(keybind)
    }
  })

  return (
    <div
      className={`${style.key} ${isSpacer ? style.spacer : ''} ${!filteredKeybinds.length ? style.unassigned : ''}`}
      data-width={width}
    >
      <div
        className={style.inner}
        onMouseEnter={() => onKeyEvent({key: label, keybinds})}
        onMouseLeave={() => onKeyEvent(null)}
      >
        <div className={style.label}>
          <span>{label}</span>
        </div>
        <div className={style.actions}>
          {filteredKeybinds.length > 0 && filteredKeybinds.slice(0, 2)
            .map(keybind => (
              <div
                key={nanoid()}
                className={style.item}
                style={{color: tagsConfig.find(t => t.tag === keybind.tags[0])?.color}}
              >
                <div className={style.tags}>
                  {keybind.modifier && (
                    <span>{keybind.modifier}+</span>
                  )}
                </div>
                <span>{keybind.desc}</span>
              </div>
            ))
          }
          {filteredKeybinds.length > 2 && (
            <div className={style.item}>
              <span>+{filteredKeybinds.length - 2} more</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Key