(function(t){function a(a){for(var n,i,c=a[0],r=a[1],l=a[2],u=0,m=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(a);while(m.length)m.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,c=1;c<e.length;c++){var r=e[c];0!==s[r]&&(n=!1)}n&&(o.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},s={app:0},o=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/contacts-list-vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var d=r;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"4d41":function(t,a,e){t.exports=e.p+"img/avatar.aee6adef.png"},"56d7":function(t,a,e){"use strict";e.r(a);var n={};e.r(n),e.d(n,"namespaced",(function(){return D})),e.d(n,"state",(function(){return F})),e.d(n,"mutations",(function(){return R})),e.d(n,"actions",(function(){return G})),e.d(n,"getters",(function(){return U}));var s={};e.r(s),e.d(s,"namespaced",(function(){return Z})),e.d(s,"state",(function(){return H})),e.d(s,"mutations",(function(){return Q})),e.d(s,"actions",(function(){return V}));e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"wrapper d-flex col-xl-9 col-lg-10 m-auto"},[e("Menu"),e("NotificationContainer"),e("router-view")],1)])},c=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"d-none d-md-block navbar navbar-dark align-items-start sidebar sidebar-dark bg-primary p-0 col-md-3 col-lg-4 col-xl-3 min-vh-100"},[e("div",{staticClass:"container-fluid d-flex flex-column p-0"},[e("a",{staticClass:"navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0",attrs:{href:"#"}},[t._m(0),e("div",{staticClass:"sidebar-brand-text mx-3 my-3"},[e("router-link",{staticClass:"nav-link text-light active",attrs:{to:{name:"ContactList"}}},[e("span",[t._v("Contacts")])])],1)]),e("ul",{staticClass:"nav navbar-nav text-light align-self-start",attrs:{id:"accordionSidebar"}},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"ContactList"}}},[e("i",{staticClass:"fas fa-user ml-3"}),e("span",{staticClass:"ml-3"},[t._v("Contact List")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"ContactCreate"}}},[e("i",{staticClass:"fas fa-user-plus ml-3"}),e("span",{staticClass:"ml-3"},[t._v("Create")])])],1)])])])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sidebar-brand-icon rotate-n-15"},[e("i",{staticClass:"fa fa-users"})])}],d={},u=d,m=e("2877"),p=Object(m["a"])(u,r,l,!1,null,null,null),f=p.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"notification-container"},t._l(t.notifications,(function(t){return e("NotificationBar",{key:t.id,attrs:{notification:t}})})),1)},v=[],C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"alert",class:t.notificationTypeClass},[e("p",[t._v(t._s(t.notification.message))])])},b=[],g=e("2f62"),_={props:{notification:{type:Object,required:!0}},data:function(){return{timeout:null}},mounted:function(){var t=this;this.timeout=setTimeout((function(){return t.remove(t.notification)}),5e3)},beforeDestroy:function(){clearTimeout(this.timeout)},computed:{notificationTypeClass:function(){return"alert-".concat(this.notification.type)}},methods:Object(g["b"])("notification",["remove"])},y=_,T=Object(m["a"])(y,C,b,!1,null,null,null),x=T.exports,w={components:{NotificationBar:x},computed:Object(g["d"])("notification",["notifications"])},k=w,P=(e("7f15"),Object(m["a"])(k,h,v,!1,null,"8becace4",null)),E=P.exports,A={components:{Menu:f,NotificationContainer:E}},O=A,I=Object(m["a"])(O,i,c,!1,null,null,null),j=I.exports,S=e("8c4f"),N=(e("7db0"),e("bc3a")),$=e.n(N),q=e("323e"),L=e.n(q),M=$.a.create({baseURL:"https://my-json-server.typicode.com/kiral439/alif-contacts-db",withCredentials:!1,headers:{Accept:"application/json","Content-type":"application/json"}});M.interceptors.request.use((function(t){return L.a.start(),t})),M.interceptors.response.use((function(t){return L.a.done(),t}));var B={getContacts:function(t,a){return M.get("/contacts?_limit="+t+"&_page="+a)},getContactsByQuery:function(t,a,e){return M.get("/contacts?_limit="+t+"&_page="+a+"&q="+e)},getContactById:function(t){return M.get("/contacts/"+t)},postContact:function(t){return M.post("/contacts",t)},deleteContact:function(t){return M.delete("/contacts/"+t)},putContact:function(t){return M.put("/contacts/"+t.id,t)}},D=!0,F={contacts:[],contactsTotal:0,contact:{},perPage:10},R={ADD_CONTACT:function(t,a){t.contacts.push(a)},SET_CONTACTS:function(t,a){t.contacts=a},SET_CONTACTS_TOTAL:function(t,a){t.contactsTotal=a},SET_CONTACT:function(t,a){t.contact=a},SET_PER_PAGE:function(t,a){t.perPage=a}},G={createContact:function(t,a){var e=t.commit,n=t.dispatch;return B.postContact(a).then((function(){e("ADD_CONTACT",a);var t={type:"success",message:"The contact has been created!"};n("notification/add",t,{root:!0})})).catch((function(t){var a={type:"danger",message:"There was a problem creating your contact: "+t.message};throw n("notification/add",a,{root:!0}),t}))},fetchContacts:function(t,a){var e=t.commit,n=t.state,s=t.dispatch,o=a.page;return B.getContacts(n.perPage,o).then((function(t){e("SET_CONTACTS",t.data),e("SET_CONTACTS_TOTAL",t.headers["x-total-count"])})).catch((function(t){var a={type:"danger",message:"There was a problem fetching contacts: "+t.message};throw s("notification/add",a,{root:!0}),t}))},findContacts:function(t,a){var e=t.commit,n=t.state,s=t.dispatch,o=a.page,i=a.q;return B.getContactsByQuery(n.perPage,o,i).then((function(t){e("SET_CONTACTS",t.data),e("SET_CONTACTS_TOTAL",t.headers["x-total-count"])})).catch((function(t){var a={type:"danger",message:"There was a problem finding contacts: "+t.message};throw s("notification/add",a,{root:!0}),t}))},fetchContact:function(t,a){var e=t.commit,n=t.getters,s=t.dispatch,o=n.getContactById(a);return o?(e("SET_CONTACT",o),o):B.getContactById(a).then((function(t){return e("SET_CONTACT",t.data),t.data})).catch((function(t){var a={type:"danger",message:"There was a problem fetching contact: "+t.message};throw s("notification/add",a,{root:!0}),t}))},removeContact:function(t,a){var e=t.dispatch;return B.deleteContact(a).then((function(){e("fetchContacts",1)})).catch((function(t){var a={type:"danger",message:"There was a problem deleting contact: "+t.message};throw e("notification/add",a,{root:!0}),t}))},editContact:function(t,a){var e=t.dispatch;return B.putContact(a).then((function(){var t={type:"success",message:"The contact successfully edited: "};e("notification/add",t,{root:!0})})).catch((function(t){var a={type:"danger",message:"There was a problem editing contact: "+t.message};throw e("notification/add",a,{root:!0}),t}))},updatePerPage:function(t,a){var e=t.commit,n=t.getters;return a!==n.getPerPage&&(e("SET_PER_PAGE",a),!0)}},U={getContactById:function(t){return function(a){return t.contacts.find((function(t){return t.id===a}))}},getPerPage:function(t){return t.perPage}},z=(e("4de4"),e("5530")),Z=!0,H={notifications:[]},J=1,Q={PUSH:function(t,a){t.notifications.push(Object(z["a"])(Object(z["a"])({},a),{},{id:J++}))},DELETE:function(t,a){t.notifications=t.notifications.filter((function(t){return t.id!==a.id}))}},V={add:function(t,a){var e=t.commit;e("PUSH",a)},remove:function(t,a){var e=t.commit;e("DELETE",a)}};o["a"].use(g["a"]);var K=new g["a"].Store({state:{},mutations:{},actions:{},modules:{contact:n,notification:s}}),W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-column col-12 col-md-9 col-lg-8 col-xl-9",attrs:{id:"content-wrapper"}},[e("div",{attrs:{id:"content"}},[e("div",{staticClass:"container-fluid"},[e("h3",{staticClass:"text-dark my-3"},[t._v("List of Contacts")]),e("div",{staticClass:"card shadow"},[t._m(0),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 col-md-6 text-nowrap d-none d-md-block"},[e("div",{staticClass:"dataTables_length",attrs:{id:"dataTable_length","aria-controls":"dataTable"}},[e("label",[t._v("Show "),e("select",{staticClass:"form-control form-control-sm custom-select custom-select-sm",on:{change:function(a){return t.updatePerPage(a)}}},[e("option",{attrs:{value:"10",selected:""}},[t._v("10")]),e("option",{attrs:{value:"25"}},[t._v("25")]),e("option",{attrs:{value:"50"}},[t._v("50")]),e("option",{attrs:{value:"100"}},[t._v("100")])])])])]),e("div",{staticClass:"col-6 col-md-6"},[e("div",{staticClass:"text-md-right dataTables_filter",attrs:{id:"dataTable_filter"}},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control form-control-sm",attrs:{type:"search","aria-controls":"dataTable",placeholder:"Search"},domProps:{value:t.query},on:{input:[function(a){a.target.composing||(t.query=a.target.value)},t.processSearch]}})])])])]),e("div",{staticClass:"table-responsive table mt-2",attrs:{id:"dataTable",role:"grid","aria-describedby":"dataTable_info"}},[e("table",{staticClass:"table dataTable my-0",attrs:{id:"dataTable"}},[t._m(1),e("tbody",t._l(t.contact.contacts,(function(t){return e("ContactCard",{key:t.id,attrs:{contact:t}})})),1),t._m(2)])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 align-self-center"},[e("p",{staticClass:"dataTables_info",attrs:{id:"dataTable_info",role:"status","aria-live":"polite"}},[t._v(" Showing "+t._s(t.contactStartNumber)+" to "+t._s(t.contactEndNumber)+" of "+t._s(t.contactsTotal)+" ")])]),e("div",{staticClass:"col-md-6"},[e("nav",{staticClass:"d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers"},[e("ul",{staticClass:"pagination"},[1!==t.page?[e("router-link",{attrs:{to:{name:"ContactList",query:{page:t.page-1}},rel:"next"}},[e("li",{staticClass:"page-item",class:[1==t.page?t.disabled:""]},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])])])]:t._e(),e("li",{staticClass:"page-item active"},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(t.page))])]),t.hasNextPage?[e("router-link",{attrs:{to:{name:"ContactList",query:{page:t.page+1}},rel:"next"}},[e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(t.page+1))])])]),e("router-link",{attrs:{to:{name:"ContactList",query:{page:t.page+1}},rel:"next"}},[e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])])]:t._e()],2)])])])])])])])])},X=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header py-3"},[e("p",{staticClass:"text-primary m-0 font-weight-bold"},[t._v("Contacts")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Main Phone")]),e("th",[t._v("Main Address")]),e("th",[t._v("Main Email")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tfoot",[e("tr",[e("td",[e("strong",[t._v("Name")])]),e("td",[e("strong",[t._v("Main Phone")])]),e("td",[e("strong",[t._v("Main Address")])]),e("td",[e("strong",[t._v("Main Email")])])])])}],Y=(e("a9e3"),function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("tr",[n("td",[n("router-link",{staticClass:"text-muted text-decoration-none",attrs:{to:{name:"ContactShow",params:{id:t.contact.id}}}},[n("img",{staticClass:"rounded-circle mr-2",attrs:{width:"30",height:"30",src:e("4d41")}})]),n("router-link",{staticClass:"text-muted text-decoration-none",attrs:{to:{name:"ContactShow",params:{id:t.contact.id}}}},[t._v(" "+t._s(t.contact.name))])],1),n("td",[n("router-link",{staticClass:"text-muted text-decoration-none",attrs:{to:{name:"ContactShow",params:{id:t.contact.id}}}},[t._v(t._s(t.contact.phone[0].number))])],1),n("td",[n("router-link",{staticClass:"text-muted text-decoration-none",attrs:{to:{name:"ContactShow",params:{id:t.contact.id}}}},[t._v(t._s(t.contact.address[0].name))])],1),n("td",[n("router-link",{staticClass:"text-muted text-decoration-none",attrs:{to:{name:"ContactShow",params:{id:t.contact.id}}}},[t._v(t._s(t.contact.email[0].name))])],1)])}),tt=[],at={name:"ContactCard",props:{contact:{type:Object,required:!0}}},et=at,nt=Object(m["a"])(et,Y,tt,!1,null,null,null),st=nt.exports,ot=function(t,a,e){var n=parseInt(t.query.page)||1;K.dispatch("contact/fetchContacts",{page:n}).then((function(){t.params.page=n,e()}))},it={name:"ContactList",props:{page:{type:Number,required:!0}},data:function(){return{query:""}},components:{ContactCard:st},methods:{updatePerPage:function(t){var a=K.dispatch("contact/updatePerPage",t.target.value);a&&K.dispatch("contact/fetchContacts",{page:1})},processSearch:function(){K.dispatch("contact/findContacts",{page:1,q:this.query})}},beforeRouteEnter:function(t,a,e){ot(t,a,e)},beforeRouteUpdate:function(t,a,e){ot(t,a,e)},computed:Object(z["a"])(Object(z["a"])(Object(z["a"])({hasNextPage:function(){return this.contactsTotal>this.page*this.contact.perPage}},Object(g["d"])(["contact"])),Object(g["c"])(["contact/getPerPage"])),{},{contactsTotal:function(){return this.contact.contactsTotal},contactStartNumber:function(){return this.contact.perPage*this.page-this.contact.perPage+1},contactEndNumber:function(){return this.contact.perPage*this.page>this.contactsTotal?this.contactsTotal:this.contact.perPage*this.page},lastPage:function(){return Math.ceil(this.contactsTotal/this.contact.perPage)}})},ct=it,rt=Object(m["a"])(ct,W,X,!1,null,null,null),lt=rt.exports,dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-column col-12 col-md-9 col-lg-8 col-xl-9",attrs:{id:"content-wrapper"}},[e("div",{attrs:{id:"content"}},[e("div",{staticClass:"container-fluid"},[e("h3",{staticClass:"text-dark my-3"},[t._v("Contact Card")]),e("div",{staticClass:"card shadow"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive table mt-2",attrs:{id:"dataTable",role:"grid","aria-describedby":"dataTable_info"}},[e("table",{staticClass:"table dataTable my-0",attrs:{id:"dataTable"}},[e("tbody",[e("tr",[e("th",[t._v("Name")]),e("td",[e("span",{staticClass:"border-left pl-2 ml-2"},[t._v(t._s(t.contact.name))])])]),e("tr",[e("th",[t._v("Phone")]),e("td",t._l(t.contact.phone,(function(a){return e("span",{key:a.phone_id,staticClass:"border-left pl-2 ml-2"},[t._v(t._s(a.number))])})),0)]),e("tr",[e("th",[t._v("Address")]),e("td",t._l(t.contact.address,(function(a){return e("span",{key:a.address_id,staticClass:"border-left pl-2 ml-2"},[t._v(t._s(a.name))])})),0)]),e("tr",[e("th",[t._v("Email")]),e("td",t._l(t.contact.email,(function(a){return e("span",{key:a.email_id,staticClass:"border-left pl-2 ml-2"},[t._v(t._s(a.name))])})),0)])]),e("tbody")]),e("div",{staticClass:"d-flex justify-content-between mt-4"},[e("div",{staticClass:"d-flex"},[e("p",[e("router-link",{attrs:{to:{name:"ContactEdit",params:{id:t.contact.id,oldContact:t.contact}}}},[e("i",{staticClass:"fas fa-user-edit ml-3"}),e("span",{staticClass:"ml-3"},[t._v("Edit")])])],1),e("p",[e("a",{attrs:{href:"#",id:"removeContact"},on:{click:function(a){return t.removeContact(t.contact.id)}}},[e("i",{staticClass:"fas fa-user-minus ml-3"}),e("span",{staticClass:"ml-3"},[t._v("Delete")])])])]),e("p",{staticClass:"text-primary"},[e("a",{attrs:{href:"#"},on:{click:t.goBack}},[t._v("Go Back")])])])])])])])])])},ut=[],mt={props:{contact:{type:Object,required:!0}},data:function(){return{routeFrom:""}},methods:{goBack:function(){this.$router.go(-1)},removeContact:function(t){var a=this;confirm("Do you really want to delete this contact? ")&&this.$store.dispatch("contact/removeContact",t).then((function(){a.$router.push({name:"ContactList",params:{page:1}})})).catch((function(){}))}}},pt=mt,ft=Object(m["a"])(pt,dt,ut,!1,null,null,null),ht=ft.exports,vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-column col-12 col-md-9 col-lg-8 col-xl-9",attrs:{id:"content-wrapper"}},[e("div",{attrs:{id:"content"}},[e("div",{staticClass:"container-fluid"},[e("h3",{staticClass:"text-dark my-3"},[t._v("Create Contact")]),e("div",{staticClass:"card shadow"},[t._m(0),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("label",[t._v("Name")]),e("div",{staticClass:"dataTables_length d-flex align-items-center mb-3",attrs:{id:"dataTable_length","aria-controls":"dataTable"}},[e("label",{staticClass:"col-8 px-0 m-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})])])]),e("div",{staticClass:"col-12"},[e("label",[t._v("Phone")]),t._l(t.phones,(function(a,n){return e("div",{key:n},[e("div",{staticClass:"dataTables_length d-flex align-items-center mb-3",attrs:{id:"dataTable_length","aria-controls":"dataTable"}},[e("label",{staticClass:"col-8 px-0 m-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.number,expression:"phone.number"}],staticClass:"form-control",attrs:{type:"phone",placeholder:"Phone"},domProps:{value:a.number},on:{input:function(e){e.target.composing||t.$set(a,"number",e.target.value)}}})]),e("button",{staticClass:"btn btn-primary ml-4",on:{click:t.addPhoneInput}},[e("i",{staticClass:"fas fa-plus"})]),t.phoneInputAdded&&0!=n?e("button",{staticClass:"btn btn-danger ml-2",on:{click:function(a){return t.removePhoneInput(n)}}},[e("i",{staticClass:"fas fa-minus"})]):t._e()])])}))],2),e("div",{staticClass:"col-12"},[e("label",[t._v("E-mail")]),t._l(t.emails,(function(a,n){return e("div",{key:n},[e("div",{staticClass:"dataTables_length d-flex align-items-center mb-3",attrs:{id:"dataTable_length","aria-controls":"dataTable"}},[e("label",{staticClass:"col-8 px-0 m-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"email.name"}],staticClass:"form-control",attrs:{type:"email",placeholder:"E-mail"},domProps:{value:a.name},on:{input:function(e){e.target.composing||t.$set(a,"name",e.target.value)}}})]),e("button",{staticClass:"btn btn-primary ml-4",on:{click:t.addEmailInput}},[e("i",{staticClass:"fas fa-plus"})]),t.emailInputAdded&&0!=n?e("button",{staticClass:"btn btn-danger ml-2",on:{click:function(a){return t.removeEmailInput(n)}}},[e("i",{staticClass:"fas fa-minus"})]):t._e()])])}))],2),e("div",{staticClass:"col-12"},[e("label",[t._v("Address")]),t._l(t.addresses,(function(a,n){return e("div",{key:n},[e("div",{staticClass:"dataTables_length d-flex align-items-center mb-3",attrs:{id:"dataTable_length","aria-controls":"dataTable"}},[e("label",{staticClass:"col-8 px-0 m-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"address.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Address"},domProps:{value:a.name},on:{input:function(e){e.target.composing||t.$set(a,"name",e.target.value)}}})]),e("button",{staticClass:"btn btn-primary ml-4",on:{click:t.addAddressInput}},[e("i",{staticClass:"fas fa-plus"})]),t.addressInputAdded&&0!=n?e("button",{staticClass:"btn btn-danger ml-2",on:{click:function(a){return t.removeAddressInput(n)}}},[e("i",{staticClass:"fas fa-minus"})]):t._e()])])}))],2),e("div",{staticClass:"col-12 "},[e("div",{staticClass:"dataTables_length",attrs:{id:"dataTable_length","aria-controls":"dataTable"}},[e("button",{staticClass:"btn btn-primary",on:{click:t.createContact}},[t._v(" Save ")]),e("button",{staticClass:"btn btn-danger ml-4",attrs:{type:"reset"}},[t._v(" Cancel ")])])])])])])])])])},Ct=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header py-3"},[e("p",{staticClass:"text-primary m-0 font-weight-bold"},[t._v("Add new contact")])])}],bt=(e("a15b"),e("a434"),e("b0c0"),e("4160"),e("159b"),{data:function(){return{error:[]}},methods:{checkForm:function(t,a,e,n){var s=this;return this.errors=[],t||this.errors.push("Name required."),a.forEach((function(t){t.number||s.errors.push("Phone number: ".concat(t.id," required."))})),e.forEach((function(t){t.name?s.validEmail(t.name)||s.errors.push("Valid email ".concat(t.id," required.")):s.errors.push("Email: ".concat(t.id," required."))})),n.forEach((function(t){t.name||s.errors.push("Address: ".concat(t.id," required."))})),!this.errors.length},validEmail:function(t){var a=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return a.test(t)}}}),gt=bt,_t={data:function(){return{name:"",phones:[{id:1,number:""}],emails:[{id:1,name:""}],addresses:[{id:1,name:""}],phoneInputAdded:!1,emailInputAdded:!1,addressInputAdded:!1,errors:[],contact:this.createFreshContactObject()}},mixins:[gt],methods:{addPhoneInput:function(){this.phones.push({id:this.phones[this.phones.length-1].id+1}),this.phoneInputAdded=!0},addEmailInput:function(){this.emails.push({id:this.emails[this.emails.length-1].id+1}),this.emailInputAdded=!0},addAddressInput:function(){this.addresses.push({id:this.addresses[this.addresses.length-1].id+1}),this.addressInputAdded=!0},removePhoneInput:function(t){this.phones.splice(t,1)},removeEmailInput:function(t){this.emails.splice(t,1)},removeAddressInput:function(t){this.addresses.splice(t,1)},createFreshContactObject:function(){var t=Math.floor(1e8*Math.random());return{id:t,name:"",phone:[],address:[],email:[]}},createContact:function(){var t=this;if(this.contact.name=this.name,this.contact.phone=this.phones,this.contact.email=this.emails,this.contact.address=this.addresses,this.checkForm(this.contact.name,this.contact.phone,this.contact.email,this.contact.address))this.$store.dispatch("contact/createContact",this.contact).then((function(){t.$router.push({name:"ContactShow",params:{id:t.contact.id}}),t.event=t.createFreshContactObject()})).catch((function(a){console.log(t.contact.name+" was not stored: "+a.message)}));else{var a={type:"danger",message:this.errors.join("; ")};this.$store.dispatch("notification/add",a,{root:!0})}}}},yt=_t,Tt=Object(m["a"])(yt,vt,Ct,!1,null,null,null),xt=Tt.exports,wt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-column col-12 col-md-9 col-lg-8 col-xl-9",attrs:{id:"content-wrapper"}},[e("div",{attrs:{id:"content"}},[e("div",{staticClass:"container-fluid"},[e("h3",{staticClass:"text-dark my-3"},[t._v("Edit Contact")]),e("div",{staticClass:"card shadow"},[t._m(0),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("label",[t._v("Name")]),e("div",{staticClass:"dataTables_length d-flex align-items-center mb-3",attrs:{id:"dataTable_length","aria-controls":"dataTable"}},[e("label",{staticClass:"col-8 px-0 m-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.oldContact.name,expression:"oldContact.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.oldContact.name},on:{input:function(a){a.target.composing||t.$set(t.oldContact,"name",a.target.value)}}})])])]),e("div",{staticClass:"col-12"},[e("label",[t._v("Phone")]),t._l(t.oldContact.phone,(function(a,n){return e("div",{key:n},[e("div",{staticClass:"dataTables_length d-flex align-items-center mb-3",attrs:{id:"dataTable_length","aria-controls":"dataTable"}},[e("label",{staticClass:"col-8 px-0 m-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.number,expression:"phone.number"}],staticClass:"form-control",attrs:{type:"phone",placeholder:"Phone"},domProps:{value:a.number},on:{input:function(e){e.target.composing||t.$set(a,"number",e.target.value)}}})]),e("button",{staticClass:"btn btn-primary ml-4",on:{click:t.addPhoneInput}},[e("i",{staticClass:"fas fa-plus"})]),t.phoneInputAdded&&0!=n?e("button",{staticClass:"btn btn-danger ml-2",on:{click:function(a){return t.removePhoneInput(n)}}},[e("i",{staticClass:"fas fa-minus"})]):t._e()])])}))],2),e("div",{staticClass:"col-12"},[e("label",[t._v("E-mail")]),t._l(t.oldContact.email,(function(a,n){return e("div",{key:n},[e("div",{staticClass:"dataTables_length d-flex align-items-center mb-3",attrs:{id:"dataTable_length","aria-controls":"dataTable"}},[e("label",{staticClass:"col-8 px-0 m-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"email.name"}],staticClass:"form-control",attrs:{type:"email",placeholder:"E-mail"},domProps:{value:a.name},on:{input:function(e){e.target.composing||t.$set(a,"name",e.target.value)}}})]),e("button",{staticClass:"btn btn-primary ml-4",on:{click:t.addEmailInput}},[e("i",{staticClass:"fas fa-plus"})]),t.emailInputAdded&&0!=n?e("button",{staticClass:"btn btn-danger ml-2",on:{click:function(a){return t.removeEmailInput(n)}}},[e("i",{staticClass:"fas fa-minus"})]):t._e()])])}))],2),e("div",{staticClass:"col-12"},[e("label",[t._v("Address")]),t._l(t.oldContact.address,(function(a,n){return e("div",{key:n},[e("div",{staticClass:"dataTables_length d-flex align-items-center mb-3",attrs:{id:"dataTable_length","aria-controls":"dataTable"}},[e("label",{staticClass:"col-8 px-0 m-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"address.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Address"},domProps:{value:a.name},on:{input:function(e){e.target.composing||t.$set(a,"name",e.target.value)}}})]),e("button",{staticClass:"btn btn-primary ml-4",on:{click:t.addAddressInput}},[e("i",{staticClass:"fas fa-plus"})]),t.addressInputAdded&&0!=n?e("button",{staticClass:"btn btn-danger ml-2",on:{click:function(a){return t.removeAddressInput(n)}}},[e("i",{staticClass:"fas fa-minus"})]):t._e()])])}))],2),e("div",{staticClass:"col-12 d-flex justify-content-between align-items-center"},[e("div",{staticClass:"dataTables_length",attrs:{id:"dataTable_length","aria-controls":"dataTable"}},[e("div",{staticClass:"d-flex"},[e("button",{staticClass:"btn btn-primary",on:{click:t.createContact}},[t._v(" Save ")]),e("button",{staticClass:"btn btn-danger ml-4",attrs:{type:"reset"}},[t._v(" Cancel ")])])]),e("p",{staticClass:"text-primary"},[e("a",{attrs:{href:"#"},on:{click:t.goBack}},[t._v("Go Back")])])])])])])])])])},kt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header py-3"},[e("p",{staticClass:"text-primary m-0 font-weight-bold"},[t._v(" Edit contact information ")])])}],Pt={props:{oldContact:{type:Object,required:!0}},mixins:[gt],data:function(){return{phoneInputAdded:!1,emailInputAdded:!1,addressInputAdded:!1}},methods:{goBack:function(){this.$router.go(-1)},addPhoneInput:function(){this.oldContact.phone.push({id:this.oldContact.phone[this.oldContact.phone.length-1].id+1}),this.phoneInputAdded=!0},addEmailInput:function(){this.oldContact.email.push({id:this.oldContact.email[this.oldContact.email.length-1].id+1}),this.emailInputAdded=!0},addAddressInput:function(){this.oldContact.address.push({id:this.oldContact.address[this.oldContact.address.length-1].id+1}),this.addressInputAdded=!0},removePhoneInput:function(t){this.oldContact.phone.splice(t,1)},removeEmailInput:function(t){this.oldContact.email.splice(t,1)},removeAddressInput:function(t){this.oldContact.address.splice(t,1)},createContact:function(){var t=this;if(this.checkForm(this.oldContact.name,this.oldContact.phone,this.oldContact.email,this.oldContact.address))this.$store.dispatch("contact/editContact",this.oldContact).then((function(){t.$router.push({name:"ContactShow",params:{id:t.oldContact.id}})})).catch((function(a){console.log(t.oldContact.name+" was not stored: "+a.message)}));else{var a={type:"danger",message:this.errors.join("; ")};this.$store.dispatch("notification/add",a,{root:!0})}}}},Et=Pt,At=Object(m["a"])(Et,wt,kt,!1,null,null,null),Ot=At.exports;o["a"].use(S["a"]);var It=[{path:"/",name:"ContactList",component:lt,props:!0},{path:"/contact/:id",name:"ContactShow",component:ht,props:!0,beforeEnter:function(t,a,e){K.dispatch("contact/fetchContact",t.params.id).then((function(a){t.params.contact=a,e()}))}},{path:"/create",name:"ContactCreate",component:xt},{path:"/contact/:id",name:"ContactEdit",component:Ot,props:!0}],jt=new S["a"]({mode:"history",base:"/contacts-list-vue/",routes:It}),St=jt;e("a5d8"),e("f9e3");o["a"].config.productionTip=!1,new o["a"]({router:St,store:K,render:function(t){return t(j)}}).$mount("#app")},"7f15":function(t,a,e){"use strict";var n=e("8b1e"),s=e.n(n);s.a},"8b1e":function(t,a,e){}});
//# sourceMappingURL=app.00dd8763.js.map