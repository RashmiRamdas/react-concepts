import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header style={{marginRight: '20px'}}>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/useEffect'>Use Effect</Link></li>
        <li><Link to='/useMemo'>Use Memo</Link></li>
        <li><Link to='/useReducer'>Use Reducer</Link></li>
        <li><Link to='/useState'>Use State</Link></li>
        <li><Link to='/hoc'>HOC</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
