(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[136],{2241:function(e,t,a){"use strict";a.r(t);var n=a(28),r=a(1),s=a(484),c=a(507),o=a(808),i=a(123),l=a(661),u=(a(1124),a(831),a(1149),a(1107),a(781),a(6)),d=function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar?Object(u.jsx)(c.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"}):Object(u.jsx)(c.a,{color:t||"primary",className:"mr-1",content:"".concat(e.names)||"John Doe",initials:!0})},f={blacklisted:"light-danger",active:"light-success",inactive:"light-warning"},p=[{name:"User",minWidth:"297px",selector:"names",sortable:!0,cell:function(e){return Object(u.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[d(e),Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsx)(s.b,{to:"/appia/user/view/".concat(e.user_id),className:"user-name text-truncate mb-0",onClick:function(){return i.a.dispatch(Object(o.a)(i.a.getState().appiaUsers.allData,e.user_id))},children:Object(u.jsx)("span",{className:"font-weight-bold",children:e.names})}),Object(u.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.user_id})]})]})}},{name:"Email",minWidth:"300px",selector:"email",sortable:!0,cell:function(e){return e.email}},{name:"Phone",minWidth:"300px",selector:"phone",sortable:!0,cell:function(e){return Object(u.jsx)("span",{children:null===e.phone?"No Number":e.phone})}},{name:"Balance",minWidth:"150px",selector:"balance",sortable:!0,cell:function(e){var t;return Object(u.jsx)("span",{className:"text-capitalize",children:null===e||void 0===e||null===(t=e.balance)||void 0===t?void 0:t.toLocaleString("en-US",{style:"currency",currency:"NGN"})})}},{name:"Refferal Code",minWidth:"80px",selector:"referral_code",sortable:!0,cell:function(e){return e.referral_code}},{name:"Status",minWidth:"138px",selector:"status",sortable:!0,cell:function(e){return Object(u.jsx)(l.a,{className:"text-capitalize",color:f[e.status],pill:!0,children:e.status})}}],v=a(81),m=a(751),b=a(636),h=a.n(b),g=a(872),j=a(1134),O=a(867),w=a(745),x=a.n(w),y=a(518),N=a(504),S=a(499),T=a(498),k=a(496),E=a(502),_=a(503),C=a(534),L=a(521),P=a(659),M=a(514),R=a(669),A=a(663),G=a(664),U=(a(752),a(630),a(789)),z=(a(803),a(773)),I=a.n(z),D=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.appiaUsers})),a=Object(r.useState)(""),s=Object(n.a)(a,2),c=s[0],i=s[1],l=Object(r.useState)(1),d=Object(n.a)(l,2),f=d[0],b=d[1],w=Object(r.useState)(10),z=Object(n.a)(w,2),D=z[0],W=z[1],q=Object(r.useState)({value:"",label:"Select Status",number:0}),J=Object(n.a)(q,2),B=J[0],H=J[1];Object(r.useEffect)((function(){e(Object(o.f)()),e(Object(o.g)(t.allData,{page:f,perPage:D,status:B.value,q:c}))}),[e]);var F=t.allData.filter((function(e){var t,a,n,r;return(null===(t=e.names)||void 0===t?void 0:t.toLowerCase())||(null===(a=e.email)||void 0===a?void 0:a.toLowerCase())||(null===e||void 0===e||null===(n=e.phone)||void 0===n?void 0:n.toString())||(null===e||void 0===e||null===(r=e.referral_code)||void 0===r?void 0:r.dataToRender())}));function V(e){var a=document.createElement("a"),n=function(e){var a,n=Object.keys(t.allData[0]);return console.log("keyss",n),a="",a+=n.join(","),a+="\n",e.forEach((function(e){var t=0;n.forEach((function(n){t>0&&(a+=","),a+=e[n],t++})),a+="\n",console.log("esults",a)})),a}(e);if(null!==n){n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,".concat(n)),a.setAttribute("href",encodeURI(n)),a.setAttribute("download","export.csv"),a.click()}}return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)(N.a,{children:[Object(u.jsx)(S.a,{children:Object(u.jsx)(T.a,{tag:"h4",children:"Search Filter"})}),Object(u.jsx)(k.a,{children:Object(u.jsxs)(E.a,{form:!0,className:"mt-1 mb-50",children:[Object(u.jsx)(_.a,{lg:"4",md:"6",children:Object(u.jsxs)(I.a,{children:[Object(u.jsx)(C.a,{for:"select",children:"Select Status:"}),Object(u.jsx)(m.a,{theme:y.j,isClearable:!1,className:"react-select",classNamePrefix:"select",id:"select",options:[{value:"",label:"Select Status",number:0},{value:"blacklisted",label:"Blacklisted",number:1},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],value:B,onChange:function(a){H(a),e(Object(o.g)(t.allData,{page:f,perPage:D,status:a.value,q:c}))}})]})}),Object(u.jsx)(_.a,{lg:"4",md:"6",children:Object(u.jsxs)(I.a,{children:[Object(u.jsx)(C.a,{for:"select",children:"Select Table:"}),Object(u.jsx)(L.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:c,placeholder:"Name Email Search & Phone Search",onChange:function(a){return n=a.target.value,i(n),void e(Object(o.g)(t.allData,{page:f,perPage:D,status:B.value,q:n}));var n}})]})})]})})]}),Object(u.jsxs)(N.a,{children:[Object(u.jsxs)(E.a,{className:"mx-0 mt-3",children:[Object(u.jsx)(_.a,{xl:"6",sm:"12",className:"d-flex align-items-center pl-3",children:Object(u.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(u.jsx)(C.a,{for:"rows-per-page",children:"Show"}),Object(u.jsxs)(P.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:D,onChange:function(a){var n=parseInt(a.currentTarget.value);e(Object(o.g)(t.allData,{page:f,perPage:n,status:B.value,q:c})),W(n)},style:{width:"10rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(u.jsx)("option",{value:"10",children:"10"}),Object(u.jsx)("option",{value:"25",children:"25"}),Object(u.jsx)("option",{value:"50",children:"50"})]}),Object(u.jsx)(C.a,{for:"rows-per-page",children:"Entries"})]})}),Object(u.jsx)(_.a,{xl:"6",sm:"12",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-center pr-lg-3 p-0 mt-lg-0 mt-1",children:Object(u.jsxs)(M.a,{children:[Object(u.jsxs)(R.a,{className:"mr-lg-0 mr-5",color:"secondary",caret:!0,outline:!0,children:[Object(u.jsx)(g.a,{size:15}),Object(u.jsx)("span",{className:"align-middle ml-lg-50",children:"Download Table"})]}),Object(u.jsxs)(A.a,{right:!0,children:[Object(u.jsxs)(G.a,{className:"w-100",onClick:function(){return V(t.allData)},children:[Object(u.jsx)(j.a,{size:15}),Object(u.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]}),Object(u.jsxs)(G.a,{className:"w-100",onClick:function(){return function(){var e=new U.default({orientation:"landscape"});e.autoTable({styles:{halign:"center"},head:[["User","Email","Balance","Naira Wallet","Status"]]}),t.allData.map((function(t){e.autoTable({styles:{halign:"left"},columnStyles:{0:{cellWidth:40},1:{cellWidth:70},2:{cellWidth:70},3:{cellWidth:60},4:{cellWidth:30}},body:[[t.names,t.email,t.balance,t.naira_wallet,t.status]]})})),e.save("export.pdf")}()},children:[Object(u.jsx)(j.a,{size:15}),Object(u.jsx)("span",{className:"align-middle ml-50",children:"PDF"})]})]})]})})]}),Object(u.jsx)(x.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:p,sortIcon:Object(u.jsx)(O.a,{}),className:"react-dataTable",paginationComponent:function(){var a=Math.ceil(F.length/D);return Object(u.jsx)(h.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==f?f-1:0,onPageChange:function(a){return function(a){e(Object(o.g)(t.allData,{page:a.selected+1,perPage:D,status:B.value,q:c})),b(a.selected+1)}(a)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},data:function(){var e={status:B.value,q:c},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,D)}()})]})]})};a(539),t.default=function(){return Object(u.jsx)("div",{className:"app-user-list",children:Object(u.jsx)(D,{})})}},496:function(e,t,a){"use strict";var n=a(14),r=a(15),s=a(1),c=a.n(s),o=a(2),i=a.n(o),l=a(27),u=a.n(l),d=a(80),f={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,o=e.tag,i=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.mapToCssModules)(u()(t,"card-body"),a);return c.a.createElement(o,Object(n.a)({},i,{className:l,ref:s}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},498:function(e,t,a){"use strict";var n=a(14),r=a(15),s=a(1),c=a.n(s),o=a(2),i=a.n(o),l=a(27),u=a.n(l),d=a(80),f={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tag,o=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-title"),a);return c.a.createElement(s,Object(n.a)({},o,{className:i}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},499:function(e,t,a){"use strict";var n=a(14),r=a(15),s=a(1),c=a.n(s),o=a(2),i=a.n(o),l=a(27),u=a.n(l),d=a(80),f={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tag,o=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-header"),a);return c.a.createElement(s,Object(n.a)({},o,{className:i}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},502:function(e,t,a){"use strict";var n=a(14),r=a(15),s=a(1),c=a.n(s),o=a(2),i=a.n(o),l=a(27),u=a.n(l),d=a(80),f=i.a.oneOfType([i.a.number,i.a.string]),p={tag:d.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},v={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,o=e.tag,i=e.form,l=e.widths,f=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,a){var n=e[t];if(delete f[t],n){var r=!a;p.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var v=Object(d.mapToCssModules)(u()(t,s?"no-gutters":null,i?"form-row":"row",p),a);return c.a.createElement(o,Object(n.a)({},f,{className:v}))};m.propTypes=p,m.defaultProps=v,t.a=m},503:function(e,t,a){"use strict";var n=a(14),r=a(15),s=a(1),c=a.n(s),o=a(2),i=a.n(o),l=a(27),u=a.n(l),d=a(80),f=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:f,offset:f})]),v={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,s=e.widths,o=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),l=[];s.forEach((function(t,n){var r=e[t];if(delete i[t],r||""===r){var s=!n;if(Object(d.isObject)(r)){var c,o=s?"-":"-"+t+"-",f=b(s,t,r.size);l.push(Object(d.mapToCssModules)(u()(((c={})[f]=r.size||""===r.size,c["order"+o+r.order]=r.order||0===r.order,c["offset"+o+r.offset]=r.offset||0===r.offset,c)),a))}else{var p=b(s,t,r);l.push(p)}}})),l.length||l.push("col");var f=Object(d.mapToCssModules)(u()(t,l),a);return c.a.createElement(o,Object(n.a)({},i,{className:f}))};h.propTypes=v,h.defaultProps=m,t.a=h},504:function(e,t,a){"use strict";var n=a(14),r=a(15),s=a(1),c=a.n(s),o=a(2),i=a.n(o),l=a(27),u=a.n(l),d=a(80),f={tag:d.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,a=e.cssModule,s=e.color,o=e.body,i=e.inverse,l=e.outline,f=e.tag,p=e.innerRef,v=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(d.mapToCssModules)(u()(t,"card",!!i&&"text-white",!!o&&"card-body",!!s&&(l?"border":"bg")+"-"+s),a);return c.a.createElement(f,Object(n.a)({},v,{className:m,ref:p}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},539:function(e,t,a){},630:function(e,t,a){},773:function(e,t,a){"use strict";var n=a(775);t.__esModule=!0,t.default=void 0;var r=n(a(801)),s=n(a(806)),c=n(a(1)),o=n(a(2)),i=n(a(27)),l=a(796),u={children:o.default.node,row:o.default.bool,check:o.default.bool,inline:o.default.bool,disabled:o.default.bool,tag:l.tagPropType,className:o.default.string,cssModule:o.default.object},d=function(e){var t=e.className,a=e.cssModule,n=e.row,o=e.disabled,u=e.check,d=e.inline,f=e.tag,p=(0,s.default)(e,["className","cssModule","row","disabled","check","inline","tag"]),v=(0,l.mapToCssModules)((0,i.default)(t,!!n&&"row",u?"form-check":"form-group",!(!u||!d)&&"form-check-inline",!(!u||!o)&&"disabled"),a);return"fieldset"===f&&(p.disabled=o),c.default.createElement(f,(0,r.default)({},p,{className:v}))};d.propTypes=u,d.defaultProps={tag:"div"};var f=d;t.default=f},781:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(2),c=a.n(s);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,s=e.size,c=void 0===s?24:s,l=i(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("path",{d:"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"}),r.a.createElement("path",{d:"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),r.a.createElement("path",{d:"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"}),r.a.createElement("path",{d:"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"}),r.a.createElement("path",{d:"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"}),r.a.createElement("path",{d:"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"}),r.a.createElement("path",{d:"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"}),r.a.createElement("path",{d:"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Slack",t.a=l},808:function(e,t,a){"use strict";a.d(t,"f",(function(){return i})),a.d(t,"g",(function(){return l})),a.d(t,"m",(function(){return u})),a.d(t,"a",(function(){return d})),a.d(t,"o",(function(){return f})),a.d(t,"k",(function(){return p})),a.d(t,"p",(function(){return v})),a.d(t,"l",(function(){return m})),a.d(t,"n",(function(){return b})),a.d(t,"h",(function(){return h})),a.d(t,"q",(function(){return g})),a.d(t,"i",(function(){return j})),a.d(t,"r",(function(){return O})),a.d(t,"j",(function(){return w})),a.d(t,"b",(function(){return x})),a.d(t,"e",(function(){return y})),a.d(t,"s",(function(){return N})),a.d(t,"c",(function(){return S})),a.d(t,"d",(function(){return T}));var n=a(0),r=a(520),s=a.n(r),c=a(522),o=a(518),i=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)({url:"/admin/users",method:"GET"},t);case 2:if(!((a=e.sent)&&a.data.data&&a.data.success)){e.next=8;break}return e.next=6,t({type:"GET_ALL_DATA",data:a.data.data});case 6:e.next=10;break;case 8:console.log(a),Object(o.l)("Oops!","Something went wrong.","error");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(e,t){return function(){var a=Object(c.a)(s.a.mark((function a(n){var r,c,i,l,u,d,f,p,v,m,b;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=t.q,c=void 0===r?"":r,i=t.perPage,l=void 0===i?10:i,u=t.number,void 0===u?"":u,d=t.page,f=void 0===d?1:d,p=t.status,v=void 0===p?null:p,m=c.toLowerCase(),b=e.filter((function(e){var t;return(e.email.toLowerCase().includes(m)||e.names.toLowerCase().includes(m)||(null===(t=e.phone)||void 0===t?void 0:t.toString().toLowerCase().includes(m))||e.referral_code.toLowerCase().includes(m))&&e.status===(v||e.status)})),n({type:"GET_FILTERED_USER_DATA",data:Object(o.i)(b,l,f),totalPages:b.length,params:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},u=function(e,t){return function(){var a=Object(c.a)(s.a.mark((function a(n){var r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=null===e||void 0===e?void 0:e.find((function(e){return e.user_id===t})),n({type:"GET_USER",selectedUser:r});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)({url:"/admin/users/details/".concat(e),method:"GET"},a);case 2:if(!((n=t.sent)&&n.data&&n.data.success)){t.next=8;break}return t.next=6,a({type:"GET_USER_DETAILS",userDetails:n.data});case 6:t.next=10;break;case 8:console.log(n),Object(o.l)("Oops!","Something went wrong.","error");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(a){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.stringify({user_id:e}),t.next=3,Object(o.a)({url:"/admin/users/transactions/all",method:"POST",body:n},a);case 3:if(!((r=t.sent)&&r.data.data&&r.data.success)){t.next=9;break}return t.next=7,a({type:"GET_USER_ALL_TRANSACTIONS",data:r.data.data});case 7:t.next=11;break;case 9:console.log(r),Object(o.l)("Oops!","Somthing went wrong with your network.","error");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e,t){return function(){var a=Object(c.a)(s.a.mark((function a(n){var r,c,i,l,u,d,f,p;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=t.q,c=void 0===r?"":r,i=t.perPage,l=void 0===i?10:i,u=t.page,d=void 0===u?1:u,f=null===c||void 0===c?void 0:c.toLowerCase(),p=null===e||void 0===e?void 0:e.filter((function(e){var t,a,n,r;return(null===e||void 0===e||null===(t=e.trans_id)||void 0===t||null===(a=t.toLowerCase())||void 0===a?void 0:a.includes(f))||(null===e||void 0===e||null===(n=e.trans_type)||void 0===n||null===(r=n.toLowerCase())||void 0===r?void 0:r.includes(f))})),a.next=5,n({type:"GET_USER_TRANSACTIONS",data:Object(o.i)(p,l,d),totalPages:p.length,params:t});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(a){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.stringify({user_id:e}),t.next=3,Object(o.a)({url:"/admin/users/transactions/utility",method:"POST",body:n},a);case 3:if(!((r=t.sent)&&r.data.data&&r.data.success)){t.next=9;break}return t.next=7,a({type:"GET_USER_ALL_UTILITIES_TRANSACTIONS",data:r.data.data});case 7:t.next=11;break;case 9:console.log(r),Object(o.l)("Oops!","Somthing went wrong with your network.","error");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e,t){return function(){var a=Object(c.a)(s.a.mark((function a(n){var r,c,i,l,u,d,f,p;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=t.q,c=void 0===r?"":r,i=t.perPage,l=void 0===i?10:i,u=t.page,d=void 0===u?1:u,f=c.toLowerCase(),p=e.filter((function(e){return e.trans_id.toLowerCase().includes(f)||e.trans_type.toLowerCase().includes(f)})),a.next=5,n({type:"GET_USER_UTILITY_TRANSACTIONS",data:Object(o.i)(p,l,d),totalPages:p.length,params:t});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(a){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.stringify({user_id:e}),t.next=3,Object(o.a)({url:"/admin/users/transactions/bank",method:"POST",body:n},a);case 3:if(!((r=t.sent)&&r.data.data&&r.data.success)){t.next=9;break}return t.next=7,a({type:"GET_USER_ALL_BANK_TRANSACTIONS",data:r.data.data});case 7:t.next=11;break;case 9:console.log(r),Object(o.l)("Oops!","Somthing went wrong with your network.","error");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e,t){return function(){var a=Object(c.a)(s.a.mark((function a(n){var r,c,i,l,u,d,f,p;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=t.q,c=void 0===r?"":r,i=t.perPage,l=void 0===i?10:i,u=t.page,d=void 0===u?1:u,f=c.toLowerCase(),p=e.filter((function(e){return e.trans_id.toLowerCase().includes(f)||e.trans_type.toLowerCase().includes(f)})),a.next=5,n({type:"GET_USER_BANK_TRANSACTIONS",data:Object(o.i)(p,l,d),totalPages:p.length,params:t});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return JSON.stringify({user_id:e}),t.next=3,Object(o.a)({url:"/admin/escrows/".concat(e),method:"GET"},a);case 3:if(!((n=t.sent)&&n.data.data&&n.data.success)){t.next=9;break}return t.next=7,a({type:"GET_USER_ALL_ESCROW_TRANSACTIONS",data:n.data.data});case 7:t.next=11;break;case 9:console.log(n),Object(o.l)("Oops!","Somthing went wrong with your network.","error");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e,t){return function(){var a=Object(c.a)(s.a.mark((function a(n){var r,c,i,l,u,d,f,p;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=t.q,c=void 0===r?"":r,i=t.perPage,l=void 0===i?10:i,u=t.page,d=void 0===u?1:u,f=null===c||void 0===c?void 0:c.toLowerCase(),p=null===e||void 0===e?void 0:e.filter((function(e){var t,a,n,r;return(null===e||void 0===e||null===(t=e.trans_id)||void 0===t||null===(a=t.toLowerCase())||void 0===a?void 0:a.includes(f))||(null===e||void 0===e||null===(n=e.trans_type)||void 0===n||null===(r=n.toLowerCase())||void 0===r?void 0:r.includes(f))})),a.next=5,n({type:"GET_USER_ESCROW_TRANSACTIONS",data:Object(o.i)(p,l,d),totalPages:null===p||void 0===p?void 0:p.length,params:t});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return JSON.stringify({user_id:e}),t.next=3,Object(o.a)({url:"/admin/rewards/claims/".concat(e),method:"GET"},a);case 3:if(n=t.sent,console.log({response:n}),!(n&&n.data.data&&n.data.success)){t.next=10;break}return t.next=8,a({type:"GET_USER_ALL_REWARDS",data:n.data.data});case 8:t.next=12;break;case 10:console.log(n),Object(o.l)("Oops!","Somthing went wrong with your network.","error");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e,t){return function(){var a=Object(c.a)(s.a.mark((function a(n){var r,c,i,l,u,d,f,p;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=t.q,c=void 0===r?"":r,i=t.perPage,l=void 0===i?10:i,u=t.page,d=void 0===u?1:u,f=null===c||void 0===c?void 0:c.toLowerCase(),p=null===e||void 0===e?void 0:e.filter((function(e){var t,a,n,r,s,c,o,i;return(null===e||void 0===e||null===(t=e.names)||void 0===t||null===(a=t.toLowerCase())||void 0===a?void 0:a.includes(f))||(null===e||void 0===e||null===(n=e.email)||void 0===n||null===(r=n.toLowerCase())||void 0===r?void 0:r.includes(f))||(null===e||void 0===e||null===(s=e.username)||void 0===s||null===(c=s.toLowerCase())||void 0===c?void 0:c.includes(f))||(null===e||void 0===e||null===(o=e.user_id)||void 0===o||null===(i=o.toLowerCase())||void 0===i?void 0:i.includes(f))})),a.next=5,n({type:"GET_USER_CLAIM",data:Object(o.i)(p,l,d),totalPages:null===p||void 0===p?void 0:p.length,params:t});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},x=function(e,t){var a=e.find((function(e){return e.user_id===t}));return function(){var e=Object(c.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)({url:"/admin/users/activate/".concat(a.user_id),method:"GET"},t);case 2:(r=e.sent)?r.data.success?(t({type:"GET_USER",selectedUser:Object(n.a)(Object(n.a)({},a),{},{status:"Active"})}),Object(o.l)("Good!","".concat(r.data.message,"."),"success"),t(i())):Object(o.l)("Oops!","".concat(r.data.message,"."),"error"):Object(o.l)("Oops!","Something went wrong with your network.","error");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e,t){var a=e.find((function(e){return e.user_id===t}));return function(){var e=Object(c.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)({url:"/admin/users/deactivate/".concat(a.user_id),method:"GET"},t);case 2:(r=e.sent)?r.data.success?(t({type:"GET_USER",selectedUser:Object(n.a)(Object(n.a)({},a),{},{status:"Inactive"})}),Object(o.l)("Good!","".concat(r.data.message,"."),"success"),t(i())):Object(o.l)("Oops!","".concat(r.data.message,"."),"error"):Object(o.l)("Oops!","Something went wrong with your network.","error");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(e){var t=e.user_id;return function(){var e=Object(c.a)(s.a.mark((function e(a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.stringify({user_id:t}),e.next=3,Object(o.a)({url:"/admin/users/reset/",method:"POST",body:n},a);case 3:(r=e.sent)&&r.data.success?Object(o.l)("Good!","User password reset Sucessfully.","success"):(console.log(r),Object(o.l)("Oops!","Somthing went wrong with your network.","error"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e){var t=e.user_id,a=e.reason;return function(){var e=Object(c.a)(s.a.mark((function e(n){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.stringify({user_id:t,reason:a}),e.next=3,Object(o.a)({url:"/admin/users/blacklist/".concat(t),method:"GET",body:r},n);case 3:(c=e.sent)&&c.data.success?Object(o.l)("Good!","".concat(c.data.message,"."),"success"):(console.log(c),Object(o.l)("Oops!","Somthing went wrong with your network.","error"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(e,t){var a=e.user_id,n=e.reason;return function(){var e=Object(c.a)(s.a.mark((function e(r){var c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=JSON.stringify({user_id:a,reason:n}),e.next=3,Object(o.a)({url:"/admin/blacklist-asset/".concat(t),method:"GET",body:c},r);case 3:(i=e.sent)&&i.data.success?Object(o.l)("Good!","".concat(i.data.message,"."),"success"):(console.log(i),Object(o.l)("Oops!","Somthing went wrong with your network.","error"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},831:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(2),c=a.n(s);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,s=e.size,c=void 0===s?24:s,l=i(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),r.a.createElement("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),r.a.createElement("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Database",t.a=l}}]);
//# sourceMappingURL=136.3f61e5d8.chunk.js.map