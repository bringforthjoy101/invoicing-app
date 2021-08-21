(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[155],{1241:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return o}));var n=t(511),r=t.n(n),c=t(512),s=t(500),l=function(){return function(){var e=Object(c.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)({url:"/admin/users/transactions/all",method:"POST"},a);case 2:if(!((t=e.sent)&&t.data.data&&t.data.success)){e.next=8;break}return e.next=6,a({type:"GET_ALL_TRANSACTIONS_DATA",data:t.data.data});case 6:e.next=10;break;case 8:console.log(t),Object(s.l)("Oops!","Something went wrong.","error");case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},i=function(e,a){return function(){var t=Object(c.a)(r.a.mark((function t(n){var c,l,i,o,u,d,p,m;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=a.q,l=void 0===c?"":c,i=a.perPage,o=void 0===i?100:i,u=a.page,d=void 0===u?1:u,p=null===l||void 0===l?void 0:l.toLowerCase(),m=null===e||void 0===e?void 0:e.filter((function(e){var a,t,n,r;return(null===e||void 0===e||null===(a=e.trans_id)||void 0===a||null===(t=a.toLowerCase())||void 0===t?void 0:t.includes(p))||(null===e||void 0===e||null===(n=e.trans_type)||void 0===n||null===(r=n.toLowerCase())||void 0===r?void 0:r.includes(p))})),n({type:"GET_FILTERED_TRANSACTION_DATA",data:Object(s.i)(m,o,d),totalPages:m.length,params:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},o=function(e){return function(){var a=Object(c.a)(r.a.mark((function a(t){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(s.a)({url:"/admin/users/transaction/".concat(e),method:"GET"},t);case 2:if(!((n=a.sent)&&n.data.data&&n.data.success)){a.next=8;break}return a.next=6,t({type:"GET_TRANSACTION",selectedTransaction:n.data.data});case 6:a.next=10;break;case 8:console.log(n),Object(s.l)("Oops!","Something went wrong.","error");case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},2234:function(e,a,t){"use strict";t.r(a);var n=t(28),r=t(1),c=t(474),s=t(487),l=t(506),i=t.n(l),o=t(6),u=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar?Object(o.jsx)(s.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"}):Object(o.jsx)(s.a,{color:a||"primary",className:"mr-1",content:"".concat(e.trans_id)||"John Doe",initials:!0})},d=[{name:"Transaction Id",minWidth:"297px",selector:"names",sortable:!0,cell:function(e){return Object(o.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[u(e),Object(o.jsx)("div",{className:"d-flex flex-column",children:Object(o.jsx)(c.b,{to:"/appia/transaction/view/".concat(e.trans_id),className:"user-name text-truncate mb-0",children:Object(o.jsx)("span",{className:"font-weight-bold",children:e.trans_id})})})]})}},{name:"Transaction Type",minWidth:"200px",selector:"trans_type",sortable:!0,cell:function(e){return e.trans_type}},{name:"Transaction Amount",minWidth:"250px",selector:"trans_amount",sortable:!0,cell:function(e){return Object(o.jsx)("span",{children:(e.trans_amount||0).toLocaleString("en-US",{style:"currency",currency:"NGN"})})}},{name:"Balance",minWidth:"150px",selector:"balance",sortable:!0,cell:function(e){var a;return Object(o.jsx)("span",{className:"text-capitalize",children:null===e||void 0===e||null===(a=e.balance)||void 0===a?void 0:a.toLocaleString("en-US",{style:"currency",currency:"NGN"})})}},{name:"Transaction Date",minWidth:"250px",selector:"trans_date",sortable:!0,cell:function(e){return i()(e.trans_date).format("lll")}}],p=t(1241),m=t(81),j=t(545),b=t.n(j),f=t(865),h=t(1131),g=t(809),v=t(857),O=t(585),x=t.n(O),y=(t(500),t(493)),N=t(489),w=t(486),T=t(482),k=t(490),C=t(491),P=t(517),S=t(513),_=t(677),E=t(503),M=t(690),L=t(681),D=t(682),A=(t(650),t(530),t(771)),W=(t(785),t(675)),I=t.n(W),R=function(){var e=Object(m.b)(),a=Object(m.c)((function(e){return e.appiaTransaction})),t=Object(r.useState)(""),c=Object(n.a)(t,2),s=c[0],l=c[1],i=Object(r.useState)(1),u=Object(n.a)(i,2),j=u[0],O=u[1],W=Object(r.useState)(10),R=Object(n.a)(W,2),z=R[0],q=R[1];Object(r.useEffect)((function(){e(Object(p.a)()),e(Object(p.b)(a.allData,{page:j,perPage:z,q:s}))}),[e]);var G=a.allData.filter((function(e){var a,t;return(null===(a=e.trans_id)||void 0===a?void 0:a.toLowerCase())||(null===(t=e.trans_type)||void 0===t?void 0:t.toLowerCase())}));function F(e){var t=document.createElement("a"),n=function(e){var t,n=Object.keys(a.allData[0]);return console.log("keyss",n),t="",t+=n.join(","),t+="\n",e.forEach((function(e){var a=0;n.forEach((function(n){a>0&&(t+=","),t+=e[n],a++})),t+="\n",console.log("esults",t)})),t}(e);if(null!==n){n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,".concat(n)),t.setAttribute("href",encodeURI(n)),t.setAttribute("download","export.csv"),t.click()}}return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsxs)(y.a,{children:[Object(o.jsx)(N.a,{children:Object(o.jsx)(w.a,{tag:"h4",children:"Search Filter"})}),Object(o.jsx)(T.a,{children:Object(o.jsx)(k.a,{form:!0,className:"mt-1 mb-50",children:Object(o.jsx)(C.a,{lg:"4",md:"6",children:Object(o.jsxs)(I.a,{children:[Object(o.jsx)(P.a,{for:"select",children:"Select Table:"}),Object(o.jsx)(S.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:s,placeholder:"Search",onChange:function(t){return n=t.target.value,l(n),void e(Object(p.b)(a.allData,{page:j,perPage:z,q:n}));var n}})]})})})})]}),Object(o.jsxs)(y.a,{children:[Object(o.jsxs)(k.a,{className:"mx-0 mt-3",children:[Object(o.jsx)(C.a,{xl:"6",sm:"12",className:"d-flex align-items-center pl-3",children:Object(o.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(o.jsx)(P.a,{for:"rows-per-page",children:"Show"}),Object(o.jsxs)(_.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:z,onChange:function(t){var n=parseInt(t.currentTarget.value);e(Object(p.b)(a.allData,{page:j,perPage:n,q:s})),q(n)},style:{width:"10rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"25",children:"25"}),Object(o.jsx)("option",{value:"50",children:"50"})]}),Object(o.jsx)(P.a,{for:"rows-per-page",children:"Entries"})]})}),Object(o.jsx)(C.a,{xl:"6",sm:"12",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-center pr-lg-3 p-0 mt-lg-0 mt-1",children:Object(o.jsxs)(E.a,{children:[Object(o.jsxs)(M.a,{className:"mr-lg-0 mr-5",color:"secondary",caret:!0,outline:!0,children:[Object(o.jsx)(f.a,{size:15}),Object(o.jsx)("span",{className:"align-middle ml-lg-50",children:"Download Table"})]}),Object(o.jsxs)(L.a,{right:!0,children:[Object(o.jsxs)(D.a,{className:"w-100",onClick:function(){return F(a.allData)},children:[Object(o.jsx)(h.a,{size:15}),Object(o.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]}),Object(o.jsxs)(D.a,{className:"w-100",onClick:function(){return function(){var e=new A.default({orientation:"landscape"});e.autoTable({styles:{halign:"center"},head:[["User","Email","Balance","Naira Wallet","Status"]]}),a.allData.map((function(a){e.autoTable({styles:{halign:"left"},columnStyles:{0:{cellWidth:40},1:{cellWidth:70},2:{cellWidth:70},3:{cellWidth:60},4:{cellWidth:30}},body:[[a.names,a.email,a.balance,a.naira_wallet,a.status]]})})),e.save("export.pdf")}()},children:[Object(o.jsx)(h.a,{size:15}),Object(o.jsx)("span",{className:"align-middle ml-50",children:"PDF"})]}),Object(o.jsxs)(D.a,{className:"w-100",onClick:function(){return printOrder(G)},children:[Object(o.jsx)(g.a,{size:15}),Object(o.jsx)("span",{className:"align-middle ml-50",children:"Print"})]})]})]})})]}),Object(o.jsx)(x.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:d,sortIcon:Object(o.jsx)(v.a,{}),className:"react-dataTable",paginationComponent:function(){var t=Math.ceil(G.length/z);return Object(o.jsx)(b.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==j?j-1:0,onPageChange:function(t){return function(t){e(Object(p.b)(a.allData,{page:t.selected+1,perPage:z,q:s})),O(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={q:s},t=Object.keys(e).some((function(a){return e[a].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,z)}()})]})]})};t(518),a.default=function(){return Object(o.jsx)("div",{className:"app-user-list",children:Object(o.jsx)(R,{})})}},482:function(e,a,t){"use strict";var n=t(14),r=t(15),c=t(1),s=t.n(c),l=t(2),i=t.n(l),o=t(27),u=t.n(o),d=t(80),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,l=e.tag,i=Object(r.a)(e,["className","cssModule","innerRef","tag"]),o=Object(d.mapToCssModules)(u()(a,"card-body"),t);return s.a.createElement(l,Object(n.a)({},i,{className:o,ref:c}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},486:function(e,a,t){"use strict";var n=t(14),r=t(15),c=t(1),s=t.n(c),l=t(2),i=t.n(l),o=t(27),u=t.n(o),d=t(80),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-title"),t);return s.a.createElement(c,Object(n.a)({},l,{className:i}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},489:function(e,a,t){"use strict";var n=t(14),r=t(15),c=t(1),s=t.n(c),l=t(2),i=t.n(l),o=t(27),u=t.n(o),d=t(80),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-header"),t);return s.a.createElement(c,Object(n.a)({},l,{className:i}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},518:function(e,a,t){},530:function(e,a,t){},675:function(e,a,t){"use strict";var n=t(685);a.__esModule=!0,a.default=void 0;var r=n(t(783)),c=n(t(788)),s=n(t(1)),l=n(t(2)),i=n(t(27)),o=t(778),u={children:l.default.node,row:l.default.bool,check:l.default.bool,inline:l.default.bool,disabled:l.default.bool,tag:o.tagPropType,className:l.default.string,cssModule:l.default.object},d=function(e){var a=e.className,t=e.cssModule,n=e.row,l=e.disabled,u=e.check,d=e.inline,p=e.tag,m=(0,c.default)(e,["className","cssModule","row","disabled","check","inline","tag"]),j=(0,o.mapToCssModules)((0,i.default)(a,!!n&&"row",u?"form-check":"form-group",!(!u||!d)&&"form-check-inline",!(!u||!l)&&"disabled"),t);return"fieldset"===p&&(m.disabled=l),s.default.createElement(p,(0,r.default)({},m,{className:j}))};d.propTypes=u,d.defaultProps={tag:"div"};var p=d;a.default=p},809:function(e,a,t){"use strict";var n=t(1),r=t.n(n),c=t(2),s=t.n(c);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,c=e.size,s=void 0===c?24:c,o=i(e,["color","size"]);return r.a.createElement("svg",l({ref:a,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("polyline",{points:"6 9 6 2 18 2 18 9"}),r.a.createElement("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),r.a.createElement("rect",{x:"6",y:"14",width:"12",height:"8"}))}));o.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},o.displayName="Printer",a.a=o}}]);
//# sourceMappingURL=155.def8330c.chunk.js.map