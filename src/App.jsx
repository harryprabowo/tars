import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  NavLink
} from 'react-router-dom';

import {
  Row,
  Col,
} from 'react-bootstrap';

import {
  Home,
} from './containers';

import { 
  Sidebar,
} from './components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCog
} from '@fortawesome/free-solid-svg-icons';

import './App.scss'

const App = () => {
  const links = [
    new Sidebar.ButtonPrototype("home", "Home", <FontAwesomeIcon icon={faHome} />),
    new Sidebar.ButtonPrototype("settings", "Settings", <FontAwesomeIcon icon={faCog} />),
  ]

  return (
    <Router>
      <Sidebar.Container>
        {
          links.map((link, index) => (
            <NavLink exact activeClassName='active' to={link.link}>
              <Sidebar.Button key={index + 1}>
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Sidebar.Button>
            </NavLink>
          ))
        }
      </Sidebar.Container>

      <main>
        <Switch>
          <Route path="/home" component={withRouter(props => (
            <Home {...props} />
          ))} />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
