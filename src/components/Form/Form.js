// import './App.css';
import React, { Component } from 'react';
import HTMLParser from 'fast-html-parser';
import axios from "axios";
import * as emailjs from 'emailjs-com';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import Record from './../../models/Record';
import TableChangeServiceView from './../../TableChangeServiceView.js'
import StrTable from '../StrTable/StrTable';
import { generateID, getDateFromFormat } from '../../models/utils'
import './Form.css'

import settings from '../../settings.json'
import { useParams } from 'react-router';


class Form extends Component {

	constructor(props) {
		super(props);
		this.propsID = props.id;
		// console.log(props);
		// const params = new URLSearchParams(props.location.search);
		const numRecords = [1, 2, 3, 4, 5, 6];
		const isUpdate = props.update;
		// let isUpdate = params.get('isUpdate');
		// let cntPersons = params.get('cntPersons');
		// this case - update exists records in the table
		if (this.propsID) {
			this.state = {
				idOrder: props.id,
				records: [],
				googleTab: [],
				isTableFilled: false,
				isUpdate: true,
				maxCountOfPersons: 50,
				regButton: false,
				regButtonCaption: "Ändern",
				// actualDate: new Date(params.get('date') + 'T00:00:00Z'),
				// the number for update
				// numberUpdate: params.get('number')
			};
			// set records to array for show data for update 
			// for (let i = 0; i < cntPersons - 1; i++) {
			// 	new Record().setRecord(params.get('firstname' + i + 1),
			// 		params.get('lastname' + i + 1),
			// 		params.get('phone' + i + 1),
			// 		params.get('email' + i + 1),
			// 		params.get('birhtday' + i + 1)
			// 	);
			// 	this.state.records.push(Record);
			// }

		}
		// case adding data in the table (the first setting data)
		else {
			this.state = {
				actualPersonNumber: 1,
				persons: [],
				records: [new Record()],
				redirect: false,
				googleTab: [],
				isTableFilled: false,
				isUpdate: false,
				actualDate: new Date(),
				actualTime: '10-00',
				maxCountOfPersons: 50,
				regButton: false,
				regButtonCaption: "Anmelden",
				idOrder: generateID(),
			};
			// this.state.records.push(new Record().createRecord('', '', '', '', new Date(), 'visible'));
			// for (let i = 1; i < 6; i++) {
			// 	this.state.records.push(new Record().createRecord('', '', '', '', new Date(), 'hidden'));
			// }
		}
		this.changeOfPersons = this.changeOfPersons.bind(this);
		this.presetRegistryButton = this.presetRegistryButton.bind(this);
		// this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
		// this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
		// this.handleChangeLastName = this.handleChangeLastName.bind(this);
		// this.handleChangeEmail = this.handleChangeEmail.bind(this);
		// this.handleChangePhone = this.handleChangePhone.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
		// this.submitHandlerUpdate = this.handleChangePhone.bind(this);
		// this.submitHandlerAdd = this.submitHandlerAdd.bind(this);
		// this.getTdsOfTr = this.getTdsOfTr.bind(this);
		// this.getFirstDataFromTable = this.getFirstDataFromTable.bind(this);
		this.tableChangeServiceView = new TableChangeServiceView();
	}

	componentDidMount() {
		if (this.props.id) {
			const ob = new TableChangeServiceView();
			ob.getRecords(this.props.id)
				.then((result) => {

					const records = result.data.map(element => new Record(element));
					this.setState({
						records: records,
						regEmail: result.data[0].emailOwner,
						idOrder: result.data[0].idOrder,
						actualDate: getDateFromFormat(result.data[0].actualDate),
						actualTime: result.data[0].actualTime
					});
				})
				.catch((error) => console.error(error));
		}
	}
	changeOfPersons(event) {

	}

	/**
	 * for update mode only name of button setten, for adding mode analyse if it is possible enabling a button registry or not
	 */
	presetRegistryButton() {
		if ((!this.state.isUpdate) && (this.state.googleTab.length < this.state.maxCountOfPersons)) {
			this.state.regButton = false;
		}
	}


	submitHandler(event) {
		event.preventDefault();
		if (this.propsID) {
			this.submitHandlerUpdate();
		} else {
			this.submitHandlerAdd();
		}
	}


