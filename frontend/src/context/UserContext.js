import * as React from 'react'
const UserContext = React.createContext()
const DispatchUserContext = React.createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  React.useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
