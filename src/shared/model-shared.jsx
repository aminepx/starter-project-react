export default function Modal(props){
    return(
    
    <div>
  
    {/* Modal */}
    <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">More Details of <span className="badge bg-warning text-dark">{this.state.moreInfo.nom}</span></h5>
            {}
            <button type="button" className="btn-close border-0 bg-transparent " data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i> </button>
            
          </div>
          <div className="modal-body d-flex">
          <img src={props.moreInfo.avatar} alt=""/>
          <div className="d-flex  flex-column m-3">
          <h5><span className="badge bg-success text-white">Nom :</span></h5>
          <p>{props.moreInfo.nom}</p>
          <h5><span className="badge bg-info  text-white">Prenom :</span></h5>
          <p>{props.moreInfo.prenom}</p>
          <h5><span className="badge bg-warning  text-white">Email :</span></h5>
          <p>{props.moreInfo.email}</p>
          </div>
          </div>
          <div className="modal-footer">
            <button type="button" className={props.moreInfo.ispresent==false?"btn btn-success":"d-none"}>Present</button>
            <button type="button" onClick={props.handleSetPresence} className={props.moreInfo.ispresent==true?"btn btn-danger":"d-none"}>Absent</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}