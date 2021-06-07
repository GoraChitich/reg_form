import { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import './StrTable.css';

export default function StrTable(params) {
    const [firstname, setFirstName] = useState(params.record.firstname);
    const [lastname, setLastName] = useState(params.record.lastname);
    const [email, setEmail] = useState(params.record.email);
    const [phone, setPhone] = useState(params.record.phone);
    const [birthdate, setBirthdate] = useState(params.record.birthdate);

    useEffect(()=>{
        params.funcCallBack({firstname, lastname, email, phone, birthdate, isVisible: params.record.isVisible, id: params.record.id});
    });

    return (
        <div className="strtable-c">
            <h2>{`Person # ${params.index+1}`}</h2>
            <div className='input-div1'>
                <label className='label1' htmlFor='firstname{index}'>Vorname <span class="reqsymbol">*</span></label>
                <input type='text' name="firstname{index}" id='firstname{index}' className='input1' value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
                {/* <input type='text' name="firstname{index}" id='firstname{index}' className='input1' value={record.firstname} onChange={this.handleChangeFirstName} required /> */}
            </div>
            <div className='input-div2'>
                <label className='label2' htmlFor='lastname1'>Name <span class="reqsymbol">*</span></label>
                <input type='text' name='lastname{index}' id='lastname{index}' className='input1' value={lastname} onChange={(e) => setLastName(e.target.value)} required />
                {/* <input type='text' name='lastname{index}' id='lastname{index}' className='input1' value={record.lastname} onChange={this.handleChangeLastName} required /> */}
            </div>
            <div className='input-div3'>
                <label className='label3' htmlFor='email1'>Email <span class="reqsymbol">*</span></label>
                <input type='text' name='email{index}' id='email{index}' className='input1' value={email} onChange={(e) => setEmail(e.target.value)} required />
                {/* <input type='text' name='email{index}' id='email{index}' className='input1' value={record.email} onChange={this.handleChangeEmail} required /> */}
            </div>
            <div className='input-div4'><label className='label4' htmlFor='phone{index}'>Telefon<span class="reqsymbol">*</span></label>
                <input type='text' name='phone{index}' id='phone{index}' className='input1' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                {/* <input type='text' name='phone{index}' id='phone{index}' className='input1' value={record.phone} onChange={this.handleChangePhone} required /> */}
            </div>
            <div className='input-div5'><label className='label5' htmlFor='birthdate{index}'>Geburtsdatum<span class="reqsymbol">*</span></label>
                <DatePicker name='birthdate{index}' id='birthdate{index}' selected={birthdate} onChange={(date) => setBirthdate(date)} required dateFormat="yyyy-MM-dd"
                    peekNextMonth={true} showMonthDropdown={true} showYearDropdown={true} dropdownMode="select" shouldCloseOnSelect={true} />
                {/* <DatePicker name='birthdate{index}' id='birthdate{index}' selected={record.birthdate} required dateFormat="yyyy-MM-dd"
							peekNextMonth={true} showMonthDropdown={true} showYearDropdown={true} dropdownMode="select" shouldCloseOnSelect={true} /> */}
            </div>
            <button onClick={params.deleteRecord}>Delete</button>
        </div>
    );
}