import React from 'react'
import {nanoid} from 'nanoid'

import style from './Key.module.scss'

const Key = ({width, isSpacer, label, keybinds, keyEvent}) => {
  const onKeyEvent = (keyObject) => {
    keyEvent(keyObject)
  }

  return (
    <div
      className={`${style.key} ${isSpacer ? style.spacer : ''} ${!keybinds ? style.unassigned : ''}`}
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
          {keybinds && keybinds.slice(0, 2).map(keybind => (
            <div
              key={nanoid()}
              className={style.item}
            >
              <div className={style.tags}>
                {keybind.modifier && (
                  <span>{keybind.modifier}+</span>
                )}
              </div>
              <span>{keybind.desc}</span>
            </div>
          ))}
          {keybinds && keybinds.length > 2 && (
            <div className={style.item}>
              <span>+{keybinds.length - 2} more</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Key