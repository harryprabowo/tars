import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from 'react-router-dom';

import { 
  Home,
  Cars,
  Market
} from './containers';
import Navbar from './components/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCar,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

import './App.scss'

const App = () => {
  const links = [
    {
      path: "/home",
      name: "Home",
      icon: <FontAwesomeIcon size="lg" icon={faHome}/>
    },
    {
      path: "/cars",
      name: "Cars",
      icon: <FontAwesomeIcon size="lg" icon={faCar}/>
    },
    {
      path: "/market",
      name: "Market",
      icon: <FontAwesomeIcon size="lg" icon={faShoppingCart} />
    }
  ]

  return (
    <Router>
      <Navbar links={links} />
      <main id="App">
        <Switch>
          <Route path="/home" component={withRouter(props => (
            <Home {...props} />
          ))} />
          <Route path="/cars" component={withRouter(props => (
            <Cars {...props} />
          ))} />
          <Route path="/market" component={withRouter(props => (
            <Market {...props} />
          ))} />
          <Redirect exact path="/" to="/home"/>
        </Switch>
      </main>

    </Router>
  )
}

export default App;
