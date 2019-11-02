import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import { Home } from './containers';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCog
} from '@fortawesome/free-solid-svg-icons';

import './App.scss'

const App = () => {
  const links = [
    <a href="/"><FontAwesomeIcon icon={faHome} /> Home</a>,
    <a href="/settings"><FontAwesomeIcon icon={faCog} /> Settings</a>,
  ]

  return (
    <Router>
      <Sidebar links={links} />
      <main>
        <Switch>
          <Route path="/home" component={withRouter(props => (
            <Home {...props} />
          ))} />
        </Switch>
      </main>
      <Footer>
        Hahaha
      </Footer>
    </Router>
  )
}

export default App;
