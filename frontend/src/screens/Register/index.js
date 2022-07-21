import React from 'react'
import './styles.scss'
import Input from '../../components/Input'
import AddVictim from '../../containers/AddVictim'

const Register = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#f8f8f8',
      }}
    >
      <AddVictim></AddVictim>
    </div>
  )
}

export default Register
