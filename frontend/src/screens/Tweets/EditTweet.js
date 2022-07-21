import React from 'react'
import * as Fa from 'react-icons/fa'

export default function EditTweet({ onClose, onSave, onChange, message = '' }) {
  const count = () => message.length
  const isValid = () => message.length > 0 && message.length < 281
  return (
    <div className='tweet-edit' onClick={onClose}>
      <div className='tweet-edit-message' onClick={(e) => e.stopPropagation()}>
        <div className='tweet-edit-close'>
          <Fa.FaTimesCircle color='#000000' size={24} onClick={onClose} />
        </div>
        <textarea
          placeholder='Write tweets here'
          onChange={(e) => {
            onChange({ message: e.target.value, hide: true })
          }}
          autoFocus
          multiple
          type='text'
          className='tweet-edit-input'
          value={message}
        />
        <button
          disabled={!isValid()}
          className='tweet-edit-save'
          onClick={onSave}
        >
          Save
        </button>
        <span className='tweet-edit-count'>{count()}</span>
      </div>
    </div>
  )
}
