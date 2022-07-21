import React from 'react'
import './styles.scss'

export default function GenderSelector({ selected, onSelect }) {
  return (
    <div className='gender-container'>
      <div
        className={
          selected === 'F'
            ? 'gender-container-item gender-active'
            : 'gender-container-item'
        }
        onClick={() => onSelect('F')}
      >
        Female
      </div>

      <div
        className={
          selected === 'M'
            ? 'gender-container-item gender-active'
            : 'gender-container-item'
        }
        onClick={() => onSelect('M')}
      >
        Male
      </div>
    </div>
  )
}
