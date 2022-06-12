import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import { getPua } from '../../../api/pua';
import { getProvince } from '../../../api/province';
import { getTerritoireByIdProvince } from '../../../api/territoire';
import { getSecteurByIdTerritoire } from '../../../api/secteur';

const AddPartner = ({show, handleClose}) => {

    
    const initialFormData = {
        nom: "",
        adresse: "",
        telephone: "",
        email: "",
        province: "",
        territoire: "",
        secteur: "",
        loading: false
    }  
    const [partnerData, setPartnerData] = useState(initialFormData)
    const [provinceList , setProvinceList] = useState([])
    const [territoireList , setTerritoireList] = useState([])
    const [secteurList , setSecteurList ] = useState([])

    
    
    const fetchData = React.useCallback(() => {
      
        getProvince()
        .then(response => {
            // $('#user_liste').DataTable().destroy();
            setProvinceList(response.data)
            console.log('setProvinceList list ', response.data)
            
        })
        .catch((error) => {
            
          console.log(error.response.data)
        //   $('#user_liste').DataTable().destroy();
          setProvinceList([])
        })

  
    }, [])
    React.useEffect(() => {
      fetchData()
    }, [fetchData])
    
    const {
        nom,
        adresse,
        telephone,
        email,
        province,
        territoire,
        secteur,
        loading
    } = setPartnerData

    
    const handleChange = e => {
   
        console.log("e.target.name")
       if (e.target.name === "province") {
           
            getTerritoireByIdProvince(e.target.value)
            .then(response => {
                // $('#user_liste').DataTable().destroy();
                
                setTerritoireList(response.data)   
                console.log(response.data)
            })
            .catch((error) => {
                
            console.log(error.response.data)
            //   $('#user_liste').DataTable().destroy();
            // setProvinceList([])
            })
            
            setPartnerData({
                ...partnerData,
                province: e.target.value,
            });


            
       } else if(e.target.name === "territoire") {
            
           
            getSecteurByIdTerritoire(e.target.value)
            .then(response => {
                // $('#user_liste').DataTable().destroy();
                
                setSecteurList(response.data) 
                
            })
            .catch((error) => {
                
            console.log(error.response.data)
            //   $('#user_liste').DataTable().destroy();
            // setProvinceList([])
            })
            
            setPartnerData({
                ...partnerData,
                secteur: e.target.value,
            });
       } else {

           setPartnerData({
             ...partnerData,
             [e.target.name]: e.target.value,
         });
        }
        console.log(partnerData)
        
     }
  return (
    <>
    
    <Modal show={show} onHide={handleClose}  size="lg">
        <Modal.Header>
          <Modal.Title>Nouveau partenaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <div className="row clearfix">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Nom du partenaire * </label>
                        <input 
                            name='nom'
                            value={nom}
                            onChange={handleChange}
                            type="text" 
                            className="form-control" 
                            placeholder="Nom du partenaire *" 
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                    <label>Téléphone * </label>
                        <input 
                            name='telephone'
                            value={telephone}
                            onChange={handleChange}
                            type="text" 
                            className="form-control" 
                            placeholder="Téléphone *" 
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Adresse email * </label>
                        <input 
                            name='email'
                            value={email}
                            onChange={handleChange}
                            type="email" 
                            className="form-control" 
                            placeholder="Adresse email" 
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Province *</label>
                        <select 
                            name='province'
                            value={province}
                            onChange={handleChange}
                            // onChange={e=>{handleUserChange(e, 'status_civil')}}
                            className="form-control show-tick"
                        >
                        <option value="">Séléctionnez</option>
                        {
                            provinceList.map((item) => {
                                return <option key={item._id} value={item._id}>{item.nom}</option>
                            })
                        }
                        </select>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Territoire *</label>
                        <select 
                            name='territoire'
                            value={territoire}
                            onChange={handleChange}
                            // onChange={e=>{handleUserChange(e, 'status_civil')}}
                            className="form-control show-tick"
                        >
                        <option value="">Séléctionnez </option>
                        {
                            territoireList.map((item) => {
                                return <option key={item._id} value={item._id}>{item.nom}</option>
                            })
                        }
                        </select>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Secteur *</label>
                        <select 
                            name='secteur'
                            value={secteur}
                            onChange={handleChange}
                            // onChange={e=>{handleUserChange(e, 'status_civil')}}
                            className="form-control show-tick"
                        >
                        <option value="">Séléctionnez</option>
                        {
                            secteurList.map((item) => {
                                return <option key={item._id} value={item._id}>{item.nom}</option>
                            })
                        }
                        </select>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                    <label>Adresse * </label>
                        <input 
                            name='adresse'
                            value={adresse}
                            onChange={handleChange}
                            type="text" 
                            className="form-control" 
                            placeholder="Adresse *" 
                        />
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <button className="btn btn-primary" onClick={handleClose}>
            Enregistrer 
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddPartner