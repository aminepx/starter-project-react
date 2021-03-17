import React from 'react'
export default function NewStudent(props) {
    return (
        <div className="col-4 border p-5">
          <div className="d-flex justify-content-end">
          <button onClick={props.handlecancelEditfromHome} className={props.cancelEdit==true ? "btn-danger rounded-circle " : "d-none" } ><i className="fas fa-times"></i> </button>
          </div>
          <div className="avatar border mx-auto mt-5 " style={{backgroundImage:`url(${props.avatar || 'https://i.stack.imgur.com/l60Hf.png'})`, backgroundSize:"cover"}} />
          <form onSubmit={props.action=="ADD"? props.handleAddSubmit : props.handleEditSubmit} autoComplete="off">
            <div className="mb-4 mt-4 w-70 mx-auto">
              <input
              value={props.nom}
              name="nom"
              onChange={props.changeInput}
                placeholder="Firstname"
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-4 mt-4 w-70 mx-auto">
              <input
              value={props.prenom}
              name="prenom"
                onChange = {props.changeInput}
                placeholder="Lastname"
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-4 mt-4 w-70 mx-auto">
              <input
              value={props.email}
              name="email"
              onChange = {props.changeInput}
                placeholder="Email address"
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-4 mt-4 w-70 mx-auto">
              <input
              value={props.avatar}
              name="avatar"
              onChange = {props.changeInput}
                placeholder="Url Avatar"
                type="text"
                className="form-control"
              />
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                {props.textBtn} <i className={props.iconBtn} />
              </button>
            </div>
          </form>
        </div>
    )
}
