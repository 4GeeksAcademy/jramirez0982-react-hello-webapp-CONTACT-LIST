
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const CardContact = (props) => {

    const navigate = useNavigate()
    

    function deleteContact(index) {
        
        //SE APUNTA A ESTA DIRECCION - https://playground.4geeks.com/contact/agendas/julian_ramirezr/contacts/:id
        let urlToDelete = "https://playground.4geeks.com/contact/agendas/julian_ramirezr/contacts/" + index.toString()
        console.log(urlToDelete)

        fetch(urlToDelete, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.ok)
                    console.log("informacion eliminada")
                props.getContacts()
                navigate("/")
            })
            .catch((err) => { err })
    }

    return (
        <div className="card mb-3" style={{ Width: "100%" }}>
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-start">{props.name}</h5>
                        <p className="card-text d-flex justify-content-start text-body-secondary ">{props.address}</p>
                        <p className="card-text d-flex justify-content-start text-body-secondary ">{props.phone}</p>
                        <p className="card-text d-flex justify-content-start text-body-secondary ">{props.email}</p>
                    </div>
                </div>
                <div className="col-md-2 p-4">
                    <Link to={`/edit-contact/${props.id}`} >
                        <button className='btn btn-light my-1 mx-5'><i className="fa-solid fa-pencil"></i></button>
                    </Link>
                    
                    <button className='btn btn-light my-1 mx-5'
                        data-bs-toggle="modal" data-bs-target={`#staticBackdrop${props.id}`}><i className="fa-solid fa-trash"></i></button>


                    <div class="modal fade" id={`staticBackdrop${props.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Are you sure?</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    If you remove this contact, you lose it forever!!!
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-primary" onClick={() => {
                                        deleteContact(props.id)
                                    }} data-bs-dismiss="modal" >Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContact