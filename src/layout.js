import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import injectContext from './store/appContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'jquery'
import 'popper.js'
import './App.css'
import MasterRoute from './layouts/master_layout'
import Home from './views/home';
import Navbar from './components/navbar'
import Login from './views/login'
import Register from './views/register'
import UsersReg from './views/userReg'

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <MasterRoute exact path="/List" component={UsersReg} />
      </Switch>
    </BrowserRouter>
  )
}
export default injectContext(Layout);