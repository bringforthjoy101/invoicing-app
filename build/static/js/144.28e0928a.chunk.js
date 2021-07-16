(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[144],{2240:function(e,a,t){"use strict";t.r(a);var n=t(28),s=t(1),c=t(473),r=t(81),l=t(477),i=t(618),o=t(124),u=t(501),d=t.n(u),m=t(1005),j=t(992),b=t(1337),p=t(996),f=t(997),h=t(1007),g=t(1060),O=t(1102),x=t(1072),v=t(1022),N=t(1132),w=t(6),y=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar?Object(w.jsx)(l.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"}):Object(w.jsx)(l.a,{color:a||"primary",className:"mr-1",content:"".concat(e.user_id)||"John Doe",initials:!0})},C={Pending:"light-warning",Contested:"light-danger",Completed:"light-success"},S=(o.a.getState().users,[{name:"User Id",minWidth:"180px",selector:"user_id",sortable:!0,cell:function(e){return Object(w.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[y(e),Object(w.jsx)("div",{className:"d-flex flex-column",children:Object(w.jsx)(c.b,{to:"/appia/escrow/view/".concat(e.user_id),className:"user-name text-truncate mb-0",onClick:function(){return o.a.dispatch(Object(i.d)(o.a.getState().appiaEscrow.allData,e.id))},children:Object(w.jsx)("span",{className:"font-weight-bold",children:e.user_id})})})]})}},{name:"Code",minWidth:"150px",selector:"code",sortable:!0,cell:function(e){return e.code}},{name:"Transaction Amount",minWidth:"250px",selector:"trans_amount",sortable:!0,cell:function(e){var a;return Object(w.jsx)("span",{className:"text-capitalize",children:null===e||void 0===e||null===(a=e.trans_amount)||void 0===a?void 0:a.toLocaleString("en-US",{style:"currency",currency:"NGN"})})}},{name:"Transaction Name",minWidth:"200px",selector:"trans_name",sortable:!0,cell:function(e){return e.trans_name}},{name:"Role",minWidth:"100px",selector:"role",sortable:!0,cell:function(e){return function(e){var a={receiver:{class:"text-primary",icon:h.a},sender:{class:"text-success",icon:g.a}},t=a[e.role]?a[e.role].icon:h.a;return Object(w.jsxs)("span",{className:"text-truncate text-capitalize align-middle",children:[Object(w.jsx)(t,{size:18,className:"".concat(a[e.role]?a[e.role].class:"text-primary"," mr-50")}),e.role]})}(e)}},{name:"Status",minWidth:"100px",selector:"status",sortable:!0,cell:function(e){return Object(w.jsx)(m.a,{className:"text-capitalize",color:C[e.status],pill:!0,children:e.status})}},{name:"Date",minWidth:"200px",selector:"date_created",sortable:!0,cell:function(e){return d()(e.date_created).format("lll")}},{name:"Actions",minWidth:"100px",selector:"fullName",sortable:!0,cell:function(e){return Object(w.jsxs)(j.a,{children:[Object(w.jsx)(b.a,{tag:"div",className:"btn btn-sm",children:Object(w.jsx)(O.a,{size:14,className:"cursor-pointer"})}),Object(w.jsxs)(p.a,{right:!0,children:[Object(w.jsxs)(f.a,{tag:c.b,to:"/appia/escrow/view/".concat(e.user_id),className:"w-100",onClick:function(){return o.a.dispatch(Object(i.d)(o.a.getState().appiaEscrow.allData,e.user_id))},children:[Object(w.jsx)(x.a,{size:14,className:"mr-50"}),Object(w.jsx)("span",{className:"align-middle",children:"Details"})]}),Object(w.jsxs)(f.a,{tag:c.b,to:"/appia/escrow/edit/".concat(e.user_id),className:"w-100",onClick:function(){return o.a.dispatch(Object(i.d)(e.user_id))},children:[Object(w.jsx)(v.a,{size:14,className:"mr-50"}),Object(w.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(w.jsxs)(f.a,{className:"w-100",children:[Object(w.jsx)(N.a,{size:14,className:"mr-50"}),Object(w.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})}}]),k=t(514),_=t(504),T=t.n(_),P=t(1120),E=t(1113),D=t(1040),R=t(512),W=t.n(R),L=t(483),M=t(481),z=t(488),A=t(479),q=t(478),G=t(480),I=t(482),U=t(495),J=t(1e3),F=t(983),H=t(489),B=(t(516),t(502),t(600)),V=(t(642),t(534)),K=t.n(V),Q=function(){var e=Object(r.b)(),a=Object(r.c)((function(e){return e.appiaEscrow})),t=Object(s.useState)(""),c=Object(n.a)(t,2),l=c[0],o=c[1],u=Object(s.useState)(1),d=Object(n.a)(u,2),m=d[0],j=d[1],h=Object(s.useState)(10),g=Object(n.a)(h,2),O=g[0],v=g[1],N=Object(s.useState)({value:"",label:"Select Role",number:0}),y=Object(n.a)(N,2),C=y[0],_=y[1],R=Object(s.useState)({value:"",label:"Select Status",number:0}),V=Object(n.a)(R,2),Q=V[0],X=V[1];Object(s.useEffect)((function(){e(Object(i.b)()),e(Object(i.e)(a.allData,{page:m,perPage:O,role:C.value,status:Q.value,q:l}))}),[e]);var Y=a.allData.filter((function(e){return e.user_id.toLowerCase()}));function Z(e){var t=document.createElement("a"),n=function(e){var t,n=Object.keys(a.allData[0]);return console.log("keyss",n),t="",t+=n.join(","),t+="\n",e.forEach((function(e){var a=0;n.forEach((function(n){a>0&&(t+=","),t+=e[n],a++})),t+="\n",console.log("esults",t)})),t}(e);if(null!==n){n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,".concat(n)),t.setAttribute("href",encodeURI(n)),t.setAttribute("download","export.csv"),t.click()}}return Object(w.jsxs)(s.Fragment,{children:[Object(w.jsxs)(M.a,{children:[Object(w.jsx)(z.a,{children:Object(w.jsx)(A.a,{tag:"h4",children:"Search Filter"})}),Object(w.jsx)(q.a,{children:Object(w.jsxs)(G.a,{form:!0,className:"mt-1 mb-50",children:[Object(w.jsx)(I.a,{lg:"4",md:"6",children:Object(w.jsxs)(K.a,{children:[Object(w.jsx)(U.a,{for:"select",children:"Select Role:"}),Object(w.jsx)(k.a,{theme:L.j,isClearable:!1,className:"react-select",classNamePrefix:"select",id:"select",options:[{value:"",label:"Select Role"},{value:"Sender",label:"Sender"},{value:"Receiver",label:"Receiver"}],value:C,onChange:function(t){_(t),e(Object(i.e)(a.allData,{page:m,perPage:O,role:t.value,status:Q.value,q:l}))}})]})}),Object(w.jsx)(I.a,{lg:"4",md:"6",children:Object(w.jsxs)(K.a,{children:[Object(w.jsx)(U.a,{for:"select",children:"Select Status:"}),Object(w.jsx)(k.a,{theme:L.j,isClearable:!1,className:"react-select",classNamePrefix:"select",id:"select",options:[{value:"",label:"Select Status",number:0},{value:"Pending",label:"Pending",number:1},{value:"Contested",label:"Contested",number:2},{value:"Completed",label:"Completed",number:3}],value:Q,onChange:function(t){X(t),e(Object(i.e)(a.allData,{page:m,perPage:O,status:t.value,q:l}))}})]})}),Object(w.jsxs)(I.a,{md:"4",className:"d-flex mt-2",children:[Object(w.jsx)(U.a,{className:"mb-0 mt-1",for:"search-invoice",children:"Search:"}),Object(w.jsx)(J.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:l,placeholder:"User Id",onChange:function(t){return n=t.target.value,o(n),void e(Object(i.e)(a.allData,{page:m,perPage:O,role:C.value,status:Q.value,q:n}));var n}})]})]})})]}),Object(w.jsxs)(M.a,{children:[Object(w.jsxs)(G.a,{className:"mx-0 mt-3",children:[Object(w.jsx)(I.a,{xl:"6",sm:"12",className:"d-flex align-items-center pl-3",children:Object(w.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(w.jsx)(U.a,{for:"rows-per-page",children:"Show"}),Object(w.jsxs)(F.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:O,onChange:function(t){var n=parseInt(t.currentTarget.value);e(Object(i.e)(a.allData,{page:m,perPage:n,role:C.value,status:Q.value,q:l})),v(n)},style:{width:"10rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(w.jsx)("option",{value:"10",children:"10"}),Object(w.jsx)("option",{value:"25",children:"25"}),Object(w.jsx)("option",{value:"50",children:"50"})]}),Object(w.jsx)(U.a,{for:"rows-per-page",children:"Entries"})]})}),Object(w.jsx)(I.a,{xl:"6",sm:"12",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-center pr-lg-3 p-0 mt-lg-0 mt-1",children:Object(w.jsxs)(H.a,{children:[Object(w.jsxs)(b.a,{className:"mr-lg-0 mr-5",color:"secondary",caret:!0,outline:!0,children:[Object(w.jsx)(P.a,{size:15}),Object(w.jsx)("span",{className:"align-middle ml-lg-50",children:"Download Table"})]}),Object(w.jsxs)(p.a,{right:!0,children:[Object(w.jsxs)(f.a,{className:"w-100",onClick:function(){return Z(a.allData)},children:[Object(w.jsx)(x.a,{size:15}),Object(w.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]}),Object(w.jsxs)(f.a,{className:"w-100",onClick:function(){return function(){var e=new B.default({orientation:"landscape"});e.autoTable({styles:{halign:"center"},head:[["User","Email","Balance","Naira Wallet","Status"]]}),a.allData.map((function(a){e.autoTable({styles:{halign:"left"},columnStyles:{0:{cellWidth:40},1:{cellWidth:70},2:{cellWidth:70},3:{cellWidth:60},4:{cellWidth:30}},body:[[a.names,a.email,a.balance,a.naira_wallet,a.status]]})})),e.save("export.pdf")}()},children:[Object(w.jsx)(x.a,{size:15}),Object(w.jsx)("span",{className:"align-middle ml-50",children:"PDF"})]}),Object(w.jsxs)(f.a,{className:"w-100",onClick:function(){return printOrder(Y)},children:[Object(w.jsx)(E.a,{size:15}),Object(w.jsx)("span",{className:"align-middle ml-50",children:"Print"})]})]})]})})]}),Object(w.jsx)(W.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:S,sortIcon:Object(w.jsx)(D.a,{}),className:"react-dataTable",paginationComponent:function(){var t=Math.ceil(Y.length/O);return Object(w.jsx)(T.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==m?m-1:0,onPageChange:function(t){return function(t){e(Object(i.e)(a.allData,{page:t.selected+1,perPage:O,role:C.value,status:Q.value,q:l})),j(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={role:C.value,status:Q.value,q:l},t=Object.keys(e).some((function(a){return e[a].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,O)}()})]})]})};t(492),a.default=function(){return Object(w.jsx)("div",{className:"app-user-list",children:Object(w.jsx)(Q,{})})}},478:function(e,a,t){"use strict";var n=t(14),s=t(15),c=t(1),r=t.n(c),l=t(2),i=t.n(l),o=t(27),u=t.n(o),d=t(80),m={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},j=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,l=e.tag,i=Object(s.a)(e,["className","cssModule","innerRef","tag"]),o=Object(d.mapToCssModules)(u()(a,"card-body"),t);return r.a.createElement(l,Object(n.a)({},i,{className:o,ref:c}))};j.propTypes=m,j.defaultProps={tag:"div"},a.a=j},479:function(e,a,t){"use strict";var n=t(14),s=t(15),c=t(1),r=t.n(c),l=t(2),i=t.n(l),o=t(27),u=t.n(o),d=t(80),m={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},j=function(e){var a=e.className,t=e.cssModule,c=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-title"),t);return r.a.createElement(c,Object(n.a)({},l,{className:i}))};j.propTypes=m,j.defaultProps={tag:"div"},a.a=j},492:function(e,a,t){},502:function(e,a,t){},534:function(e,a,t){"use strict";var n=t(531);a.__esModule=!0,a.default=void 0;var s=n(t(561)),c=n(t(575)),r=n(t(1)),l=n(t(2)),i=n(t(27)),o=t(557),u={children:l.default.node,row:l.default.bool,check:l.default.bool,inline:l.default.bool,disabled:l.default.bool,tag:o.tagPropType,className:l.default.string,cssModule:l.default.object},d=function(e){var a=e.className,t=e.cssModule,n=e.row,l=e.disabled,u=e.check,d=e.inline,m=e.tag,j=(0,c.default)(e,["className","cssModule","row","disabled","check","inline","tag"]),b=(0,o.mapToCssModules)((0,i.default)(a,!!n&&"row",u?"form-check":"form-group",!(!u||!d)&&"form-check-inline",!(!u||!l)&&"disabled"),t);return"fieldset"===m&&(j.disabled=l),r.default.createElement(m,(0,s.default)({},j,{className:b}))};d.propTypes=u,d.defaultProps={tag:"div"};var m=d;a.default=m},618:function(e,a,t){"use strict";t.d(a,"b",(function(){return l})),t.d(a,"e",(function(){return i})),t.d(a,"d",(function(){return o})),t.d(a,"c",(function(){return u})),t.d(a,"f",(function(){return d})),t.d(a,"a",(function(){return m}));var n=t(485),s=t.n(n),c=t(486),r=(t(82),t(483)),l=function(){return function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.a)({url:"/admin/escrows",method:"GET"},a);case 2:if(!((t=e.sent)&&t.data.data&&t.data.success)){e.next=8;break}return e.next=6,a({type:"GET_ALL_ESCROW",data:t.data.data});case 6:e.next=10;break;case 8:console.log(t),Object(r.l)("Oops!","Something went wrong.","error");case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},i=function(e,a){return function(){var t=Object(c.a)(s.a.mark((function t(n){var c,l,i,o,u,d,m,j,b,p,f,h;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=a.q,l=void 0===c?"":c,i=a.perPage,o=void 0===i?10:i,u=a.page,d=void 0===u?1:u,m=a.role,j=void 0===m?null:m,b=a.status,p=void 0===b?null:b,f=l.toLowerCase(),h=e.filter((function(e){return e.user_id.toLowerCase().includes(f)&&e.role===(j||e.role)&&e.status===(p||e.status)})),n({type:"GET_DATA",data:Object(r.i)(h,o,d),totalPages:h.length,params:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},o=function(e,a){return function(){var t=Object(c.a)(s.a.mark((function t(n){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=e.find((function(e){return e.id===a})),n({type:"GET_ESCROW",selectedEscrow:c});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var a=Object(c.a)(s.a.mark((function a(t){var n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return JSON.stringify({user_id:e}),a.next=3,Object(r.a)({url:"/admin/escrows/".concat(e),method:"GET"},t);case 3:if(!((n=a.sent)&&n.data.data&&n.data.success)){a.next=9;break}return a.next=7,t({type:"GET__ALL_USER_ESCROW_TRANSACTIONS",data:n.data.data});case 7:a.next=11;break;case 9:console.log(n),Object(r.l)("Oops!","Somthing went wrong with your network.","error");case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},d=function(e,a){return function(){var t=Object(c.a)(s.a.mark((function t(n){var c,l,i,o,u,d,m,j,b;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a.q,l=void 0===c?"":c,i=a.perPage,o=void 0===i?10:i,u=a.page,d=void 0===u?1:u,m=a.status,void 0===m?null:m,j=l.toLowerCase(),b=e.filter((function(e){var a=!1;return(e.trans_id||"").toLowerCase().includes(j)&&(a=!0),(e.trans_type||"").toLowerCase().includes(j)&&(a=!0),a})).sort(Object(r.k)("trans_id")).reverse(),t.next=5,n({type:"GET_USER_TRANSACTIONS",data:Object(r.i)(b,o,d),totalPages:b.length,params:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){var a=e.code,t=e.status,n=e.reason;return function(){var e=Object(c.a)(s.a.mark((function e(c){var l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=JSON.stringify({code:a,status:t,reason:n}),e.next=3,Object(r.a)({url:"/admin/escrow/resolve",method:"POST",body:l},c);case 3:(i=e.sent)&&!0===i.data.success?(Object(r.l)("Good!","".concat(i.data.message,"."),"success"),c(u())):!1===i.data.success?Object(r.l)("Oops!","".concat(i.data.message,"."),"error"):(console.log(i),Object(r.l)("Oops!","Somthing went wrong with your network.","error"));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=144.28e0928a.chunk.js.map