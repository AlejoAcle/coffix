import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Main from '../components/Main/Main';




export const Routes = () => {
  return (
    <Router>
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/contact" component={Contact} />
        <Route path="/home" component={Main} />
        
    </Router>
  )
}
