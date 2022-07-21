import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'
import React, { useContext } from 'react'
import Register from './screens/Register'
import Sidebar from './containers/Sidebar'
import DataAndReports from './screens/DataAndReport'
import Home from './screens/Home'
import AuthRoute from './AuthRoute'
import Signin from './screens/signin'
import Signup from './screens/Signup'
import { UserProvider } from './context/UserContext'
import Placess from './screens/Places'
import Tweets from './screens/Tweets'
function App() {
  const history = useHistory()
  return (
    <UserProvider>
      <Router history={history}>
        <Switch>
          <Route exact path='/'>
            <Tweets></Tweets>
          </Route>
          {/* <AuthRoute exact path='/register'>
            <Register />
          </AuthRoute>
          <AuthRoute exact path='/places'>
            <Placess></Placess>
          </AuthRoute>
          <AuthRoute exact path='/reports'>
            <DataAndReports />
          </AuthRoute> */}
          <Route exact path={'/singin'}>
            <Signin></Signin>
          </Route>
          {/* <Route exact path={'/tweets'}>
            <Tweets />
          </Route> */}
          <Route exact path={'/singup'}>
            <Signup />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  )
}

export default App
