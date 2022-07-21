import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import './styles.scss'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
import { Link, useHistory } from 'react-router-dom'
import * as Fa from 'react-icons/fa'

export default function Signin() {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const email = JSON.stringify(localStorage.getItem('email'))
    const password = JSON.stringify(localStorage.getItem('password'))
    if (email) setEmail(email)
    if (password) setPassword(password)
  }, [])

  const { setUser } = React.useContext(UserContext)
  const handleLogin = () => {
    console.log({ email, password })

    localStorage.setItem('password', password)
    localStorage.setItem('email', email)

    axios
      .post('/auth/login', {
        name: 'shiftaw',
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data)
        setUser(res.data)
        history.push('/')
      })
      .catch(() => {
        console.log('error')
      })
  }

  const handelValueChange = (label) => {
    return (e) => {
      if (label === 'password') {
        setPassword(e.target.value)
      } else {
        setEmail(e.target.value)
      }
    }
  }
  return (
    <div className='signin'>
      <div className='signin-container'>
        <div className='signin-header'>
          <span className='signin-header-title'>Log In</span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Link className='signin-header-link' to={'/singup'}>
              Sign up
            </Link>
            <Fa.FaArrowRight color={'#969696'} />
          </div>
        </div>
        <div>
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
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}
