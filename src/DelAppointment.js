import './App.css';
import React, { Component } from 'react';
import TableChangeServiceView from './TableChangeServiceView.js';

class DelAppointment extends Component {
	
	constructor(props) {
		super(props);
		this.delAppointment = this.delAppointment.bind(this);
		const params = new URLSearchParams(props.location.search);
		let number = params.get('number');
		this.delAppointment(number);		
	}
	
	
	delAppointment(number) {
		TableChangeServiceView.delAppointment(1, number);
  }
  
  render () {
	  return (<div>
	  Sehr geehrte Damen und Herren, den Termin war wegen Ihre Bitte gelöscht!
	  </div>);
  }
  
}
export default DelAppointment;