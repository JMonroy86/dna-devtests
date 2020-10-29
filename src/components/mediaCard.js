import React from 'react'

const Media = (props) => {
  return (
    <div className="col-md-4 py-3">
      <div className="media border p-3 shadow-lg">
        <img src="../img/user.png" className="mr-3 img-fluid" width="60" height="60" alt="..." />
        <div className="media-body">
          <h5 className="mt-0">{`${props.user.name} ${props.user.lastname}`}</h5>
            {props.user.email}
        </div>
      </div>
    </div>
  )
}
export default Media
