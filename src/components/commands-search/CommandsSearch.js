import React from 'react'
import SVG from 'react-inlinesvg'

import style from './CommandsSearch.module.scss'

const CommandsSearch = ({searchEvent, searchValue}) => {
  return (
    <div className={style.search}>
      <div className={style.container}>
        <input
          type="text"
          onChange={({target: {value}}) => searchEvent(value)}
          value={searchValue || ''}
          placeholder="Search by name or keywords..."
        />
        <div
          className={style.reset}
          onClick={() => searchEvent(null)}
        >
          <SVG src={'/icons/crossmark.svg'} />
        </div>
      </div>
    </div>
  )
}

export default CommandsSearch