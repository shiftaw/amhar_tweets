import React, { useContext, useEffect, useState } from 'react'
import './styles.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'
import { UserContext } from '../../context/UserContext'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const { user, setUser } = useContext(UserContext)
  const [selected, setSelected] = useState('home')
  const location = useLocation()

  useEffect(() => {
    console.log({ user })
  }, [location])

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }
  return (
    <nav className={'nav-menu'}>
      <ul className='nav-menu-items'>
        <li
          className={
            selected === 'home'
              ? 'nav-menu-item  nav-menu-active'
              : 'nav-menu-item'
          }
        >
          <Link to='/' onClick={() => setSelected('home')}>
            <AiIcons.AiFillAppstore /> <span>Home</span>
          </Link>
        </li>

        <li
          className={
            selected === 'places'
              ? 'nav-menu-item nav-menu-active'
              : 'nav-menu-item'
          }
        >
          <Link to='/places' onClick={() => setSelected('places')}>
            <AiIcons.AiOutlineEnvironment />

            <span>Places of incident</span>
          </Link>
        </li>

        <li
          className={
            selected === 'reports'
              ? 'nav-menu-item nav-menu-active'
              : 'nav-menu-item'
          }
        >
          <Link to='/reports' onClick={() => setSelected('reports')}>
            <AiIcons.AiOutlineFileExclamation />
            <span>Report and Data</span>
          </Link>
        </li>

        {user && user.active && (
          <li
            className={
              selected === 'register'
                ? 'nav-menu-item nav-menu-active'
                : 'nav-menu-item'
            }
          >
            <Link to='/register' onClick={() => setSelected('register')}>
              <AiIcons.AiFillEdit />

              <span>Register victims</span>
            </Link>
          </li>
        )}
        <li
          className={
            selected === 'about'
              ? 'nav-menu-item nav-menu-active'
              : 'nav-menu-item'
          }
        >
          <Link to='/authorities' onClick={() => setSelected('about')}>
            <AiIcons.AiTwotoneBank />

            <span>Authorities </span>
          </Link>
        </li>
        <li
          className={
            selected === 'users'
              ? 'nav-menu-item nav-menu-active'
              : 'nav-menu-item'
          }
        >
          <Link to='/users' onClick={() => setSelected('user')}>
            <AiIcons.AiOutlineUser />
            <span>Users</span>
          </Link>
        </li>
      </ul>
      <div
        style={{
          position: 'absolute',
          bottom: 48,
          width: '100%',
          paddingLeft: 30,
        }}
      >
        {!user && (
          <Link to='/singin' className='nav-menu-item'>
            <FaIcons.IoMdPower />
            <span>Signin</span>
          </Link>
        )}

        {user && (
          <div onClick={handleLogout} className='nav-menu-item'>
            <FaIcons.IoMdPower />
            <span>Log out</span>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Sidebar
