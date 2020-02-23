import React, { Component } from 'react';
import NavContainer from './container/NavContainer';

import About from './component/about/About';
import Home from './component/Home';
import Customized from './component/customized';

import CategoriesContainer from './container/categoriesContainer/CategoriesContainer';
import HotsaleContainer from './container/categoriesContainer/HotsaleContainer';
import HotsaleGroupContainer from './container/categoriesContainer/HotsaleGroupContainer';
import HotsaleSingleContainer from './container/categoriesContainer/HotsaleSingleContainer';
import HandmadeContainer from './container/categoriesContainer/HandmadeContainer';
import AirBalloonContainer from './container/categoriesContainer/AirBalloonContainer';
import AirFoilBalloonContainer from './container/categoriesContainer/AirFoilBalloonContainer';
import DecorateGroupContainer from './container/categoriesContainer/DecorateGroupContainer';
import DecorateSingleContainer from './container/categoriesContainer/DecorateSingleContainer';

import CheckoutContainer from './container/checkoutContainer/CheckoutContainer';
import PaymentContainer from './container/paymentContainer/PaymentContainer';

import allFestival from './component/allFestival/allFestival';
import Footer from './component/Footer';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropNav: false,
      isBanner: true,
    }
  }

  toggleMeun = () => {
    this.setState({
      isDropNav: !this.state.isDropNav,
    })
  }

  closeDropNav = () => {
    this.setState({
      isDropNav: false,
    })
  }

  render() {
    let { isDropNav } = this.state
    return (
      <Router>
      <div className="App">
        <NavContainer closeDropNav={this.closeDropNav} toggleMeun={this.toggleMeun} isDropNav={isDropNav} />
        <div
          onClick={this.toggleMeun}
          className={`selectMask-box ${isDropNav ? "mask" : ""} `} >
        </div>
        {/* <DividerNews /> */}
        <div className="margin-top-80 mobile-margin-top-50">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories" component={CategoriesContainer} />
          <Route path="/hotsale" component={HotsaleContainer} />
          <Route path="/hotsalegroup" component={HotsaleGroupContainer} />
          <Route path="/hotsalesingle" component={HotsaleSingleContainer} />
          <Route path="/handmade" component={HandmadeContainer} />
          <Route path="/airballoon" component={AirBalloonContainer} />
          <Route path="/airfoilballoon" component={AirFoilBalloonContainer} />

          <Route path="/decorategroup" component={DecorateGroupContainer} />
          <Route path="/decoratesingle" component={DecorateSingleContainer} />

          <Route path="/customized" component={Customized} />
          <Route path="/allFestival" component={allFestival} />
          <Route path="/about" component={About} />

          <Route path="/checkout" component={CheckoutContainer} />
          <Route path="/payment" component={PaymentContainer} />

        </Switch>
        <Footer />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
