import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

class DynamicForms extends Component {
  
    constructor(props) {
		super(props);				
	}

    createFormOfPersons(records) {
        
        let actualPersonNumber = 0;

        let personFormStr;

        records.forEach(record => {
            actualPersonNumber++;
            personFormStr = personFormStr + "<div class='sector'><div className='input-div1'><label className='label1' htmlFor='firstname" + actualPersonNumber + 
            "'>Vorname <span class=\"reqsymbol\">*</span></label><input type='text' name='firstname" + actualPersonNumber + "' 'id='firstname" + actualPersonNumber + 
            "' className='input1' value='" + record.firstname + "' onChange=this.handleChangeFirstName required /></div> <div className='input-div1'>" +
            "<label className='label2' htmlFor='lastname" + actualPersonNumber + "'>Name <span class=\"reqsymbol\">*</span></label><input type='text'" +
            "name='lastname" + actualPersonNumber + "' id='lastname" + actualPersonNumber + "' className='input1' value='" + record.lastname + "' onChange=this.handleChangeLastName required />" +
            "</div> <div className='input-div1'> <label className='label3' htmlFor='email" + actualPersonNumber +"'>Email <span class=\"reqsymbol\">*</span></label>" +
            "<input type='text' name='" + actualPersonNumber + "' id='email" + actualPersonNumber +"' className='input1' value='" + record.email + "' onChange=this.handleChangeEmail required />" +
            "</div><div className='input-div1'><label className='label4' htmlFor='phone'" + actualPersonNumber +">Telefon<span class=\"reqsymbol\">*</span></label>" +
            "<input type='text'" + "name='" + actualPersonNumber + "' id='phone" + actualPersonNumber +"' className='input1' value='" + record.phone + "' onChange=this.handleChangePhone required /> " +
            "</div><div className='input-div1'><label className='label5' htmlFor='birthdate" + actualPersonNumber + "'>Geburtsdatum<span class=\"reqsymbol\">*</span></label>" +
            "<DatePicker name='birthdate" + actualPersonNumber + "' id='birthdate" + actualPersonNumber + "' selected=" + record.birthdate + " required dateFormat=\"yyyy-MM-dd\""
            + "peekNextMonth={true} showMonthDropdown={true} showYearDropdown={true} dropdownMode=\"select\" shouldCloseOnSelect={true}/></div></div>";
        });

        return personFormStr;
    }

}
export default DynamicForms;