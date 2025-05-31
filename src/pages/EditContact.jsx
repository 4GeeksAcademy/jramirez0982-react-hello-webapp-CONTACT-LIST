import React, { useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import storeReducer from '../store';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const EditContact = () => {


    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const params = useParams()
    console.log(params.id)

    const contactToEdit = store.contacts.find((contacto) => contacto.id == params.id);
    console.log(contactToEdit)

    const [contact, setContact] = useState({
        name: contactToEdit.name,
        address: contactToEdit.address,
        email: contactToEdit.email,
        phone: contactToEdit.phone,
    })

    function modifyContact(e) {
        e.preventDefault()
        console.log("inicie put")
        let urlOfContact = "https://playground.4geeks.com/contact/agendas/julian_ramirezr/contacts/" + params.id 
        console.log(urlOfContact)

        fetch(urlOfContact, {
            method: "PUT",
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (!response.ok) throw new Error("Error al modificar el contacto")
                return response.json()
            })
            .then((data) => {
                navigate("/")

            })
            .catch((error) => {
                console.log(error)
             })
    }


    return (
        <div className='container text-center mt-3'>
            <h1>Edit Contact</h1>
            <div className='d-flex flex-column'>

                <form onSubmit={modifyContact}>
                    <label for="inputFullName" className="form-label d-flex align-items-start mt-3 mb-0 fst-italic">Full Name</label>
                    <input id="inputFullName" value={contact.name} className="form-control" placeholder='Enter your Full Name'
                        onChange={(e) => { setContact({ ...contact, name: e.target.value }) }} />

                    <label for="email" className='form-label d-flex align-items-start mt-3 mb-0 fst-italic'>Email</label>
                    <input id="email" value={contact.email} className='form-control' placeholder='Enter your email'
                        onChange={(e) => { setContact({ ...contact, email: e.target.value }) }} />

                    <label for="phone" className='form-label d-flex align-items-start mt-3 mb-0 fst-italic'>Phone number</label>
                    <input id='phone' value={contact.phone} className='form-control' placeholder='Enter yoy phone number'
                        onChange={(e) => { setContact({ ...contact, phone: e.target.value }) }} />

                    <label for="address" className='form-label d-flex align-items-start mt-3 mb-0 fst-italic'>Enter your address</label>
                    <input id='address' value={contact.address} className='form-control' placeholder='Enter your address'
                        onChange={(e) => { setContact({ ...contact, address: e.target.value }) }} />

                    <button type='submit' className="btn btn-primary mt-3">Save</button>
                </form>
                <Link to="/">
                    <a className="d-flex align-items-start">Back Home</a>
                </Link>


            </div>
        </div>
    )
}
