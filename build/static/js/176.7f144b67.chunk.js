(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[176],{2208:function(e,a,t){"use strict";t.r(a);var n=t(28),c=t(1),s=t(473),r=t(477),i=t(485),l=t.n(i),o=t(487),d=(t(82),t(483)),u=function(e,a){return function(){var t=Object(o.a)(l.a.mark((function t(n){var c,s,r,i,o,u,m,j,p;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=a.q,s=void 0===c?"":c,r=a.perPage,i=void 0===r?10:r,o=a.page,u=void 0===o?1:o,m=a.role,void 0===m?null:m,j=s.toLowerCase(),p=null===e||void 0===e?void 0:e.filter((function(e){var a,t,n;return(null===e||void 0===e||null===(a=e.email)||void 0===a?void 0:a.toLowerCase().includes(j))||(null===e||void 0===e||null===(t=e.name)||void 0===t||null===(n=t.toLowerCase())||void 0===n?void 0:n.includes(j))})),n({type:"GET_FILTERED_DATA",data:Object(d.i)(p,i,u),totalPages:p.length,params:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=t(124),j=t(504),p=t.n(j),b=t(990),h=t(1331),x=t(994),g=t(995),f=t(1100),O=t(1070),v=t(1020),N=t(1130),w=t(6),C=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar?Object(w.jsx)(r.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"}):Object(w.jsx)(r.a,{color:a||"primary",className:"mr-1",content:"".concat(e.name)||"John Doe",initials:!0})},k=[{name:"Full Name",minWidth:"297px",selector:"name",sortable:!0,cell:function(e){return Object(w.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[C(e),Object(w.jsxs)("div",{className:"d-flex flex-column",children:[Object(w.jsx)(s.b,{to:"/appia/contacts/view/".concat(e.id),className:"user-name text-truncate mb-0",onClick:function(){return m.a.dispatch((a=m.a.getState().appiaContacts.allData,t=e.id,function(){var e=Object(o.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=a.find((function(e){return e.id===t})),n({type:"GET_CONTACT",selectedContact:c});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()));var a,t},children:Object(w.jsx)("span",{className:"font-weight-bold",children:e.name})}),Object(w.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.email})]})]})}},{name:"Email",minWidth:"320px",selector:"email",sortable:!0,cell:function(e){return e.email}},{name:"Subject",minWidth:"172px",selector:"subject",sortable:!0,cell:function(e){return e.subject}},{name:"Date",minWidth:"200px",selector:"created_at",sortable:!0,cell:function(e){return p()(e.posted_date).format("lll")}},{name:"Actions",minWidth:"100px",selector:"fullName",sortable:!0,cell:function(e){return Object(w.jsxs)(b.a,{children:[Object(w.jsx)(h.a,{tag:"div",className:"btn btn-sm",children:Object(w.jsx)(f.a,{size:14,className:"cursor-pointer"})}),Object(w.jsxs)(x.a,{right:!0,children:[Object(w.jsxs)(g.a,{tag:s.b,to:"/appia/contacts/view/".concat(e.admin_id),className:"w-100",onClick:function(){return m.a.dispatch(getFeedback(m.a.getState().appiaContacts.allData,e.admin_id))},children:[Object(w.jsx)(O.a,{size:14,className:"mr-50"}),Object(w.jsx)("span",{className:"align-middle",children:"Details"})]}),Object(w.jsxs)(g.a,{tag:s.b,to:"/appia/contacts/edit/".concat(e.id),className:"w-100",onClick:function(){return m.a.dispatch(getFeedback(m.a.getState().appiaContacts.allData,e.admin_id))},children:[Object(w.jsx)(v.a,{size:14,className:"mr-50"}),Object(w.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(w.jsxs)(g.a,{className:"w-100",children:[Object(w.jsx)(N.a,{size:14,className:"mr-50"}),Object(w.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})}}],y=t(81),D=t(502),L=t.n(D),S=t(1038),T=t(513),E=t.n(T),_=t(481),P=t(488),q=t(480),A=t(478),F=t(479),W=t(482),z=t(496),G=t(998),I=t(981),J=(t(519),t(503),function(){var e=Object(y.b)(),a=Object(y.c)((function(e){return e.appiaContacts})),t=Object(c.useState)(""),s=Object(n.a)(t,2),r=s[0],i=s[1],m=Object(c.useState)(1),j=Object(n.a)(m,2),p=j[0],b=j[1],h=Object(c.useState)(10),x=Object(n.a)(h,2),g=x[0],f=x[1];Object(c.useEffect)((function(){e(function(){var e=Object(o.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)({url:"/admin/misc/contacts",method:"GET"},a);case 2:if(!(t=e.sent)){e.next=12;break}if(!t.data.data||!t.data.success){e.next=9;break}return e.next=7,a({type:"GET_ALL_CONTACTS",data:t.data.data});case 7:e.next=10;break;case 9:console.log(t.error);case 10:e.next=13;break;case 12:Object(d.l)("Oops!","Somthing went wrong with your network.","error");case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),e(u(a.allData,{page:p,perPage:g,q:r}))}),[e]);var O=a.allData.filter((function(e){return e.email.toLowerCase()||e.name.toLowerCase()}));return Object(w.jsxs)(c.Fragment,{children:[Object(w.jsxs)(_.a,{children:[Object(w.jsx)(P.a,{children:Object(w.jsx)(q.a,{tag:"h4",children:"Search Filter"})}),Object(w.jsx)(A.a,{children:Object(w.jsx)(F.a,{children:Object(w.jsxs)(W.a,{md:"4",className:"d-flex",children:[Object(w.jsx)(z.a,{className:"mb-0 mt-1",for:"search-invoice",children:"Search:"}),Object(w.jsx)(G.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:r,onChange:function(t){return n=t.target.value,i(n),void e(u(a.allData,{page:p,perPage:g,q:n}));var n}})]})})})]}),Object(w.jsxs)(_.a,{children:[Object(w.jsx)(F.a,{className:"mx-0 mt-3",children:Object(w.jsx)(W.a,{sm:"6",children:Object(w.jsxs)("div",{className:"d-flex align-items-center",children:[Object(w.jsx)(z.a,{for:"rows-per-page",children:"Show"}),Object(w.jsxs)(I.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:g,onChange:function(t){var n=parseInt(t.currentTarget.value);e(u(a.allData,{page:p,perPage:n,q:r})),f(n)},style:{width:"10rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(w.jsx)("option",{value:"10",children:"10"}),Object(w.jsx)("option",{value:"25",children:"25"}),Object(w.jsx)("option",{value:"50",children:"50"})]}),Object(w.jsx)(z.a,{for:"rows-per-page",children:"Entries"})]})})}),Object(w.jsx)(E.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:k,sortIcon:Object(w.jsx)(S.a,{}),className:"react-dataTable",paginationComponent:function(){var t=Math.ceil(O.length/g);return Object(w.jsx)(L.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==p?p-1:0,onPageChange:function(t){return function(t){e(u(a.allData,{page:t.selected+1,perPage:g,q:r})),b(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={q:r},t=Object.keys(e).some((function(a){return e[a].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,g)}()})]})]})});t(492),a.default=function(){return Object(w.jsx)("div",{className:"app-user-list",children:Object(w.jsx)(J,{})})}},492:function(e,a,t){},503:function(e,a,t){}}]);
//# sourceMappingURL=176.7f144b67.chunk.js.map