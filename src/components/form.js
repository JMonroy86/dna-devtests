import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { Context } from '../store/appContext'


const LoginForm = () => {
  const history = useHistory();
  const {store, actions } = useContext(Context)
  const [state, setState] = useState({
    email: "",
    psw: ""
  })
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const formSubmited = e => {
    e.preventDefault()
    actions.sendData(state, history)
  }
  return (
    <>
      {
        !!store.errors && (
          <div className="row">
            <div className="col-md-12">
              <div className="alert alert-warning myalert" role="alert">{store.errors} </div>
            </div>
          </div>
        )
      }
      <form onSubmit={e => formSubmited(e)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => handleChange(e)} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" name="psw" className="form-control" id="exampleInputPassword1" onChange={e => handleChange(e)} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
export default LoginForm;