import React from 'react'
import LoginForm from '../components/form';

const Login = () => {
  return (
    <div className="contianer">
      <div className="row">
        <div className="col-md-6 offset-3">
          <div className="card mt-5">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <img src="../img/login.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="col-md-6">
                  <LoginForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;