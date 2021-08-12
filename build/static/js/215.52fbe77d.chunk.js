(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[215],{2251:function(e,t,c){"use strict";c.r(t);var s=c(28),a=c(1),n=c(1206),r=c(484),l=c(936),i=c(81),d=c(502),o=c(503),j=c(515),u=c(507),m=c(504),b=c(496),h=c(497),x=c(508),O=c.n(x),v=c(6),f=function(e){var t=e.selectedTransaction;return Object(v.jsx)(m.a,{children:Object(v.jsx)(b.a,{children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)(o.a,{xl:"6",lg:"12",className:"d-flex flex-column justify-content-between border-container-lg",children:Object(v.jsxs)("div",{className:"user-avatar-section",children:[Object(v.jsx)("h3",{children:"User Details"}),Object(v.jsxs)("div",{className:"d-flex justify-content-start",children:[function(){if(null!==t&&t.avatar)return Object(v.jsx)("img",{src:t.avatar,alt:"user-avatar",className:"img-fluid rounded",height:"104",width:"104"});var e=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(v.jsx)(u.a,{initials:!0,color:e,className:"rounded",content:t.user.names,contentStyles:{borderRadius:0,fontSize:"calc(36px)",width:"100%",height:"100%"},style:{height:"90px",width:"90px"}})}(),Object(v.jsx)("div",{className:"d-flex flex-column ml-1",children:Object(v.jsxs)("div",{className:"user-info mt-2",children:[Object(v.jsx)("h4",{className:"mb-0",children:null!==t?t.user.names:"Eleanor Aguilar"}),Object(v.jsx)(h.a,{tag:"span",children:null!==t?t.user.email:"eleanor.aguilar@gmail.com"})]})})]}),Object(v.jsxs)("div",{className:"d-flex align-items-center mr-2 mt-1",children:[Object(v.jsx)("div",{className:"color-box",children:Object(v.jsx)("span",{children:"Username: "})}),Object(v.jsx)("div",{className:"ml-1",children:Object(v.jsx)("h6",{className:"mb-0",children:null!==t.user.username?t.user.username:"No Username"})})]}),Object(v.jsxs)("div",{className:"d-flex align-items-center mr-2 mt-1",children:[Object(v.jsx)("div",{className:"color-box",children:Object(v.jsx)("span",{children:"Phone:"})}),Object(v.jsx)("div",{className:"ml-1",children:Object(v.jsx)("h6",{className:"mb-0",children:t.user.phone})})]})]})}),Object(v.jsx)(o.a,{xl:"6",lg:"12",className:"d-flex flex-column justify-content-between border-container-lg",children:Object(v.jsxs)("div",{className:"user-avatar-section",children:[Object(v.jsx)("h3",{children:"Transaction Details"}),Object(v.jsxs)("div",{className:"d-flex align-items-center mr-2 mt-1",children:[Object(v.jsx)("div",{className:"color-box",children:Object(v.jsx)("span",{children:"Transaction Id: "})}),Object(v.jsx)("div",{className:"ml-1",children:Object(v.jsx)("h6",{className:"mb-0",children:t.trans_id})})]}),Object(v.jsxs)("div",{className:"d-flex align-items-center mr-2 mt-1",children:[Object(v.jsx)("div",{className:"color-box",children:Object(v.jsx)("span",{children:"Transaction Type:"})}),Object(v.jsx)("div",{className:"ml-1",children:Object(v.jsx)("h6",{className:"mb-0",children:t.trans_type})})]}),Object(v.jsxs)("div",{className:"d-flex align-items-center mr-2 mt-1",children:[Object(v.jsx)("div",{className:"color-box",children:Object(v.jsx)("span",{children:"Transaction Amount:"})}),Object(v.jsx)("div",{className:"ml-1",children:Object(v.jsx)("h6",{className:"mb-0",children:t.trans_amount.toLocaleString("en-US",{style:"currency",currency:"NGN"})})})]}),Object(v.jsxs)("div",{className:"d-flex align-items-center mr-2 mt-1",children:[Object(v.jsx)("div",{className:"color-box",children:Object(v.jsx)("span",{children:"Balance:"})}),Object(v.jsx)("div",{className:"ml-1",children:Object(v.jsx)("h6",{className:"mb-0",children:t.balance.toLocaleString("en-US",{style:"currency",currency:"NGN"})})})]}),Object(v.jsxs)("div",{className:"d-flex align-items-center mr-2 mt-1",children:[Object(v.jsx)("div",{className:"color-box",children:Object(v.jsx)("span",{children:"Narration:"})}),Object(v.jsx)("div",{className:"ml-1",children:Object(v.jsx)("h6",{className:"mb-0",children:t.narration})})]}),Object(v.jsxs)("div",{className:"d-flex align-items-center mr-2 mt-1",children:[Object(v.jsx)("div",{className:"color-box",children:Object(v.jsx)("span",{children:"Transaction Date:"})}),Object(v.jsx)("div",{className:"ml-1",children:Object(v.jsx)("h6",{className:"mb-0",children:O()(t.trans_date).format("lll")})})]})]})})]})})})},N=c(518);c(539),t.default=function(e){var t=Object(i.c)((function(e){return e.appiaTransaction})),c=Object(i.b)(),u=Object(n.i)().id,m=Object(a.useState)(null),b=Object(s.a)(m,2),h=(b[0],b[1]),x=Object(a.useState)(null),O=Object(s.a)(x,2),p=O[0];O[1];return Object(a.useEffect)((function(){c(Object(l.c)(t.allData,u))}),[c]),Object(a.useEffect)((function(){null!==Object(N.g)()&&h(JSON.parse(localStorage.getItem("userData")))}),[]),null!==t.selectedTransaction&&void 0!==t.selectedTransaction?Object(v.jsx)("div",{className:"app-user-view",children:Object(v.jsx)(d.a,{children:Object(v.jsx)(o.a,{xl:"9",lg:"8",md:"7",children:Object(v.jsx)(f,{selectedTransaction:t.selectedTransaction,detail:p})})})}):Object(v.jsxs)(j.a,{color:"danger",children:[Object(v.jsx)("h4",{className:"alert-heading",children:"Users not found"}),Object(v.jsxs)("div",{className:"alert-body",children:["Users with id: ",u," doesn't exist. Check list of all Users: ",Object(v.jsx)(r.b,{to:"/appia/user/list",children:"Users List"})]})]})}},539:function(e,t,c){},936:function(e,t,c){"use strict";c.d(t,"a",(function(){return l})),c.d(t,"b",(function(){return i})),c.d(t,"c",(function(){return d}));var s=c(520),a=c.n(s),n=c(522),r=c(518),l=function(){return function(){var e=Object(n.a)(a.a.mark((function e(t){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.a)({url:"/admin/users/transactions/all",method:"POST"},t);case 2:if(!((c=e.sent)&&c.data.data&&c.data.success)){e.next=8;break}return e.next=6,t({type:"GET_ALL_TRANSACTIONS_DATA",data:c.data.data});case 6:e.next=10;break;case 8:console.log(c),Object(r.l)("Oops!","Something went wrong.","error");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},i=function(e,t){return function(){var c=Object(n.a)(a.a.mark((function c(s){var n,l,i,d,o,j,u,m;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:n=t.q,l=void 0===n?"":n,i=t.perPage,d=void 0===i?10:i,o=t.page,j=void 0===o?1:o,u=null===l||void 0===l?void 0:l.toLowerCase(),m=null===e||void 0===e?void 0:e.filter((function(e){var t,c,s,a;return(null===e||void 0===e||null===(t=e.trans_id)||void 0===t||null===(c=t.toLowerCase())||void 0===c?void 0:c.includes(u))||(null===e||void 0===e||null===(s=e.trans_type)||void 0===s||null===(a=s.toLowerCase())||void 0===a?void 0:a.includes(u))})),s({type:"GET_FILTERED_TRANSACTION_DATA",data:Object(r.i)(m,d,j),totalPages:m.length,params:t});case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},d=function(e,t){return function(){var c=Object(n.a)(a.a.mark((function c(s){var n;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:n=e.find((function(e){return e.trans_id===t})),s({type:"GET_TRANSACTION",selectedTransaction:n});case 2:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=215.52fbe77d.chunk.js.map