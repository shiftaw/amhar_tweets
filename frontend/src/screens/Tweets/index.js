import React, { useState, useEffect, useContext } from 'react'
import EditTweet from './EditTweet'
import ListItem from './ListItem'
import './styles.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { UserContext } from '../../context/UserContext'
import { useLocation } from 'react-router-dom'

export default function Tweets() {
  const { user = { role: '' }, setUser } = useContext(UserContext)
  console.log('tweet', user)

  const [tweet, setTweet] = useState({
    message: '',
    hide: '',
  })

  const [edit, setEdit] = useState(false)

  const [data, setData] = useState([])

  useEffect(() => {
    pullTweets()
  }, [])

  const pullTweets = () => {
    axios.get('http://localhost:4000/tweet').then((res) => {
      console.log(res.data)
      setData(res.data)
      setTweet({ message: '', hide: false, _id: null })
    })
  }

  const handleTweetChange = ({ message, hide }) => {
    setTweet({ ...tweet, message, hide })
  }
  const handleDelete = (id) => {
    axios
      .delete('http://localhost:4000/tweet', { data: { _id: id } })
      .then((res) => {
        pullTweets()
      })
  }

  const handleSave = () => {
    console.log(tweet)
    if (tweet._id) {
      axios.put('http://localhost:4000/tweet', { data: tweet }).then((res) => {
        pullTweets()
      })
    } else {
      axios.post('http://localhost:4000/tweet', { data: tweet }).then((res) => {
        pullTweets()
      })
    }
    onClose()
  }

  const onClose = () => {
    setEdit(false)
    setTweet({ message: '', hide: '', _id: null })
  }
  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }
  const handleEdit = (tweet) => {
    setEdit(true)
    setTweet({ ...tweet })
  }

  return (
    <div className='tweet-container'>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 24,
          fontSize: 18,
        }}
      >
        {!user && (
          <Link to='/singin' className='nav-menu-item'>
            <span
              style={{
                fontSize: 18,
              }}
            >
              Log In
            </span>
          </Link>
        )}

        {user && (
          <div onClick={handleLogout} className='nav-menu-item'>
            <span>Log out</span>
          </div>
        )}
      </div>
      {edit && (
        <EditTweet
          message={tweet.message}
          onChange={handleTweetChange}
          onSave={handleSave}
          onClose={onClose}
        />
      )}
      <div className='tweet-header'>
        {user && user.role === 'admin' && (
          <button className='tweet-create' onClick={() => setEdit(true)}>
            Add More
          </button>
        )}
      </div>
      {data.map((twt) => {
        return (
          <ListItem
            isAdmin={user && user.role === 'admin'}
            message={twt.message}
            onEdit={() => handleEdit(twt)}
            onDelete={() => {
              handleDelete(twt._id)
            }}
          />
        )
      })}
    </div>
  )
}

const data = [
  'Commodo dolore esse ut do enim do consequat id elit eiusmod. Sit exercitation mollit qui reprehenderit esse sunt commodo. Deserunt pariatur incididunt irure occaecat enim voluptate non dolore excepteur. Pariatur nisi excepteur cupidatat qui culpa deserunt tempor cillum commodo duis esse ea et. Qui sunt veniam enim consectetur.',
  ,
  'Commodo dolore esse ut do enim do consequat id elit eiusmod. Sit exercitation mollit qui reprehenderit esse sunt commodo. Deserunt pariatur incididunt irure occaecat enim voluptate non dolore excepteur. Pariatur nisi excepteur cupidatat qui culpa deserunt tempor cillum commodo duis esse ea et. Qui sunt veniam enim consectetur.',
  'Commodo dolore esse ut do enim do consequat id elit eiusmod. Sit exercitation mollit qui reprehenderit esse sunt commodo. Deserunt pariatur incididunt irure occaecat enim voluptate non dolore excepteur. Pariatur nisi excepteur cupidatat qui culpa deserunt tempor cillum commodo duis esse ea et. Qui sunt veniam enim consectetur.',
]
