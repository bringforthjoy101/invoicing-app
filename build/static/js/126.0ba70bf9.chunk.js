(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[126],{2216:function(e,a,t){"use strict";t.r(a);var s=t(28),c=t(1),n=t(806),r=t(473),i=t(645),l=t(504),o=t.n(l),d=t(81),b=t(483),m=t(479),j=t(482),u=t(508),O=t(481),g=t(488),p=(t(571),t(591)),x=(t(124),t(6)),f=function(e){e.selectedPlan,Object(d.b)();var a=Object(c.useState)(!1),t=Object(s.a)(a,2);t[0],t[1],p.c().shape({data_plan_id:p.d().required("required")});return Object(x.jsx)(O.a,{className:"plan-card border-primary",children:Object(x.jsx)(g.a,{className:"d-flex justify-content-between align-items-center pt-75 pb-1",children:Object(x.jsx)("h5",{className:"mb-0",children:"Actions"})})})},h=t(478),N=t(484),w=t(1083),A=t(1028),v=t(1045),C=t(1050),y=function(e){var a=e.selectedClaim;return Object(x.jsx)(O.a,{children:Object(x.jsx)(h.a,{children:Object(x.jsx)(m.a,{children:Object(x.jsx)(j.a,{xl:"12",lg:"12",className:"mt-2 mt-xl-0",children:Object(x.jsxs)("div",{className:"user-info-wrapper",children:[Object(x.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(x.jsxs)("div",{className:"d-flex align-items-center",children:[Object(x.jsx)("div",{className:"color-box bg-light-info",children:Object(x.jsx)(w.a,{className:"text-info"})}),Object(x.jsx)(N.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"User Id"})]}),Object(x.jsx)(N.a,{className:"mb-0",children:a.user_id})]}),Object(x.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(x.jsxs)("div",{className:"d-flex align-items-center",children:[Object(x.jsx)("div",{className:"color-box bg-light-info",children:Object(x.jsx)(w.a,{className:"text-info"})}),Object(x.jsx)(N.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Reward Id"})]}),Object(x.jsx)(N.a,{className:"mb-0",children:a.reward_id})]}),Object(x.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(x.jsxs)("div",{className:"d-flex align-items-center",children:[Object(x.jsx)("div",{className:"color-box bg-light-warning",children:Object(x.jsx)(A.a,{className:"text-warning"})}),Object(x.jsx)(N.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Transaction Id"})]}),Object(x.jsx)(N.a,{className:"mb-0",children:a.transaction_id})]}),Object(x.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(x.jsxs)("div",{className:"d-flex align-items-center",children:[Object(x.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(x.jsx)(v.a,{className:"text-secoundary"})}),Object(x.jsx)(N.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Date Claimed"})]}),Object(x.jsx)(N.a,{className:"text-capitalize mb-0",children:o()(null===a||void 0===a?void 0:a.created_at).format("lll")})]}),Object(x.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-1",children:[Object(x.jsxs)("div",{className:"d-flex align-items-center",children:[Object(x.jsx)("div",{className:"color-box bg-light-secoundary",children:Object(x.jsx)(C.a,{className:"text-secoundary"})}),Object(x.jsx)(N.a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ml-1",children:"Claim Code"})]}),Object(x.jsx)(N.a,{className:"text-capitalize mb-0",children:null!==(null===a||void 0===a?void 0:a.code)?a.code:"123"})]})]})})})})})},R=t(477),E=t(580),M=(t(130),t(640)),I=t(1001),D=t(480),U=(I.a,M.a,I.a,I.a,R.a,I.a,function(e){var a=e.claimHistory,t=[];return a.forEach((function(e){t.push({title:e.user_id,content:e.claim,meta:o()(e.created_at).format("lll"),customContent:Object(x.jsxs)(I.a,{className:"align-items-center",children:[Object(x.jsx)(R.a,{color:"primary",className:"mr-1",content:e.user_id||"Appia Admin",initials:!0}),Object(x.jsxs)(I.a,{className:"ml-50",body:!0,children:[Object(x.jsxs)("h6",{className:"mb-0",children:["Transaction Id: ",e.transaction_id]}),Object(x.jsxs)("span",{children:["Claim Code: ",e.code||"123"]})]})]})})})),Object(x.jsxs)(O.a,{children:[Object(x.jsx)(g.a,{children:Object(x.jsx)(D.a,{tag:"h4",className:"mb-2",children:"User Claimed History"})}),Object(x.jsx)(h.a,{className:"overflow-auto",style:{maxHeight:"350px"},children:Object(x.jsx)(E.a,{data:t})})]})});t(492),a.default=function(e){var a=Object(d.c)((function(e){return e.appiaClaimedRewards})),t=Object(d.b)(),l=Object(n.i)().id,o=Object(c.useState)(null),O=Object(s.a)(o,2),g=(O[0],O[1]);Object(c.useEffect)((function(){null!==Object(b.g)()&&g(JSON.parse(localStorage.getItem("userData")))}),[]);var p=a.selectedClaim.reward_id;return Object(c.useEffect)((function(){t(Object(i.d)(p))}),[t]),null!==a.selectedClaim&&void 0!==a.selectedClaim?Object(x.jsxs)("div",{className:"app-user-view",children:[Object(x.jsxs)(m.a,{children:[Object(x.jsx)(j.a,{xl:"9",lg:"8",md:"7",children:Object(x.jsx)(y,{selectedClaim:a.selectedClaim})}),Object(x.jsx)(j.a,{xl:"3",lg:"4",md:"5",children:Object(x.jsx)(f,{selectedClaim:a.selectedClaim})})]}),Object(x.jsx)(m.a,{xl:"9",lg:"8",md:"7",children:Object(x.jsx)(j.a,{md:"6",children:Object(x.jsx)(U,{claimHistory:a.claimHistory})})})]}):Object(x.jsxs)(u.a,{color:"danger",children:[Object(x.jsx)("h4",{className:"alert-heading",children:"Users not found"}),Object(x.jsxs)("div",{className:"alert-body",children:["Users with id: ",l," doesn't exist. Check list of all Users: ",Object(x.jsx)(r.b,{to:"/app/user/list",children:"Users List"})]})]})}},478:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(1),r=t.n(n),i=t(2),l=t.n(i),o=t(27),d=t.n(o),b=t(80),m={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},j=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,i=e.tag,l=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(b.mapToCssModules)(d()(a,"card-body"),t);return r.a.createElement(i,Object(s.a)({},l,{className:o,ref:n}))};j.propTypes=m,j.defaultProps={tag:"div"},a.a=j},480:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(1),r=t.n(n),i=t(2),l=t.n(i),o=t(27),d=t.n(o),b=t(80),m={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object},j=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=Object(c.a)(e,["className","cssModule","tag"]),l=Object(b.mapToCssModules)(d()(a,"card-title"),t);return r.a.createElement(n,Object(s.a)({},i,{className:l}))};j.propTypes=m,j.defaultProps={tag:"div"},a.a=j},484:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(1),r=t.n(n),i=t(2),l=t.n(i),o=t(27),d=t.n(o),b=t(80),m={tag:b.tagPropType,className:l.a.string,cssModule:l.a.object},j=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=Object(c.a)(e,["className","cssModule","tag"]),l=Object(b.mapToCssModules)(d()(a,"card-text"),t);return r.a.createElement(n,Object(s.a)({},i,{className:l}))};j.propTypes=m,j.defaultProps={tag:"p"},a.a=j},492:function(e,a,t){},508:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(476),r=t(1),i=t.n(r),l=t(2),o=t.n(l),d=t(27),b=t.n(d),m=t(80),j=t(498);function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function O(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var g={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:m.tagPropType,transition:o.a.shape(j.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:O(O({},j.a.defaultProps),{},{unmountOnExit:!0})};function x(e){var a=e.className,t=e.closeClassName,n=e.closeAriaLabel,r=e.cssModule,l=e.tag,o=e.color,d=e.isOpen,u=e.toggle,g=e.children,p=e.transition,x=e.fade,f=e.innerRef,h=Object(c.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),N=Object(m.mapToCssModules)(b()(a,"alert","alert-"+o,{"alert-dismissible":u}),r),w=Object(m.mapToCssModules)(b()("close",t),r),A=O(O(O({},j.a.defaultProps),p),{},{baseClass:x?p.baseClass:"",timeout:x?p.timeout:0});return i.a.createElement(j.a,Object(s.a)({},h,A,{tag:l,className:N,in:d,role:"alert",innerRef:f}),u?i.a.createElement("button",{type:"button",className:w,"aria-label":n,onClick:u},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}x.propTypes=g,x.defaultProps=p,a.a=x},580:function(e,a,t){"use strict";var s=t(58),c=t(27),n=t.n(c),r=t(6);a.a=function(e){var a=e.data,t=e.tag,c=e.className,i=t||"ul";return Object(r.jsx)(i,{className:n()("timeline",Object(s.a)({},c,c)),children:a.map((function(e,t){var i,l=e.tag?e.tag:"li";return Object(r.jsxs)(l,{className:n()("timeline-item",Object(s.a)({},e.className,c)),children:[Object(r.jsx)("span",{className:n()("timeline-point",(i={},Object(s.a)(i,"timeline-point-".concat(e.color),e.color),Object(s.a)(i,"timeline-point-indicator",!e.icon),i)),children:e.icon?e.icon:null}),Object(r.jsxs)("div",{className:"timeline-event",children:[Object(r.jsxs)("div",{className:n()("d-flex justify-content-between flex-sm-row flex-column",{"mb-sm-0 mb-1":e.meta}),children:[Object(r.jsx)("h6",{children:e.title}),e.meta?Object(r.jsx)("span",{className:n()("timeline-event-time",Object(s.a)({},e.metaClassName,e.metaClassName)),children:e.meta}):null]}),Object(r.jsx)("p",{className:n()({"mb-0":t===a.length-1&&!e.customContent}),children:e.content}),e.customContent?e.customContent:null]})]},t)}))})}},640:function(e,a,t){"use strict";a.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABdCAYAAADzCKvfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODA4M0IxNEM4MzdEODk1OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTY5RDZFNjk2NDUxMUU5QjgzM0NGNjBGOUVEM0JBMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQTY5RDZFNTk2NDUxMUU5QjgzM0NGNjBGOUVEM0JBMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMTgwODNCMTRDODM3RDg5NTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgwODNCMTRDODM3RDg5NTgiLz4gPC9yZGY6RGVzY3Jp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"},645:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"c",(function(){return l})),t.d(a,"b",(function(){return o})),t.d(a,"d",(function(){return d}));var s=t(485),c=t.n(s),n=t(487),r=t(483),i=(t(778),function(){return function(){var e=Object(n.a)(c.a.mark((function e(a){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.a)({url:"/admin/rewards/claims",method:"GET"},a);case 2:if(!(t=e.sent)){e.next=12;break}if(!t.data.data||!t.data.success){e.next=9;break}return e.next=7,a({type:"GET_ALL_CLAIMED_REWARDS",data:t.data.data});case 7:e.next=10;break;case 9:console.log(t.error);case 10:e.next=13;break;case 12:Object(r.l)("Oops!","Somthing went wrong with your network.","error");case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}),l=function(e,a){return function(){var t=Object(n.a)(c.a.mark((function t(s){var n,i,l,o,d,b,m,j,u,O;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=a.q,i=void 0===n?"":n,l=a.perPage,o=void 0===l?10:l,d=a.page,b=void 0===d?1:d,m=a.role,void 0===m?null:m,j=a.category,void 0===j?null:j,u=i.toLowerCase(),O=e.filter((function(e){return e.user_id.toLowerCase().includes(u)||e.transaction_id.toLowerCase().includes(u)})),s({type:"GET_FILTERED_CLAIMED_DATA",data:Object(r.i)(O,o,b),totalPages:O.length,params:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},o=function(e,a){return function(){var t=Object(n.a)(c.a.mark((function t(s){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.find((function(e){return e.id===a})),s({type:"GET_CLAIM",selectedClaim:n});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var a=Object(n.a)(c.a.mark((function a(t){var s;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(r.a)({url:"/admin/rewards/claims/".concat(e),method:"GET"},t);case 2:if(!(s=a.sent)){a.next=12;break}if(!s.data.data||!s.data.success){a.next=9;break}return a.next=7,t({type:"GET_USER_CLAIM_HISTORY",data:s.data.data});case 7:a.next=10;break;case 9:console.log(s.error);case 10:a.next=13;break;case 12:Object(r.l)("Oops!","Something went wrong with your network.","error");case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=126.0ba70bf9.chunk.js.map