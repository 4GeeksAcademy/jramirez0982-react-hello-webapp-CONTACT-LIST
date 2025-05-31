import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CardContact from "../components/CardContact.jsx";
import { Navbar } from "../components/Navbar.jsx";



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [contactList, setContactList] = useState([])

	function getContacts(){
		fetch("https://playground.4geeks.com/contact/agendas/julian_ramirezr")
			.then((response) => {
				if (!response.ok) throw new Error("Error al obtener los contactos")
				return response.json()
			})
			.then((data) => {
				console.log(data)
				//setContactList(data.contacts)
				//aca debo poner dispatch para modificar el store, el store debe tener un objeto
				dispatch({
					type: "save_contact",
					payload: data.contacts
				})
				console.log(store);

			})
			.catch((error) => {
				console.log(error)
			})
	}

	useEffect(() => {
		getContacts()
	}, [])

	return (
		<div>
			<Navbar />
			<div className="text-center mt-5">
				<h1 className="mb-1">CONTACT LIST!!</h1>
				<h5 className="mb-5">By Julian Ramirez</h5>

				<div className="container  flex-column align-items-center">

					{

						store.contacts.map((contact, index) => {
							return (
								<CardContact getContacts={getContacts} name={contact.name} address={contact.address} phone={contact.phone} email={contact.email} id={contact.id} key={contact.index} />

							)
						})
					}

				</div>

			</div>
		</div>
	);
}; 