(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[198],{2215:function(e,a,t){"use strict";t.r(a);var n=t(28),c=t(1),r=t(482),s=t(507),i=t(521),l=t.n(i),o=t(522),d=(t(82),t(518)),u=function(e,a){return function(){var t=Object(o.a)(l.a.mark((function t(n){var c,r,s,i,o,u,m,j,p;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=a.q,r=void 0===c?"":c,s=a.perPage,i=void 0===s?10:s,o=a.page,u=void 0===o?1:o,m=a.role,void 0===m?null:m,j=r.toLowerCase(),p=e.filter((function(e){return e.email.toLowerCase().includes(j)||e.name.toLowerCase().includes(j)})),n({type:"GET_FILTERED_DATA",data:Object(d.i)(p,i,u),totalPages:p.length,params:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e,a){return function(){var t=Object(o.a)(l.a.mark((function t(n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=e.find((function(e){return e.id===a})),n({type:"GET_FEEDBACK",selectedFeedback:c});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=t(124),p=t(508),b=t.n(p),h=t(662),x=t(669),f=t(663),g=t(664),O=t(755),v=t(1132),N=t(780),w=t(758),k=t(6),C=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar?Object(k.jsx)(s.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"}):Object(k.jsx)(s.a,{color:a||"primary",className:"mr-1",content:"".concat(e.name)||"John Doe",initials:!0})},y=[{name:"Full Name",minWidth:"297px",selector:"name",sortable:!0,cell:function(e){return Object(k.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[C(e),Object(k.jsxs)("div",{className:"d-flex flex-column",children:[Object(k.jsx)(r.b,{to:"/appia/feedbacks/view/".concat(e.id),className:"user-name text-truncate mb-0",onClick:function(){return j.a.dispatch(m(j.a.getState().appiaFeedbacks.allData,e.id))},children:Object(k.jsx)("span",{className:"font-weight-bold",children:e.name})}),Object(k.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.email})]})]})}},{name:"Email",minWidth:"320px",selector:"email",sortable:!0,cell:function(e){return e.email}},{name:"Subject",minWidth:"172px",selector:"feature",sortable:!0,cell:function(e){return e.feature}},{name:"Date",minWidth:"200px",selector:"created_at",sortable:!0,cell:function(e){return b()(e.created_at).format("lll")}},{name:"Actions",minWidth:"100px",selector:"fullName",sortable:!0,cell:function(e){return Object(k.jsxs)(h.a,{children:[Object(k.jsx)(x.a,{tag:"div",className:"btn btn-sm",children:Object(k.jsx)(O.a,{size:14,className:"cursor-pointer"})}),Object(k.jsxs)(f.a,{right:!0,children:[Object(k.jsxs)(g.a,{tag:r.b,to:"/appia/admin/view/".concat(e.admin_id),className:"w-100",onClick:function(){return j.a.dispatch(m(j.a.getState().appiaAdmins.allData,e.admin_id))},children:[Object(k.jsx)(v.a,{size:14,className:"mr-50"}),Object(k.jsx)("span",{className:"align-middle",children:"Details"})]}),Object(k.jsxs)(g.a,{tag:r.b,to:"/appia/admin/edit/".concat(e.id),className:"w-100",onClick:function(){return j.a.dispatch(m(j.a.getState().appiaFeedbacks.allData,e.admin_id))},children:[Object(k.jsx)(N.a,{size:14,className:"mr-50"}),Object(k.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(k.jsxs)(g.a,{className:"w-100",children:[Object(k.jsx)(w.a,{size:14,className:"mr-50"}),Object(k.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})}}],D=t(81),E=t(640),S=t.n(E),L=t(867),F=t(747),_=t.n(F),P=t(502),T=t(499),A=t(498),q=t(492),W=t(500),z=t(501),G=t(534),I=t(519),J=t(659),M=(t(752),t(635),function(){var e=Object(D.b)(),a=Object(D.c)((function(e){return e.appiaFeedbacks})),t=Object(c.useState)(""),r=Object(n.a)(t,2),s=r[0],i=r[1],m=Object(c.useState)(1),j=Object(n.a)(m,2),p=j[0],b=j[1],h=Object(c.useState)(10),x=Object(n.a)(h,2),f=x[0],g=x[1];Object(c.useEffect)((function(){e(function(){var e=Object(o.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)({url:"/admin/misc/feedbacks",method:"GET"},a);case 2:if(!(t=e.sent)){e.next=12;break}if(!t.data.data||!t.data.success){e.next=9;break}return e.next=7,a({type:"GET_ALL_FEEDBACKS",data:t.data.data});case 7:e.next=10;break;case 9:console.log(t.error);case 10:e.next=13;break;case 12:Object(d.l)("Oops!","Somthing went wrong with your network.","error");case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),e(u(a.allData,{page:p,perPage:f,q:s}))}),[e]);var O=a.allData.filter((function(e){return e.email.toLowerCase()||e.name.toLowerCase()}));return Object(k.jsxs)(c.Fragment,{children:[Object(k.jsxs)(P.a,{children:[Object(k.jsx)(T.a,{children:Object(k.jsx)(A.a,{tag:"h4",children:"Search Filter"})}),Object(k.jsx)(q.a,{children:Object(k.jsx)(W.a,{children:Object(k.jsxs)(z.a,{md:"4",className:"d-flex",children:[Object(k.jsx)(G.a,{className:"mb-0 mt-1",for:"search-invoice",children:"Search:"}),Object(k.jsx)(I.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:s,placeholder:"Name and Email Search",onChange:function(t){return n=t.target.value,i(n),void e(u(a.allData,{page:p,perPage:f,q:n}));var n}})]})})})]}),Object(k.jsxs)(P.a,{children:[Object(k.jsx)(W.a,{className:"mx-0 mt-3",children:Object(k.jsx)(z.a,{sm:"6",children:Object(k.jsxs)("div",{className:"d-flex align-items-center",children:[Object(k.jsx)(G.a,{for:"rows-per-page",children:"Show"}),Object(k.jsxs)(J.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:f,onChange:function(t){var n=parseInt(t.currentTarget.value);e(u(a.allData,{page:p,perPage:n,q:s})),g(n)},style:{width:"10rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(k.jsx)("option",{value:"10",children:"10"}),Object(k.jsx)("option",{value:"25",children:"25"}),Object(k.jsx)("option",{value:"50",children:"50"})]}),Object(k.jsx)(G.a,{for:"rows-per-page",children:"Entries"})]})})}),Object(k.jsx)(_.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:y,sortIcon:Object(k.jsx)(L.a,{}),className:"react-dataTable",paginationComponent:function(){var t=Math.ceil(O.length/f);return Object(k.jsx)(S.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==p?p-1:0,onPageChange:function(t){return function(t){e(u(a.allData,{page:t.selected+1,perPage:f,q:s})),b(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={q:s},t=Object.keys(e).some((function(a){return e[a].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,f)}()})]})]})});t(544),a.default=function(){return Object(k.jsx)("div",{className:"app-user-list",children:Object(k.jsx)(M,{})})}},544:function(e,a,t){},635:function(e,a,t){}}]);
//# sourceMappingURL=198.ebe06dd6.chunk.js.map