import React, {useState} from 'react'

import Layout from '../../layout/Layout'
import Logo from '../../components/logo/Logo'
import CommandsSearch from '../../components/commands-search/CommandsSearch'
import CommandsList from '../../components/commands-list/CommandsList'

import style from './Commands.module.scss'

const CommandsPage = () => {
  const [search, setSearch] = useState(null)

  return (
    <Layout title="Commands list">
      <div className={style.commands}>
        <div className={style.header}>
          <div className={style.group}>
            <Logo to="/" className={style.logo} />
            <div className={style.title}>
              <h1>Commands list</h1>
              <span>Browse through or search for available commands</span>
            </div>
          </div>
        </div>
        <CommandsSearch searchEvent={setSearch} searchValue={search} />
        <CommandsList searchValue={search} />
      </div>
    </Layout>
  )
}

export default CommandsPage