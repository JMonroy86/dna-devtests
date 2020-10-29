import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { Context } from '../store/appContext'


const RegisterForm = () => {
  const [isValid, setIsvalid] = useState({ formText: "d-none", formValid: "", formAlert: "d-none" })
  const uniqid = require('uniqid');
  const history = useHistory();
  const { actions } = useContext(Context)
  const [state, setState] = useState({
    name: "",
    lastname: "",
    email: "",
    psw: "",
    pswC: "",
  })
  const handleChange = e => {
    const { psw, pswC } = state
    setState({ ...state, [e.target.name]: e.target.value })

    if (psw !== pswC) {
      setIsvalid({ ...isValid, formValid: "is-invalid", formText: "" })
    } else {
      setIsvalid({ ...isValid, formValid: "is-valid", formText: "d-none" })
    }

  }
  const register = e => {
    e.preventDefault()
    const { psw, pswC, name, lastname, email } = state
    if (name === "" || lastname === "" || email === "" || psw === "" || pswC === "") {
      setIsvalid({ ...isValid, formAlert: "" })
    }
    else {
      setIsvalid({ ...isValid, formAlert: "d-none" })
      actions.userRegister(state, uniqid(), history)
    }
  }
  return (
    <form onSubmit={e => register(e)}>
      <div className={"alert alert-danger " + isValid.formAlert} role="alert">
        Some fields are missing</div>
      <div className="form-group">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="text" name="name" className="form-control" onChange={e => handleChange(e)} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Last Name</label>
              <input type="text" name="lastname" className="form-control" onChange={e => handleChange(e)} />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" className="form-control" onChange={e => handleChange(e)} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="psw" className={"form-control " + isValid.formValid} id="exampleInputPassword1" onChange={e => handleChange(e)} />
              <small className={"form-text text-danger " + isValid.formText}>Password must be the same</small>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1"> Confirm Password</label>
              <input type="password" name="pswC" className={"form-control " + isValid.formValid} id="exampleInputPassword1" onChange={e => handleChange(e)} />
              <small className={"form-text text-danger " + isValid.formText}>Password must be the same</small>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-right">
        <div className="col-md-12">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </div>
    </form>
  )
}
export default RegisterForm;