(this.webpackJsonpreg_form=this.webpackJsonpreg_form||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"emailjs":{"service_id":"service_ekyvguk","user_id":"user_xlCrMdFfdIceV8ODHixvy","templateAdd_id":"template_9ymcj28","templateUpdate_id":"template_ocwll5c","from_name":"smolbars@gmail.com"},"site":{"host":"http://localhost:3000"},"sheet":"https://sheet.best/api/sheets/9789324f-9b9f-40c2-85d2-30e3de0fa441"}')},133:function(e,t,a){},194:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(32),s=a.n(r),i=(a(97),a(18)),c=a(19),l=a(48),o=a(47),d=(a(98),a(92)),u=a(29),h=(a(99),a(36)),b=a.n(h),m=a(37),j=a(41),p=a.n(j);a(130),a(131);function O(){return"".concat(Math.floor(1e4*Math.random()),"-").concat(Date.now(),"-").concat(Math.floor(1e4*Math.random()))}function f(e){return new Date(Number(e.substr(0,4)),Number(e.substr(5,2))-1,e.substr(8,2))}var x=function(){function e(t){Object(i.a)(this,e),t?(this.firstname=t.firstname,this.lastname=t.lastname,this.email=t.email,this.phone=t.phone,this.birthdate=f(t.birthDate),this.isVisible="???",this.id=t.idRow):(this.firstname="",this.lastname="",this.email="",this.phone="",this.birthdate="",this.isVisible="",this.id=O())}return Object(c.a)(e,[{key:"createRecord",value:function(e,t,a,n,r,s){return this.firstname=e,this.lastname=t,this.email=a,this.phone=n,this.birthdate=r,this.visible=s,this.id=O(),this}}]),e}(),v=a(38),g=a.n(v),y=a(62),w=a(63),C=a.n(w),k=a(12),N=function(){function e(){Object(i.a)(this,e),this.url=k.sheet}return Object(c.a)(e,[{key:"getRecords",value:function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(this.url,"/idOrder/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"insertRecord",value:function(e,t,a,n,r,s,i){switch(t){case 1:var c={method:"POST",headers:{"content-type":"application/json"},data:[{number:a,firstname:e.firstname,lastname:e.lastname,phone:e.phone,email:e.email,"birt\u0440Date":C()(e.birthdate,"yyyy-mm-dd"),idRow:e.id,idOrder:n,emailOwner:r,actualDate:C()(s,"yyyy-mm-dd"),actualTime:i}],url:this.url};b()(c).then((function(e){console.log("the data was added in the table ",e.data)})).catch((function(e){console.log("no data sorry ",e)}))}}},{key:"deleteRecord",value:function(){var e=Object(y.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=a,e.next=1===e.t0?3:6;break;case 3:return e.next=5,b.a.delete("".concat(this.url,"/idOrder/").concat(t));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),D=a(20),S=(a(133),a(4));function _(e){var t=Object(n.useState)(e.record.firstname),a=Object(D.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(e.record.lastname),c=Object(D.a)(i,2),l=c[0],o=c[1],d=Object(n.useState)(e.record.email),u=Object(D.a)(d,2),h=u[0],b=u[1],m=Object(n.useState)(e.record.phone),j=Object(D.a)(m,2),O=j[0],f=j[1],x=Object(n.useState)(e.record.birthdate),v=Object(D.a)(x,2),g=v[0],y=v[1];return Object(n.useEffect)((function(){e.funcCallBack({firstname:r,lastname:l,email:h,phone:O,birthdate:g,isVisible:e.record.isVisible,id:e.record.id})})),Object(S.jsxs)("div",{className:"strtable-c",children:[Object(S.jsxs)("div",{className:"title",children:[Object(S.jsx)("h2",{children:"Person # ".concat(e.index+1)}),Object(S.jsx)("button",{onClick:e.deleteRecord,children:"Delete"})]}),Object(S.jsxs)("div",{className:"input-div1",children:[Object(S.jsxs)("label",{className:"label1",htmlFor:"firstname{index}",children:["Vorname ",Object(S.jsx)("span",{class:"reqsymbol",children:"*"})]}),Object(S.jsx)("input",{type:"text",name:"firstname{index}",id:"firstname{index}",className:"input1",value:r,onChange:function(e){return s(e.target.value)},required:!0})]}),Object(S.jsxs)("div",{className:"input-div2",children:[Object(S.jsxs)("label",{className:"label2",htmlFor:"lastname1",children:["Name ",Object(S.jsx)("span",{class:"reqsymbol",children:"*"})]}),Object(S.jsx)("input",{type:"text",name:"lastname{index}",id:"lastname{index}",className:"input1",value:l,onChange:function(e){return o(e.target.value)},required:!0})]}),Object(S.jsxs)("div",{className:"input-div3",children:[Object(S.jsxs)("label",{className:"label3",htmlFor:"email1",children:["Email ",Object(S.jsx)("span",{class:"reqsymbol",children:"*"})]}),Object(S.jsx)("input",{type:"text",name:"email{index}",id:"email{index}",className:"input1",value:h,onChange:function(e){return b(e.target.value)},required:!0})]}),Object(S.jsxs)("div",{className:"input-div4",children:[Object(S.jsxs)("label",{className:"label4",htmlFor:"phone{index}",children:["Telefon",Object(S.jsx)("span",{class:"reqsymbol",children:"*"})]}),Object(S.jsx)("input",{type:"text",name:"phone{index}",id:"phone{index}",className:"input1",value:O,onChange:function(e){return f(e.target.value)},required:!0})]}),Object(S.jsxs)("div",{className:"input-div5",children:[Object(S.jsxs)("label",{className:"label5",htmlFor:"birthdate{index}",children:["Geburtsdatum",Object(S.jsx)("span",{class:"reqsymbol",children:"*"})]}),Object(S.jsx)(p.a,{name:"birthdate{index}",id:"birthdate{index}",selected:g,onChange:function(e){return y(e)},required:!0,dateFormat:"yyyy-MM-dd",peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",shouldCloseOnSelect:!0})]})]})}a(194);var T=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).propsID=e.id;e.update;return n.propsID?n.state={idOrder:e.id,records:[],googleTab:[],isTableFilled:!1,isUpdate:!0,maxCountOfPersons:50,regButton:!1,regButtonCaption:"\xc4ndern"}:n.state={actualPersonNumber:1,persons:[],records:[new x],redirect:!1,googleTab:[],isTableFilled:!1,isUpdate:!1,actualDate:new Date,actualTime:"10-00",maxCountOfPersons:50,regButton:!1,regButtonCaption:"Anmelden",idOrder:O()},n.changeOfPersons=n.changeOfPersons.bind(Object(u.a)(n)),n.presetRegistryButton=n.presetRegistryButton.bind(Object(u.a)(n)),n.submitHandler=n.submitHandler.bind(Object(u.a)(n)),n.tableChangeServiceView=new N,n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.id&&(new N).getRecords(this.props.id).then((function(t){var a=t.data.map((function(e){return new x(e)}));e.setState({records:a,regEmail:t.data[0].emailOwner,idOrder:t.data[0].idOrder,actualDate:f(t.data[0].actualDate),actualTime:t.data[0].actualTime})})).catch((function(e){return console.error(e)}))}},{key:"changeOfPersons",value:function(e){}},{key:"presetRegistryButton",value:function(){!this.state.isUpdate&&this.state.googleTab.length<this.state.maxCountOfPersons&&(this.state.regButton=!1)}},{key:"submitHandler",value:function(e){e.preventDefault(),this.propsID?this.submitHandlerUpdate():this.submitHandlerAdd()}},{key:"submitHandlerUpdate",value:function(){var e=this;this.tableChangeServiceView.deleteRecord(this.state.idOrder,1).then((function(t){return e.state.records.forEach((function(t,a){return e.tableChangeServiceView.insertRecord(t,1,a+1,e.state.idOrder,e.state.regEmail,e.state.actualDate,e.state.actualTime)}))})),this.state.records.forEach((function(t,a){m.init(k.emailjs.user_id);var n={from_name:k.emailjs.from_name,to_name:e.state.email};m.send(k.emailjs.service_id,k.emailjs.templateUpdate_id,n).then((function(e){console.log(e.status,e.text)}),(function(e){console.log(e)}))})),this.setState({redirect:!0})}},{key:"submitHandlerAdd",value:function(){var e=this;this.state.records.forEach((function(t,a){return e.tableChangeServiceView.insertRecord(t,1,a+1,e.state.idOrder,e.state.regEmail,e.state.actualDate,e.state.actualTime)})),this.state.records.forEach((function(t,a){m.init(k.emailjs.user_id);var n={from_name:k.emailjs.from_name,to_name:t.email,link_delete:"".concat(k.site.host,"#/delete/").concat(e.state.idOrder),link_update:"".concat(k.site.host,"#/update/").concat(e.state.idOrder)};m.send(k.emailjs.service_id,k.emailjs.templateAdd_id,n).then((function(e){console.log(e.status,e.text)}),(function(e){console.log(e)}))})),this.setState({redirect:!0})}},{key:"render",value:function(){var e=this;if(this.state.redirect)return Object(S.jsxs)("table",{children:[Object(S.jsx)("tbody",{children:this.state.googleTab.map((function(e,t){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:e[1].number}),Object(S.jsx)("td",{children:e[1].firstname}),Object(S.jsx)("td",{children:e[1].lastname})]},t)}))}),Object(S.jsx)("button",{onClick:function(){return e.delAppointment()},children:"Termin stornieren"})]});var t=this.state.records.map((function(t,a){return Object(S.jsx)(_,{record:t,index:a,funcCallBack:function(t){e.state.records[a]=t},deleteRecord:function(){console.log(e.state.records);var t=Object(d.a)(e.state.records);t.splice(a,1),console.log(t),e.setState({records:t})}})}));return Object(S.jsxs)("form",{className:"regForm",onSubmit:this.submitHandler,children:[Object(S.jsxs)("div",{class:"sector",children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("label",{children:" Termin der Lithurigie oder Dienst"}),Object(S.jsx)(p.a,{selected:this.state.actualDate,onSelect:function(t){return e.setState({actualDate:t})},dateFormat:"yyyy-MM-dd",peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",shouldCloseOnSelect:!0})]}),Object(S.jsx)("div",{children:Object(S.jsx)("label",{children:"Typ der Anbetung:"})}),Object(S.jsxs)("label",{children:[Object(S.jsx)("input",{type:"radio",id:"prayer",name:"prayer",value:"1",onChange:function(){return e.setState({actualTime:"10-00"})},checked:"10-00"===this.state.actualTime}),"Morgen (um 10.00)"]}),Object(S.jsx)("br",{}),Object(S.jsxs)("label",{children:[Object(S.jsx)("input",{type:"radio",id:"prayer",name:"prayer",value:"2",onChange:function(){return e.setState({actualTime:"18-00"})},checked:"18-00"===this.state.actualTime}),"Abend (um 18.00)"]}),Object(S.jsx)("br",{}),Object(S.jsx)("div",{children:Object(S.jsxs)("label",{children:["Anzahl der Personen: ",Object(S.jsxs)("b",{children:[" ",this.state.records.length]})]})}),Object(S.jsxs)("div",{className:"reg-email",children:[Object(S.jsxs)("label",{className:"",htmlFor:"regemail",children:["Email for registration ",Object(S.jsx)("span",{class:"reqsymbol",children:"*"})]}),Object(S.jsx)("input",{type:"text",name:"regemail",id:"regemail",className:"input1",value:this.state.regEmail,onChange:function(t){return e.setState({regEmail:t.target.value})},required:!0})]})]}),Object(S.jsx)("br",{}),t,Object(S.jsx)("button",{onClick:function(){e.setState({records:e.state.records.concat(new x)})},children:"Add 1 person"}),Object(S.jsx)("button",{type:"submit",children:this.state.regButtonCaption})]})}}]),a}(n.Component),M=a(6);function F(){var e=Object(M.e)().hash.replace("#/update/","");return Object(S.jsx)(T,{id:e})}var R=a(39);function B(e){var t=Object(n.useState)(!1),a=Object(D.a)(t,2),r=a[0],s=a[1],i=Object(M.e)().hash.replace("#/delete/","");return Object(n.useEffect)((function(){(new N).deleteRecord(i,1).then(s(!0))}),[]),r?Object(S.jsx)("div",{children:"Sehr geehrte Damen und Herren, den Termin war wegen Ihre Bitte gel\xf6scht!"}):Object(S.jsx)("div",{children:"........."})}var E=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(R.b,{basename:"/reg_forms",children:Object(S.jsxs)(M.b,{children:[Object(S.jsx)(R.a,{path:"/",exact:!0,children:Object(S.jsx)(T,{})}),Object(S.jsx)(R.a,{path:"/update/:id",exact:!0,children:Object(S.jsx)(F,{})}),Object(S.jsx)(R.a,{path:"/delete/:id",exact:!0,children:Object(S.jsx)(B,{})})]})})})}}]),a}(n.Component),q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,202)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};s.a.render(Object(S.jsx)(E,{}),document.getElementById("root")),q()},97:function(e,t,a){},98:function(e,t,a){}},[[197,1,2]]]);
//# sourceMappingURL=main.e04ac37d.chunk.js.map