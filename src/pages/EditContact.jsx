import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export const EditContact = () => {

    const navigate = useNavigate()

    return (
        <div className='container text-center mt-3'>
            <h1>Edit Contact</h1>
            <div className='d-flex flex-column'>

                <label for="inputFullName" className="form-label d-flex align-items-start mt-3 mb-0 fst-italic">Full Name</label>
                <input id="inputFullName" className="form-control" placeholder='Enter your Full Name' />

                <label for="email" className='form-label d-flex align-items-start mt-3 mb-0 fst-italic'>Email</label>
                <input id="email" className='form-control' placeholder='Enter your email' />

                <label for="phone" className='form-label d-flex align-items-start mt-3 mb-0 fst-italic'>Phone number</label>
                <input id='phone' className='form-control' placeholder='Enter yoy phone number' />

                <label for="address" className='form-label d-flex align-items-start mt-3 mb-0 fst-italic'>Enter your address</label>
                <input id='address' className='form-control' placeholder='Enter your address' />

                <button className="btn btn-primary mt-3" onClick={() => {
                    console.log("Estoy haciendo operaciones en la API");
                    navigate("/")
                }}>Save</button>

                <Link to="/">
                    <a className="d-flex align-items-start">Retornar al Home</a>
                </Link>


            </div>
        </div>
    )
}
