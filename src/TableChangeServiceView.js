import React, { Component } from 'react';
import axios from "axios";

class TableChangeServiceView {
	

	
	insertRecord(record, dbType) {
		switch (dbType) {
			// insert direct to google table
			case 1: {
						let url = "https://sheet.best/api/sheets/9789324f-9b9f-40c2-85d2-30e3de0fa441";
						let dataRequest = [{number: record.number, firstname: record.firstname, lastname: record.lastname, phone: record.phone, email: record.email}];
						// send data to table that was booked
						let options = { 
										method: "POST",
										headers: { "content-type": "application/json" },
										data: dataRequest,
										url 
									 };
						axios(options).then(res => {
							console.log("the data was added in the table ", res.data);
						}).catch(er => {
							console.log("no data sorry ", er);
						});
			}
			// insert to database
			default: {
				//
			}
		}
		
	}
	
	deleteRecord(id, dbType) {
		switch (dbType) {
			case 1: {
						axios.delete("https://sheet.best/api/sheets/9789324f-9b9f-40c2-85d2-30e3de0fa441/number/" + id).then(res => {
        				console.log("the appointment was canceled");        
      				});
			}
			default: {
				//
			}
		}
	}
	
	/**
	 * make uodate
	 * depend on dbType
	 * for google tables is 1
	 * @param {} record 
	 * @param {*} dbType
	 */
	updateRecord(record, dbType) {
		switch (dbType) {
			case 1: {
				let url = "https://sheet.best/api/sheets/9789324f-9b9f-40c2-85d2-30e3de0fa441/" + this.state.numberUpdate-1;
				let dataRequest = [{number: record.numberUpdate, firstname: record.firstname, lastname: record.lastname, phone: record.phone, email: record.email, birhtDate: record.birhtDate}];
				let options = { 
								method: "PATCH",
								headers: { "accept": "application/json", "content-type": "application/json" },
								data: dataRequest,
								url 
	  						  };
	  			axios(options).then(res => {
        									 console.log("the data was updated for row ", this.state.numberUpdate);
										   }).catch(er => {
        									 console.log("error on update ", er);
									});
			}
		}
	}
	
}

export default TableChangeServiceView;