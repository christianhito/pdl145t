import React, { useState } from 'react'
import { getUser, getUserAssure } from '../../../api/user';
import AddUserModal from './AddUserModal';

const Users = (props) => {
	const { fixNavbar } = props;
	const [show, setShow] = useState(false);
	
    
	const [userList, setUserList ] = useState([])
    
    const fetchData = React.useCallback(() => {
      
        // getUserAssure()
        // .then(response => {
        //     $('#user_liste').DataTable().destroy();
        //     setUserList(response.data)
        //     console.log('user list ', response.data)
            
        // })
        // .catch((error) => {
            
        //   console.log(error.response.data)
        //   $('#user_liste').DataTable().destroy();
        //   setUserList([])
        // })

  
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
					</div>
				</div>
			</div>
			<div className="section-body mt-3">
				<div className="container-fluid">
					<div className="tab-content mt-3">
						<div className="tab-pane fade show active" id="user-list" role="tabpanel">
							{/* <div className="card">
								<div className="card-header">
									<h3 className="card-title">Utilisateurs</h3>
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
																<span className="tag tag-danger">Super Admin</span>
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
							</div> */}
							
							<iframe src="https://fortress.maptive.com/ver4/b9eeb7f2809d4baf600abba8ba7724cb&zoom=9" frameborder="0" width="1000" height="500" allow="geolocation"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>  

	</>
  )
}

export default Users