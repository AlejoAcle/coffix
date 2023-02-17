import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';




export const Routes = () => {
  return (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                
                <li>
                    <Link to='/about'>About us</Link>
                </li>
                
                <li>
                    <Link to='/privacy'>Privacy</Link>
                </li>
                
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    </Router>
  )
}