(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[214],{1172:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return d})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var s=a(520),c=a.n(s),n=a(522),r=(a(82),a(518)),i=function(){return function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.a)({url:"/admin/transfers",method:"GET"},t);case 2:if(a=e.sent,console.log({response:a}),!a){e.next=13;break}if(!a.data.data||!a.data.success){e.next=10;break}return e.next=8,t({type:"GET_ALL_TRANSFERS",data:a.data.data});case 8:e.next=11;break;case 10:console.log(a.error);case 11:e.next=14;break;case 13:Object(r.l)("Oops!","Somthing went wrong with your network.","error");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(e,t){return function(){var a=Object(n.a)(c.a.mark((function a(s){var n,i,l,d,o,j,b,m,x,u;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=t.q,i=void 0===n?"":n,l=t.perPage,d=void 0===l?10:l,o=t.page,j=void 0===o?1:o,b=t.status,m=void 0===b?null:b,x=i.toLowerCase(),u=e.filter((function(e){return(e.receiver_name.toLowerCase().includes(x)||e.bank.toLowerCase().includes(x))&&e.status===(m||e.status)})),s({type:"GET_FILTERED_DATA",data:Object(r.i)(u,d,j),totalPages:u.length,params:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},d=function(e,t){return function(){var a=Object(n.a)(c.a.mark((function a(s){var n;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=e.find((function(e){return e.id===t})),s({type:"GET_TRANSFER",selectedTransfer:n});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},o=function(e){var t=e.trans_id;return function(){var e=Object(n.a)(c.a.mark((function e(a){var s,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=JSON.stringify({trans_id:t}),e.next=3,Object(r.a)({url:"/admin/transfer/approve",method:"POST",body:s},a);case 3:(n=e.sent)&&n.data.success?Object(r.l)("Good!","".concat(n.data.message),"success"):(console.log(n),Object(r.l)("Oops!","Somthing went wrong with your network.","error"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e){var t=e.trans_id,a=e.remark;return function(){var e=Object(n.a)(c.a.mark((function e(s){var n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.stringify({trans_id:t,remark:a}),e.next=3,Object(r.a)({url:"/admin/transfer/decline",method:"POST",body:n},s);case 3:i=e.sent,console.log({response:i}),i&&i.data.success?Object(r.l)("Good!","".concat(i.data.message),"success"):(console.log(i),Object(r.l)("Oops!","Somthing went wrong with your network.","error"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},2227:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(1207),n=a(484),r=a(508),i=a.n(r),l=a(81),d=a(502),o=a(503),j=a(517),b=a(504),m=a(499),x=a(496),u=a(520),h=a.n(u),O=a(522),f=a(28),p=a(468),g=a(562),v=a(563),N=a(561),w=a(660),y=a(568),_=a(564),k=a(810),T=a(816),S=a(1172),z=a(6),R=T.c().shape({trans_id:T.d().required("required")}),A=T.c().shape({trans_id:T.d().required("required"),remark:T.d().required("required")}),I=function(e){var t=e.trans_id,a=Object(l.b)(),c=Object(s.useState)(!1),n=Object(f.a)(c,2),r=n[0],i=n[1];return Object(z.jsxs)("div",{children:[Object(z.jsx)(p.a.Ripple,{className:"text-center mb-1",color:"primary",outline:!0,block:!0,onClick:function(){return i(!r)},children:"Approve Transfer"}),Object(z.jsxs)(g.a,{isOpen:r,toggle:function(){return i(!r)},className:"modal-dialog-centered",children:[Object(z.jsx)(v.a,{toggle:function(){return i(!r)},children:"Approve Transfer"}),Object(z.jsx)(k.d,{initialValues:{trans_id:t},validationSchema:R,onSubmit:function(){var e=Object(O.a)(h.a.mark((function e(t,s){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s.setSubmitting,e.next=3,a(Object(S.a)(t));case 3:c(!1),i(!r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,a=e.touched,s=e.isSubmitting;return Object(z.jsxs)(k.c,{children:[Object(z.jsx)(N.a,{children:Object(z.jsxs)(w.a,{children:[Object(z.jsx)("label",{htmlFor:"trans_id",children:"Transaction Id"}),Object(z.jsx)(k.b,{type:"text",name:"trans_id",placeholder:"trans_id",className:"form-control ".concat(t.trans_id&&a.trans_id&&"is-invalid")}),Object(z.jsx)(k.a,{name:"trans_id",component:"div",className:"field-error text-danger"})]})}),Object(z.jsx)(y.a,{children:Object(z.jsxs)(p.a.Ripple,{color:"primary",type:"submit",disabled:s,children:[s&&Object(z.jsx)(_.a,{color:"white",size:"sm"}),Object(z.jsx)("span",{className:"ml-50",children:"Approve"})]})})]})}})]})]})},C=function(e){var t=e.trans_id,a=Object(l.b)(),c=Object(s.useState)(!1),n=Object(f.a)(c,2),r=n[0],i=n[1];return Object(z.jsxs)("div",{children:[Object(z.jsx)(p.a.Ripple,{className:"text-center mb-1",color:"danger",outline:!0,block:!0,onClick:function(){return i(!r)},children:"Decline Transfer"}),Object(z.jsxs)(g.a,{isOpen:r,toggle:function(){return i(!r)},className:"modal-dialog-centered",children:[Object(z.jsx)(v.a,{toggle:function(){return i(!r)},children:"Disapprove Transfer"}),Object(z.jsx)(k.d,{initialValues:{trans_id:t,remark:""},validationSchema:A,onSubmit:function(){var e=Object(O.a)(h.a.mark((function e(t,s){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s.setSubmitting,e.next=3,a(Object(S.b)(t));case 3:c(!1),i(!r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,a=e.touched,s=e.isSubmitting;return Object(z.jsxs)(k.c,{children:[Object(z.jsxs)(N.a,{children:[Object(z.jsxs)(w.a,{children:[Object(z.jsx)("label",{htmlFor:"trans_id",children:"Transaction Id"}),Object(z.jsx)(k.b,{type:"text",name:"trans_id",placeholder:"trans_id",className:"form-control ".concat(t.trans_id&&a.trans_id&&"is-invalid")}),Object(z.jsx)(k.a,{name:"trans_id",component:"div",className:"field-error text-danger"})]}),Object(z.jsxs)(w.a,{children:[Object(z.jsx)("label",{htmlFor:"remark",children:"Remark"}),Object(z.jsx)(k.b,{type:"text",name:"remark",placeholder:"remark",className:"form-control ".concat(t.remark&&a.trans_id&&"is-invalid")}),Object(z.jsx)(k.a,{name:"remark",component:"div",className:"field-error text-danger"})]})]}),Object(z.jsx)(y.a,{children:Object(z.jsxs)(p.a.Ripple,{color:"primary",type:"submit",disabled:s,children:[s&&Object(z.jsx)(_.a,{color:"white",size:"sm"}),Object(z.jsx)("span",{className:"ml-50",children:"Disapprove"})]})})]})}})]})]})},E=function(e){var t=e.selectedTransfer;return Object(z.jsxs)(b.a,{className:"plan-card border-primary",children:[Object(z.jsx)(m.a,{className:"d-flex justify-content-between align-items-center pt-75 pb-1",children:Object(z.jsx)("h5",{className:"mb-0",children:"Actions"})}),Object(z.jsxs)(x.a,{children:[Object(z.jsx)(I,{trans_id:t.trans_id}),Object(z.jsx)(C,{trans_id:t.trans_id})]})]})},L=(a(507),a(497)),q=a(939),G=a(869),D=a(1124),F=a(1143),U=a(836),P=a(851),J=a(764),B=a(1108),V=a(1133),H=function(e){var t=e.selectedTransfer;return Object(z.jsx)(b.a,{children:Object(z.jsx)(x.a,{children:Object(z.jsxs)(d.a,{children:[Object(z.jsx)(o.a,{xl:"6",lg:"12",className:"mt-2 mt-xl-0",children:Object(z.jsxs)("div",{className:"user-info-wrapper",children:[Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(q.a,{})}),Object(z.jsx)("div",{className:"d-flex align-items-center",children:Object(z.jsx)(L.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"User Id"})}),Object(z.jsx)(L.a,{className:"text-capitalize mb-0",children:null===t||void 0===t?void 0:t.user_id})]}),Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(G.a,{})}),Object(z.jsx)("div",{className:"d-flex align-items-center",children:Object(z.jsx)(L.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Account Number"})}),Object(z.jsx)(L.a,{className:"text-capitalize mb-0",children:null===t||void 0===t?void 0:t.account_number})]}),Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(D.a,{})}),Object(z.jsx)("div",{className:"d-flex align-items-center",children:Object(z.jsx)(L.a,{tag:"span",className:"user-info-title text-capitalize font-weight-bold mb-0 ml-1",children:"Sender"})}),Object(z.jsx)(L.a,{className:"text-capitalize mb-0",children:t.sender_name})]}),Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(q.a,{})}),Object(z.jsx)("div",{className:"d-flex align-items-center",children:Object(z.jsx)(L.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Receiver Id"})}),Object(z.jsx)(L.a,{className:"text-capitalize mb-0",children:null!==(null===t||void 0===t?void 0:t.receiver_id)?t.receiver_id:"No receiver Id"})]}),Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(D.a,{})}),Object(z.jsx)("div",{className:"d-flex align-items-center",children:Object(z.jsx)(L.a,{tag:"span",className:"user-info-title text-capitalize font-weight-bold mb-0 ml-1",children:"Receiver"})}),Object(z.jsx)(L.a,{className:"text-capitalize mb-0",children:t.receiver_name})]}),Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(q.a,{})}),Object(z.jsx)("div",{className:"d-flex align-items-center",children:Object(z.jsx)(L.a,{tag:"span",className:"user-info-title text-capitalize font-weight-bold mb-0 ml-1",children:"Transaction Id"})}),Object(z.jsx)(L.a,{className:"text-capitalize mb-0",children:t.trans_id})]}),Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(F.a,{})}),Object(z.jsx)("div",{className:"d-flex align-items-center",children:Object(z.jsx)(L.a,{tag:"span",className:"user-info-title text-capitalize font-weight-bold mb-0 ml-1",children:"Transaction Type"})}),Object(z.jsx)(L.a,{className:"text-capitalize mb-0",children:t.trans_type})]})]})}),Object(z.jsx)(o.a,{xl:"6",lg:"12",className:"mt-2 mt-xl-0",children:Object(z.jsxs)("div",{className:"user-info-wrapper",children:[Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(G.a,{})}),Object(z.jsx)("div",{className:"d-flex align-items-center",children:Object(z.jsx)(L.a,{tag:"span",className:"user-info-title text-capitalize font-weight-bold mb-0 ml-1",children:"Transaction Amount"})}),Object(z.jsx)(L.a,{className:"text-capitalize mb-0",children:t.trans_amount.toLocaleString("en-US",{style:"currency",currency:"NGN"})})]}),Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(U.a,{className:"text-secoundary"})}),Object(z.jsx)("div",{className:"d-flex align-items-center",children:Object(z.jsx)(L.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Bank"})}),Object(z.jsx)(L.a,{className:"text-capitalize mb-0",children:null===t||void 0===t?void 0:t.bank})]}),Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(U.a,{className:"text-secoundary"})}),Object(z.jsx)("div",{className:"d-flex align-items-center",children:Object(z.jsx)(L.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Bank Code"})}),Object(z.jsx)(L.a,{className:"text-capitalize mb-0",children:null!==(null===t||void 0===t?void 0:t.bank_code)?t.bank_code:"No Code"})]}),Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsxs)("div",{className:"d-flex align-items-center",children:[Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(P.a,{className:"text-secoundary"})}),Object(z.jsx)(L.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Tracking Id"})]}),Object(z.jsx)(L.a,{className:"text-capitalize mb-0",children:null!==t.tracking_id?t.tracking_id:"No Tracking Id"})]}),Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsxs)("div",{className:"d-flex align-items-center",children:["Successful"===t.status?Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(J.a,{className:"text-secoundary"})}):Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(B.a,{className:"text-secoundary"})}),Object(z.jsx)(L.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Transaction Status"})]}),Object(z.jsx)(L.a,{className:"text-capitalize mb-0",children:t.status})]}),Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(U.a,{className:"text-secoundary"})}),Object(z.jsx)("div",{className:"d-flex align-items-center",children:Object(z.jsx)(L.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Remarks"})}),Object(z.jsx)(L.a,{className:"text-capitalize mb-0",children:null===t||void 0===t?void 0:t.remarks})]}),Object(z.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(z.jsxs)("div",{className:"d-flex align-items-center",children:[Object(z.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(z.jsx)(V.a,{className:"text-secoundary"})}),Object(z.jsx)(L.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Transaction Date"})]}),Object(z.jsx)(L.a,{children:i()(null===t||void 0===t?void 0:t.trans_date).format("lll")})]})]})})]})})})};a(539),t.default=function(e){var t=Object(l.c)((function(e){return e.appiaTransfers})),a=Object(c.i)().id;return null!==t.selectedTransfer&&void 0!==t.selectedTransfer?Object(z.jsxs)("div",{className:"app-user-view",children:[Object(z.jsx)(d.a,{children:Object(z.jsx)(o.a,{xl:"12",lg:"12",md:"12",children:Object(z.jsx)(H,{selectedTransfer:t.selectedTransfer})})}),"Pending"===t.selectedTransfer.status?Object(z.jsx)(d.a,{children:Object(z.jsx)(o.a,{xl:"3",lg:"4",md:"5",children:Object(z.jsx)(E,{selectedTransfer:t.selectedTransfer})})}):""]}):Object(z.jsxs)(j.a,{color:"danger",children:[Object(z.jsx)("h4",{className:"alert-heading",children:"Users not found"}),Object(z.jsxs)("div",{className:"alert-body",children:["Users with id: ",a," doesn't exist. Check list of all Users: ",Object(z.jsx)(n.b,{to:"/app/user/list",children:"Users List"})]})]})}},539:function(e,t,a){}}]);
//# sourceMappingURL=214.ccf97865.chunk.js.map