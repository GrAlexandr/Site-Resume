import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { browserHistory } from 'react-router';

import NavBar from './headerComponent/header';
import HomePage from './pages/homePage';
import About from './pages/about';
import Skills from './pages/skills';
import Contacts from './pages/contacts/contacts';
import Footer from './footerComponent/footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="wrap">
            <NavBar />
            <Route name="home" exact path="/" component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/contacts" component={Contacts} />
            <Footer />
          </div>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;