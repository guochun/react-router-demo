import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import About from './components/About'
import Home from './components/Home'
//import User from './components/User'
import Contact from './components/Contact'


class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/contact" component={Contact} />
              <Route path='/about/:user' render={(...props) => { 
                  console.log(...props)
                  return <About {...props}/>
                }} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
