import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import YAML from 'yaml'

import searchItems from './helpers/searchItems'

import style from './CommandsList.module.scss'

const CommandsList = ({searchValue}) => {
  const commandsData = YAML.parse(useStaticQuery(
    graphql`
      query CommandsList {
        allCommands {
          nodes {
            commands
          }
        }
      }
    `
  ).allCommands?.nodes[0]?.commands)

  const filteredItems = searchItems(commandsData, searchValue)

  return (
    <div className={style.list}>
      <div className={style.container}>
        {filteredItems && filteredItems.length
          ? (
            <ul className={style.items}>
              {filteredItems.map(item => (
                <li key={item.command}>
                  <span>/{item.command}</span>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          )
          : (
            <div className={style.empty}>
              <span>No commands matching the search query</span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CommandsList