import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CardContact from "../components/CardContact.jsx";



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [contactList, setContactList] = useState([])


	useEffect(() => {
		fetch("https://playground.4geeks.com/contact/agendas/julian_ramirezr")
			.then((response) => {
				if (!response.ok) throw new Error("Error al obtener los contactos")
				return response.json()
			})
			.then((data) => {
				console.log(data)
				setContactList(data.contacts)
				//aca debo poner dispatch para modificar el store, el store debe tener un objeto
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<div className="text-center mt-5">
			<h1 className="mb-5">CONTACT LIST!!</h1>

			<div className="container  flex-column align-items-center">

				{
					contactList.map((contact, index) => {
						return (
							<CardContact name={contact.name} address={contact.address} phone={contact.phone} email={contact.email} id={contact.id} key={contact.index} />

						)
					})
				}

			</div>
			<div className="container d-flex flex-column text-center">
				<Link to="/add-contact">
					<button className="btn btn-success m-3 col-3">Add New Contact</button>
				</Link>
				<Link to="/edit-contact">
					<button className="btn btn-danger m-3 col-3">Edit Contact</button>
				</Link>
			</div>
		</div>
	);
}; 