import React, { useState } from 'react'
import { getUser, getUserAssure } from '../../../api/user';
import AddUserModal from './AddUserModal';

const Users = (props) => {
	const { fixNavbar } = props;
	const [show, setShow] = useState(false);
	
    
	const [userList, setUserList ] = useState([])
    
    const fetchData = React.useCallback(() => {
      
        getUserAssure()
        .then(response => {
            // $('#user_liste').DataTable().destroy();
            setUserList(response.data)
            console.log('user list ', response.data)
            
        })
        .catch((error) => {
            
          console.log(error.response.data)
        //   $('#user_liste').DataTable().destroy();
          setUserList([])
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
			<div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
				<div className="container-fluid">
					<div className="d-flex justify-content-between align-items-center">
						<ul className="nav nav-tabs page-header-tab">
							<li className="nav-item">
								<a
									className="nav-link active"
									id="user-tab"
									data-toggle="tab"
									href="#user-list"
								>
									Liste d'utilisateurs 
								</a>
							</li>
						</ul>
						<div className="header-action">
							<button onClick={handleShow} className="btn btn-primary">
								<i className="fe fe-plus mr-2" />
								Ajouter un utilisateur 
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="section-body mt-3">
				<div className="container-fluid">
					<div className="tab-content mt-3">
						<div className="tab-pane fade show active" id="user-list" role="tabpanel">
							<div className="card">
								<div className="card-header">
									<h3 className="card-title">Utilisateurs</h3>
									<div className="card-options">
										<form>
											<div className="input-group">
												<input
													type="text"
													className="form-control form-control-sm"
													placeholder="Search something..."
													name="s"
												/>
												<span className="input-group-btn ml-2">
													<button className="btn btn-sm btn-default" type="submit">
														<span className="fe fe-search" />
													</button>
												</span>
											</div>
										</form>
									</div>
								</div>
								<div className="card-body">
									<div className="table-responsive">
										<table className="table table-striped table-hover table-vcenter text-nowrap mb-0">
											<thead>
												<tr>
													<th className="w60">Nom</th>
													<th />
													<th />
													<th>Date de naissance </th>
													<th>Adresse</th>
													<th className="w100">Action</th>
												</tr>
											</thead>
											<tbody>
												{userList.map((item)=>{
													return(

														<tr key={item._id}>
															<td className="width45">
																<span
																	className="avatar avatar-blue"
																	data-toggle="tooltip"
																	data-placement="top"
																	data-original-title="Avatar Name"
																>
																	{item.nom[0]}{item.prenom[0]}
																</span>
															</td>
															<td>
																<h6 className="mb-0">{item.nom} {item.postnom} {item.prenom}</h6>
																<span>{item.email}</span><br/>
																<span>{item.telephone}</span><br/>
															</td>
															<td>
																{/* <span className="tag tag-danger">Super Admin</span> */}
															</td>
															<td>{item.date_naissance}</td>
															<td>
																{item.secteur.nom} <br/> 
																{item.adresse}
															</td>
															<td>
																<button
																	type="button"
																	className="btn btn-icon"
																	title="Modifier"
																>
																	<i className="fa fa-edit" />
																</button>
																<button
																	type="button"
																	className="btn btn-icon js-sweetalert"
																	title="Delete"
																	data-type="confirm"
																>
																	<i className="fa fa-trash-o text-danger" />
																</button>
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
			<AddUserModal show={show} handleClose={handleClose} />
		</div>
	</>
  )
}

export default Users