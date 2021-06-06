
class Record {
	
	constructor(props) {
        
            this.firstname= '';
            this.lastname= '';
            this.email= '';
            this.phone =  '';
            this.birthdate = '';
         this.isVisible = '';
        			
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
        return this;
    }

}
export default Record;