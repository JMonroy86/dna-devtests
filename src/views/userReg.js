import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Media from '../components/mediaCard'
import { Context } from '../store/appContext'

const UsersReg = () => {
  const { store, actions } = useContext(Context)
  return (
    <>
      {
        store.currentUser !== null ?
          <div className="container">
            <div className="row">
              <div className="col-md-12 pt-5">
                <h3>Wellcome {store.currentUser.name}  {store.currentUser.lastname}</h3>
              </div>
            </div>
            <div className="row pt-5">
              {store.users.map((user, i) => {
                return (
                  <Media user={user} key={i} />
                )
              })}
            </div>
          </div>
          :
          <h1>Loading...</h1>
      }
    </>
  )
}
export default UsersReg;