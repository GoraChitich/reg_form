import axios from "axios";
import dateFormat from 'dateformat';
import settings from './settings.json'

class TableChangeServiceView {
	constructor(){
		this.url = settings.sheet;
	}

	async getRecords(idOrder){
		return await axios.get(`${this.url}/idOrder/${idOrder}`);
	}

	insertRecord(record, dbType, index, idOrder, emailOwner, actualDate, actualTime) {
		switch (dbType) {
			// insert direct to google table
			case 1: {
				let dataRequest = [{
					number: index,
					firstname: record.firstname, 
					lastname: record.lastname, 
					phone: record.phone, 
					email: record.email, 
					birhtDate: dateFormat(record.birthdate, "yyyy-mm-dd"),
					idRow: record.id,
					idOrder,
					emailOwner,
					actualDate: dateFormat(actualDate, "yyyy-mm-dd"),
					actualTime
				}];
				// send data to table that was booked
				let options = {
					method: "POST",
					headers: { "content-type": "application/json" },
					data: dataRequest,
					url: this.url
				};
				axios(options).then(res => {
					console.log("the data was added in the table ", res.data);
				}).catch(er => {
					console.log("no data sorry ", er);
				});
				break;
			}
			// insert to database
			default: {
				//
				break;
			}
		}

	}

	deleteRecord(id, dbType) {
		switch (dbType) {
			case 1: {
				axios.delete(`${this.url}/number/${id}`).then(res => {
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
				let url = `${this.url}/${this.state.numberUpdate - 1}`;
				let dataRequest = [{ number: record.numberUpdate, firstname: record.firstname, lastname: record.lastname, phone: record.phone, email: record.email, birhtDate: record.birhtDate }];
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