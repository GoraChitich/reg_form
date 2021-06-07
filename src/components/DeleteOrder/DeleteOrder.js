import React, { Component } from 'react';
import TableChangeServiceView from '../../TableChangeServiceView.js';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

export default function DeleteOrder(params) {
	const [deleted, setDeleted] = useState(false);
	// const params = useParams();
	// console.log(params);
	//TODO: why doesn't work useParams???
	const location = useLocation();
	const id = location.hash.replace("#/delete/", "");
	useEffect(() => {
		const tableChangeServiceView = new TableChangeServiceView();
		tableChangeServiceView.deleteRecord(id, 1).then(
			setDeleted(true))
	}, []);

	if (deleted) {
		return <div>
			Sehr geehrte Damen und Herren, den Termin war wegen Ihre Bitte gelöscht!
		</div>
	} 
	
	return  <div>.........</div> 

}
