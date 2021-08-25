(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[144],{2239:function(e,t,a){"use strict";a.r(t);var n=a(28),r=a(1),s=a(474),c=a(81),l=a(487),o=a(895),i=a(124),u=a(506),d=a.n(u),p=a(679),m=(a(1121),a(842),a(6)),f=function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar?Object(m.jsx)(l.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"}):Object(m.jsx)(l.a,{color:t||"primary",className:"mr-1",content:"".concat(e.escrow_id)||"John Doe",initials:!0})},b={pending:"light-warning",contested:"light-danger",completed:"light-success"},j=[{name:"Escrow Id",minWidth:"180px",selector:"escrow_id",sortable:!0,cell:function(e){return Object(m.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[f(e),Object(m.jsx)("div",{className:"d-flex flex-column",children:Object(m.jsx)(s.b,{to:"/appia/escrow/view/".concat(e.escrow_id),className:"user-name text-truncate mb-0",onClick:function(){return i.a.dispatch(Object(o.d)(i.a.getState().appiaEscrow.allData,e.escrow_id))},children:Object(m.jsx)("span",{className:"font-weight-bold",children:e.escrow_id})})})]})}},{name:"Sender",minWidth:"200px",selector:"sender",sortable:!0,cell:function(e){return e.sender.names}},{name:"Receiver",minWidth:"200px",selector:"receiver",sortable:!0,cell:function(e){return e.receiver.names}},{name:"Transaction Name",minWidth:"220px",selector:"subject",sortable:!0,cell:function(e){return e.subject}},{name:"Transaction Amount",minWidth:"220px",selector:"amount",sortable:!0,cell:function(e){var t;return Object(m.jsx)("span",{className:"text-capitalize",children:null===e||void 0===e||null===(t=e.amount)||void 0===t?void 0:t.toLocaleString("en-US",{style:"currency",currency:"NGN"})})}},{name:"Transaction Status",minWidth:"220px",selector:"status",sortable:!0,cell:function(e){return Object(m.jsx)(p.a,{className:"text-capitalize",color:b[e.status],pill:!0,children:e.status})}},{name:"Date",minWidth:"200px",selector:"updated_at",sortable:!0,cell:function(e){return d()(e.updated_at).format("lll")}}],h=a(646),v=a(545),g=a.n(v),O=a(865),x=a(1131),w=a(809),y=a(857),N=a(585),S=a.n(N),C=a(500),k=a(493),T=a(489),E=a(486),P=a(482),_=a(490),M=a(491),L=a(517),R=a(513),W=a(677),D=a(503),z=a(690),A=a(681),q=a(682),G=(a(650),a(530),a(771)),I=(a(785),a(675)),U=a.n(I),J=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.appiaEscrow})),a=Object(r.useState)(""),s=Object(n.a)(a,2),l=s[0],i=s[1],u=Object(r.useState)(1),d=Object(n.a)(u,2),p=d[0],f=d[1],b=Object(r.useState)(10),v=Object(n.a)(b,2),N=v[0],I=v[1],J=Object(r.useState)({value:"",label:"Select Role",number:0}),B=Object(n.a)(J,2),F=B[0],H=B[1],V=Object(r.useState)({value:"",label:"Select Status",number:0}),K=Object(n.a)(V,2),Q=K[0],X=K[1];Object(r.useEffect)((function(){e(Object(o.b)()),e(Object(o.e)(t.allData,{page:p,perPage:N,role:F.value,status:Q.value,q:l}))}),[e]);var Y=t.allData.filter((function(e){return e.escrow_id.toLowerCase()||e.receiver.names.toLowerCase()||e.sender.names.toLowerCase()}));function Z(e){var a=document.createElement("a"),n=function(e){var a,n=Object.keys(t.allData[0]);return console.log("keyss",n),a="",a+=n.join(","),a+="\n",e.forEach((function(e){var t=0;n.forEach((function(n){t>0&&(a+=","),a+=e[n],t++})),a+="\n",console.log("esults",a)})),a}(e);if(null!==n){n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,".concat(n)),a.setAttribute("href",encodeURI(n)),a.setAttribute("download","export.csv"),a.click()}}return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsxs)(k.a,{children:[Object(m.jsx)(T.a,{children:Object(m.jsx)(E.a,{tag:"h4",children:"Search Filter"})}),Object(m.jsx)(P.a,{children:Object(m.jsxs)(_.a,{form:!0,className:"mt-1 mb-50",children:[Object(m.jsx)(M.a,{lg:"4",md:"6",children:Object(m.jsxs)(U.a,{children:[Object(m.jsx)(L.a,{for:"select",children:"Select Role:"}),Object(m.jsx)(h.a,{theme:C.j,isClearable:!1,className:"react-select",classNamePrefix:"select",id:"select",options:[{value:"",label:"Select Role"},{value:"Sender",label:"Sender"},{value:"Receiver",label:"Receiver"}],value:F,onChange:function(a){H(a),e(Object(o.e)(t.allData,{page:p,perPage:N,role:a.value,status:Q.value,q:l}))}})]})}),Object(m.jsx)(M.a,{lg:"4",md:"6",children:Object(m.jsxs)(U.a,{children:[Object(m.jsx)(L.a,{for:"select",children:"Select Status:"}),Object(m.jsx)(h.a,{theme:C.j,isClearable:!1,className:"react-select",classNamePrefix:"select",id:"select",options:[{value:"",label:"Select Status",number:0},{value:"Pending",label:"Pending",number:1},{value:"Contested",label:"Contested",number:2},{value:"Completed",label:"Completed",number:3}],value:Q,onChange:function(a){X(a),e(Object(o.e)(t.allData,{page:p,perPage:N,status:a.value,q:l}))}})]})}),Object(m.jsxs)(M.a,{md:"4",className:"d-flex mt-2",children:[Object(m.jsx)(L.a,{className:"mb-0 mt-1",for:"search-invoice",children:"Search:"}),Object(m.jsx)(R.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:l,placeholder:"Names & id Search",onChange:function(a){return n=a.target.value,i(n),void e(Object(o.e)(t.allData,{page:p,perPage:N,role:F.value,status:Q.value,q:n}));var n}})]})]})})]}),Object(m.jsxs)(k.a,{children:[Object(m.jsxs)(_.a,{className:"mx-0 mt-3",children:[Object(m.jsx)(M.a,{xl:"6",sm:"12",className:"d-flex align-items-center pl-3",children:Object(m.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(m.jsx)(L.a,{for:"rows-per-page",children:"Show"}),Object(m.jsxs)(W.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:N,onChange:function(a){var n=parseInt(a.currentTarget.value);e(Object(o.e)(t.allData,{page:p,perPage:n,role:F.value,status:Q.value,q:l})),I(n)},style:{width:"10rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(m.jsx)("option",{value:"10",children:"10"}),Object(m.jsx)("option",{value:"25",children:"25"}),Object(m.jsx)("option",{value:"50",children:"50"})]}),Object(m.jsx)(L.a,{for:"rows-per-page",children:"Entries"})]})}),Object(m.jsx)(M.a,{xl:"6",sm:"12",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-center pr-lg-3 p-0 mt-lg-0 mt-1",children:Object(m.jsxs)(D.a,{children:[Object(m.jsxs)(z.a,{className:"mr-lg-0 mr-5",color:"secondary",caret:!0,outline:!0,children:[Object(m.jsx)(O.a,{size:15}),Object(m.jsx)("span",{className:"align-middle ml-lg-50",children:"Download Table"})]}),Object(m.jsxs)(A.a,{right:!0,children:[Object(m.jsxs)(q.a,{className:"w-100",onClick:function(){return Z(t.allData)},children:[Object(m.jsx)(x.a,{size:15}),Object(m.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]}),Object(m.jsxs)(q.a,{className:"w-100",onClick:function(){return function(){var e=new G.default({orientation:"landscape"});e.autoTable({styles:{halign:"center"},head:[["User","Email","Balance","Naira Wallet","Status"]]}),t.allData.map((function(t){e.autoTable({styles:{halign:"left"},columnStyles:{0:{cellWidth:40},1:{cellWidth:70},2:{cellWidth:70},3:{cellWidth:60},4:{cellWidth:30}},body:[[t.names,t.email,t.balance,t.naira_wallet,t.status]]})})),e.save("export.pdf")}()},children:[Object(m.jsx)(x.a,{size:15}),Object(m.jsx)("span",{className:"align-middle ml-50",children:"PDF"})]}),Object(m.jsxs)(q.a,{className:"w-100",onClick:function(){return printOrder(Y)},children:[Object(m.jsx)(w.a,{size:15}),Object(m.jsx)("span",{className:"align-middle ml-50",children:"Print"})]})]})]})})]}),Object(m.jsx)(S.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:j,sortIcon:Object(m.jsx)(y.a,{}),className:"react-dataTable",paginationComponent:function(){var a=Math.ceil(Y.length/N);return Object(m.jsx)(g.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==p?p-1:0,onPageChange:function(a){return function(a){e(Object(o.e)(t.allData,{page:a.selected+1,perPage:N,role:F.value,status:Q.value,q:l})),f(a.selected+1)}(a)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={role:F.value,status:Q.value,q:l},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,N)}()})]})]})};a(518),t.default=function(){return Object(m.jsx)("div",{className:"app-user-list",children:Object(m.jsx)(J,{})})}},482:function(e,t,a){"use strict";var n=a(14),r=a(15),s=a(1),c=a.n(s),l=a(2),o=a.n(l),i=a(27),u=a.n(i),d=a(80),p={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},m=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,l=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-body"),a);return c.a.createElement(l,Object(n.a)({},o,{className:i,ref:s}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},486:function(e,t,a){"use strict";var n=a(14),r=a(15),s=a(1),c=a.n(s),l=a(2),o=a.n(l),i=a(27),u=a.n(i),d=a(80),p={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),o=Object(d.mapToCssModules)(u()(t,"card-title"),a);return c.a.createElement(s,Object(n.a)({},l,{className:o}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},489:function(e,t,a){"use strict";var n=a(14),r=a(15),s=a(1),c=a.n(s),l=a(2),o=a.n(l),i=a(27),u=a.n(i),d=a(80),p={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),o=Object(d.mapToCssModules)(u()(t,"card-header"),a);return c.a.createElement(s,Object(n.a)({},l,{className:o}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},518:function(e,t,a){},530:function(e,t,a){},675:function(e,t,a){"use strict";var n=a(685);t.__esModule=!0,t.default=void 0;var r=n(a(783)),s=n(a(788)),c=n(a(1)),l=n(a(2)),o=n(a(27)),i=a(778),u={children:l.default.node,row:l.default.bool,check:l.default.bool,inline:l.default.bool,disabled:l.default.bool,tag:i.tagPropType,className:l.default.string,cssModule:l.default.object},d=function(e){var t=e.className,a=e.cssModule,n=e.row,l=e.disabled,u=e.check,d=e.inline,p=e.tag,m=(0,s.default)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=(0,i.mapToCssModules)((0,o.default)(t,!!n&&"row",u?"form-check":"form-group",!(!u||!d)&&"form-check-inline",!(!u||!l)&&"disabled"),a);return"fieldset"===p&&(m.disabled=l),c.default.createElement(p,(0,r.default)({},m,{className:f}))};d.propTypes=u,d.defaultProps={tag:"div"};var p=d;t.default=p},809:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(2),c=a.n(s);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,s=e.size,c=void 0===s?24:s,i=o(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),r.a.createElement("polyline",{points:"6 9 6 2 18 2 18 9"}),r.a.createElement("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),r.a.createElement("rect",{x:"6",y:"14",width:"12",height:"8"}))}));i.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},i.displayName="Printer",t.a=i},842:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(2),c=a.n(s);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,s=e.size,c=void 0===s?24:s,i=o(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),r.a.createElement("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),r.a.createElement("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),r.a.createElement("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}))}));i.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},i.displayName="Database",t.a=i},895:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return u})),a.d(t,"f",(function(){return d})),a.d(t,"a",(function(){return p}));var n=a(511),r=a.n(n),s=a(512),c=(a(82),a(500)),l=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)({url:"/admin/escrows",method:"GET"},t);case 2:if(!((a=e.sent)&&a.data.data&&a.data.success)){e.next=8;break}return e.next=6,t({type:"GET_ALL_ESCROW",data:a.data.data});case 6:e.next=10;break;case 8:console.log(a),Object(c.l)("Oops!","Something went wrong.","error");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},o=function(e,t){return function(){var a=Object(s.a)(r.a.mark((function a(n){var s,l,o,i,u,d,p,m,f,b,j,h;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:s=t.q,l=void 0===s?"":s,o=t.perPage,i=void 0===o?10:o,u=t.page,d=void 0===u?1:u,p=t.role,m=void 0===p?null:p,f=t.status,b=void 0===f?null:f,j=l.toLowerCase(),h=e.filter((function(e){return(e.escrow_id.toLowerCase().includes(j)||e.receiver.names.toLowerCase().includes(j)||e.sender.names.toLowerCase().includes(j))&&e.role===(m||e.role)&&e.status===(b||e.status)})),n({type:"GET_DATA",data:Object(c.i)(h,i,d),totalPages:h.length,params:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},i=function(e,t){return function(){var a=Object(s.a)(r.a.mark((function a(n){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:s=e.find((function(e){return e.escrow_id===t})),n({type:"GET_ESCROW",selectedEscrow:s});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.a)({url:"/admin/escrows/".concat(e),method:"GET"},a);case 2:if(!((n=t.sent)&&n.data.data&&n.data.success)){t.next=8;break}return t.next=6,a({type:"GET_USER_ESCROWS_TRANSACTIONS",data:n.data.data});case 6:t.next=10;break;case 8:console.log(n),Object(c.l)("Oops!","Somthing went wrong with your network.","error");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e,t){return function(){var a=Object(s.a)(r.a.mark((function a(n){var s,l,o,i,u,d,p,m,f;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=t.q,l=void 0===s?"":s,o=t.perPage,i=void 0===o?10:o,u=t.page,d=void 0===u?1:u,p=t.status,void 0===p?null:p,m=l.toLowerCase(),f=null===e||void 0===e?void 0:e.filter((function(e){var t=!1;return(e.trans_id||"").toLowerCase().includes(m)&&(t=!0),((null===e||void 0===e?void 0:e.receiver.names)||"").toLowerCase().includes(m)&&(t=!0),t})).sort(Object(c.k)("trans_id")).reverse(),a.next=5,n({type:"GET_USER_ESCROW_TRANSACTIONS",data:Object(c.i)(f,i,d),totalPages:null===f||void 0===f?void 0:f.length,params:t});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(e){var t=e.escrow_id,a=e.status,n=e.resolution;return function(){var e=Object(s.a)(r.a.mark((function e(s){var o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=JSON.stringify({escrow_id:t,status:a,resolution:n}),e.next=3,Object(c.a)({url:"/admin/escrow/resolve",method:"POST",body:o},s);case 3:i=e.sent,console.log({response:i}),i&&i.data.success?(Object(c.l)("Good!","".concat(i.data.message,"."),"success"),s(l())):(console.log(i),Object(c.l)("Oops!","Somthing went wrong with your network.","error"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=144.c652b31a.chunk.js.map