import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { AboutUs } from './components/AboutUs/AboutUs';
import NavbarHeader from './components/NavbarHeader/NavbarHeader';
import { Services } from './components/Services/Services';
import { Estimate } from './components/Estimate/Estimate';
import Gallery from './components/Gallery/Gallery';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarHeader />
        <Switch>
          <Route exact path="/" />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/services" component={Services} />
          <Route path="/estimate" component={Estimate} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </div>
    );
  }
}
