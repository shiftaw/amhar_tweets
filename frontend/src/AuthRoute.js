import React from 'react'
import { Route } from 'react-router-dom'
import Sidebar from './containers/Sidebar'

export default function AuthRoute({ path, component, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100%',
      }}
    >
      <div style={{ width: '260px' }}>
        <Sidebar />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'calc(100% - 260px)',
          height: '100%',
          padding: 0,
        }}
      >
        <Route path={path} component={component} {...rest} />
      </div>
    </div>
  )
}
