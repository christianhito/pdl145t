import React, { Component, useState } from 'react'
import { connect } from 'react-redux';
import { getPua } from '../../../api/pua';
import AddPartner from './AddPartner';

const Departments = (props) => {
    const { fixNavbar } = props;
    const [partnerList, setPartnerList] = useState([])
	const [show, setShow] = useState(false);
    
    const fetchData = React.useCallback(() => {
      
        getPua()
        .then(response => {
            // $('#user_liste').DataTable().destroy();
            setPartnerList(response.data)
            console.log('user list ', response.data)
            
        })
        .catch((error) => {
            
          console.log(error.response.data)
        //   $('#user_liste').DataTable().destroy();
          setPartnerList([])
        })

  
    }, [])
    React.useEffect(() => {
      fetchData()
    }, [fetchData])

    
	const handleClose = () => setShow(false);
	
	const handleShow = () => setShow(true);
    
    
  return (
    <>
        <div>
            <div>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item"><a className="nav-link active" id="Departments-tab" data-toggle="tab" href="#Departments-list">Liste de partenaires</a></li>
                            </ul>
                            <div className="header-action">
                                <button type="button" className="btn btn-primary" onClick={handleShow}>
                                    <i className="fe fe-plus mr-2" />Nouveau partenaire
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="tab-content mt-3">
                            <div className="tab-pane fade show active" id="Departments-list" role="tabpanel">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Liste de partenaires</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-vcenter table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Nom</th>
                                                        <th>Adresse</th>
                                                        <th>Matricule</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
												{partnerList.map((item, index)=>{
													return(

														<tr key={item._id}>
                                                            <td>{index+1}.</td>
                                                            <td><div className="font-15">{item.nom}</div></td>
                                                            <td>
                                                                {item.province.nom} {item.territoire.nom} {item.secteur.nom} <br/>
                                                                {item.adresse}
                                                            </td>
                                                            <td>{item.matricule}</td>
                                                            <td>
                                                                <button type="button" className="btn btn-icon" title="Edit"><i className="fa fa-edit" /></button>
                                                                <button type="button" className="btn btn-icon js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                                                            </td>
														</tr>
													)
												})}
                                                
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Modal */}

            <AddPartner show={show} handleClose={handleClose} />
            
        </div>

        
    </>
  )
}


const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Departments);