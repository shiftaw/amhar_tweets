import React from 'react'
import './styles.scss'
import * as Fa from 'react-icons/fa'

export default function ListItem({
  message,
  onDelete,
  onEdit,
  isAdmin = true,
}) {
  return (
    <div className='tweet-item'>
      <div className='tweet-message'>{message}</div>
      <div className='tweet-btncontainer'>
        {!isAdmin && (
          <a
            className='tweet-button'
            href={
              'https://twitter.com/intent/tweet?text=' +
              encodeURIComponent(message)
            }
            data-size='large'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tweet
          </a>
        )}
        {isAdmin && (
          <Fa.FaPen color='white' size={24} onClick={onEdit}></Fa.FaPen>
        )}
        {isAdmin && <div style={{ width: '32px' }}></div>}
        {isAdmin && (
          <Fa.FaTrash color='white' size={24} onClick={onDelete}></Fa.FaTrash>
        )}
      </div>
    </div>
  )
}
