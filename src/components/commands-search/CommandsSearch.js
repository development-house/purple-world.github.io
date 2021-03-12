import React from 'react'

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
          <span>X</span>
        </div>
      </div>
    </div>
  )
}

export default CommandsSearch