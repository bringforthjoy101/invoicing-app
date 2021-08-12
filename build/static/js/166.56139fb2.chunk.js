(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[166],{2242:function(e,a,t){"use strict";t.r(a);var n=t(28),c=t(1),s=t(484),r=t(507),l=t(508),i=t.n(l),o=t(936),d=t(123),u=t(6),p=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar?Object(u.jsx)(r.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"}):Object(u.jsx)(r.a,{color:a||"primary",className:"mr-1",content:"".concat(e.trans_id)||"John Doe",initials:!0})},j=[{name:"Transaction Id",minWidth:"297px",selector:"names",sortable:!0,cell:function(e){return Object(u.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[p(e),Object(u.jsx)("div",{className:"d-flex flex-column",children:Object(u.jsx)(s.b,{to:"/appia/transaction/view/".concat(e.trans_id),className:"user-name text-truncate mb-0",onClick:function(){return d.a.dispatch(Object(o.c)(d.a.getState().appiaTransaction.allData,e.trans_id))},children:Object(u.jsx)("span",{className:"font-weight-bold",children:e.trans_id})})})]})}},{name:"Transaction Type",minWidth:"200px",selector:"trans_type",sortable:!0,cell:function(e){return e.trans_type}},{name:"Transaction Amount",minWidth:"250px",selector:"trans_amount",sortable:!0,cell:function(e){return Object(u.jsx)("span",{children:(e.trans_amount||0).toLocaleString("en-US",{style:"currency",currency:"NGN"})})}},{name:"Balance",minWidth:"150px",selector:"balance",sortable:!0,cell:function(e){var a;return Object(u.jsx)("span",{className:"text-capitalize",children:null===e||void 0===e||null===(a=e.balance)||void 0===a?void 0:a.toLocaleString("en-US",{style:"currency",currency:"NGN"})})}},{name:"Transaction Date",minWidth:"250px",selector:"trans_date",sortable:!0,cell:function(e){return i()(e.trans_date).format("lll")}}],m=t(81),b=t(640),f=t.n(b),g=t(871),h=t(1133),v=t(872),x=t(867),O=t(746),N=t.n(O),y=(t(518),t(504)),T=t(499),w=t(498),C=t(496),k=t(502),_=t(503),S=t(534),M=t(521),P=t(659),D=t(514),E=t(669),L=t(663),A=t(664),W=(t(752),t(633),t(803)),I=(t(813),t(775)),R=t.n(I),q=function(){var e=Object(m.b)(),a=Object(m.c)((function(e){return e.appiaTransaction})),t=Object(c.useState)(""),s=Object(n.a)(t,2),r=s[0],l=s[1],i=Object(c.useState)(1),d=Object(n.a)(i,2),p=d[0],b=d[1],O=Object(c.useState)(10),I=Object(n.a)(O,2),q=I[0],z=I[1];Object(c.useEffect)((function(){e(Object(o.a)()),e(Object(o.b)(a.allData,{page:p,perPage:q,q:r}))}),[e]);var G=a.allData.filter((function(e){var a,t;return(null===(a=e.trans_id)||void 0===a?void 0:a.toLowerCase())||(null===(t=e.trans_type)||void 0===t?void 0:t.toLowerCase())}));function F(e){var t=document.createElement("a"),n=function(e){var t,n=Object.keys(a.allData[0]);return console.log("keyss",n),t="",t+=n.join(","),t+="\n",e.forEach((function(e){var a=0;n.forEach((function(n){a>0&&(t+=","),t+=e[n],a++})),t+="\n",console.log("esults",t)})),t}(e);if(null!==n){n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,".concat(n)),t.setAttribute("href",encodeURI(n)),t.setAttribute("download","export.csv"),t.click()}}return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsxs)(y.a,{children:[Object(u.jsx)(T.a,{children:Object(u.jsx)(w.a,{tag:"h4",children:"Search Filter"})}),Object(u.jsx)(C.a,{children:Object(u.jsx)(k.a,{form:!0,className:"mt-1 mb-50",children:Object(u.jsx)(_.a,{lg:"4",md:"6",children:Object(u.jsxs)(R.a,{children:[Object(u.jsx)(S.a,{for:"select",children:"Select Table:"}),Object(u.jsx)(M.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:r,placeholder:"Search",onChange:function(t){return n=t.target.value,l(n),void e(Object(o.b)(a.allData,{page:p,perPage:q,q:n}));var n}})]})})})})]}),Object(u.jsxs)(y.a,{children:[Object(u.jsxs)(k.a,{className:"mx-0 mt-3",children:[Object(u.jsx)(_.a,{xl:"6",sm:"12",className:"d-flex align-items-center pl-3",children:Object(u.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(u.jsx)(S.a,{for:"rows-per-page",children:"Show"}),Object(u.jsxs)(P.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:q,onChange:function(t){var n=parseInt(t.currentTarget.value);e(Object(o.b)(a.allData,{page:p,perPage:n,q:r})),z(n)},style:{width:"10rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(u.jsx)("option",{value:"10",children:"10"}),Object(u.jsx)("option",{value:"25",children:"25"}),Object(u.jsx)("option",{value:"50",children:"50"})]}),Object(u.jsx)(S.a,{for:"rows-per-page",children:"Entries"})]})}),Object(u.jsx)(_.a,{xl:"6",sm:"12",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-center pr-lg-3 p-0 mt-lg-0 mt-1",children:Object(u.jsxs)(D.a,{children:[Object(u.jsxs)(E.a,{className:"mr-lg-0 mr-5",color:"secondary",caret:!0,outline:!0,children:[Object(u.jsx)(g.a,{size:15}),Object(u.jsx)("span",{className:"align-middle ml-lg-50",children:"Download Table"})]}),Object(u.jsxs)(L.a,{right:!0,children:[Object(u.jsxs)(A.a,{className:"w-100",onClick:function(){return F(a.allData)},children:[Object(u.jsx)(h.a,{size:15}),Object(u.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]}),Object(u.jsxs)(A.a,{className:"w-100",onClick:function(){return function(){var e=new W.default({orientation:"landscape"});e.autoTable({styles:{halign:"center"},head:[["User","Email","Balance","Naira Wallet","Status"]]}),a.allData.map((function(a){e.autoTable({styles:{halign:"left"},columnStyles:{0:{cellWidth:40},1:{cellWidth:70},2:{cellWidth:70},3:{cellWidth:60},4:{cellWidth:30}},body:[[a.names,a.email,a.balance,a.naira_wallet,a.status]]})})),e.save("export.pdf")}()},children:[Object(u.jsx)(h.a,{size:15}),Object(u.jsx)("span",{className:"align-middle ml-50",children:"PDF"})]}),Object(u.jsxs)(A.a,{className:"w-100",onClick:function(){return printOrder(G)},children:[Object(u.jsx)(v.a,{size:15}),Object(u.jsx)("span",{className:"align-middle ml-50",children:"Print"})]})]})]})})]}),Object(u.jsx)(N.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:j,sortIcon:Object(u.jsx)(x.a,{}),className:"react-dataTable",paginationComponent:function(){var t=Math.ceil(G.length/q);return Object(u.jsx)(f.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==p?p-1:0,onPageChange:function(t){return function(t){e(Object(o.b)(a.allData,{page:t.selected+1,perPage:q,q:r})),b(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={q:r},t=Object.keys(e).some((function(a){return e[a].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,q)}()})]})]})};t(539),a.default=function(){return Object(u.jsx)("div",{className:"app-user-list",children:Object(u.jsx)(q,{})})}},496:function(e,a,t){"use strict";var n=t(14),c=t(15),s=t(1),r=t.n(s),l=t(2),i=t.n(l),o=t(27),d=t.n(o),u=t(80),p={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},j=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,l=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(u.mapToCssModules)(d()(a,"card-body"),t);return r.a.createElement(l,Object(n.a)({},i,{className:o,ref:s}))};j.propTypes=p,j.defaultProps={tag:"div"},a.a=j},498:function(e,a,t){"use strict";var n=t(14),c=t(15),s=t(1),r=t.n(s),l=t(2),i=t.n(l),o=t(27),d=t.n(o),u=t(80),p={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},j=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(u.mapToCssModules)(d()(a,"card-title"),t);return r.a.createElement(s,Object(n.a)({},l,{className:i}))};j.propTypes=p,j.defaultProps={tag:"div"},a.a=j},499:function(e,a,t){"use strict";var n=t(14),c=t(15),s=t(1),r=t.n(s),l=t(2),i=t.n(l),o=t(27),d=t.n(o),u=t(80),p={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},j=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(u.mapToCssModules)(d()(a,"card-header"),t);return r.a.createElement(s,Object(n.a)({},l,{className:i}))};j.propTypes=p,j.defaultProps={tag:"div"},a.a=j},539:function(e,a,t){},633:function(e,a,t){},775:function(e,a,t){"use strict";var n=t(777);a.__esModule=!0,a.default=void 0;var c=n(t(801)),s=n(t(806)),r=n(t(1)),l=n(t(2)),i=n(t(27)),o=t(796),d={children:l.default.node,row:l.default.bool,check:l.default.bool,inline:l.default.bool,disabled:l.default.bool,tag:o.tagPropType,className:l.default.string,cssModule:l.default.object},u=function(e){var a=e.className,t=e.cssModule,n=e.row,l=e.disabled,d=e.check,u=e.inline,p=e.tag,j=(0,s.default)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=(0,o.mapToCssModules)((0,i.default)(a,!!n&&"row",d?"form-check":"form-group",!(!d||!u)&&"form-check-inline",!(!d||!l)&&"disabled"),t);return"fieldset"===p&&(j.disabled=l),r.default.createElement(p,(0,c.default)({},j,{className:m}))};u.propTypes=d,u.defaultProps={tag:"div"};var p=u;a.default=p},936:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return o}));var n=t(520),c=t.n(n),s=t(522),r=t(518),l=function(){return function(){var e=Object(s.a)(c.a.mark((function e(a){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.a)({url:"/admin/users/transactions/all",method:"POST"},a);case 2:if(!((t=e.sent)&&t.data.data&&t.data.success)){e.next=8;break}return e.next=6,a({type:"GET_ALL_TRANSACTIONS_DATA",data:t.data.data});case 6:e.next=10;break;case 8:console.log(t),Object(r.l)("Oops!","Something went wrong.","error");case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},i=function(e,a){return function(){var t=Object(s.a)(c.a.mark((function t(n){var s,l,i,o,d,u,p,j;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=a.q,l=void 0===s?"":s,i=a.perPage,o=void 0===i?10:i,d=a.page,u=void 0===d?1:d,p=null===l||void 0===l?void 0:l.toLowerCase(),j=null===e||void 0===e?void 0:e.filter((function(e){var a,t,n,c;return(null===e||void 0===e||null===(a=e.trans_id)||void 0===a||null===(t=a.toLowerCase())||void 0===t?void 0:t.includes(p))||(null===e||void 0===e||null===(n=e.trans_type)||void 0===n||null===(c=n.toLowerCase())||void 0===c?void 0:c.includes(p))})),n({type:"GET_FILTERED_TRANSACTION_DATA",data:Object(r.i)(j,o,u),totalPages:j.length,params:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},o=function(e,a){return function(){var t=Object(s.a)(c.a.mark((function t(n){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=e.find((function(e){return e.trans_id===a})),n({type:"GET_TRANSACTION",selectedTransaction:s});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=166.56139fb2.chunk.js.map