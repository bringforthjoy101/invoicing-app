(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[192],{2239:function(e,t,a){"use strict";a.r(t);var c=a(28),s=a(1),n=a(813),r=a(473),l=(a(503),a(82)),i=a(483),d=a(480),o=a(481),j=a(508),b=a(486),u=a.n(b),m=a(488),x=a(482),h=a(484),O=a(478),p=a(469),f=a(550),g=a(565),N=a(545),v=a(1072),w=a(598),y=a(566),_=a(591),P=a(607),k=(a(124),a(647)),S=a(6),L=function(e){var t=e.selectedPlan,a=Object(l.b)(),n=Object(s.useState)(!1),r=Object(c.a)(n,2),d=r[0],o=r[1],j=P.c().shape({data_plan_id:P.d().required("required")});return Object(S.jsxs)(x.a,{className:"plan-card border-primary",children:[Object(S.jsx)(h.a,{className:"d-flex justify-content-between align-items-center pt-75 pb-1",children:Object(S.jsx)("h5",{className:"mb-0",children:"Actions"})}),Object(S.jsxs)(O.a,{children:[Object(S.jsx)(p.a.Ripple,{className:"text-center mb-1",color:"danger",outline:!0,block:!0,onClick:function(){return o(!d)},children:"Delete Plan"}),Object(S.jsxs)(f.a,{isOpen:d,toggle:function(){return o(!d)},className:"modal-dialog-centered",children:[Object(S.jsx)(g.a,{toggle:function(){return o(!d)},children:"Add Funds"}),Object(S.jsx)(_.d,{initialValues:{data_plan_id:t.id},validationSchema:j,onSubmit:function(){var e=Object(m.a)(u.a.mark((function e(t,c){var s,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.setSubmitting,n=JSON.stringify(t),e.prev=2,e.next=5,Object(i.a)({url:"/admin/rewards/data-plan/delete",method:"POST",body:n},a);case 5:(r=e.sent)?r.data.success?(Object(i.l)("Great job!",r.data.message,"success"),a(Object(k.a)())):Object(i.l)("Oops!",r.data.message,"error"):Object(i.l)("Oops!","Something went wrong with your network.","error"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error({error:e.t0});case 12:s(!1),o(!d);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,a=e.touched,c=e.isSubmitting;return Object(S.jsxs)(_.c,{children:[Object(S.jsx)(N.a,{children:Object(S.jsxs)(v.a,{children:[Object(S.jsx)("label",{htmlFor:"data_plan_id",children:"Plan Id"}),Object(S.jsx)(_.b,{type:"number",name:"data_plan_id",placeholder:"plan id",className:"form-control ".concat(t.data_plan_id&&a.data_plan_id&&"is-invalid")}),Object(S.jsx)(_.a,{name:"data_plan_id",component:"div",className:"field-error text-danger"})]})}),Object(S.jsx)(w.a,{children:Object(S.jsxs)(p.a.Ripple,{color:"primary",type:"submit",disabled:c,children:[c&&Object(S.jsx)(y.a,{color:"white",size:"sm"}),Object(S.jsx)("span",{className:"ml-50",children:"Delete Plan"})]})})]})}})]})]})]})},A=(a(477),a(485)),E=a(1170),T=a(1115),C=a(1197),D=a(1171),G=a(1132),U=function(e){var t=e.selectedPlan;return Object(S.jsx)(x.a,{children:Object(S.jsx)(O.a,{children:Object(S.jsxs)(d.a,{children:[Object(S.jsx)(o.a,{xl:"6",lg:"12",className:"mt-2 mt-xl-0",children:Object(S.jsxs)("div",{className:"user-info-wrapper",children:[Object(S.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(S.jsxs)("div",{className:"d-flex align-items-center",children:[Object(S.jsx)("div",{className:"color-box bg-light-info",children:Object(S.jsx)(E.a,{className:"text-info"})}),Object(S.jsx)(A.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Product Id"})]}),Object(S.jsx)(A.a,{className:"mb-0",children:t.product_id})]}),Object(S.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(S.jsxs)("div",{className:"d-flex align-items-center",children:[Object(S.jsx)("div",{className:"color-box bg-light-warning",children:Object(S.jsx)(T.a,{className:"text-warning"})}),Object(S.jsx)(A.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Network"})]}),Object(S.jsx)(A.a,{className:"mb-0",children:t.network})]}),Object(S.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(S.jsxs)("div",{className:"d-flex align-items-center",children:[Object(S.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(S.jsx)(C.a,{className:"text-secoundary"})}),Object(S.jsx)(A.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Price"})]}),Object(S.jsx)(A.a,{className:"text-capitalize mb-0",children:t.price.toLocaleString("en-US",{style:"currency",currency:"NGN"})})]})]})}),Object(S.jsx)(o.a,{xl:"6",lg:"12",className:"mt-2 mt-xl-0",children:Object(S.jsxs)("div",{className:"user-info-wrapper",children:[Object(S.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(S.jsxs)("div",{className:"d-flex align-items-center",children:[Object(S.jsx)("div",{className:"color-box bg-light-primary",children:Object(S.jsx)(D.a,{className:"text-primary"})}),Object(S.jsx)(A.a,{tag:"span",className:"user-info-title text-capitalize font-weight-bold mb-0 ml-1",children:"Category"})]}),Object(S.jsx)(A.a,{className:"text-capitalize mb-0",children:t.category})]}),Object(S.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(S.jsxs)("div",{className:"d-flex align-items-center",children:[Object(S.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(S.jsx)(C.a,{className:"text-secoundary"})}),Object(S.jsx)(A.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Allowance"})]}),Object(S.jsx)(A.a,{className:"mb-0",children:t.allowance})]}),Object(S.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(S.jsxs)("div",{className:"d-flex align-items-center",children:[Object(S.jsx)("div",{className:"color-box bg-light-success",children:Object(S.jsx)(G.a,{className:"text-success"})}),Object(S.jsx)(A.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Validity"})]}),Object(S.jsx)(A.a,{className:"mb-0",children:t.validity})]})]})})]})})})};a(492),t.default=function(e){var t=Object(l.c)((function(e){return e.appiaDataPlans})),a=Object(l.b)(),b=Object(n.i)().id,u=Object(s.useState)(null),m=Object(c.a)(u,2),x=(m[0],m[1]);return Object(s.useEffect)((function(){null!==Object(i.g)()&&x(JSON.parse(localStorage.getItem("userData")))}),[]),Object(s.useEffect)((function(){}),[a]),null!==t.selectedPlan&&void 0!==t.selectedPlan?Object(S.jsx)("div",{className:"app-user-view",children:Object(S.jsxs)(d.a,{children:[Object(S.jsx)(o.a,{xl:"9",lg:"8",md:"7",children:Object(S.jsx)(U,{selectedPlan:t.selectedPlan})}),Object(S.jsx)(o.a,{xl:"3",lg:"4",md:"5",children:Object(S.jsx)(L,{selectedPlan:t.selectedPlan})})]})}):Object(S.jsxs)(j.a,{color:"danger",children:[Object(S.jsx)("h4",{className:"alert-heading",children:"Users not found"}),Object(S.jsxs)("div",{className:"alert-body",children:["Users with id: ",b," doesn't exist. Check list of all Users: ",Object(S.jsx)(r.b,{to:"/app/user/list",children:"Users List"})]})]})}},492:function(e,t,a){},647:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return d}));var c=a(486),s=a.n(c),n=a(488),r=a(483),l=(a(583),function(){return function(){var e=Object(n.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.a)({url:"/admin/rewards/data-plans/get",method:"GET"},t);case 2:if(!(a=e.sent)){e.next=12;break}if(!a.data.data||!a.data.success){e.next=9;break}return e.next=7,t({type:"GET_ALL_DATA_PLANS",data:a.data.data});case 7:e.next=10;break;case 9:console.log(a.error);case 10:e.next=13;break;case 12:Object(r.l)("Oops!","Somthing went wrong with your network.","error");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),i=function(e,t){return function(){var a=Object(n.a)(s.a.mark((function a(c){var n,l,i,d,o,j,b,u,m,x,h;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=t.q,l=void 0===n?"":n,i=t.perPage,d=void 0===i?10:i,o=t.page,j=void 0===o?1:o,b=t.role,void 0===b?null:b,u=t.category,m=void 0===u?null:u,x=l.toLowerCase(),h=e.filter((function(e){return(e.network.toLowerCase().includes(x)||e.category.toLowerCase().includes(x)||e.validity.toLowerCase().includes(x))&&e.category===(m||e.category)})),c({type:"GET_FILTERED_DATA_PLANS",data:Object(r.i)(h,d,j),totalPages:h.length,params:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},d=function(e,t){return function(){var a=Object(n.a)(s.a.mark((function a(c){var n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=e.find((function(e){return e.id===t})),c({type:"GET_PLAN",selectedPlan:n});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=192.a083c60c.chunk.js.map