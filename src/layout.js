import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'jquery'
import 'popper.js'
import './App.css'
import injectContext from './store/appContext'
import Home from './views/home';
import Navbar from './components/navbar'

const Layout = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}> 
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}
export default injectContext(Layout);