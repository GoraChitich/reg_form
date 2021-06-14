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
import texts from '../../translates.json'
import { useParams } from 'react-router';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import imgRussia from '../../asserts/icons/russia.png';
import imgGermany from '../../asserts/icons/germany.png';


class Form extends Component {

	constructor(props) {
		super(props);

		this.propsID = props.id;
		// console.log(props);
		// const params = new URLSearchParams(props.location.search);
		const defaultLang = window.navigator.language === 'ru-RU' ? 'ru' : 'de';

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
			};

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
				lang: defaultLang
			};

		}
		this.changeOfPersons = this.changeOfPersons.bind(this);
		this.presetRegistryButton = this.presetRegistryButton.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
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

	componentDidUpdate() {
		console.log(this.state);
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
			//			if(this.referrer){
			window.history.back();
			//			}
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
					lang={this.state.lang}
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
				<Container>
					<Row>
						<Col >
							<Card>
								<Card.Body>

									<form className="regform" onSubmit={this.submitHandler}>
										<div class='sector'>
											<div className='part1'>
												<div>
													<label> {texts['Appointment of liturgy or service'][this.state.lang]}</label>
													<DatePicker selected={this.state.actualDate} onSelect={(date) => this.setState({ actualDate: date })} dateFormat="yyyy-MM-dd" peekNextMonth={true}
														showMonthDropdown={true} showYearDropdown={true} dropdownMode="select" shouldCloseOnSelect={true} />
												</div>
												<div><label>{texts['Type of pray'][this.state.lang]}</label></div>
												<label><input type='radio' id='prayer' name='prayer' value='1' onChange={() => this.setState({ actualTime: '10-00' })} checked={this.state.actualTime === '10-00'} />{texts['morning'][this.state.lang]}</label>
												<label><input type='radio' id='prayer' name='prayer' value='2' onChange={() => this.setState({ actualTime: '18-00' })} checked={this.state.actualTime === '18-00'} />{texts['evening'][this.state.lang]}</label>
												{/* <label><input type="radio" id='prayer' name='prayer' value='3' />Lithurgie</label><br></br> */}
												<div>
													<label>{texts['number of persons'][this.state.lang]}: <b> {this.state.records.length}</b></label>

												</div>
											</div>
											<div className="change-langauge">
												<label for="langid"><img src={imgGermany} /> <img src={imgRussia} /></label>
												<select onChange={(e) => this.setState({ lang: e.target.value })}>
													<option value="ru" selected={this.state.lang === 'ru'}>Русский</option>
													<option value="de" selected={this.state.lang === 'de'}>Deutsch</option>
												</select>
											</div>
										</div>
										{items}

										<Container className="text-center" ><Button type="submit" className="text-center">
											{texts['Registration'][this.state.lang]}
										</Button></Container>

									</form>
								</Card.Body>
							</Card>
						</Col></Row> </Container>
			)
		}
	}
}
export default Form;