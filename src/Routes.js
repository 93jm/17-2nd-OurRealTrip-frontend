import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import SignIn from './Pages/SignIn/SignIn';

import Airline from './Pages/Airline/Airline';
import AirlineList from './Pages/Airline/AirlineList/AirlineList';

import StayMain from './Pages/Stay/StayMain/StayMain';
import StayList from './Pages/Stay/StayList/StayList';
import StayDetail from './Pages/Stay/StayDetail/StayDetail';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Airline} />
          <Route exact path="/airlinelist" component={AirlineList} />
          <Route exact path="/staymain" component={StayMain} />
          <Route exact path="/staylist" component={StayList} />
          <Route exact path="/staydetail" component={StayDetail} />
          <Route exact path="/staydetail/:id" component={StayDetail} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
