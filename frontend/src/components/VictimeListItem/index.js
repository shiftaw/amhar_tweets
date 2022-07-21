import React from 'react'
import './styles.scss'

export default function ListItem({
  fName,
  lName,
  age,
  sex,
  zone,
  woreda,
  kebelle,
  region = 'Oromia',
}) {
  return (
    <tr className='list-item'>
      <td>
        <span
          style={{
            paddingRight: 8,
          }}
        >
          {fName}
        </span>
      </td>
      <td>{lName}</td>
      <td>{age}</td>
      <td>{sex}</td>
      <td>{region}</td>
      <td>{zone}</td>
      <td>{woreda}</td>
      <td>{kebelle}</td>
    </tr>
  )
}
