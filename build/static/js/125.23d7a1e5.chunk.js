(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[125],{2244:function(e,a,t){"use strict";t.r(a);var n=t(28),r=t(1),s=t(473),c=t(477),i=t(786),o=t(124),l=t(502),u=t.n(l),d=t(6),f=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar?Object(d.jsx)(c.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"}):Object(d.jsx)(c.a,{color:a||"primary",className:"mr-1",content:"".concat(e.trans_id)||"John Doe",initials:!0})},p=[{name:"Transaction Id",minWidth:"250px",selector:"trans_id",sortable:!0,cell:function(e){return Object(d.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[f(e),Object(d.jsx)("div",{className:"d-flex flex-column",children:Object(d.jsx)(s.b,{to:"/appia/transfers/view/".concat(e.id),className:"user-name text-truncate mb-0",onClick:function(){return o.a.dispatch(Object(i.d)(o.a.getState().appiaTransfers.allData,e.id))},children:Object(d.jsx)("span",{className:"font-weight-bold",children:e.trans_id})})})]})}},{name:"Sender",minWidth:"200px",selector:"sender_name",sortable:!0,cell:function(e){return e.sender_name}},{name:"Receiver",minWidth:"250px",selector:"receiver_name",sortable:!0,cell:function(e){return e.receiver_name}},{name:"Bank",minWidth:"200px",selector:"bank",sortable:!0,cell:function(e){return e.bank}},{name:"Transaction Type",minWidth:"200px",selector:"trans_type",sortable:!0,cell:function(e){return e.trans_type}},{name:"Transfer Amount",minWidth:"200px",selector:"trans_amount",sortable:!0,cell:function(e){return Object(d.jsx)("span",{children:(e.trans_amount||0).toLocaleString("en-US",{style:"currency",currency:"NGN"})})}},{name:"Status",minWidth:"172px",selector:"status",sortable:!0,cell:function(e){return e.status}},{name:"Date",minWidth:"200px",selector:"trans_date",sortable:!0,cell:function(e){return u()(e.trans_date).format("lll")}}],b=t(81),m=t(517),j=t(503),h=t.n(j),g=t(1035),v=t(510),O=t.n(v),x=t(484),y=t(481),N=t(483),w=t(479),T=t(478),k=t(480),S=t(482),C=t(499),M=t(494),P=t(989),_=t(530),z=t.n(_),E=(t(519),t(501),function(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.appiaTransfers})),t=Object(r.useState)(""),s=Object(n.a)(t,2),c=s[0],o=s[1],l=Object(r.useState)(1),u=Object(n.a)(l,2),f=u[0],j=u[1],v=Object(r.useState)(10),_=Object(n.a)(v,2),E=_[0],R=_[1],L=Object(r.useState)({value:"",label:"Select Status",number:0}),D=Object(n.a)(L,2),W=D[0],q=D[1];Object(r.useEffect)((function(){e(Object(i.b)()),e(Object(i.c)(a.allData,{page:f,perPage:E,q:c}))}),[e]);var A=a.allData.filter((function(e){return e.receiver_name.toLowerCase()||sender_.name.toLowerCase()}));return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsxs)(y.a,{children:[Object(d.jsx)(N.a,{children:Object(d.jsx)(w.a,{tag:"h4",children:"Search Filter"})}),Object(d.jsx)(T.a,{children:Object(d.jsxs)(k.a,{children:[Object(d.jsx)(S.a,{lg:"4",md:"6",children:Object(d.jsxs)(z.a,{children:[Object(d.jsx)(C.a,{className:"mb-0",for:"search-invoice",children:"Search:"}),Object(d.jsx)(M.a,{id:"search-invoice",type:"text",value:c,placeholder:"Name & Bank Search",onChange:function(t){return n=t.target.value,o(n),void e(Object(i.c)(a.allData,{page:f,perPage:E,q:n}));var n}})]})}),Object(d.jsx)(S.a,{lg:"4",md:"6",children:Object(d.jsxs)(z.a,{children:[Object(d.jsx)(C.a,{for:"select",children:"Select Status:"}),Object(d.jsx)(m.a,{theme:x.j,isClearable:!1,className:"react-select",classNamePrefix:"select",id:"select",options:[{value:"",label:"Select Status",number:0},{value:"Pending",label:"Pending",number:1},{value:"Successful",label:"Successful",number:2}],value:W,onChange:function(t){q(t),e(Object(i.c)(a.allData,{page:f,perPage:E,status:t.value,q:c}))}})]})})]})})]}),Object(d.jsxs)(y.a,{children:[Object(d.jsx)(k.a,{className:"mx-0 mt-3",children:Object(d.jsx)(S.a,{sm:"6",children:Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)(C.a,{for:"rows-per-page",children:"Show"}),Object(d.jsxs)(P.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:E,onChange:function(t){var n=parseInt(t.currentTarget.value);e(Object(i.c)(a.allData,{page:f,perPage:n,q:c})),R(n)},style:{width:"10rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"25",children:"25"}),Object(d.jsx)("option",{value:"50",children:"50"})]}),Object(d.jsx)(C.a,{for:"rows-per-page",children:"Entries"})]})})}),Object(d.jsx)(O.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:p,sortIcon:Object(d.jsx)(g.a,{}),className:"react-dataTable",paginationComponent:function(){var t=Math.ceil(A.length/E);return Object(d.jsx)(h.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==f?f-1:0,onPageChange:function(t){return function(t){e(Object(i.c)(a.allData,{page:t.selected+1,perPage:E,q:c})),j(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={q:c},t=Object.keys(e).some((function(a){return e[a].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,E)}()})]})]})});t(492),a.default=function(){return Object(d.jsx)("div",{className:"app-user-list",children:Object(d.jsx)(E,{})})}},478:function(e,a,t){"use strict";var n=t(14),r=t(15),s=t(1),c=t.n(s),i=t(2),o=t.n(i),l=t(27),u=t.n(l),d=t(80),f={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,i=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-body"),t);return c.a.createElement(i,Object(n.a)({},o,{className:l,ref:s}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},479:function(e,a,t){"use strict";var n=t(14),r=t(15),s=t(1),c=t.n(s),i=t(2),o=t.n(i),l=t(27),u=t.n(l),d=t(80),f={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,s=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),o=Object(d.mapToCssModules)(u()(a,"card-title"),t);return c.a.createElement(s,Object(n.a)({},i,{className:o}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},483:function(e,a,t){"use strict";var n=t(14),r=t(15),s=t(1),c=t.n(s),i=t(2),o=t.n(i),l=t(27),u=t.n(l),d=t(80),f={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,s=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),o=Object(d.mapToCssModules)(u()(a,"card-header"),t);return c.a.createElement(s,Object(n.a)({},i,{className:o}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},492:function(e,a,t){},494:function(e,a,t){"use strict";var n=t(14),r=t(15),s=t(121),c=t(57),i=t(1),o=t.n(i),l=t(2),u=t.n(l),d=t(27),f=t.n(d),p=t(80),b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,c=e.bsSize,i=e.valid,l=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,m=e.innerRef,j=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(s)>-1,g=new RegExp("\\D","g"),v=u||("select"===s||"textarea"===s?s:"input"),O="form-control";b?(O+="-plaintext",v=u||"input"):"file"===s?O+="-file":"range"===s?O+="-range":h&&(O=d?null:"form-check-input"),j.size&&g.test(j.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=j.size,delete j.size);var x=Object(p.mapToCssModules)(f()(a,l&&"is-invalid",i&&"is-valid",!!c&&"form-control-"+c,O),t);return("input"===v||u&&"function"===typeof u)&&(j.type=s),j.children&&!b&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete j.children),o.a.createElement(v,Object(n.a)({},j,{ref:m,className:x,"aria-invalid":l}))},a}(o.a.Component);m.propTypes=b,m.defaultProps={type:"text"},a.a=m},499:function(e,a,t){"use strict";var n=t(14),r=t(15),s=t(1),c=t.n(s),i=t(2),o=t.n(i),l=t(27),u=t.n(l),d=t(80),f=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},m={tag:"label",widths:["xs","sm","md","lg","xl"]},j=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,s=e.hidden,i=e.widths,o=e.tag,l=e.check,f=e.size,p=e.for,b=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];i.forEach((function(a,n){var r=e[a];if(delete b[a],r||""===r){var s,c=!n;if(Object(d.isObject)(r)){var i,o=c?"-":"-"+a+"-";s=j(c,a,r.size),m.push(Object(d.mapToCssModules)(u()(((i={})[s]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i))),t)}else s=j(c,a,r),m.push(s)}}));var h=Object(d.mapToCssModules)(u()(a,!!s&&"sr-only",!!l&&"form-check-label",!!f&&"col-form-label-"+f,m,!!m.length&&"col-form-label"),t);return c.a.createElement(o,Object(n.a)({htmlFor:p},b,{className:h}))};h.propTypes=b,h.defaultProps=m,a.a=h},501:function(e,a,t){},530:function(e,a,t){"use strict";var n=t(528);a.__esModule=!0,a.default=void 0;var r=n(t(554)),s=n(t(561)),c=n(t(1)),i=n(t(2)),o=n(t(27)),l=t(550),u={children:i.default.node,row:i.default.bool,check:i.default.bool,inline:i.default.bool,disabled:i.default.bool,tag:l.tagPropType,className:i.default.string,cssModule:i.default.object},d=function(e){var a=e.className,t=e.cssModule,n=e.row,i=e.disabled,u=e.check,d=e.inline,f=e.tag,p=(0,s.default)(e,["className","cssModule","row","disabled","check","inline","tag"]),b=(0,l.mapToCssModules)((0,o.default)(a,!!n&&"row",u?"form-check":"form-group",!(!u||!d)&&"form-check-inline",!(!u||!i)&&"disabled"),t);return"fieldset"===f&&(p.disabled=i),c.default.createElement(f,(0,r.default)({},p,{className:b}))};d.propTypes=u,d.defaultProps={tag:"div"};var f=d;a.default=f},786:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return o})),t.d(a,"d",(function(){return l})),t.d(a,"a",(function(){return u}));var n=t(485),r=t.n(n),s=t(486),c=(t(82),t(484)),i=function(){return function(){var e=Object(s.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)({url:"/admin/transfers",method:"GET"},a);case 2:if(!(t=e.sent)){e.next=12;break}if(!t.data.data||!t.data.success){e.next=9;break}return e.next=7,a({type:"GET_ALL_TRANSFERS",data:t.data.data});case 7:e.next=10;break;case 9:console.log(t.error);case 10:e.next=13;break;case 12:Object(c.l)("Oops!","Somthing went wrong with your network.","error");case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},o=function(e,a){return function(){var t=Object(s.a)(r.a.mark((function t(n){var s,i,o,l,u,d,f,p,b,m;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=a.q,i=void 0===s?"":s,o=a.perPage,l=void 0===o?10:o,u=a.page,d=void 0===u?1:u,f=a.status,p=void 0===f?null:f,b=i.toLowerCase(),m=e.filter((function(e){return(e.receiver_name.toLowerCase().includes(b)||e.bank.toLowerCase().includes(b))&&e.status===(p||e.status)})),n({type:"GET_FILTERED_DATA",data:Object(c.i)(m,l,d),totalPages:m.length,params:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},l=function(e,a){return function(){var t=Object(s.a)(r.a.mark((function t(n){var s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=e.find((function(e){return e.id===a})),n({type:"GET_TRANSFER",selectedTransfer:s});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(e){var a=e.trans_id;return function(){var e=Object(s.a)(r.a.mark((function e(t){var n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.stringify({trans_id:a}),e.next=3,Object(c.a)({url:"/admin/transfer/approve",method:"POST",body:n},t);case 3:(s=e.sent)&&s.data.success?Object(c.l)("Good!","".concat(s.data.message),"success"):(console.log(s),Object(c.l)("Oops!","Somthing went wrong with your network.","error"));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=125.23d7a1e5.chunk.js.map