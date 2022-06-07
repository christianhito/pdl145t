import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const AddUserModal = ({show, handleClose, user_id }) => {
  return (
    <>
    
    <Modal size="lg"  show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Nouvel utilisateur</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row'>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                    <label>Nom *</label>
                    <input
                        type="text"
                        className="form-control"
                        name='montant_montant'
                        // value={montant_montant}
                        placeholder="Nom *"
                        // onChange={handleChange}
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                    <label>Postnom</label>
                    <input
                        type="text"
                        className="form-control"
                        name='montant_montant'
                        // value={montant_montant}
                        placeholder="Postnom *"
                        // onChange={handleChange}
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                    <label>Prénom *</label>
                    <input
                        type="text"
                        className="form-control"
                        name='montant_montant'
                        // value={montant_montant}
                        placeholder="Prénom *"
                        // onChange={handleChange}
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                    <label>Téléphone *</label>
                    <input
                        type="text"
                        className="form-control"
                        name='montant_montant'
                        // value={montant_montant}
                        placeholder="Téléphone *"
                        // onChange={handleChange}
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                    <label>Email  *</label>
                    <input
                        type="text"
                        className="form-control"
                        name='montant_montant'
                        // value={montant_montant}
                        placeholder="Email *"
                        // onChange={handleChange}
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                    <label>Date de naissance  *</label>
                    <input
                        type="date"
                        className="form-control"
                        name='montant_montant'
                        // value={montant_montant}
                        placeholder="Date de naissance *"
                        // onChange={handleChange}
                    />
                </div>
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Annuler
        </Button>
          <button className={`btn btn-primary`}  >
            Valider le contrat
          </button>
      </Modal.Footer>
      </Modal>

        
        
    </>
  )
}

export default AddUserModal