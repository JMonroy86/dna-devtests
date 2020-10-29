import React from 'react'
import RegisterForm from '../components/formRegister';

const Register = () => {
  return (
    <div className="contianer">
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="card mt-5 rounded">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <img src="../img/9 SCENE.svg" className="img-fluid w-100 mt-4" alt=""/>
                </div>
                <div className="col-md-6">
                  <RegisterForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register;