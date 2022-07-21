import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import Card from '../../components/Card'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

export default function Home() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        flex: 'flex',
        flexDirection: 'column',
        background: '#F7F7F7',
        padding: 24,
      }}
    >
      <Card></Card>
      <div style={{ width: 800 }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}
