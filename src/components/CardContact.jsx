import React from 'react'
import { Link } from 'react-router-dom'

const CardContact = (props) => {

    function deleteContact(index){

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
                        <button className='btn btn-light my-1'><i className="fa-solid fa-pencil"></i></button>
                    </Link>

                    <button id={props.id} className='btn btn-light my-1' onClick={deleteContact}><i className="fa-solid fa-trash"></i></button>

                </div>
            </div>
        </div>
    )
}

export default CardContact