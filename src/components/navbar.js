import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'


const Navbar = () => {
  const { store, actions } = useContext(Context)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          {
            store.currentUser !== null ?
              (
                <>
                <li className="nav-item active">
                  <Link className="nav-link" to="/List">User Registed <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/" onClick={()=>actions.logout()}>LogOut <span className="sr-only">(current)</span></Link>
                </li>
                </>
              )
              :
              (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Register">Register</Link>
                  </li>
                </>
              )
          }
        </ul >

      </div >
    </nav >
  )
}
export default Navbar;