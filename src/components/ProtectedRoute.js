import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAuthentificated } from '../helpers/auth'

const ProtectedRoute = ({component: Component, ...rest}) => {
  // const 
  return (
      <Route
        {...rest}
        render={(props) => 
            isAuthentificated() ? (
                <Component {...props}/>
            ) : (
                <Redirect to={'/login'}/>
            )
        }
      />
  )
}

export default ProtectedRoute