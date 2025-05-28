import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

export const AddContact = () => {

  const navigate = useNavigate()
  const [contact, setContact] = useState({
    name:"",
    address:"",
    email:"",
    phone:"",
  })

  function createContact(e) {
    e.preventDefault();
 
    console.log("ESTOY HAICENDO OPERACIONES EN LA API desde la funcion")
    console.log(contact)
    
    fetch("https://playground.4geeks.com/contact/agendas/julian_ramirezr/contacts", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
					'Content-Type': 'application/json'
				}

    })
			.then((response) => {
				if (!response.ok) throw new Error("Error al crear nuevo contacto")
				return response.json()
			})
			.then((data) => {
				console.log(data)
				navigate("/")
			})
			.catch((error) => {
				console.log(error)
			})
  }

  return (
    <div className='container text-center mt-3'>
      <h1>Add New Contact</h1>
      <div className='d-flex flex-column'>

        <form onSubmit={createContact}>
          <label for="inputFullName" className="form-label d-flex align-items-start mt-3 mb-0 fst-italic">Full Name</label>
          <input id="inputFullName" className="form-control" placeholder='Enter your Full Name' name='name' value={contact.name} 
          onChange={(e)=>{setContact({...contact,name:e.target.value})}} />

          <label for="email" className='form-label d-flex align-items-start mt-3 mb-0 fst-italic'>Email</label>
          <input id="email" className='form-control' placeholder='Enter your email' name='email' value={contact.email} 
          onChange={(e)=>{setContact({...contact, email:e.target.value})}} />

          <label for="phone" className='form-label d-flex align-items-start mt-3 mb-0 fst-italic'>Phone number</label>
          <input id='phone' className='form-control' placeholder='Enter yoy phone number' name='phone' value={contact.phone} 
          onChange={(e)=>{setContact({...contact, phone:e.target.value})}} />

          <label for="address" className='form-label d-flex align-items-start mt-3 mb-0 fst-italic'>Enter your address</label>
          <input id='address' className='form-control' placeholder='Enter your address' name='address' value={contact.address} 
          onChange={(e)=>{setContact({...contact, address:e.target.value})}} />

          <button type='submit' className="btn btn-primary mt-3">Create contact</button>

        </form>

        <Link to="/">
          <a className="d-flex align-items-start">Retornar al Home</a>
        </Link>


      </div>
    </div>
  )
}
