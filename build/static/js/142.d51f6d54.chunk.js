(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[142,189,190],{2210:function(e,t,r){"use strict";r.r(t);var n=r(28),a=r(1),c=r(900),s=r(473),i=r(508),o=r(480),l=r(481),d=r(497),u=r(1070),j=r(514),h=r(515),b=r(495),p=r(493),f=r(469),m=r(1217),x=r(1145),O=r(1160),v=r(1151),g=r(1127),y=r(1204),w=r(6),k=function(){return Object(w.jsx)(i.a,{onSubmit:function(e){return e.preventDefault()},children:Object(w.jsxs)(o.a,{children:[Object(w.jsxs)(l.a,{lg:"4",md:"6",sm:"12",children:[Object(w.jsx)(d.a,{for:"twitter",children:"Twitter"}),Object(w.jsxs)(u.a,{tag:j.a,className:"input-group-merge",children:[Object(w.jsx)(h.a,{addonType:"prepend",children:Object(w.jsx)(b.a,{children:Object(w.jsx)(m.a,{size:17})})}),Object(w.jsx)(p.a,{id:"twitter",placeholder:"https://www.twitter.com/",defaultValue:"https://www.twitter.com/adoptionism744"})]})]}),Object(w.jsxs)(l.a,{lg:"4",md:"6",sm:"12",children:[Object(w.jsx)(d.a,{for:"facebook",children:"Facebook"}),Object(w.jsxs)(u.a,{tag:j.a,className:"input-group-merge",children:[Object(w.jsx)(h.a,{addonType:"prepend",children:Object(w.jsx)(b.a,{children:Object(w.jsx)(x.a,{size:17})})}),Object(w.jsx)(p.a,{id:"facebook",placeholder:"https://www.facebook.com/",defaultValue:"https://www.facebook.com/adoptionism664"})]})]}),Object(w.jsxs)(l.a,{lg:"4",md:"6",sm:"12",children:[Object(w.jsx)(d.a,{for:"instagram",children:"Instagram"}),Object(w.jsxs)(u.a,{tag:j.a,className:"input-group-merge",children:[Object(w.jsx)(h.a,{addonType:"prepend",children:Object(w.jsx)(b.a,{children:Object(w.jsx)(O.a,{size:17})})}),Object(w.jsx)(p.a,{id:"instagram",placeholder:"https://www.instagram.com/",defaultValue:"https://www.instagram.com/adopt-ionism744"})]})]}),Object(w.jsxs)(l.a,{lg:"4",md:"6",sm:"12",children:[Object(w.jsx)(d.a,{for:"github",children:"Github"}),Object(w.jsxs)(u.a,{tag:j.a,className:"input-group-merge",children:[Object(w.jsx)(h.a,{addonType:"prepend",children:Object(w.jsx)(b.a,{children:Object(w.jsx)(v.a,{size:17})})}),Object(w.jsx)(p.a,{id:"github",placeholder:"https://www.github.com/",defaultValue:"https://www.github.com/madop818"})]})]}),Object(w.jsxs)(l.a,{lg:"4",md:"6",sm:"12",children:[Object(w.jsx)(d.a,{for:"codepen",children:"Codepen"}),Object(w.jsxs)(u.a,{tag:j.a,className:"input-group-merge",children:[Object(w.jsx)(h.a,{addonType:"prepend",children:Object(w.jsx)(b.a,{children:Object(w.jsx)(g.a,{size:17})})}),Object(w.jsx)(p.a,{id:"codepen",placeholder:"https://www.codepen.com/",defaultValue:"https://www.codepen.com/adoptism243/"})]})]}),Object(w.jsxs)(l.a,{lg:"4",md:"6",sm:"12",children:[Object(w.jsx)(d.a,{for:"slack",children:"Slack"}),Object(w.jsxs)(u.a,{tag:j.a,className:"input-group-merge",children:[Object(w.jsx)(h.a,{addonType:"prepend",children:Object(w.jsx)(b.a,{children:Object(w.jsx)(y.a,{size:17})})}),Object(w.jsx)(p.a,{id:"slack",placeholder:"https://www.slack.com/",defaultValue:"@adoptionism744"})]})]}),Object(w.jsxs)(l.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(w.jsx)(f.a,{className:"mb-1 mb-sm-0 mr-0 mr-sm-1",color:"primary",children:"Save Changes"}),Object(w.jsx)(f.a,{color:"secondary",outline:!0,children:"Reset"})]})]})})},N=r(477),S=r(1142),A=r(1212),E=r(1169),T=r(540),_=r(562),L=r(1067),C=function(e){var t=e.selectedUser,r=Object(a.useState)(null),c=Object(n.a)(r,2),s=c[0],j=c[1];Object(a.useEffect)((function(){if(null!==t)return t.avatar.length?j(t.avatar):j(null)}),[t]);return Object(w.jsxs)(o.a,{children:[Object(w.jsx)(l.a,{sm:"12",children:Object(w.jsxs)(T.a,{className:"mb-2",children:[function(){if(null===s){var e=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(w.jsx)(N.a,{initials:!0,color:e,className:"rounded mr-2 my-25",content:t.fullName,contentStyles:{borderRadius:0,fontSize:"calc(36px)",width:"100%",height:"100%"},style:{height:"90px",width:"90px"}})}return Object(w.jsx)("img",{className:"user-avatar rounded mr-2 my-25 cursor-pointer",src:s,alt:"user profile avatar",height:"90",width:"90"})}(),Object(w.jsxs)(T.a,{className:"mt-50",body:!0,children:[Object(w.jsxs)("h4",{children:[t.fullName," "]}),Object(w.jsxs)("div",{className:"d-flex flex-wrap mt-1 px-0",children:[Object(w.jsxs)(f.a.Ripple,{id:"change-img",tag:d.a,className:"mr-75 mb-0",color:"primary",children:[Object(w.jsx)("span",{className:"d-none d-sm-block",children:"Change"}),Object(w.jsx)("span",{className:"d-block d-sm-none",children:Object(w.jsx)(S.a,{size:14})}),Object(w.jsx)("input",{type:"file",hidden:!0,id:"change-img",onChange:function(e){var t=new FileReader,r=e.target.files;t.onload=function(){j(t.result)},t.readAsDataURL(r[0])},accept:"image/*"})]}),Object(w.jsxs)(f.a.Ripple,{color:"secondary",outline:!0,children:[Object(w.jsx)("span",{className:"d-none d-sm-block",children:"Remove"}),Object(w.jsx)("span",{className:"d-block d-sm-none",children:Object(w.jsx)(A.a,{size:14})})]})]})]})]})}),Object(w.jsx)(l.a,{sm:"12",children:Object(w.jsx)(i.a,{onSubmit:function(e){return e.preventDefault()},children:Object(w.jsxs)(o.a,{children:[Object(w.jsx)(l.a,{md:"4",sm:"12",children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(d.a,{for:"username",children:"Username"}),Object(w.jsx)(p.a,{type:"text",id:"username",placeholder:"Username",defaultValue:t.username})]})}),Object(w.jsx)(l.a,{md:"4",sm:"12",children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(d.a,{for:"name",children:"Name"}),Object(w.jsx)(p.a,{type:"text",id:"name",placeholder:"Name",defaultValue:t.fullName})]})}),Object(w.jsx)(l.a,{md:"4",sm:"12",children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(d.a,{for:"email",children:"Email"}),Object(w.jsx)(p.a,{type:"text",id:"email",placeholder:"Email",defaultValue:t.email})]})}),Object(w.jsx)(l.a,{md:"4",sm:"12",children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(d.a,{for:"status",children:"Status"}),Object(w.jsxs)(p.a,{type:"select",name:"status",id:"status",defaultValue:t.status,children:[Object(w.jsx)("option",{value:"pending",children:"Pending"}),Object(w.jsx)("option",{value:"active",children:"Active"}),Object(w.jsx)("option",{value:"inactive",children:"Inactive"})]})]})}),Object(w.jsx)(l.a,{md:"4",sm:"12",children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(d.a,{for:"role",children:"Role"}),Object(w.jsxs)(p.a,{type:"select",name:"role",id:"role",defaultValue:t.role,children:[Object(w.jsx)("option",{value:"admin",children:"Admin"}),Object(w.jsx)("option",{value:"author",children:"Author"}),Object(w.jsx)("option",{value:"editor",children:"Editor"}),Object(w.jsx)("option",{value:"maintainer",children:"Maintainer"}),Object(w.jsx)("option",{value:"subscriber",children:"Subscriber"})]})]})}),Object(w.jsx)(l.a,{md:"4",sm:"12",children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(d.a,{for:"company",children:"Company"}),Object(w.jsx)(p.a,{type:"text",id:"company",defaultValue:t.company,placeholder:"WinDon Technologies Pvt Ltd"})]})}),Object(w.jsx)(l.a,{sm:"12",children:Object(w.jsxs)("div",{className:"permissions border mt-1",children:[Object(w.jsxs)("h6",{className:"py-1 mx-1 mb-0 font-medium-2",children:[Object(w.jsx)(E.a,{size:18,className:"mr-25"}),Object(w.jsx)("span",{className:"align-middle",children:"Permissions"})]}),Object(w.jsxs)(_.a,{borderless:!0,striped:!0,responsive:!0,children:[Object(w.jsx)("thead",{className:"thead-light",children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Module"}),Object(w.jsx)("th",{children:"Read"}),Object(w.jsx)("th",{children:"Write"}),Object(w.jsx)("th",{children:"Create"}),Object(w.jsx)("th",{children:"Delete"})]})}),Object(w.jsxs)("tbody",{children:[Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Admin"}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"admin-1",label:"",defaultChecked:!0})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"admin-2",label:""})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"admin-3",label:""})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"admin-4",label:""})})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Staff"}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"staff-1",label:""})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"staff-2",label:"",defaultChecked:!0})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"staff-3",label:""})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"staff-4",label:""})})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Author"}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"author-1",label:"",defaultChecked:!0})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"author-2",label:""})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"author-3",label:"",defaultChecked:!0})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"author-4",label:""})})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Contributor"}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"contributor-1",label:""})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"contributor-2",label:""})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"contributor-3",label:""})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"contributor-4",label:""})})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"User"}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"user-1",label:""})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"user-2",label:""})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"user-3",label:""})}),Object(w.jsx)("td",{children:Object(w.jsx)(L.a,{type:"checkbox",id:"user-4",label:"",defaultChecked:!0})})]})]})]})]})}),Object(w.jsxs)(l.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(w.jsx)(f.a,{className:"mb-1 mb-sm-0 mr-0 mr-sm-1",type:"submit",color:"primary",children:"Save Changes"}),Object(w.jsx)(f.a,{color:"secondary",outline:!0,children:"Reset"})]})]})})})]})},G=r(58),R=r(505),I=r.n(R),z=r(1222),P=r(1171),U=r(517),M=(r(499),function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),r=t[0],c=t[1];return Object(w.jsxs)(U.AvForm,{onSubmit:function(e){return e.preventDefault()},children:[Object(w.jsxs)(o.a,{className:"mt-1",children:[Object(w.jsx)(l.a,{sm:"12",children:Object(w.jsxs)("h4",{className:"mb-1",children:[Object(w.jsx)(z.a,{size:20,className:"mr-50"}),Object(w.jsx)("span",{className:"align-middle",children:"Personal Information"})]})}),Object(w.jsx)(l.a,{lg:"4",md:"6",children:Object(w.jsxs)(U.AvGroup,{children:[Object(w.jsx)(d.a,{className:"d-block",for:"dob",children:"Date of birth"}),Object(w.jsx)(U.AvInput,Object(G.a)({required:!0,id:"dob",tag:I.a,name:"dob",className:"form-control",options:{dateFormat:"Y-m-d"},value:r,onChange:function(e){return c(e)},placeholder:"YYYY-MM-DD"},"required",!0))]})}),Object(w.jsx)(l.a,{lg:"4",md:"6",children:Object(w.jsxs)(U.AvGroup,{children:[Object(w.jsx)(d.a,{for:"mobile-input",children:"Mobile"}),Object(w.jsx)(U.AvInput,{type:"number",id:"mobile-input",name:"mobile-input",placeholder:"+123456789",value:"+6595895857"})]})}),Object(w.jsx)(l.a,{lg:"4",md:"6",children:Object(w.jsxs)(U.AvGroup,{children:[Object(w.jsx)(d.a,{for:"website",children:"Website"}),Object(w.jsx)(U.AvInput,{type:"url",id:"website",name:"website",placeholder:"https://google.com",value:"https://rowboat.com/insititious/Angelo"})]})}),Object(w.jsx)(l.a,{lg:"4",md:"6",children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(d.a,{for:"languages",children:"Languages"}),Object(w.jsxs)(U.AvInput,{type:"select",name:"status",id:"languages",children:[Object(w.jsx)("option",{value:"English",children:"English"}),Object(w.jsx)("option",{value:"Spanish",children:"Spanish"}),Object(w.jsx)("option",{value:"French",children:"French"}),Object(w.jsx)("option",{value:"Russian",children:"Russian"}),Object(w.jsx)("option",{value:"German",children:"German"}),Object(w.jsx)("option",{value:"Arabic",children:"Arabic"}),Object(w.jsx)("option",{value:"Sanskrit",children:"Sanskrit"})]})]})}),Object(w.jsx)(l.a,{lg:"4",md:"6",children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)("label",{className:"d-block mb-1",children:"Gender"}),Object(w.jsxs)(U.AvRadioGroup,{inline:!0,name:"gender",required:!0,children:[Object(w.jsx)(U.AvRadio,{customInput:!0,label:"Male",value:"Male"}),Object(w.jsx)(U.AvRadio,{customInput:!0,label:"Female",value:"Female",checked:!0})]})]})}),Object(w.jsx)(l.a,{lg:"4",md:"6",children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)("label",{className:"d-block mb-1",children:"Contact Options"}),Object(w.jsxs)(U.AvCheckboxGroup,{inline:!0,name:"terms",required:!0,children:[Object(w.jsx)(U.AvCheckbox,{customInput:!0,value:"Email",label:"Email"}),Object(w.jsx)(U.AvCheckbox,{customInput:!0,value:"Messages",label:"Messages"}),Object(w.jsx)(U.AvCheckbox,{customInput:!0,value:"Phone",label:"Phone"})]})]})})]}),Object(w.jsxs)(o.a,{children:[Object(w.jsx)(l.a,{sm:"12",children:Object(w.jsxs)("h4",{className:"mb-1 mt-2",children:[Object(w.jsx)(P.a,{size:20,className:"mr-50"}),Object(w.jsx)("span",{className:"align-middle",children:"Address"})]})}),Object(w.jsx)(l.a,{lg:"4",md:"6",children:Object(w.jsxs)(U.AvGroup,{children:[Object(w.jsx)(d.a,{for:"address-1",children:"Address Line 1"}),Object(w.jsx)(U.AvInput,{value:"A-65, Belvedere Streets",id:"address-1",name:"address-1",required:!0})]})}),Object(w.jsx)(l.a,{lg:"4",md:"6",children:Object(w.jsxs)(U.AvGroup,{children:[Object(w.jsx)(d.a,{for:"address-2",children:"Address Line 2"}),Object(w.jsx)(U.AvInput,{placeholder:"A-65, Belvedere Streets",id:"address-2",name:"address-2",required:!0})]})}),Object(w.jsx)(l.a,{lg:"4",md:"6",children:Object(w.jsxs)(U.AvGroup,{children:[Object(w.jsx)(d.a,{for:"postcode",children:"Postcode"}),Object(w.jsx)(U.AvInput,{placeholder:"597626",id:"postcode",name:"postcode",required:!0})]})}),Object(w.jsx)(l.a,{lg:"4",md:"6",children:Object(w.jsxs)(U.AvGroup,{children:[Object(w.jsx)(d.a,{for:"city",children:"City"}),Object(w.jsx)(U.AvInput,{value:"Manhattan",placeholder:"Manhattan",id:"city",name:"city",required:!0})]})}),Object(w.jsx)(l.a,{lg:"4",md:"6",children:Object(w.jsxs)(U.AvGroup,{children:[Object(w.jsx)(d.a,{for:"state",children:"State"}),Object(w.jsx)(U.AvInput,{value:"New York",placeholder:"New York",id:"state",name:"state",required:!0})]})}),Object(w.jsx)(l.a,{lg:"4",md:"6",children:Object(w.jsxs)(U.AvGroup,{children:[Object(w.jsx)(d.a,{for:"country",children:"Country"}),Object(w.jsx)(U.AvInput,{placeholder:"United States",id:"country",name:"country",required:!0})]})}),Object(w.jsxs)(l.a,{className:"d-flex flex-sm-row flex-column mt-2",children:[Object(w.jsx)(f.a,{type:"submit",color:"primary",className:"mb-1 mb-sm-0 mr-0 mr-sm-1",children:"Save Changes"}),Object(w.jsx)(f.a,{type:"reset",color:"secondary",outline:!0,children:"Reset"})]})]})]})}),F=r(578),q=r(81),D=r(1159),V=r(1199),Y=r(482),J=r(478),B=r(623),W=r(1088),K=r(1089),H=r(647),Q=r(648),X=r(509);r(492),t.default=function(){var e=Object(a.useState)("1"),t=Object(n.a)(e,2),r=t[0],i=t[1],d=Object(q.c)((function(e){return e.appiaUsers})),u=Object(q.b)(),j=Object(c.i)().id,h=function(e){return i(e)};return Object(a.useEffect)((function(){u(Object(F.j)(parseInt(j)))}),[u]),null!==d.selectedUser&&void 0!==d.selectedUser?Object(w.jsx)(o.a,{className:"app-user-edit",children:Object(w.jsx)(l.a,{sm:"12",children:Object(w.jsx)(Y.a,{children:Object(w.jsxs)(J.a,{className:"pt-2",children:[Object(w.jsxs)(B.a,{pills:!0,children:[Object(w.jsx)(W.a,{children:Object(w.jsxs)(K.a,{active:"1"===r,onClick:function(){return h("1")},children:[Object(w.jsx)(z.a,{size:14}),Object(w.jsx)("span",{className:"align-middle d-none d-sm-block",children:"Account"})]})}),Object(w.jsx)(W.a,{children:Object(w.jsxs)(K.a,{active:"2"===r,onClick:function(){return h("2")},children:[Object(w.jsx)(D.a,{size:14}),Object(w.jsx)("span",{className:"align-middle d-none d-sm-block",children:"Information"})]})}),Object(w.jsx)(W.a,{children:Object(w.jsxs)(K.a,{active:"3"===r,onClick:function(){return h("3")},children:[Object(w.jsx)(V.a,{size:14}),Object(w.jsx)("span",{className:"align-middle d-none d-sm-block",children:"Social"})]})})]}),Object(w.jsxs)(H.a,{activeTab:r,children:[Object(w.jsx)(Q.a,{tabId:"1",children:Object(w.jsx)(C,{selectedUser:d.selectedUser})}),Object(w.jsx)(Q.a,{tabId:"2",children:Object(w.jsx)(M,{})}),Object(w.jsx)(Q.a,{tabId:"3",children:Object(w.jsx)(k,{})})]})]})})})}):Object(w.jsxs)(X.a,{color:"danger",children:[Object(w.jsx)("h4",{className:"alert-heading",children:"Users not found"}),Object(w.jsxs)("div",{className:"alert-body",children:["Users with id: ",j," doesn't exist. Check list of all Users: ",Object(w.jsx)(s.b,{to:"/app/user/list",children:"Users List"})]})]})}},485:function(e,t,r){e.exports=r(494)},486:function(e,t,r){"use strict";function n(e,t,r,n,a,c,s){try{var i=e[c](s),o=i.value}catch(l){return void r(l)}i.done?t(o):Promise.resolve(o).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,c){var s=e.apply(t,r);function i(e){n(s,a,c,i,o,"next",e)}function o(e){n(s,a,c,i,o,"throw",e)}i(void 0)}))}}r.d(t,"a",(function(){return a}))},492:function(e,t,r){},493:function(e,t,r){"use strict";var n=r(14),a=r(15),c=r(121),s=r(57),i=r(1),o=r.n(i),l=r(2),d=r.n(l),u=r(27),j=r.n(u),h=r(80),b={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:h.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},p=function(e){function t(t){var r;return(r=e.call(this,t)||this).getRef=r.getRef.bind(Object(c.a)(r)),r.focus=r.focus.bind(Object(c.a)(r)),r}Object(s.a)(t,e);var r=t.prototype;return r.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},r.focus=function(){this.ref&&this.ref.focus()},r.render=function(){var e=this.props,t=e.className,r=e.cssModule,c=e.type,s=e.bsSize,i=e.valid,l=e.invalid,d=e.tag,u=e.addon,b=e.plaintext,p=e.innerRef,f=Object(a.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),m=["radio","checkbox"].indexOf(c)>-1,x=new RegExp("\\D","g"),O=d||("select"===c||"textarea"===c?c:"input"),v="form-control";b?(v+="-plaintext",O=d||"input"):"file"===c?v+="-file":"range"===c?v+="-range":m&&(v=u?null:"form-check-input"),f.size&&x.test(f.size)&&(Object(h.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=f.size,delete f.size);var g=Object(h.mapToCssModules)(j()(t,l&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,v),r);return("input"===O||d&&"function"===typeof d)&&(f.type=c),f.children&&!b&&"select"!==c&&"string"===typeof O&&"select"!==O&&(Object(h.warnOnce)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),o.a.createElement(O,Object(n.a)({},f,{ref:p,className:g,"aria-invalid":l}))},t}(o.a.Component);p.propTypes=b,p.defaultProps={type:"text"},t.a=p},494:function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function o(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(L){o=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,c=Object.create(a.prototype),s=new E(n||[]);return c._invoke=function(e,t,r){var n=u;return function(a,c){if(n===h)throw new Error("Generator is already running");if(n===b){if("throw"===a)throw c;return _()}for(r.method=a,r.arg=c;;){var s=r.delegate;if(s){var i=N(s,r);if(i){if(i===p)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var o=d(e,t,r);if("normal"===o.type){if(n=r.done?b:j,o.arg===p)continue;return{value:o.arg,done:r.done}}"throw"===o.type&&(n=b,r.method="throw",r.arg=o.arg)}}}(e,r,s),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var u="suspendedStart",j="suspendedYield",h="executing",b="completed",p={};function f(){}function m(){}function x(){}var O={};O[c]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(T([])));g&&g!==r&&n.call(g,c)&&(O=g);var y=x.prototype=f.prototype=Object.create(O);function w(e){["next","throw","return"].forEach((function(t){o(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(a,c,s,i){var o=d(e[a],e,c);if("throw"!==o.type){var l=o.arg,u=l.value;return u&&"object"===typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,s,i)}),(function(e){r("throw",e,s,i)})):t.resolve(u).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,i)}))}i(o.arg)}var a;this._invoke=function(e,n){function c(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(c,c):c()}}function N(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=d(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,p;var c=a.arg;return c?c.done?(r[e.resultName]=c.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function T(e){if(e){var r=e[c];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,s=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return s.next=s}}return{next:_}}function _(){return{value:t,done:!0}}return m.prototype=y.constructor=x,x.constructor=m,m.displayName=o(x,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,o(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(k.prototype),k.prototype[s]=function(){return this},e.AsyncIterator=k,e.async=function(t,r,n,a,c){void 0===c&&(c=Promise);var s=new k(l(t,r,n,a),c);return e.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},w(y),o(y,i,"Generator"),y[c]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return i.type="throw",i.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var c=this.tryEntries.length-1;c>=0;--c){var s=this.tryEntries[c],i=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var o=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(o&&l){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(o){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var s=c?c.completion:{};return s.type=e,s.arg=t,c?(this.method="next",this.next=c.finallyLoc,p):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;A(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},497:function(e,t,r){"use strict";var n=r(14),a=r(15),c=r(1),s=r.n(c),i=r(2),o=r.n(i),l=r(27),d=r.n(l),u=r(80),j=o.a.oneOfType([o.a.number,o.a.string]),h=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:j,order:j,offset:j})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:o.a.array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},f=function(e,t,r){return!0===r||""===r?e?"col":"col-"+t:"auto"===r?e?"col-auto":"col-"+t+"-auto":e?"col-"+r:"col-"+t+"-"+r},m=function(e){var t=e.className,r=e.cssModule,c=e.hidden,i=e.widths,o=e.tag,l=e.check,j=e.size,h=e.for,b=Object(a.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];i.forEach((function(t,n){var a=e[t];if(delete b[t],a||""===a){var c,s=!n;if(Object(u.isObject)(a)){var i,o=s?"-":"-"+t+"-";c=f(s,t,a.size),p.push(Object(u.mapToCssModules)(d()(((i={})[c]=a.size||""===a.size,i["order"+o+a.order]=a.order||0===a.order,i["offset"+o+a.offset]=a.offset||0===a.offset,i))),r)}else c=f(s,t,a),p.push(c)}}));var m=Object(u.mapToCssModules)(d()(t,!!c&&"sr-only",!!l&&"form-check-label",!!j&&"col-form-label-"+j,p,!!p.length&&"col-form-label"),r);return s.a.createElement(o,Object(n.a)({htmlFor:h},b,{className:m}))};m.propTypes=b,m.defaultProps=p,t.a=m},499:function(e,t,r){},578:function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"f",(function(){return l})),r.d(t,"j",(function(){return d})),r.d(t,"l",(function(){return u})),r.d(t,"h",(function(){return j})),r.d(t,"m",(function(){return h})),r.d(t,"i",(function(){return b})),r.d(t,"k",(function(){return p})),r.d(t,"g",(function(){return f})),r.d(t,"a",(function(){return m})),r.d(t,"d",(function(){return x})),r.d(t,"n",(function(){return O})),r.d(t,"b",(function(){return v})),r.d(t,"c",(function(){return g}));var n=r(0),a=r(485),c=r.n(a),s=r(486),i=r(484),o=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)({url:"/admin/users",method:"GET"},t);case 2:if(r=e.sent,console.log({response:r}),!(r&&r.data.data&&r.data.success)){e.next=9;break}return e.next=7,t({type:"GET_ALL_DATA",data:r.data.data});case 7:e.next=11;break;case 9:console.log(r),Object(i.l)("Oops!","Something went wrong.","error");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(e,t){return function(){var r=Object(s.a)(c.a.mark((function r(n){var a,s,o,l,d,u,j,h,b,p,f,m;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=t.q,s=void 0===a?"":a,o=t.perPage,l=void 0===o?10:o,d=t.number,u=void 0===d?"":d,j=t.page,h=void 0===j?1:j,b=t.status,p=void 0===b?null:b,f=s.toLowerCase(),m=null===e||void 0===e?void 0:e.filter((function(e){var t;return(e.email.toLowerCase().includes(f)||e.names.toLowerCase().includes(f)||(null===(t=e.phone)||void 0===t?void 0:t.toString().toLowerCase().includes(f))||e.referral_code.toLowerCase().includes(f))&&e.status===(p||e.status)&&e.phone===(u||e.phone)})),n({type:"GET_FILTERED_USER_DATA",data:Object(i.i)(m,l,h),totalPages:m.length,params:t});case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},d=function(e,t){return function(){var r=Object(s.a)(c.a.mark((function r(n){var a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.find((function(e){return e.user_id===t})),n({type:"GET_USER",selectedUser:a});case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(r){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.stringify({user_id:e}),t.next=3,Object(i.a)({url:"/admin/users/transactions/all",method:"POST",body:n},r);case 3:if(!((a=t.sent)&&a.data.data&&a.data.success)){t.next=9;break}return t.next=7,r({type:"GET_USER_ALL_TRANSACTIONS",data:a.data.data});case 7:t.next=11;break;case 9:console.log(a),Object(i.l)("Oops!","Somthing went wrong with your network.","error");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e,t){return function(){var r=Object(s.a)(c.a.mark((function r(n){var a,s,o,l,d,u,j,h;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t.q,s=void 0===a?"":a,o=t.perPage,l=void 0===o?10:o,d=t.page,u=void 0===d?1:d,j=s.toLowerCase(),h=e.filter((function(e){return e.trans_id.toLowerCase().includes(j)||e.trans_type.toLowerCase().includes(j)})),r.next=5,n({type:"GET_USER_TRANSACTIONS",data:Object(i.i)(h,l,u),totalPages:h.length,params:t});case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(r){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.stringify({user_id:e}),t.next=3,Object(i.a)({url:"/admin/users/transactions/utility",method:"POST",body:n},r);case 3:if(!((a=t.sent)&&a.data.data&&a.data.success)){t.next=9;break}return t.next=7,r({type:"GET_USER_ALL_UTILITIES_TRANSACTIONS",data:a.data.data});case 7:t.next=11;break;case 9:console.log(a),Object(i.l)("Oops!","Somthing went wrong with your network.","error");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e,t){return function(){var r=Object(s.a)(c.a.mark((function r(n){var a,s,o,l,d,u,j,h;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t.q,s=void 0===a?"":a,o=t.perPage,l=void 0===o?10:o,d=t.page,u=void 0===d?1:d,j=s.toLowerCase(),h=e.filter((function(e){return e.trans_id.toLowerCase().includes(j)||e.trans_type.toLowerCase().includes(j)})),r.next=5,n({type:"GET_USER_UTILITY_TRANSACTIONS",data:Object(i.i)(h,l,u),totalPages:h.length,params:t});case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(r){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.stringify({user_id:e}),t.next=3,Object(i.a)({url:"/admin/users/transactions/bank",method:"POST",body:n},r);case 3:if(!((a=t.sent)&&a.data.data&&a.data.success)){t.next=9;break}return t.next=7,r({type:"GET_USER_ALL_BANK_TRANSACTIONS",data:a.data.data});case 7:t.next=11;break;case 9:console.log(a),Object(i.l)("Oops!","Somthing went wrong with your network.","error");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var r=Object(s.a)(c.a.mark((function r(n){var a,s,o,l,d,u,j,h;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t.q,s=void 0===a?"":a,o=t.perPage,l=void 0===o?10:o,d=t.page,u=void 0===d?1:d,j=s.toLowerCase(),h=e.filter((function(e){return e.trans_id.toLowerCase().includes(j)||e.trans_type.toLowerCase().includes(j)})),r.next=5,n({type:"GET_USER_BANK_TRANSACTIONS",data:Object(i.i)(h,l,u),totalPages:h.length,params:t});case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},m=function(e,t){var r=e.find((function(e){return e.user_id===t}));return function(){var e=Object(s.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)({url:"/admin/users/activate/".concat(r.user_id),method:"GET"},t);case 2:(a=e.sent)?a.data.success?(t({type:"GET_USER",selectedUser:Object(n.a)(Object(n.a)({},r),{},{status:"Active"})}),Object(i.l)("Good!","".concat(a.data.message,"."),"success"),t(o())):Object(i.l)("Oops!","".concat(a.data.message,"."),"error"):Object(i.l)("Oops!","Something went wrong with your network.","error");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(e,t){var r=e.find((function(e){return e.user_id===t}));return function(){var e=Object(s.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)({url:"/admin/users/deactivate/".concat(r.user_id),method:"GET"},t);case 2:(a=e.sent)?a.data.success?(t({type:"GET_USER",selectedUser:Object(n.a)(Object(n.a)({},r),{},{status:"Inactive"})}),Object(i.l)("Good!","".concat(a.data.message,"."),"success"),t(o())):Object(i.l)("Oops!","".concat(a.data.message,"."),"error"):Object(i.l)("Oops!","Something went wrong with your network.","error");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e){var t=e.user_id;return function(){var e=Object(s.a)(c.a.mark((function e(r){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.stringify({user_id:t}),e.next=3,Object(i.a)({url:"/admin/users/reset/",method:"POST",body:n},r);case 3:(a=e.sent)&&a.data.success?Object(i.l)("Good!","User password reset Sucessfully.","success"):(console.log(a),Object(i.l)("Oops!","Somthing went wrong with your network.","error"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(e){var t=e.user_id,r=e.reason;return function(){var e=Object(s.a)(c.a.mark((function e(n){var a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify({user_id:t,reason:r}),e.next=3,Object(i.a)({url:"/admin/users/blacklist/".concat(t),method:"GET",body:a},n);case 3:(s=e.sent)&&s.data.success?Object(i.l)("Good!","".concat(s.data.message,"."),"success"):(console.log(s),Object(i.l)("Oops!","Somthing went wrong with your network.","error"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e,t){var r=e.user_id,n=e.reason;return function(){var e=Object(s.a)(c.a.mark((function e(a){var s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=JSON.stringify({user_id:r,reason:n}),e.next=3,Object(i.a)({url:"/admin/blacklist-asset/".concat(t),method:"GET",body:s},a);case 3:o=e.sent,console.log({response:o}),o&&o.data.success?Object(i.l)("Good!","".concat(o.data.message,"."),"success"):(console.log(o),Object(i.l)("Oops!","Somthing went wrong with your network.","error"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=142.d51f6d54.chunk.js.map