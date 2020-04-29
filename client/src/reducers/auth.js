/**
 * Reducer for updating global Auth state.
 * Defines a list of actions, each updates state by passing it a new object
 * which will trigger a rerender of any components using the AuthContext
 * @author Chris Ancheta
 */

import jwt from 'jsonwebtoken';
import { getInitialState } from '../authProvider'

function authReducer(state, action) {
  switch (action.type) {
    // Update auth state and send token to localStorage
    case 'login':
      const { token } = action.payload
      const decoded = jwt.decode(token);
      console.log(decoded.businesses);
      localStorage.setItem("jwt", token)
      return { user: { userId: decoded.uid, businesses: decoded.businesses, isAuthenticated: true }, error: '' }
      break
    // Clear token from localStorage and set default state
    case 'logout':
      console.log("logging out");
      localStorage.removeItem("jwt")
      return {
        user: {},
        isAuthenticated: false
      }
      break
    case 'error':
      const { error } = action.payload
      return {
        user: {},
        isAuthenticated: false,
        error
      }
    default:
      return state
  }
}

export default authReducer