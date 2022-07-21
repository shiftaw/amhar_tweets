import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import './styles.scss'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
import { Link, useHistory } from 'react-router-dom'

import * as Fa from 'react-icons/fa'

export default function Signup() {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const { setUser } = React.useContext(UserContext)
  const handleLogin = () => {
    console.log({ email, password })

    axios
      .post('/auth/signup', {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data)
        resetMessage()
        setMessage('Sign up successful')

        setUser(res.data)
        setTimeout(() => {
          history.push('/')
        }, 1000)
      })
      .catch(() => {
        console.log('error')
        setMessage('Sign up error')
        resetMessage()
      })
  }

  const resetMessage = () => {
    setTimeout(() => setMessage(''), 1000)
  }

  const handelValueChange = (label) => {
    return (e) => {
      if (label === 'password') {
        setPassword(e.target.value)
      } else if (label === 'name') {
        setName(e.target.value)
      } else {
        setEmail(e.target.value)
      }
    }
  }
  return (
    <div className='signin'>
      <div
        style={{
          position: 'absolute',
          top: 200,
          fontSize: 24,
          color: error ? 'red' : 'green',
        }}
      >
        {message}
      </div>
      <div className='signin-container'>
        <div className='signin-header'>
          <span className='signin-header-title'>Sign up</span>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Link className='signin-header-link' to={'/singin'}>
              Log in
            </Link>
            <Fa.FaArrowRight color={'#969696'} />
          </div>
        </div>
        <div>
          <div className='spacer'> </div>
          <Input
            autoComplete='off'
            placeholder={'Name'}
            onChange={handelValueChange('name')}
          ></Input>
          <div className='spacer'> </div>
          <Input
            autoComplete='off'
            placeholder={'Enter email'}
            onChange={handelValueChange('email')}
          ></Input>
          <div className='spacer'> </div>
          <Input
            autoComplete='off'
            placeholder={'Password'}
            type={'password'}
            onChange={handelValueChange('password')}
          ></Input>
        </div>
        <div className='spacer'> </div>
        <div className='spacer'> </div>

        <div style={{ width: '100%' }}>
          <button className='btn' onClick={handleLogin}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}
