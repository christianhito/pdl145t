import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	statisticsAction,
	statisticsCloseAction
} from '../../../actions/settingsAction';
import { getPuaId, getPuaIdAnnuel, getPuaIdJour, getPuaIdMois, getPuaIdSemestre, getPuaIdTrimestre } from '../../../api/pua';
import { getUtilisationAssuranceId } from '../../../api/utilisationAssurance';

const Employee = (props) => {
	
	let history = useHistory()

	const provinceDataState = useSelector(state=> state.updateProvinceState.provinceDataState)  
	console.log(provinceDataState)
	
	const { fixNavbar, statisticsOpen, statisticsClose } = props;

	
    const [assureList, setAssureList] = useState([])
    const [activeLink, setActiveLink] = useState(0)
    const [puaList, setPuaList] = useState([])
    const [puaId, setPuaId] = useState([])

	
    useEffect(()=>{
        
        if ( provinceDataState._id === undefined) {
            history.push('/')
        }
    }, [history])

  const fetchData = React.useCallback(() => {
	getUtilisationAssuranceId(provinceDataState._id)
        .then((response) => {
            setAssureList(response.data)
        
        console.log('setProvinceList ', response.data)
        })
        .catch((error) => {
        console.log(error)
        })
		
	getPuaId(provinceDataState._id)
		.then((response) => {
			setPuaList(response.data)
		
		console.log('setProvinceList ', response.data)
		})
		.catch((error) => {
		console.log(error)
		})

    }, [])
    React.useEffect(() => {
    fetchData()
    }, [fetchData])

	const handlePuaId = (id) => {
		setPuaId(id)
		getPuaIdJour(id)
		.then((response) => {
			setAssureList(response.data)
		
		console.log('setProvinceList ', response.data)
		})
		.catch((error) => {
		console.log(error)
		})
	}
	
	const handleFilter = (e, number) => {
		e.preventDefault()
		// console.log(number)
		setActiveLink(number)

		if (number === 1) {
			getPuaIdJour(puaId)
			.then((response) => {
				setAssureList(response.data)
			
			console.log('setProvinceList ', response.data)
			})
			.catch((error) => {
			console.log(error)
			})
		} else if(number === 2)   {
			getPuaIdMois(puaId)
			.then((response) => {
				setAssureList(response.data)
			
			console.log('setProvinceList ', response.data)
			})
			.catch((error) => {
			console.log(error)
			})
		} else if(number === 3)   {
			getPuaIdTrimestre(puaId)
			.then((response) => {
				setAssureList(response.data)
			
			console.log('setProvinceList ', response.data)
			})
			.catch((error) => {
			console.log(error)
			})
		} else if(number === 4)   {
			getPuaIdSemestre(puaId)
			.then((response) => {
				setAssureList(response.data)
			
			console.log('setProvinceList ', response.data)
			})
			.catch((error) => {
			console.log(error)
			})
		} else if(number === 5)   {
			getPuaIdAnnuel(puaId)
			.then((response) => {
				setAssureList(response.data)
			
			console.log('setProvinceList ', response.data)
			})
			.catch((error) => {
			console.log(error)
			})
		}
	}
  return (
	<>
		<div>
			<div>
				<div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center mb-3">
							<ul className="nav nav-tabs page-header-tab">
								<li className="nav-item">
									<a
										className={`nav-link ${activeLink === 0 && "active"}`}
										id="Employee-tab"
										// data-toggle="tab"
										href="#"
										onClick={(e)=>{handleFilter(e, 0) }}
									>
										Journalier 
									</a>
								</li>
								<li className="nav-item">
									<a
										className={`nav-link ${activeLink === 1 && "active"}`}
										id="Employee-tab"
										// data-toggle="tab"
										href="#"
										onClick={(e)=>{handleFilter(e, 1) }}
									>
										Hebdomadaire 
									</a>
								</li>
								<li className="nav-item">
									<a
										className={`nav-link ${activeLink === 2 && "active"}`}
										id="Employee-tab"
										// data-toggle="tab"
										href="#Employee-Request"
										onClick={(e)=>{handleFilter(e, 2) }}
									>
										Mensuel
									</a>
								</li>
								<li className="nav-item">
									<a
										className={`nav-link ${activeLink === 3 && "active"}`}
										id="Employee-tab"
										// data-toggle="tab"
										href="#Employee-Request"
										onClick={(e)=>{handleFilter(e, 3) }}
									>
										Trimestriel  
									</a>
								</li>
								<li className="nav-item">
									<a
										className={`nav-link ${activeLink === 4 && "active"}`}
										id="Employee-tab"
										// data-toggle="tab"
										href="#Employee-Request"
										onClick={(e)=>{handleFilter(e, 4) }}
									>
										Semestriel 
									</a>
								</li>
								<li className="nav-item">
									<a
										className={`nav-link ${activeLink === 5 && "active"}`}
										id="Employee-tab"
										// data-toggle="tab"
										href="#Employee-Request"
										onClick={(e)=>{handleFilter(e, 5) }}
									>
										Annuel
									</a>
								</li>
							</ul>
						</div>
						<div className="row">
							<div className="col-lg-6 col-md-6">
								<div className="card">
									<div className="card-body w_sparkline">
										<div className="details">
											<span>Récus</span>
											<h3 className="mb-0">
												<span className="counter">	<CountUp end={614} /></span>
											</h3>
										</div>
										<div className="w_chart">
											<div id="mini-bar-chart1" className="mini-bar-chart" />
										</div>
									</div>
								</div>
								{/* 
									<div className="w_chart">
											<span
												ref={this.sparkline1}
												id="mini-bar-chart1"
												className="mini-bar-chart"
											></span>
										</div>
								*/}
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="card">
									<div className="card-body w_sparkline">
										<div className="details">
											<span>Non recu</span>
											<h3 className="mb-0">
												<CountUp end={124} />
												{/* <span >124</span> */}
											</h3>
										</div>
										<div className="w_chart">
											<span
												// ref={this.sparkline2}
												id="mini-bar-chart2"
												className="mini-bar-chart"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-body">
					<div className="container-fluid">
						<div className="tab-content">
							<div className="tab-pane fade show active" id="Employee-list" role="tabpanel">
								<div className='row'>
									<div className='col-md-4'>
										<div className="card">
											
											<div className="card-header">
													<h3 className="card-title">Province de {provinceDataState.nom}  </h3>
											</div>
											{/* <hr/> */}
											<div className="card-body">
												<div className="table-responsive">
													<table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
														<thead>
															<tr>
																<th>Point d'accès </th>
																<th></th>
															</tr>
														</thead>
														<tbody>
															
														{puaList.map((item)=>{
																return(
																	
																	
																<tr key={item._id}>
																	<td className="d-flex">
																		<span
																			className="avatar avatar-blue"
																			data-toggle="tooltip"
																			data-original-title="Avatar Name"
																		>
																			{item.nom[0]}
																		</span>
																		<div className="ml-3">
																			<p className="mb-0">{item.nom}</p>
																		</div>
																	</td>
																	<td>
																		<button
																			type="button"
																			className="btn btn-icon btn-sm"
																			title="View"
																			onClick={()=>{handlePuaId(item._id)}}
																		>
																			<i className="fa fa-eye" />
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
									<div className='col-md-8'>
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Liste d'assurance</h3>
											</div>
											<div className="card-body">
												<div className="table-responsive">
													<table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
														<thead>
															<tr>
																<th>#</th>
																<th>Nom</th>
																<th>Statut</th>
																<th>Phone</th>
																<th>Role</th>
																{/* <th>Action</th> */}
															</tr>
														</thead>
														<tbody>
																
															{assureList.map((item)=>{
																return(
																	
																	
																<tr key={item._id}>
																	<td className="w40">
																		<label className="custom-control custom-checkbox">
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="example-checkbox1"
																				defaultValue="option1"
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																	<td className="d-flex">
																		<img
																			className="avatar"
																			src="../assets/images/xs/avatar2.jpg"
																			data-toggle="tooltip"
																			data-original-title="Avatar Name"
																			alt="fake_url"
																		/>
																		<div className="ml-3">
																			<h6 className="mb-0">{item.user.nom} {item.user.postnom} {item.user.prenom}</h6>
																			<span className="text-muted">
																				{/* marshall-n@gmail.com */}
																			</span>
																		</div>
																	</td>
																	<td>
																		<span>LA-0216</span>
																	</td>
																	<td>
																		<span>+ 264-625-4613</span>
																	</td>
																	<td>28 July, 2015</td>
																	<td>Web Developer</td>
																	<td>
																		<button
																			type="button"
																			className="btn btn-icon btn-sm"
																			title="View"
																		>
																			<i className="fa fa-eye" />
																		</button>
																		<button
																			type="button"
																			className="btn btn-icon btn-sm"
																			title="Edit"
																		>
																			<i className="fa fa-edit" />
																		</button>
																		<button
																			type="button"
																			className="btn btn-icon btn-sm js-sweetalert"
																			title="Delete"
																			data-type="confirm"
																		>
																			<i className="fa fa-trash-o text-danger" />
																		</button>
																	</td>
																</tr>
																)
															})}
															{/* <tr>
																<td className="w40">
																	<label className="custom-control custom-checkbox">
																		<input
																			type="checkbox"
																			className="custom-control-input"
																			name="example-checkbox1"
																			defaultValue="option1"
																		/>
																		<span className="custom-control-label">
																			&nbsp;
																		</span>
																	</label>
																</td>
																<td className="d-flex">
																	<span
																		className="avatar avatar-blue"
																		data-toggle="tooltip"
																		data-original-title="Avatar Name"
																	>
																		MN
																	</span>
																	<div className="ml-3">
																		<h6 className="mb-0">Marshall Nichols</h6>
																		<span className="text-muted">
																			marshall-n@gmail.com
																		</span>
																	</div>
																</td>
																<td>
																	<span>LA-0215</span>
																</td>
																<td>
																	<span>+ 264-625-1526</span>
																</td>
																<td>12 Jun, 2015</td>
																<td>Web Designer</td>
																<td>
																	<button
																		type="button"
																		className="btn btn-icon btn-sm"
																		title="View"
																	>
																		<i className="fa fa-eye" />
																	</button>
																	<button
																		type="button"
																		className="btn btn-icon btn-sm"
																		title="Edit"
																	>
																		<i className="fa fa-edit" />
																	</button>
																	<button
																		type="button"
																		className="btn btn-icon btn-sm js-sweetalert"
																		title="Delete"
																		data-type="confirm"
																	>
																		<i className="fa fa-trash-o text-danger" />
																	</button>
																</td>
															</tr>
															<tr>
																<td className="w40">
																	<label className="custom-control custom-checkbox">
																		<input
																			type="checkbox"
																			className="custom-control-input"
																			name="example-checkbox1"
																			defaultValue="option1"
																		/>
																		<span className="custom-control-label">
																			&nbsp;
																		</span>
																	</label>
																</td>
																<td className="d-flex">
																	<img
																		className="avatar"
																		src="../assets/images/xs/avatar2.jpg"
																		data-toggle="tooltip"
																		data-original-title="Avatar Name"
																		alt="fake_url"
																	/>
																	<div className="ml-3">
																		<h6 className="mb-0">Debra Stewart</h6>
																		<span className="text-muted">
																			marshall-n@gmail.com
																		</span>
																	</div>
																</td>
																<td>
																	<span>LA-0216</span>
																</td>
																<td>
																	<span>+ 264-625-4613</span>
																</td>
																<td>28 July, 2015</td>
																<td>Web Developer</td>
																<td>
																	<button
																		type="button"
																		className="btn btn-icon btn-sm"
																		title="View"
																	>
																		<i className="fa fa-eye" />
																	</button>
																	<button
																		type="button"
																		className="btn btn-icon btn-sm"
																		title="Edit"
																	>
																		<i className="fa fa-edit" />
																	</button>
																	<button
																		type="button"
																		className="btn btn-icon btn-sm js-sweetalert"
																		title="Delete"
																		data-type="confirm"
																	>
																		<i className="fa fa-trash-o text-danger" />
																	</button>
																</td>
															</tr> */}
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
				</div>

			</div>
		</div>
	</>
  )
}


const mapStateToProps = state => ({
	fixNavbar: state.settings.isFixNavbar,
	statisticsOpen: state.settings.isStatistics,
	statisticsClose: state.settings.isStatisticsClose,
})

const mapDispatchToProps = dispatch => ({
	statisticsAction: (e) => dispatch(statisticsAction(e)),
	statisticsCloseAction: (e) => dispatch(statisticsCloseAction(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(Employee);