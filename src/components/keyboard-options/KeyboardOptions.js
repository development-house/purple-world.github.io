import React, {memo, useState} from 'react'
import SVG from 'react-inlinesvg'
import OutsideClickHandler from 'react-outside-click-handler'

import Button from '../button/Button'

import toggleArrayItem from '../../util/helpers/toggleArrayItem'

import tagsData from '../keyboard/config/tags.yml'

import style from './KeyboardOptions.module.scss'

const KeyboardOptions = memo(({activeTags, tagsEvent}) => {
  const [open, setOpen] = useState(false)

  const handleOptionSelect = (itemTag) => {
    const updatedTags = toggleArrayItem(activeTags, itemTag)
    tagsEvent(updatedTags)
  }

  return (
    <div className={style.options}>
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <div className={`${style.select} ${open ? style.active : ''}`}>
          <Button
            className={style.button}
            onClick={() => setOpen(!open)}
            primary
          >
            <span>Select filters</span>
          </Button>
          {tagsData && tagsData.length && (
            <div className={style.options}>
              {tagsData.map(option => (
                <Button
                  key={option.tag}
                  className={style.option}
                  onClick={() => handleOptionSelect(option.tag)}
                >
                  <SVG src={`/icons/${activeTags.includes(option.tag) ? 'checkmark' : 'crossmark'}.svg`} />
                  <span style={{color: option.color ? option.color : 'inherit'}}>{option.label}</span>
                </Button>
              ))}
            </div>
          )}
        </div>
      </OutsideClickHandler>
    </div>
  )
})

export default KeyboardOptions