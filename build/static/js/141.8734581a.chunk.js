(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[141],{2217:function(e,a,t){"use strict";t.r(a);var s=t(58),c=t(28),n=t(1),r=t(473),l=t(502),i=t.n(l),o=t(1076),u=t(1078),d=t(1418),b=t(1082),p=t(1084),m=t(1180),j=t(1147),g=t(1095),f=t(1212),h=t(6),O={Pending:"light-warning",Active:"light-success",Inactive:"light-danger"},v=[{name:"User Id",minWidth:"120px",selector:"id",sortable:!0,cell:function(e){return e.id}},{name:"Email",minWidth:"320px",selector:"email",sortable:!0,cell:function(e){return e.email}},{name:"Status",minWidth:"100px",selector:"status",sortable:!0,cell:function(e){return Object(h.jsx)(o.a,{className:"text-capitalize",color:O[e.status],pill:!0,children:e.status})}},{name:"Date Subscribed",minWidth:"200px",selector:"created_at",sortable:!0,cell:function(e){return i()(e.created_at).format("lll")}},{name:"Actions",minWidth:"100px",selector:"fullName",sortable:!0,cell:function(e){return Object(h.jsxs)(u.a,{children:[Object(h.jsx)(d.a,{tag:"div",className:"btn btn-sm",children:Object(h.jsx)(m.a,{size:14,className:"cursor-pointer"})}),Object(h.jsxs)(b.a,{right:!0,children:[Object(h.jsxs)(p.a,{tag:r.b,to:"/appia/admin/view/".concat(e.admin_id),className:"w-100",onClick:function(){return store.dispatch(getFeedback(store.getState().appiaAdmins.allData,e.admin_id))},children:[Object(h.jsx)(j.a,{size:14,className:"mr-50"}),Object(h.jsx)("span",{className:"align-middle",children:"Details"})]}),Object(h.jsxs)(p.a,{tag:r.b,to:"/appia/admin/edit/".concat(e.id),className:"w-100",onClick:function(){return store.dispatch(getFeedback(store.getState().appiaSubscribers.allData,e.admin_id))},children:[Object(h.jsx)(g.a,{size:14,className:"mr-50"}),Object(h.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(h.jsxs)(p.a,{className:"w-100",children:[Object(h.jsx)(f.a,{size:14,className:"mr-50"}),Object(h.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})}}],x=t(505),N=t.n(x),k=t(485),w=t.n(k),C=t(486),S=t(484),y=function(e,a){return function(){var t=Object(C.a)(w.a.mark((function t(s){var c,n,r,l,i,o,u,d,b,p;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=a.q,n=void 0===c?"":c,r=a.perPage,l=void 0===r?10:r,i=a.page,o=void 0===i?1:i,u=a.status,d=void 0===u?null:u,b=n.toLowerCase(),p=e.filter((function(e){return e.email.toLowerCase().includes(b)&&e.status===(d||e.status)})),s({type:"GET_FILTERED_DATA",data:Object(S.i)(p,l,o),totalPages:p.length,params:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=t(81),D=t(516),T=t(503),_=t.n(T),M=t(1114),E=t(510),L=t.n(E),q=t(482),A=t(483),I=t(479),R=t(478),z=t(480),F=t(481),W=t(497),G=t(493),B=t(1067),H=(t(499),t(518),t(501),t(530)),J=t.n(H),U=function(){var e,a=Object(P.b)(),t=Object(P.c)((function(e){return e.appiaSubscribers})),r=Object(n.useState)(""),l=Object(c.a)(r,2),i=l[0],o=l[1],u=Object(n.useState)(1),d=Object(c.a)(u,2),b=d[0],p=d[1],m=Object(n.useState)(10),j=Object(c.a)(m,2),g=j[0],f=j[1],O=Object(n.useState)({value:"",label:"Select Status",number:0}),x=Object(c.a)(O,2),k=x[0],T=x[1],E=Object(n.useState)(null),H=Object(c.a)(E,2),U=H[0],K=H[1],Q=U&&Date.parse(U[0]),V=U&&Date.parse(U[1]);Object(n.useEffect)((function(){a(function(){var e=Object(C.a)(w.a.mark((function e(a){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)({url:"/admin/misc/subscribers",method:"GET"},a);case 2:if(!(t=e.sent)){e.next=12;break}if(!t.data.data||!t.data.success){e.next=9;break}return e.next=7,a({type:"GET_ALL_SUBSCRIBERS",data:t.data.data});case 7:e.next=10;break;case 9:console.log(t.error);case 10:e.next=13;break;case 12:Object(S.l)("Oops!","Somthing went wrong with your network.","error");case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),a(y(t.allData,{page:b,perPage:g,status:k.value,q:i,created_at:U}))}),[a]);var X=t.allData.filter((function(e){return e.email.toLowerCase()||e.created_at.toLowerCase()}));return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsxs)(q.a,{children:[Object(h.jsx)(A.a,{children:Object(h.jsx)(I.a,{tag:"h4",children:"Search Filter"})}),Object(h.jsx)(R.a,{children:Object(h.jsxs)(z.a,{form:!0,className:"mt-1 mb-50",children:[Object(h.jsx)(F.a,{lg:"4",md:"6",children:Object(h.jsxs)(J.a,{children:[Object(h.jsx)(W.a,{for:"select",children:"Select Status:"}),Object(h.jsx)(D.a,{theme:S.j,isClearable:!1,className:"react-select",classNamePrefix:"select",id:"select",options:[{value:"",label:"Select Status",number:0},{value:"Pending",label:"Pending",number:1},{value:"Active",label:"Active",number:2},{value:"Inactive",label:"Inactive",number:3}],value:k,onChange:function(e){T(e),a(y(t.allData,{page:b,perPage:g,status:e.value,q:i}))}})]})}),Object(h.jsx)(F.a,{lg:"4",md:"6",children:Object(h.jsxs)(J.a,{children:[Object(h.jsx)(W.a,{className:"mb-0",for:"search-invoice",children:"Search:"}),Object(h.jsx)(G.a,{id:"search-invoice",type:"text",value:i,placeholder:"Email Search",onChange:function(e){return s=e.target.value,o(s),void a(y(t.allData,{page:b,perPage:g,status:k.value,q:s,created_at:U}));var s}})]})}),Object(h.jsxs)(F.a,{md:"4",className:"d-flex mt-2",children:[Object(h.jsx)(W.a,{className:"mb-0 mt-1",for:"range-picker",children:"Range: "}),Object(h.jsx)(N.a,(e={value:U,id:"range-picker",className:"form-control",onChange:function(e){K(e),a(y(t.allData,{page:b,perPage:g,status:k.value,q:i,created_at:e}))}},Object(s.a)(e,"onChange",(function(e){return K(e)})),Object(s.a)(e,"options",{mode:"range"}),e))]})]})})]}),Object(h.jsxs)(q.a,{children:[Object(h.jsx)(z.a,{className:"mx-0 mt-3",children:Object(h.jsx)(F.a,{sm:"6",children:Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)(W.a,{for:"rows-per-page",children:"Show"}),Object(h.jsxs)(B.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:g,onChange:function(e){var s=parseInt(e.currentTarget.value);a(y(t.allData,{page:b,perPage:s,status:k.value,q:i,created_at:U})),f(s)},style:{width:"10rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(h.jsx)("option",{value:"10",children:"10"}),Object(h.jsx)("option",{value:"25",children:"25"}),Object(h.jsx)("option",{value:"50",children:"50"})]}),Object(h.jsx)(W.a,{for:"rows-per-page",children:"Entries"})]})})}),Object(h.jsx)(L.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:v,sortIcon:Object(h.jsx)(M.a,{}),className:"react-dataTable",paginationComponent:function(){var e=Math.ceil(X.length/g);return Object(h.jsx)(_.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==b?b-1:0,onPageChange:function(e){return function(e){a(y(t.allData,{page:e.selected+1,perPage:g,status:k.value,q:i,created_at:U})),p(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={status:k.value,q:i},a=t.allData.filter((function(e){if(Date.parse(e.created_at)>=Q&&Date.parse(e.created_at)<=V)return e})),s=Object.keys(e).some((function(a){return e[a].length>0}));return!i&&Q&&V?a.slice(0,g):t.data.length>0?t.data:0===t.data.length&&s?[]:t.allData.slice(0,g)}()})]})]})};t(492),a.default=function(){return Object(h.jsx)("div",{className:"app-user-list",children:Object(h.jsx)(U,{})})}},478:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(1),r=t.n(n),l=t(2),i=t.n(l),o=t(27),u=t.n(o),d=t(80),b={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,l=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(d.mapToCssModules)(u()(a,"card-body"),t);return r.a.createElement(l,Object(s.a)({},i,{className:o,ref:n}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},479:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(1),r=t.n(n),l=t(2),i=t.n(l),o=t(27),u=t.n(o),d=t(80),b={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-title"),t);return r.a.createElement(n,Object(s.a)({},l,{className:i}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},483:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(1),r=t.n(n),l=t(2),i=t.n(l),o=t(27),u=t.n(o),d=t(80),b={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-header"),t);return r.a.createElement(n,Object(s.a)({},l,{className:i}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},492:function(e,a,t){},499:function(e,a,t){},501:function(e,a,t){},530:function(e,a,t){"use strict";var s=t(528);a.__esModule=!0,a.default=void 0;var c=s(t(554)),n=s(t(561)),r=s(t(1)),l=s(t(2)),i=s(t(27)),o=t(551),u={children:l.default.node,row:l.default.bool,check:l.default.bool,inline:l.default.bool,disabled:l.default.bool,tag:o.tagPropType,className:l.default.string,cssModule:l.default.object},d=function(e){var a=e.className,t=e.cssModule,s=e.row,l=e.disabled,u=e.check,d=e.inline,b=e.tag,p=(0,n.default)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=(0,o.mapToCssModules)((0,i.default)(a,!!s&&"row",u?"form-check":"form-group",!(!u||!d)&&"form-check-inline",!(!u||!l)&&"disabled"),t);return"fieldset"===b&&(p.disabled=l),r.default.createElement(b,(0,c.default)({},p,{className:m}))};d.propTypes=u,d.defaultProps={tag:"div"};var b=d;a.default=b}}]);
//# sourceMappingURL=141.8734581a.chunk.js.map