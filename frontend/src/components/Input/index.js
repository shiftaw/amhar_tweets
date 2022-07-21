import React from 'react'
import './styles.scss'

const Input = ({ type, ...rest }) => {
  return (
    <div style={{ height: '50px', width: '100%', flex: 1, display: 'flex' }}>
      <input type={type} {...rest} className='input' />
      <datalist id='sex' style={{ width: '100%' }} defaultValue='Female'>
        <option data-value='Female' />
        <option data-value='Male' />
      </datalist>

      <datalist id='region' style={{ width: '100%' }} defaultValue='Oromia'>
        <option value='Oromia'> Oromia</option>
        <option value='Benshangul gumz' />
        <option value='Sidama' />
        <option value='SNNP' />
        <option value='Addis Abeba' />
        <option value='Tigray' />
        <option value='Afar' />
        <option value='Somalia' />
        <option value='Harar' />
        <option value='Drie Dawa' />
        <option value='Gurage' />
        <option value='South West' />
      </datalist>
    </div>
  )
}

export default Input