	/**
	 * update a row with new variables
	 */
	submitHandlerUpdate() {
		this.tableChangeServiceView.deleteRecord(this.state.idOrder, 1).then(result =>
			this.state.records.forEach((element, index) => this.tableChangeServiceView.insertRecord(element, 1, index + 1, this.state.idOrder, this.state.regEmail, this.state.actualDate, this.state.actualTime))
		);

		this.state.records.forEach((element, index) => {
			//1. update records
			emailjs.init(settings.emailjs.user_id);
			let templateParams = {
				from_name: settings.emailjs.from_name,
				to_name: element.email,
			};
			emailjs.send(
				settings.emailjs.service_id,
				settings.emailjs.templateUpdate_id,
				templateParams
			).then(
				function (response) {
					console.log(response.status, response.text);
				},
				function (err) {
					console.log(err);
				}
			);
		}

		);

		this.setState({ redirect: true });
	}


	submitHandlerAdd() {
		//1. saving all records
		this.state.records.forEach((element, index) => this.tableChangeServiceView.insertRecord(element, 1, index + 1, this.state.idOrder, this.state.regEmail, this.state.actualDate, this.state.actualTime))
		// this.tableChangeServiceView.insertRecord(this.state.records[0],1);

		this.state.records.forEach((element, index) => {
			emailjs.init(settings.emailjs.user_id);
			let templateParams = {
				from_name: settings.emailjs.from_name,
				to_name: element.email,
				link_delete: `${settings.site.host}#/delete/${this.state.idOrder}`,
				link_update: `${settings.site.host}#/update/${this.state.idOrder}`,
			};
			emailjs.send(
				settings.emailjs.service_id,
				settings.emailjs.templateAdd_id,
				templateParams
			).then(
				function (response) {
					console.log(response.status, response.text);
				},
				function (err) {
					console.log(err);
				}
			);
		});

		this.setState({ redirect: true });
	}

	render() {
		// in this brunch need a show data from a filled before table and create a delete button^
		if (this.state.redirect) {
			return (<div>
				{`Sehr geehrte Damen und Herren,
Ihre Termin beim Russischen Orthodoxische Kirche auf ${this.state.actualDate} um ${this.state.actualTime} hatte ausgemacht, wenn wünschen Sie etwas ändern oder stornieren, dann schauen Sie bitte Ihre Mailboxes`}
			</div>
			)
		}
		else {
			//the first start of form - read a google table and show a registration form
			// this.getFirstDataFromTable();
			let index = 0;
			const items = this.state.records.map((record, index) =>
				<StrTable
					record={record}
					index={index}
					count={this.state.records.length}
					funcCallBack={(result) => {
						this.state.records[index] = result
					}}
					addRecord={() => this.setState({ records: this.state.records.concat(new Record()) })}
					deleteRecord={() => {
						//copy array and delete current element
						console.log(this.state.records);
						const newArray = [...this.state.records];
						newArray.splice(index, 1);

						console.log(newArray);
						this.setState({ records: newArray });
					}}
				/>
			);
			return (
				<form className="regForm" onSubmit={this.submitHandler}>
					<div class='sector'>
						<div>
							<label> Termin der Lithurigie oder Dienst</label>
							<DatePicker selected={this.state.actualDate} onSelect={(date) => this.setState({ actualDate: date })} dateFormat="yyyy-MM-dd" peekNextMonth={true}
								showMonthDropdown={true} showYearDropdown={true} dropdownMode="select" shouldCloseOnSelect={true} />
						</div>
						<div><label>Typ der Anbetung:</label></div>
						<label><input type='radio' id='prayer' name='prayer' value='1' onChange={() => this.setState({ actualTime: '10-00' })} checked={this.state.actualTime === '10-00'} />Morgen (um 10.00)</label><br></br>
						<label><input type='radio' id='prayer' name='prayer' value='2' onChange={() => this.setState({ actualTime: '18-00' })} checked={this.state.actualTime === '18-00'} />Abend (um 18.00)</label><br></br>
						{/* <label><input type="radio" id='prayer' name='prayer' value='3' />Lithurgie</label><br></br> */}
						<div>
							<label>Anzahl der Personen: <b> {this.state.records.length}</b></label>

						</div>
						{/* <button onClick={() => {
						this.setState(
							{ records: this.state.records.concat(new Record()) })
					}} >
						Eine Persone hinzufügen
					</button> */}
					</div>
					<br></br>
					{items}


					<button type="submit">
						{this.state.regButtonCaption}
					</button>
				</form>
			)
		}
	}
}
export default Form;