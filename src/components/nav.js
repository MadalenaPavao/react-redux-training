import React, { Component, Suspense, Fragment } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Connexion from "./connexion/Connexion";
import { connect } from "react-redux";
import "./nav.css";

// Lazy loading
const lazyApp = React.lazy(() => import("../Actualities"));
const lazyProductList = React.lazy(() => import("./ProductList"));
const lazyNotFound = React.lazy(() => import("./NotFound"));
const lazyProductDetails = React.lazy(() => import("./ProductDetails"));

class Nav extends Component {
  state = {
    isAuth: true,
  };

  render() {
    return (
      <Suspense fallback={<div>Chargement...</div>}>
        <Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="#">
              Food Truck
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/" exact>
                    Accueil <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/catalogue">
                    Catalogue
                  </NavLink>
                </li>
              </ul>
              <div className="menu item" to="/login">
                <i className="fas fa-user"></i>
              </div>
              <div className="menu item" to="/cart">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="menu item">
                UserName
                <i className="fas fa-sign-out-alt"></i>
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/" exact component={lazyApp} />
            <Route path="/conn" exact component={Connexion} />
            {this.state.isAuth ? (
              <Route path="/product" exact component={lazyProductList} />
            ) : null}
            <Route path="/product/:id" component={lazyProductDetails} />
            <Route component={lazyNotFound} />
          </Switch>
        </Fragment>
      </Suspense>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};

export default connect(mapStateToProps)(Nav);
