(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(88),l=a.n(c),o=a(4),s=a(11),i=a(201),m=a(203),u=a(6),d=a(7),p=a(10),f=a(8),b=a(9),E=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"py-3 col-8"},r.a.createElement("h3",{className:"text-center"},"Start make a Form"),r.a.createElement("button",{className:"btn btn-success btn-lg btn-block",onClick:function(){localStorage.clear(),window.location.href="http://localhost:3000/newField"}},"Start")),r.a.createElement("div",{className:"col-2"})))}}]),t}(r.a.Component),v=a(90),h=a.n(v),N=a(15),O=a(200),j=a(202),y=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderCheckBox",value:function(){return r.a.createElement("div",{className:"input-group ml-3 mb-1"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement(j.a,{name:"input1",id:"employed",component:"input",type:"checkbox"}))),r.a.createElement("input",{type:"text",className:"form-control","aria-label":"Text input with checkbox",placeholder:"Checkbox Text"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Check Boxes"),this.renderCheckBox(),this.renderCheckBox(),this.renderCheckBox())}}]),t}(r.a.Component);y=Object(o.b)(function(e){return{saveData:e}})(y);var g=Object(O.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(y),x=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderChoiceInput",value:function(){return r.a.createElement("div",{className:"input-group ml-3 mb-1"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement(j.a,{name:"choiceInput",id:"employed",component:"input",type:"radio"}))),r.a.createElement("input",{type:"text",className:"form-control","aria-label":"Text input with checkbox",placeholder:"Text Choice Input"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Check Boxes"),this.renderChoiceInput(),this.renderChoiceInput(),this.renderChoiceInput())}}]),t}(r.a.Component);x=Object(o.b)(function(e){return{saveData:e}})(x);var k=Object(O.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(x),C=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderList",value:function(){return r.a.createElement("option",null,"Choose...")}},{key:"render",value:function(){return r.a.createElement("div",{className:"DropDown ml-3"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Drop Down"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text"},"Options")),r.a.createElement(j.a,{name:"dropDownList",component:"select",className:"custom-select"},this.renderList())))}}]),t}(r.a.Component);C=Object(o.b)(function(e){return{saveData:e}})(C);var w=Object(O.a)({form:"question",destroyOnUnmount:!0,forceUnregisterOnUnmount:!0})(C),U=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Name"),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(j.a,{name:"Name",className:"form-control",component:"input",type:"text",placeholder:"Name",disabled:!0})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(j.a,{name:"LastName",className:"form-control",component:"input",type:"text",placeholder:"LastName",disabled:!0}))))}}]),t}(r.a.Component);U=Object(o.b)(function(e){return{saveData:e}})(U);var I=Object(O.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(U),D=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Address"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Address"),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(j.a,{name:"streetName",className:"form-control",component:"input",type:"text",placeholder:"Street Name"}))," "),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(j.a,{name:"secondLineAddress",className:"form-control",component:"input",type:"text",placeholder:"Address Line 2"}))),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(j.a,{name:"city",className:"form-control",component:"input",type:"text",placeholder:"City"})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(j.a,{name:"state",className:"form-control",component:"input",type:"text",placeholder:"State / Province / Region"}))),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(j.a,{name:"zipCode",className:"form-control",component:"input",type:"text",placeholder:"Zip Code"})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(j.a,{name:"country",className:"form-control",component:"input",type:"text",placeholder:"Country"}))))}}]),t}(r.a.Component);D=Object(o.b)(function(e){return{saveData:e}})(D);var L=Object(O.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(D),T=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Email"),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(j.a,{name:"Email",className:"form-control",component:"input",type:"email",placeholder:"Email"}))))}}]),t}(r.a.Component);T=Object(o.b)(function(e){return{saveData:e}})(T);var F=Object(O.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(T),S=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Phone Number"),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(j.a,{name:"phoneNumber",className:"form-control",component:"input",type:"number",placeholder:"Phone Number"}))))}}]),t}(r.a.Component);S=Object(o.b)(function(e){return{saveData:e}})(S);var A=Object(O.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(S),_=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Text"),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(j.a,{name:"text",className:"form-control",component:"input",type:"text",placeholder:"Your text"}),r.a.createElement("p",null,"!!!    add more inputs text !!!"))))}}]),t}(r.a.Component);_=Object(o.b)(function(e){return{saveData:e}})(_);var q=Object(O.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(_),B=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Text"),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(j.a,{name:"notes",className:"form-control",component:"textarea",placeholder:"Your text"}))))}}]),t}(r.a.Component);B=Object(o.b)(function(e){return{saveData:e}})(B);var P=Object(O.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(B),M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).editField=a.editField.bind(Object(N.a)(Object(N.a)(a))),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderInput",value:function(){var e=this.props.inputType,t=e.indexOf("_");switch(e.slice(0,t)){case"addName":return r.a.createElement("div",null,r.a.createElement(I,{name:e}));case"addAddress":return r.a.createElement("div",null,r.a.createElement(L,null));case"addEmail":return r.a.createElement("div",null,r.a.createElement(F,null));case"addPhone":return r.a.createElement("div",null,r.a.createElement(A,null));case"addText":return r.a.createElement("div",null,r.a.createElement(q,null));case"addTextBox":return r.a.createElement("div",null,r.a.createElement(P,null));case"addCheckBox":return r.a.createElement("div",null,r.a.createElement(g,null));case"addRadioInput":return r.a.createElement("div",null,r.a.createElement(k,null));case"addList":return r.a.createElement("div",null,r.a.createElement(w,null));default:return r.a.createElement("div",null,r.a.createElement("p",null,"Something is Wrong"),r.a.createElement("p",null,"Try add a Fields again"))}}},{key:"editField",value:function(){console.log(this)}},{key:"render",value:function(){var e=this,t=this.props.handleSubmit;return r.a.createElement("div",{className:"form card select-form"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-11 pt-2 "},r.a.createElement("form",{onSubmit:t,className:""},this.renderInput())),r.a.createElement("div",{className:"col-1 edit"},r.a.createElement("i",{className:"far fa-edit","data-target":"#navbarCollapse2","data-toggle":"collapse",onClick:function(){return e.editField(e.props.deleteInput)}}),r.a.createElement("i",{className:"far fa-trash-alt",onClick:function(){return e.props.deleteInput(e.props.inputType)}}))))}}]),t}(r.a.Component);M=Object(o.b)(function(e){return{nameData:e}},{addSubQuestion:function(e,t){return{type:"ADD_SUB_QUESTION",payload:{question:e,typeValue:"type",prevTypeValue:t}}},deleteInput:function(e){return{type:"DELETE_QUESTION",payload:{input:e}}}})(M);var Q=Object(O.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(M),R=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"editField"},"Please Select a field to Edit")}}]),t}(r.a.Component),Y=a(46),z=a.n(Y),J=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).selectEditList=a.selectEditList.bind(Object(N.a)(Object(N.a)(a))),a.selectInputList=a.selectInputList.bind(Object(N.a)(Object(N.a)(a))),a.state={chooseElement:""},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.selectEditList()}},{key:"addClassActive",value:function(){z()(".nav-link").click(function(){z()(".nav-link").removeClass("active"),z()(this).closest(".nav-link").addClass("active")})}},{key:"selectInputList",value:function(){this.addClassActive(),this.setState({chooseElement:"list"})}},{key:"selectEditList",value:function(){this.addClassActive(),this.setState({chooseElement:"edit"})}},{key:"renderInputList",value:function(){var e=this;return[{icon:"far fa-user fa-lg pr-3",name:"Name",action:"addName"},{icon:"fas fa-home fa-lg pr-3",name:"Address",action:"addAddress"},{icon:"far fa-envelope fa-lg pr-3",name:"Email",action:"addEmail"},{icon:"fas fa-phone fa-lg pr-3",name:"Phone",action:"addPhone"},{icon:"fas fa-align-justify fa-lg pr-3",name:"Single Line Text",action:"addText"},{icon:"far fa-comment-alt fa-lg pr-3",name:"Message Text Box",action:"addTextBox"},{icon:"far fa-check-square fa-lg pr-3",name:"Check Boxes",action:"addCheckBox"},{icon:"fas fa-list-ul fa-lg pr-3",name:"Multiple Choise",action:"addRadioInput"},{icon:"far fa-caret-square-down fa-lg pr-3",name:"Drop Down List",action:"addList"}].map(function(t){var a=t.action;return r.a.createElement("button",{key:t.name,type:"button",className:"list-group-item list-group-item-action",onClick:function(){return e.props.addInput(a)}},r.a.createElement("i",{className:t.icon}),t.name)})}},{key:"renderEditField",value:function(){return r.a.createElement(R,null)}},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("ul",{className:"nav nav-tabs card-header-tabs"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"#1"},r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarCollapse","aria-expanded":"true",onClick:this.selectInputList},r.a.createElement("i",{className:"fas fa-plus-circle fa-lg pr-3"}),"Add Field"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#2"},r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarCollapse2","aria-expanded":"true",onClick:this.selectEditList},r.a.createElement("i",{className:"far fa-edit fa-lg pr-3"}),"Edit"))))),r.a.createElement("div",{className:"card-body pb-3",id:"accordion"},r.a.createElement("div",{className:"navbar-collapse collapse show",id:"navbarCollapse","data-parent":"#accordion"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item px-2"},r.a.createElement("div",{className:"list-group"},this.renderInputList())))),r.a.createElement("div",{className:"navbar-collapse collapse",id:"navbarCollapse2","data-parent":"#accordion"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item px-2"},r.a.createElement("div",{className:"list-group"},r.a.createElement(R,null)))))))}}]),t}(r.a.Component),V={addInput:function(e){return{type:"ADD_INPUT",payload:{input:e}}}},W=Object(o.b)(function(e){return{createForm:e.createForm}},V)(J),Z=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderList",value:function(){return 0===this.props.createForm.length?r.a.createElement("div",{className:"text-center font-weight-bold"},r.a.createElement("div",null,"Your Field List is Empty"),r.a.createElement("div",{className:"py-3"},r.a.createElement("i",{className:"fas fa-plus-circle fa-5x pr-3 text-secondary"})),r.a.createElement("div",null,"Please Add First Field")):this.props.createForm.map(function(e,t){return r.a.createElement("div",{key:e+t},r.a.createElement(Q,{inputType:e}))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 order-lg-2"},r.a.createElement(W,null),r.a.createElement("button",{className:"btn btn-primary btn-block btn-phone",onClick:function(){return h()(e.props.saveData)}},"Save Form")),r.a.createElement("div",{className:" pt-3 col-lg-8 col-sm-12 order-lg-1"},r.a.createElement("div",null,this.renderList()))))}}]),t}(r.a.Component),G=Z=Object(o.b)(function(e){return{createForm:e.createForm,saveData:e}})(Z),H=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:" header row text-center pb-3"}," ",r.a.createElement("i",{className:"fas fa-cog fa-4x fa-spin mr-5"}),r.a.createElement("h1",null,r.a.createElement("b",null,"Now creating the form is easy..."))," "))},K=function(){return r.a.createElement("div",{className:"container py-2"},r.a.createElement(H,null),r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(m.a,{path:"/",exact:!0,component:E}),r.a.createElement(m.a,{path:"/newField",exact:!0,component:G}))),r.a.createElement("footer",null,r.a.createElement("div",{className:"copyright text-center pt-5 text-dark"},"\xa9 by Michal Oznerek 2019")))},X=a(65),$=a(204),ee=Object(s.b)({form:$.a,createForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=e.length+1;switch(t.type){case"DELETE_QUESTION":return console.log("reducers:",t.payload.input),Object(X.a)(e.filter(function(e){return e!==t.payload.input}));case"ADD_INPUT":return[].concat(Object(X.a)(e),[t.payload.input+"_".concat(a)]);default:return e}}}),te=Object(s.c)(ee);l.a.render(r.a.createElement(o.a,{store:te},r.a.createElement(K,null)),document.querySelector("#root"))},90:function(e,t){},92:function(e,t,a){e.exports=a(198)}},[[92,1,2]]]);
//# sourceMappingURL=main.6a850e7b.chunk.js.map