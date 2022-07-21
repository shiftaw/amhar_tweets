import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListItem from '../../components/VictimeListItem'
import './styles.scss'
export default function DataAndReports() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/victim').then((res) => setData(res.data))
  }, [])
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        padding: 24,
        background: '#fff',
      }}
    >
      <table className='report-table'>
        <tr className='list-item'>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Region</th>
          <th>Zone</th>
          <th>Woreda</th>
          <th>Kebelle</th>
        </tr>

        {data.map((dat) => {
          return <ListItem {...dat}></ListItem>
        })}
      </table>
    </div>
  )
}
