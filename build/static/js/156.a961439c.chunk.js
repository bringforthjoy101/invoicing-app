(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[156],{2211:function(e,t,a){"use strict";a.r(t);var s=a(28),n=a(1),r=a(58),c=a(0),i=a(122),l=a(81),o=a(506),d=a.n(o),u=a(487),j=a(511),m=a.n(j),p=a(512),b=a(500),h=a(853),g=a.n(h),f=a(854),x=a.n(f)()(g.a),O=function(){return function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)({url:"/admin/fund",method:"GET"},t);case 2:if(!((a=e.sent)&&a.data.data&&a.data.success)){e.next=8;break}return e.next=6,t({type:"GET_ALL_FUND_DATA",data:a.data.data.sort((function(e,t){return t.log_id-e.log_id}))});case 6:e.next=10;break;case 8:console.log(a),Object(b.l)("Oops!","Something went wrong.","error");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(e,t,a){var s="approve"===t?"approved":"disapproved";return function(){var a=Object(p.a)(m.a.mark((function a(n){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",x.fire({title:"Are you sure?",text:"You won't be able to revert this action!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, ".concat(t," it!"),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then(function(){var a=Object(p.a)(m.a.mark((function a(r){var c,i;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!r.value){a.next=6;break}return c=JSON.stringify({log_id:e}),a.next=4,Object(b.a)({url:"/admin/fund/".concat(t),method:"POST",body:c},n);case 4:(i=a.sent)&&i.data.success?(n(O()),Object(b.l)("Good!","Fund was successfully ".concat(s),"success")):(Object(b.l)("Oops!","Somthing went wrong with your network.","error"),console.log(i));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},w=a(124),C=a(545),N=a.n(C),L=a(585),k=a.n(L),y=a(660),_=a(1105),W=a(932),D=a(865),P=a(1131),S=a(809),A=a(857),E=a(679),T=a(493),z=a(489),R=a(486),F=a(503),I=a(690),U=a(681),B=a(682),H=a(490),M=a(491),J=a(517),G=a(513),V=a(771),Y=(a(785),a(6)),q=["success","danger","warning","info","dark","primary","secondary"],K={Approved:{title:"Approved",color:"light-success"},Pending:{title:"Pending",color:"light-warning"},Disapproved:{title:"Disapproved",color:"light-danger"},Rejected:{title:"Rejected",color:"light-danger"},5:{title:"Applied",color:"light-info"}},Q=[{name:"User",selector:"user_details",sortable:!0,minWidth:"280px",cell:function(e){return Object(Y.jsxs)("div",{className:"d-flex align-items-center",children:[e.avatar?Object(Y.jsx)(u.a,{img:a(931)("./avatar-s-".concat(e.avatar)).default}):Object(Y.jsx)(u.a,{color:"light-".concat(q[3]),content:e.user_details.user_name,initials:!0}),Object(Y.jsxs)("div",{className:"user-info text-truncate ml-1",children:[Object(Y.jsx)("span",{className:"d-block font-weight-bold text-truncate",children:e.user_details.user_name}),Object(Y.jsx)("small",{children:e.user_details.email})]})]})}},{name:"Email",selector:"user_details",sortable:!0,minWidth:"240px",cell:function(e){return e.user_details.email}},{name:"Purpose",selector:"purpose",sortable:!0,minWidth:"150px"},{name:"Description",selector:"description",sortable:!0,minWidth:"100px"},{name:"Status",selector:"status",sortable:!0,minWidth:"100px",cell:function(e){return Object(Y.jsx)(E.a,{color:K[e.status].color,pill:!0,children:K[e.status].title})}},{name:"Date",selector:"posted_date",sortable:!0,minWidth:"200px",cell:function(e){return d()(e.posted_date).format("lll")}},{name:"Posted By",selector:"posted_by",sortable:!0,minWidth:"170px",cell:function(e){return Object(Y.jsxs)("div",{className:"d-flex align-items-center",children:[Object(Y.jsx)(u.a,{color:"light-".concat(q[3]),content:e.posted_by,initials:!0}),Object(Y.jsxs)("div",{className:"user-info text-truncate ml-1",children:[Object(Y.jsx)("span",{className:"d-block font-weight-bold text-truncate",children:e.posted_by}),Object(Y.jsx)("small",{children:"Admin"})]})]})}},{name:"Actions",allowOverflow:!0,selector:"status",cell:function(e){return Object(Y.jsx)("div",{className:"d-flex",children:"Pending"===e.status?Object(Y.jsxs)("div",{children:[Object(Y.jsx)(y.a,{size:30,className:"text-success",onClick:function(){return w.a.dispatch(v(e.log_id,"approve"))}}),Object(Y.jsx)(_.a,{size:30,className:"text-danger",onClick:function(){return w.a.dispatch(v(e.log_id,"disapprove"))}})]}):Object(Y.jsx)(W.a,{size:30,className:"text-info",onClick:function(){return alert("Reviewed")}})})}}],X=Object(n.forwardRef)((function(e,t){var a=e.onClick,s=Object(i.a)(e,["onClick"]);return Object(Y.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(Y.jsx)("input",Object(c.a)({type:"checkbox",className:"custom-control-input",ref:t},s)),Object(Y.jsx)("label",{className:"custom-control-label",onClick:a})]})})),Z=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.appiaWithdrawals})),a=Object(n.useState)(!1),c=Object(s.a)(a,2),i=(c[0],c[1],Object(n.useState)(0)),o=Object(s.a)(i,2),d=o[0],u=o[1],j=Object(n.useState)(""),m=Object(s.a)(j,2),p=m[0],b=m[1],h=Object(n.useState)([]),g=Object(s.a)(h,2),f=g[0],x=g[1];Object(n.useEffect)((function(){e(O())}),[e]);function v(e){var a=document.createElement("a"),s=function(e){var a,s=Object.keys(t.allData[0]);return console.log("keyss",s),a="",a+=s.join(","),a+="\n",e.forEach((function(e){var t=0;s.forEach((function(s){t>0&&(a+=","),a+=e[s],t++})),a+="\n"})),a}(e);if(null!==s){s.match(/^data:text\/csv/i)||(s="data:text/csv;charset=utf-8,".concat(s)),a.setAttribute("href",encodeURI(s)),a.setAttribute("download","export.csv"),a.click()}}return Object(Y.jsx)(n.Fragment,{children:Object(Y.jsxs)(T.a,{children:[Object(Y.jsxs)(z.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(Y.jsx)(R.a,{tag:"h4",children:"All Funds"}),Object(Y.jsx)("div",{className:"d-flex mt-md-0 mt-1",children:Object(Y.jsxs)(F.a,{children:[Object(Y.jsxs)(I.a,{color:"secondary",caret:!0,outline:!0,children:[Object(Y.jsx)(D.a,{size:15}),Object(Y.jsx)("span",{className:"align-middle ml-50",children:"Export"})]}),Object(Y.jsxs)(U.a,{right:!0,children:[Object(Y.jsxs)(B.a,{className:"w-100",onClick:function(){return v(t.allData)},children:[Object(Y.jsx)(P.a,{size:15}),Object(Y.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]}),Object(Y.jsxs)(B.a,{className:"w-100",onClick:function(){return function(){var e=new V.default({orientation:"landscape"});e.autoTable({styles:{halign:"center"},head:[["User","Purpose","Description","Status","Date","Posted by"]]}),t.allData.map((function(t){e.autoTable({styles:{halign:"left"},columnStyles:{0:{cellWidth:45},1:{cellWidth:55},2:{cellWidth:50},3:{cellWidth:40},4:{cellWidth:70},5:{cellWidth:40}},body:[[t.user_details.user_name,t.purpose,t.description,t.status,t.posted_date,t.posted_by]]})})),e.save("export.pdf")}()},children:[Object(Y.jsx)(P.a,{size:15}),Object(Y.jsx)("span",{className:"align-middle ml-50",children:"PDF"})]}),Object(Y.jsxs)(B.a,{className:"w-100",onClick:function(){return function(){document.getElementById("printme");var e=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=e}()},children:[Object(Y.jsx)(S.a,{size:15}),Object(Y.jsx)("span",{className:"align-middle ml-50",children:"Print"})]})]})]})})]}),Object(Y.jsx)(H.a,{className:"justify-content-end mx-0",children:Object(Y.jsxs)(M.a,{className:"d-flex align-items-center justify-content-end mt-1",md:"3",sm:"12",children:[Object(Y.jsx)(J.a,{className:"mr-1",for:"search-input",children:"Search"}),Object(Y.jsx)(G.a,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:p,onChange:function(e){var a=e.target.value,s=[];b(a);a.length&&(s=t.allData.filter((function(e){var t=e.user_details.user_name.toLowerCase().startsWith(a.toLowerCase())||e.user_details.email.toLowerCase().startsWith(a.toLowerCase())||e.purpose.toLowerCase().startsWith(a.toLowerCase())||e.description.toLowerCase().startsWith(a.toLowerCase())||e.status.toLowerCase().startsWith(a.toLowerCase())||e.posted_date.toLowerCase().startsWith(a.toLowerCase()),s=e.user_details.user_name.toLowerCase().startsWith(a.toLowerCase())||e.user_details.email.toLowerCase().startsWith(a.toLowerCase())||e.purpose.toLowerCase().startsWith(a.toLowerCase())||e.description.toLowerCase().startsWith(a.toLowerCase())||e.status.toLowerCase().startsWith(a.toLowerCase())||e.posted_date.toLowerCase().startsWith(a.toLowerCase());return t||(!t&&s?s:null)})),x(s),b(a))}})]})}),Object(Y.jsx)(k.a,{printableId:"printme",noHeader:!0,pagination:!0,selectableRows:!0,columns:Q,paginationPerPage:10,className:"react-dataTable",sortIcon:Object(Y.jsx)(A.a,{size:10}),paginationDefaultPage:d+1,paginationComponent:function(){var e;return Object(Y.jsx)(N.a,(e={previousLabel:"",nextLabel:"",forcePage:d,onPageChange:function(e){return function(e){u(e.selected)}(e)},pageCount:p.length?f.length/10:t.allData.length/10||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(r.a)(e,"breakClassName","page-item"),Object(r.a)(e,"breakLinkClassName","page-link"),Object(r.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:p.length?f:t.allData,selectableRowsComponent:X})]})})},$=a(775),ee=a(821),te=a(879),ae=a(680),se=["success","danger","warning","info","dark","primary","secondary"],ne={Approved:{title:"Approved",color:"light-success"},Pending:{title:"Pending",color:"light-warning"},Disapproved:{title:"Disapproved",color:"light-danger"},Rejected:{title:"Rejected",color:"light-danger"},5:{title:"Applied",color:"light-info"}},re=[{name:"User",selector:"user_details",sortable:!0,minWidth:"280px",cell:function(e){var t,s,n;return Object(Y.jsxs)("div",{className:"d-flex align-items-center",children:[e.avatar?Object(Y.jsx)(u.a,{img:a(931)("./avatar-s-".concat(e.avatar)).default}):Object(Y.jsx)(u.a,{color:"light-".concat(se[3]),content:null===e||void 0===e||null===(t=e.user_details)||void 0===t?void 0:t.user_name,initials:!0}),Object(Y.jsxs)("div",{className:"user-info text-truncate ml-1",children:[Object(Y.jsx)("span",{className:"d-block font-weight-bold text-truncate",children:null===e||void 0===e||null===(s=e.user_details)||void 0===s?void 0:s.user_name}),Object(Y.jsx)("small",{children:null===e||void 0===e||null===(n=e.user_details)||void 0===n?void 0:n.email})]})]})}},{name:"Email",selector:"user_details",sortable:!0,minWidth:"240px",cell:function(e){var t;return null===e||void 0===e||null===(t=e.user_details)||void 0===t?void 0:t.email}},{name:"Purpose",selector:"purpose",sortable:!0,minWidth:"150px"},{name:"Description",selector:"description",sortable:!0,minWidth:"100px"},{name:"Status",selector:"status",sortable:!0,minWidth:"100px",cell:function(e){return Object(Y.jsx)(E.a,{color:ne[e.status].color,pill:!0,children:ne[e.status].title})}},{name:"Date",selector:"posted_date",sortable:!0,minWidth:"200px",cell:function(e){return d()(e.posted_date).format("lll")}},{name:"Posted By",selector:"posted_by",sortable:!0,minWidth:"170px",cell:function(e){return Object(Y.jsxs)("div",{className:"d-flex align-items-center",children:[Object(Y.jsx)(u.a,{color:"light-".concat(se[3]),content:e.posted_by,initials:!0}),Object(Y.jsxs)("div",{className:"user-info text-truncate ml-1",children:[Object(Y.jsx)("span",{className:"d-block font-weight-bold text-truncate",children:e.posted_by}),Object(Y.jsx)("small",{children:"Admin"})]})]})}},{name:"Actions",minWidth:"100px",selector:"fullName",sortable:!0,cell:function(e){return Object(Y.jsxs)(ae.a,{children:[Object(Y.jsx)(I.a,{tag:"div",className:"btn btn-sm",children:Object(Y.jsx)($.a,{size:14,className:"cursor-pointer"})}),Object(Y.jsxs)(U.a,{right:!0,children:[Object(Y.jsxs)(B.a,{children:[Object(Y.jsx)(P.a,{size:14,className:"mr-50"}),Object(Y.jsx)("span",{className:"align-middle",children:"Details"})]}),Object(Y.jsxs)(B.a,{children:[Object(Y.jsx)(ee.a,{size:14,className:"mr-50"}),Object(Y.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(Y.jsxs)(B.a,{className:"w-100",children:[Object(Y.jsx)(te.a,{size:14,className:"mr-50"}),Object(Y.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})}}],ce=Object(n.forwardRef)((function(e,t){var a=e.onClick,s=Object(i.a)(e,["onClick"]);return Object(Y.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(Y.jsx)("input",Object(c.a)({type:"checkbox",className:"custom-control-input",ref:t},s)),Object(Y.jsx)("label",{className:"custom-control-label",onClick:a})]})})),ie=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.appiaWithdrawals})),a=Object(n.useState)(!1),c=Object(s.a)(a,2),i=(c[0],c[1],Object(n.useState)(0)),o=Object(s.a)(i,2),d=o[0],u=o[1],j=Object(n.useState)(""),m=Object(s.a)(j,2),p=m[0],b=m[1],h=Object(n.useState)([]),g=Object(s.a)(h,2),f=g[0],x=g[1];Object(n.useEffect)((function(){e(O())}),[e]);function v(e){var a=document.createElement("a"),s=function(e){var a,s=Object.keys(t.allData[0]);return console.log("keyss",s),a="",a+=s.join(","),a+="\n",e.forEach((function(e){var t=0;s.forEach((function(s){t>0&&(a+=","),a+=e[s],t++})),a+="\n"})),a}(e);if(null!==s){s.match(/^data:text\/csv/i)||(s="data:text/csv;charset=utf-8,".concat(s)),a.setAttribute("href",encodeURI(s)),a.setAttribute("download","export.csv"),a.click()}}return Object(Y.jsx)(n.Fragment,{children:Object(Y.jsxs)(T.a,{children:[Object(Y.jsxs)(z.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(Y.jsx)(R.a,{tag:"h4",children:"All Funds"}),Object(Y.jsx)("div",{className:"d-flex mt-md-0 mt-1",children:Object(Y.jsxs)(F.a,{children:[Object(Y.jsxs)(I.a,{color:"secondary",caret:!0,outline:!0,children:[Object(Y.jsx)(D.a,{size:15}),Object(Y.jsx)("span",{className:"align-middle ml-50",children:"Export"})]}),Object(Y.jsxs)(U.a,{right:!0,children:[Object(Y.jsxs)(B.a,{className:"w-100",onClick:function(){return v(t.allData)},children:[Object(Y.jsx)(P.a,{size:15}),Object(Y.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]}),Object(Y.jsxs)(B.a,{className:"w-100",onClick:function(){return function(){var e=new V.default({orientation:"landscape"});e.autoTable({styles:{halign:"center"},head:[["User","Purpose","Description","Status","Date","Posted by"]]}),t.allData.map((function(t){e.autoTable({styles:{halign:"left"},columnStyles:{0:{cellWidth:45},1:{cellWidth:55},2:{cellWidth:50},3:{cellWidth:40},4:{cellWidth:70},5:{cellWidth:40}},body:[[t.user_details.user_name,t.purpose,t.description,t.status,t.posted_date,t.posted_by]]})})),e.save("export.pdf")}()},children:[Object(Y.jsx)(P.a,{size:15}),Object(Y.jsx)("span",{className:"align-middle ml-50",children:"PDF"})]}),Object(Y.jsxs)(B.a,{className:"w-100",onClick:function(){return function(){document.getElementById("printme");var e=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=e}()},children:[Object(Y.jsx)(S.a,{size:15}),Object(Y.jsx)("span",{className:"align-middle ml-50",children:"Print"})]})]})]})})]}),Object(Y.jsx)(H.a,{className:"justify-content-end mx-0",children:Object(Y.jsxs)(M.a,{className:"d-flex align-items-center justify-content-end mt-1",md:"3",sm:"12",children:[Object(Y.jsx)(J.a,{className:"mr-1",for:"search-input",children:"Search"}),Object(Y.jsx)(G.a,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:p,onChange:function(e){var a=e.target.value,s=[];b(a);a.length&&(s=t.allData.filter((function(e){var t=e.user_details.user_name.toLowerCase().startsWith(a.toLowerCase())||e.user_details.email.toLowerCase().startsWith(a.toLowerCase())||e.purpose.toLowerCase().startsWith(a.toLowerCase())||e.description.toLowerCase().startsWith(a.toLowerCase())||e.status.toLowerCase().startsWith(a.toLowerCase())||e.posted_date.toLowerCase().startsWith(a.toLowerCase()),s=e.user_details.user_name.toLowerCase().startsWith(a.toLowerCase())||e.user_details.email.toLowerCase().startsWith(a.toLowerCase())||e.purpose.toLowerCase().startsWith(a.toLowerCase())||e.description.toLowerCase().startsWith(a.toLowerCase())||e.status.toLowerCase().startsWith(a.toLowerCase())||e.posted_date.toLowerCase().startsWith(a.toLowerCase());return t||(!t&&s?s:null)})),x(s),b(a))}})]})}),Object(Y.jsx)(k.a,{printableId:"printme",noHeader:!0,pagination:!0,selectableRows:!0,columns:re,paginationPerPage:10,className:"react-dataTable",sortIcon:Object(Y.jsx)(A.a,{size:10}),paginationDefaultPage:d+1,paginationComponent:function(){var e;return Object(Y.jsx)(N.a,(e={previousLabel:"",nextLabel:"",forcePage:d,onPageChange:function(e){return function(e){u(e.selected)}(e)},pageCount:p.length?f.length/10:t.allData.length/10||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(r.a)(e,"breakClassName","page-item"),Object(r.a)(e,"breakLinkClassName","page-link"),Object(r.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:p.length?f:t.allData,selectableRowsComponent:ce})]})})};a(518),t.default=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){null!==Object(b.g)()&&r(JSON.parse(localStorage.getItem("userData")))}),[]),Object(Y.jsx)("div",{className:"app-user-list",children:"Financial Admin"===(null===a||void 0===a?void 0:a.role_name)||"Super Admin"===(null===a||void 0===a?void 0:a.role_name)?Object(Y.jsx)(Z,{}):Object(Y.jsx)(ie,{})})}},518:function(e,t,a){},664:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-20.40d668f5.jpg"},827:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-16.1850b51c.jpg"},892:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-21.d383013d.jpg"},893:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-23.c1d416e5.jpg"},931:function(e,t,a){var s={"./avatar-s-1.jpg":32,"./avatar-s-10.jpg":85,"./avatar-s-11.jpg":84,"./avatar-s-12.jpg":234,"./avatar-s-13.jpg":129,"./avatar-s-14.jpg":237,"./avatar-s-15.jpg":239,"./avatar-s-16.jpg":827,"./avatar-s-17.jpg":996,"./avatar-s-18.jpg":271,"./avatar-s-19.jpg":997,"./avatar-s-2.jpg":42,"./avatar-s-20.jpg":664,"./avatar-s-21.jpg":892,"./avatar-s-22.jpg":272,"./avatar-s-23.jpg":893,"./avatar-s-24.jpg":998,"./avatar-s-25.jpg":238,"./avatar-s-26.jpg":243,"./avatar-s-3.jpg":23,"./avatar-s-4.jpg":60,"./avatar-s-5.jpg":41,"./avatar-s-6.jpg":83,"./avatar-s-7.jpg":59,"./avatar-s-8.jpg":33,"./avatar-s-9.jpg":19};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id=931},996:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-17.ac876056.jpg"},997:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-19.f39063a2.jpg"},998:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-24.a649af23.jpg"}}]);
//# sourceMappingURL=156.a961439c.chunk.js.map