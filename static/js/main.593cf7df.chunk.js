(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(89),l=a.n(c),o=a(4),s=a(12),m=a(204),i=a(93),u=a(6),d=a(7),p=a(10),f=a(8),b=a(9),E=a(206),v=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"py-3 col-8"},r.a.createElement("h3",{className:"text-center"},"Start make a Forms"),r.a.createElement(E.a,{exact:!0,to:"/newField"},"        ",r.a.createElement("button",{className:"btn btn-success btn-lg btn-block",onClick:function(){localStorage.clear()}},"Start"))),r.a.createElement("div",{className:"col-2"})))}}]),t}(r.a.Component),h=a(92),N=a.n(h),O=a(15),j=a(202),y=a(203),g=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderCheckBox",value:function(){return r.a.createElement("div",{className:"input-group ml-3 mb-1"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement(y.a,{name:"input1",id:"employed",component:"input",type:"checkbox"}))),r.a.createElement("input",{type:"text",className:"form-control","aria-label":"Text input with checkbox",placeholder:"Checkbox Text"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Check Boxes"),this.renderCheckBox(),this.renderCheckBox(),this.renderCheckBox())}}]),t}(r.a.Component);g=Object(o.b)(function(e){return{saveData:e}})(g);var x=Object(j.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(g),k=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderChoiceInput",value:function(){return r.a.createElement("div",{className:"input-group ml-3 mb-1"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement(y.a,{name:"choiceInput",id:"employed",component:"input",type:"radio"}))),r.a.createElement("input",{type:"text",className:"form-control","aria-label":"Text input with checkbox",placeholder:"Text Choice Input"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Check Boxes"),this.renderChoiceInput(),this.renderChoiceInput(),this.renderChoiceInput())}}]),t}(r.a.Component);k=Object(o.b)(function(e){return{saveData:e}})(k);var C=Object(j.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(k),U=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderList",value:function(){return r.a.createElement("option",null,"Choose...")}},{key:"render",value:function(){return r.a.createElement("div",{className:"DropDown ml-3"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Drop Down"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text"},"Options")),r.a.createElement(y.a,{name:"dropDownList",component:"select",className:"custom-select"},this.renderList())))}}]),t}(r.a.Component);U=Object(o.b)(function(e){return{saveData:e}})(U);var w=Object(j.a)({form:"question",destroyOnUnmount:!0,forceUnregisterOnUnmount:!0})(U),I=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Name"),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(y.a,{name:"Name",className:"form-control",component:"input",type:"text",placeholder:"Name",disabled:!0})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(y.a,{name:"LastName",className:"form-control",component:"input",type:"text",placeholder:"LastName",disabled:!0}))))}}]),t}(r.a.Component);I=Object(o.b)(function(e){return{saveData:e}})(I);var D=Object(j.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(I),L=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Address"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Address"),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(y.a,{name:"streetName",className:"form-control",component:"input",type:"text",placeholder:"Street Name"}))," "),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(y.a,{name:"secondLineAddress",className:"form-control",component:"input",type:"text",placeholder:"Address Line 2"}))),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(y.a,{name:"city",className:"form-control",component:"input",type:"text",placeholder:"City"})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(y.a,{name:"state",className:"form-control",component:"input",type:"text",placeholder:"State / Province / Region"}))),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(y.a,{name:"zipCode",className:"form-control",component:"input",type:"text",placeholder:"Zip Code"})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(y.a,{name:"country",className:"form-control",component:"input",type:"text",placeholder:"Country"}))))}}]),t}(r.a.Component);L=Object(o.b)(function(e){return{saveData:e}})(L);var T=Object(j.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(L),F=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Email"),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(y.a,{name:"Email",className:"form-control",component:"input",type:"email",placeholder:"Email"}))))}}]),t}(r.a.Component);F=Object(o.b)(function(e){return{saveData:e}})(F);var S=Object(j.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(F),A=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Phone Number"),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(y.a,{name:"phoneNumber",className:"form-control",component:"input",type:"number",placeholder:"Phone Number"}))))}}]),t}(r.a.Component);A=Object(o.b)(function(e){return{saveData:e}})(A);var _=Object(j.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(A),q=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Text"),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(y.a,{name:"text",className:"form-control",component:"input",type:"text",placeholder:"Your text"}),r.a.createElement("p",null,"!!!    add more inputs text !!!"))))}}]),t}(r.a.Component);q=Object(o.b)(function(e){return{saveData:e}})(q);var B=Object(j.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(q),P=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Input_Name"},r.a.createElement("label",{className:"col-sm-12 col-form-label"},"Text"),r.a.createElement("div",{className:"form-group row pl-2"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(y.a,{name:"notes",className:"form-control",component:"textarea",placeholder:"Your text"}))))}}]),t}(r.a.Component);P=Object(o.b)(function(e){return{saveData:e}})(P);var M=Object(j.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(P),Q=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).editField=a.editField.bind(Object(O.a)(Object(O.a)(a))),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderInput",value:function(){var e=this.props.inputType,t=e.indexOf("_");switch(e.slice(0,t)){case"addName":return r.a.createElement("div",null,r.a.createElement(D,{name:e}));case"addAddress":return r.a.createElement("div",null,r.a.createElement(T,null));case"addEmail":return r.a.createElement("div",null,r.a.createElement(S,null));case"addPhone":return r.a.createElement("div",null,r.a.createElement(_,null));case"addText":return r.a.createElement("div",null,r.a.createElement(B,null));case"addTextBox":return r.a.createElement("div",null,r.a.createElement(M,null));case"addCheckBox":return r.a.createElement("div",null,r.a.createElement(x,null));case"addRadioInput":return r.a.createElement("div",null,r.a.createElement(C,null));case"addList":return r.a.createElement("div",null,r.a.createElement(w,null));default:return r.a.createElement("div",null,r.a.createElement("p",null,"Something is Wrong"),r.a.createElement("p",null,"Try add a Fields again"))}}},{key:"editField",value:function(){console.log(this)}},{key:"render",value:function(){var e=this,t=this.props.handleSubmit;return r.a.createElement("div",{className:"form card select-form"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-11 pt-2 "},r.a.createElement("form",{onSubmit:t,className:""},this.renderInput())),r.a.createElement("div",{className:"col-1 edit"},r.a.createElement("i",{className:"far fa-edit","data-target":"#navbarCollapse2","data-toggle":"collapse",onClick:function(){return e.editField(e.props.deleteInput)}}),r.a.createElement("i",{className:"far fa-trash-alt",onClick:function(){return e.props.deleteInput(e.props.inputType)}}))))}}]),t}(r.a.Component);Q=Object(o.b)(function(e){return{nameData:e}},{addSubQuestion:function(e,t){return{type:"ADD_SUB_QUESTION",payload:{question:e,typeValue:"type",prevTypeValue:t}}},deleteInput:function(e){return{type:"DELETE_QUESTION",payload:{input:e}}}})(Q);var R=Object(j.a)({form:"question",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})(Q),Y=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"editField"},"Please Select a field to Edit")}}]),t}(r.a.Component),z=a(47),J=a.n(z),V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).selectEditList=a.selectEditList.bind(Object(O.a)(Object(O.a)(a))),a.selectInputList=a.selectInputList.bind(Object(O.a)(Object(O.a)(a))),a.state={chooseElement:""},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.selectEditList()}},{key:"addClassActive",value:function(){J()(".nav-link").click(function(){J()(".nav-link").removeClass("active"),J()(this).closest(".nav-link").addClass("active")})}},{key:"selectInputList",value:function(){this.addClassActive(),this.setState({chooseElement:"list"})}},{key:"selectEditList",value:function(){this.addClassActive(),this.setState({chooseElement:"edit"})}},{key:"renderInputList",value:function(){var e=this;return[{icon:"far fa-user fa-lg pr-3",name:"Name",action:"addName"},{icon:"fas fa-home fa-lg pr-3",name:"Address",action:"addAddress"},{icon:"far fa-envelope fa-lg pr-3",name:"Email",action:"addEmail"},{icon:"fas fa-phone fa-lg pr-3",name:"Phone",action:"addPhone"},{icon:"fas fa-align-justify fa-lg pr-3",name:"Single Line Text",action:"addText"},{icon:"far fa-comment-alt fa-lg pr-3",name:"Message Text Box",action:"addTextBox"},{icon:"far fa-check-square fa-lg pr-3",name:"Check Boxes",action:"addCheckBox"},{icon:"fas fa-list-ul fa-lg pr-3",name:"Multiple Choise",action:"addRadioInput"},{icon:"far fa-caret-square-down fa-lg pr-3",name:"Drop Down List",action:"addList"}].map(function(t){var a=t.action;return r.a.createElement("button",{key:t.name,type:"button",className:"list-group-item list-group-item-action",onClick:function(){return e.props.addInput(a)}},r.a.createElement("i",{className:t.icon}),t.name)})}},{key:"renderEditField",value:function(){return r.a.createElement(Y,null)}},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("ul",{className:"nav nav-tabs card-header-tabs"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"#1"},r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarCollapse","aria-expanded":"true",onClick:this.selectInputList},r.a.createElement("i",{className:"fas fa-plus-circle fa-lg pr-3"}),"Add Field"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#2"},r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarCollapse2","aria-expanded":"true",onClick:this.selectEditList},r.a.createElement("i",{className:"far fa-edit fa-lg pr-3"}),"Edit"))))),r.a.createElement("div",{className:"card-body pb-3",id:"accordion"},r.a.createElement("div",{className:"navbar-collapse collapse show",id:"navbarCollapse","data-parent":"#accordion"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item px-2"},r.a.createElement("div",{className:"list-group"},this.renderInputList())))),r.a.createElement("div",{className:"navbar-collapse collapse",id:"navbarCollapse2","data-parent":"#accordion"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item px-2"},r.a.createElement("div",{className:"list-group"},r.a.createElement(Y,null)))))))}}]),t}(r.a.Component),W={addInput:function(e){return{type:"ADD_INPUT",payload:{input:e}}}},Z=Object(o.b)(function(e){return{createForm:e.createForm}},W)(V),G=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderList",value:function(){return 0===this.props.createForm.length?r.a.createElement("div",{className:"text-center font-weight-bold"},r.a.createElement("div",null,"Your Field List is Empty"),r.a.createElement("div",{className:"py-3"},r.a.createElement("i",{className:"fas fa-plus-circle fa-5x pr-3 text-secondary"})),r.a.createElement("div",null,"Please Add First Field")):this.props.createForm.map(function(e,t){return r.a.createElement("div",{key:e+t},r.a.createElement(R,{inputType:e}))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 order-lg-2"},r.a.createElement(Z,null),r.a.createElement("button",{className:"btn btn-primary btn-block btn-phone",onClick:function(){return N()(e.props.saveData)}},"Save Form")),r.a.createElement("div",{className:" pt-3 col-lg-8 col-sm-12 order-lg-1"},r.a.createElement("div",null,this.renderList()))))}}]),t}(r.a.Component),H=G=Object(o.b)(function(e){return{createForm:e.createForm,saveData:e}})(G),K=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:" header row text-center pb-3"}," ",r.a.createElement("i",{className:"fas fa-cog fa-4x fa-spin mr-5"}),r.a.createElement("h1",null,r.a.createElement("b",null,"Now creating the form is easy..."))," "))},X=function(){return r.a.createElement("div",{className:"container py-2"},r.a.createElement(K,null),r.a.createElement(m.a,{basename:"/form-creator"},r.a.createElement("div",null,r.a.createElement(i.a,{path:"/",exact:!0,component:v}),r.a.createElement(i.a,{path:"/newField",exact:!0,component:H}))),r.a.createElement("footer",null,r.a.createElement("div",{className:"copyright text-center pt-5 text-dark"},"\xa9 by Michal Oznerek 2019")))},$=a(66),ee=a(205),te=Object(s.b)({form:ee.a,createForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=e.length+1;switch(t.type){case"DELETE_QUESTION":return console.log("reducers:",t.payload.input),Object($.a)(e.filter(function(e){return e!==t.payload.input}));case"ADD_INPUT":return[].concat(Object($.a)(e),[t.payload.input+"_".concat(a)]);default:return e}}}),ae=Object(s.c)(te);l.a.render(r.a.createElement(o.a,{store:ae},r.a.createElement(X,null)),document.querySelector("#root"))},92:function(e,t){},95:function(e,t,a){e.exports=a(201)}},[[95,1,2]]]);
//# sourceMappingURL=main.593cf7df.chunk.js.map