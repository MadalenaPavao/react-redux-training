import React, { Component, Suspense, Fragment } from 'react';
import { NavLink, Route, Switch, Redirect, } from 'react-router-dom'
import Connexion from './Connexion';
import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';
import Memory from './Memory';

//import App from '../App';
//import ProductList from './ProductList';
//import NotFound from './NotFound';
//import ProductDetails from './ProductDetails';


// Lazy loading 
const lazyApp = React.lazy(() => import('../App'))
const lazyProductList = React.lazy(() => import('./ProductList'))
const lazyNotFound = React.lazy(() => import('./NotFound'))
//const lazyProductDetails= React.lazy(()=> import('./ProductDetails'))
//const lazyProductDetailsHook = React.lazy(()=> import('./hooks/ProductDetailsHook'))

class Nav extends Component {

    state = {
        isAuth: true
    }

    render() {
        return (

            <Suspense fallback={<div>Chargement...</div>}>
                <Fragment>

                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" exact >Home </NavLink>
                            </li>
                            {/* <li>
                <NavLink to="/product" exact >Catalogue </NavLink>
            </li> */}
                            <li>
                                <NavLink to="/memory" exact >Memory </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/" exact />
                        <Route path="/conn" exact component={Connexion} />
                        <Route path="/memory" exact component={Memory} />
                        {this.state.isAuth ? <Route path="/product" exact component={lazyProductList} /> : null}
                        <Route path="/product/:id" component={ProductDetails} />
                        <Route component={lazyNotFound} />
                    </Switch>
                </Fragment>
            </Suspense>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    }
}

export default connect(mapStateToProps)(Nav)

