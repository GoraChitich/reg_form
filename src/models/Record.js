import { generateID, getDateFromFormat } from "./utils";

class Record {

    constructor(props) {
        if (props) {
            this.firstname = props.firstname;
            this.lastname = props.lastname;
            this.email = props.email;
            this.phone = props.phone;
            //2021-06-07
            this.birthdate = getDateFromFormat(props.birthDate);
            this.isVisible = "???";
            this.id = props.idRow;
  
        } else {
            this.firstname = '';
            this.lastname = '';
            this.email = '';
            this.phone = '';
            this.birthdate = '';
            this.isVisible = '';
            this.id = generateID();

        }


    }

    /**
     * set a content of record
     * @param {*} firstname 
     * @param {*} lastname 
     * @param {*} email 
     * @param {*} phone 
     * @param {*} birthdate 
     */
    createRecord(firstname, lastname, email, phone, birthdate, visible) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.birthdate = birthdate;
        this.visible = visible;
        this.id = generateID();

        return this;
    }



}
export default Record;