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
import {generateID} from '../../models/utils'
import './Form.css'


class Form extends Component {

	constructor(props) {
		super(props);
		const params = new URLSearchParams(props.location.search);
		const numRecords = [1, 2, 3, 4, 5, 6];
		let isUpdate = params.get('isUpdate');
		let cntPersons = params.get('cntPersons');
		// this case - update exists records in the table
		if (isUpdate) {
			this.state = {
				records: [],
				googleTab: [],
				isTableFilled: false,
				isUpdate: true,
				maxCountOfPersons: 50,
				regButton: false,
				regButtonCaption: "Ändern",
				actualDate: new Date(params.get('date') + 'T00:00:00Z'),
				// the number for update
				numberUpdate: params.get('number')
			};
			// set records to array for show data for update 
			for (let i = 0; i < cntPersons - 1; i++) {
				new Record().setRecord(params.get('firstname' + i + 1),
					params.get('lastname' + i + 1),
					params.get('phone' + i + 1),
					params.get('email' + i + 1),
					params.get('birhtday' + i + 1)
				);
				this.state.records.push(Record);
			}

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
		this.createUpdateStr = this.createUpdateStr.bind(this);
		this.presetRegistryButton = this.presetRegistryButton.bind(this);
		this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
		this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
		this.handleChangeLastName = this.handleChangeLastName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePhone = this.handleChangePhone.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
		this.submitHandlerUpdate = this.handleChangePhone.bind(this);
		this.submitHandlerAdd = this.submitHandlerAdd.bind(this);
		this.getTdsOfTr = this.getTdsOfTr.bind(this);
		this.getFirstDataFromTable = this.getFirstDataFromTable.bind(this);
		this.tableChangeServiceView = new TableChangeServiceView();
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

	handleChangeDatePicker(date) {
		this.state.actualDate = date;
	}

	 getTdsOfTr(node) {
	// 	var attrs = node.attributes;
	// 	for (var key in attrs) {
	// 		if (attrs[key] === 'height: 20px'); {
	// 			if (
	// 				(node.childNodes[1] != null) && (node.childNodes[2].childNodes[0] != null) && (node.childNodes[2].childNodes[0].rawText != null) &&
	// 				(node.childNodes[2] != null) && (node.childNodes[3].childNodes[0] != null) && (node.childNodes[3].childNodes[0].rawText != null)
	// 			) {
	// 				let currentRow = [{ "number": node.childNodes[1].childNodes[0].rawText, "firstname": node.childNodes[2].childNodes[0].rawText }, { "lastname": node.childNodes[3].childNodes[0].rawText }];
	// 				this.state.googleTab.push(currentRow);
	// 				// this.presetRegistryButton();
	// 				return;
	// 			}
	// 		}
	// 	}
	 }


	getFirstDataFromTable() {
		// let url = "https://docs.google.com/spreadsheets/d/14z1wb8Ei0-6rwiS6qUIvz8BJVEWhK0IMIOJnvCvkz94/edit#gid=0";
		// axios.get(url).then(res => {
		// 	const restData = res.data;
		// 	var root = HTMLParser.parse(restData);
		// 	var tabTag = root.querySelector('table');
		// 	if (tabTag != null) {
		// 		var tabBody = tabTag.querySelector('tbody');
		// 		if ((tabBody != null) && (tabBody.childNodes != null)) {
		// 			tabBody.childNodes.forEach(this.getTdsOfTr);
		// 		}
		// 	}
		// }
		// 	//	this.setState({ restData });
		// );
	}

	handleChangeFirstName(event) {
		this.setState({ firstname: event.target.value });
	}

	handleChangeLastName(event) {
		this.setState({ lastname: event.target.value });
	}

	handleChangeEmail(event) {
		this.setState({ email: event.target.value });
	}

	handleChangePhone(event) {
		this.setState({ phone: event.target.value });
	}

	submitHandler(event) {
		event.preventDefault();
		if (this.state.isUpdate) {
			this.submitHandlerUpdate();
		} else {
			this.submitHandlerAdd();
		}
	}

	/**
	 * created a string for not duplicate a code for update link
	 * @param {*} inStr 
	 * @returns 
	 */
	createUpdateStr(inStr) {
		let htmlBody = inStr + " beim Liturgie in russischen Orthodoxkirche Stuttgart am , " + this.state.actualDate +
			" mit folgenden Link können Sie den Termin stornieren <a href=\"http://localhost:3000/delAppointment?number=" + this.state.records[0].number +
			"\">Termin stornieren </a>, mit folgenden Link können Sie den Termin ändern <a href=\"http://localhost:3000/updateAppointment?isUpdate=true";
		let updateStr;
		let cnt = 0;
		this.state.records.forEach(record => {
			this.tableChangeServiceView.updateRecord(record, 1);
			cnt++;
			updateStr = updateStr + "&firstname " + cnt + "="
				+ record.firstname + "&lastname" + cnt + "=" + record.lastname +
				"&phone" + cnt + "=" + record.phone + "&mail" + cnt + "=" + record.email
				+ "birthdate" + cnt + "=" + record.birthdate;

		});
		return htmlBody + updateStr + "\">Termin ändern</a>"
	}

	/**
	 * update a row with new variables
	 */
	submitHandlerUpdate() {

		emailjs.init("user_kKJTlTMteUmJ0TVwOLNC2");
		let templateParams = {
			from_name: 'smolbars@gmail.com',
			to_name: this.state.email,
			subject: "Anmeldung auf der Liturgie in russischen Orthodoxkirche Stuttgart",
			html: this.createUpdateStr("Sehr geehrte Damen und Herren, Sie haben erfoglreich geändert")
		};
		emailjs.send(
			'service_1ls6zy5',
			'template_beve9nh',
			templateParams
		).then(
			function (response) {
				console.log(response.status, response.text);
			},
			function (err) {
				console.log(err);
			}
		);
		this.setState({ redirect: true });
	}


	submitHandlerAdd() {
		//1. saving all records
		this.state.records.forEach((element, index) => this.tableChangeServiceView.insertRecord(element,1, index+1, this.state.idOrder, this.state.regEmail, this.state.actualDate, this.state.actualTime) )
		// this.tableChangeServiceView.insertRecord(this.state.records[0],1);

		// emailjs.init("user_kKJTlTMteUmJ0TVwOLNC2");
		// let templateParams = {
		// 	from_name: 'smolbars@gmail.com',
		// 	to_name: this.state.email,
		// 	subject: "Anmeldung auf der Liturgie in russischen Orthodoxkirche Stuttgart",
		// 	html: this.createUpdateStr("Sehr geehrte Damen und Herren, Sie haben erfoglreich angemeldet")
		// };
		// emailjs.send(
		// 	'service_1ls6zy5',
		// 	'template_beve9nh',
		// 	templateParams
		// ).then(
		// 	function (response) {
		// 		console.log(response.status, response.text);
		// 	},
		// 	function (err) {
		// 		console.log(err);
		// 	}
		// );
		this.setState({ redirect: true });
	}

	render() {
		// in this brunch need a show data from a filled before table and create a delete button^
		if (this.state.redirect) {
			return (
				<table>
					<tbody>{this.state.googleTab.map(function (item, key) {
						return (
							<tr key={key}>
								<td>{item[1].number}</td>
								<td>{item[1].firstname}</td>
								<td>{item[1].lastname}</td>
							</tr>
						)
					})
					}
					</tbody>
					<button onClick={()=>this.delAppointment()}>
						Termin stornieren
		    </button>
				</table>
			)
		}
		else {
			//the first start of form - read a google table and show a registration form
			this.getFirstDataFromTable();
			let index = 0;
			const items = this.state.records.map((record, index) =>
				<StrTable
					record={record}
					index={index}
					funcCallBack={(result) => { 
						this.state.records[index] = result }}
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
							<DatePicker selected={this.state.actualDate} onSelect={(date) => this.setState({actualDate: date})} dateFormat="yyyy-MM-dd" peekNextMonth={true}
								showMonthDropdown={true} showYearDropdown={true} dropdownMode="select" shouldCloseOnSelect={true} />
						</div>
						<div><label>Typ der Anbetung:</label></div>
						<label><input type='radio' id='prayer' name='prayer' value='1' onChange={()=> this.setState({ actualTime: '10-00'})} checked />Morgen (um 10.00)</label><br></br>
						<label><input type='radio' id='prayer' name='prayer' value='2' onChange={()=> this.setState({ actualTime: '18-00'})} />Abend (um 18.00)</label><br></br>
						{/* <label><input type="radio" id='prayer' name='prayer' value='3' />Lithurgie</label><br></br> */}
						<div>
							<label>Anzahl der Personen: <b> {this.state.records.length}</b></label>
							
						</div>
						<div className='reg-email'>
								<label className='' htmlFor='regemail'>Email for registration <span class="reqsymbol">*</span></label>
								<input type='text' name="regemail" id='regemail' className='input1' value={this.state.regEmail} onChange={(e) => this.setState({regEmail: e.target.value})} required />
								{/* <input type='text' name="firstname{index}" id='firstname{index}' className='input1' value={record.firstname} onChange={this.handleChangeFirstName} required /> */}
							</div>
					</div>
					<br></br>
					{items}
					<button onClick={() => {
						this.setState(
							{ records: this.state.records.concat(new Record()) })
					}} >
						Add 1 person
					</button>

					<button type="submit">
						{this.state.regButtonCaption}
					</button>
				</form>
			)
		}
	}
}
export default Form;