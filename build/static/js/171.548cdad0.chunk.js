(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[171],{2236:function(e,a,t){"use strict";t.r(a);t(1);var s=t(812),c=t(473),n=t(503),r=t.n(n),l=t(81),i=t(480),o=t(481),d=t(507),j=t(482),u=(t(489),t(6)),b=t(477),p=t(478),m=t(484),O=function(e){var a=e.selectedContact;return Object(u.jsx)(j.a,{children:Object(u.jsx)(p.a,{children:Object(u.jsxs)(i.a,{className:"my-2",children:[Object(u.jsx)(o.a,{className:"d-flex align-items-center justify-content-center mb-2 mb-md-0",md:"5",xs:"12",children:Object(u.jsx)("div",{className:"d-flex justify-content-start",children:function(){if(null!==a&&a.avatar)return Object(u.jsx)("img",{src:a.avatar,alt:"user-avatar",className:"img-fluid rounded",height:"104",width:"104"});var e=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(u.jsx)(b.a,{initials:!0,color:e,className:"rounded",content:"".concat(a.name),contentStyles:{borderRadius:0,fontSize:"calc(36px)",width:"100%",height:"100%"},style:{height:"90px",width:"90px"}})}()})}),Object(u.jsx)("div",{className:"d-flex flex-column ml-1",children:Object(u.jsxs)(o.a,{children:[Object(u.jsxs)("h4",{children:["Full Name: ",null!==a?"".concat(a.name):"Appia Admin"]}),Object(u.jsxs)(m.a,{className:"mt-1",children:["Email: ",null!==a?a.email:"appia.admin@appiawave.com"]}),Object(u.jsxs)(m.a,{className:"mt-1",children:["User Id: ",a.id]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsxs)("h6",{children:["Subject: ",Object(u.jsx)("span",{children:a.subject})]}),Object(u.jsxs)("h6",{className:"ml-5",children:["Date ",Object(u.jsx)("span",{children:r()(a.created_at).format("lll")})]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("p",{children:["Message: ",Object(u.jsx)("span",{children:a.message})]})]})})]})})})};t(492),a.default=function(e){var a=Object(l.c)((function(e){return e.appiaContacts})),t=Object(s.i)().id;return null!==a.selectedContact&&void 0!==a.selectedContact?Object(u.jsx)("div",{className:"app-user-view",children:Object(u.jsx)(i.a,{children:Object(u.jsx)(o.a,{xl:"9",lg:"8",md:"7",children:Object(u.jsx)(O,{selectedContact:a.selectedContact})})})}):Object(u.jsxs)(d.a,{color:"danger",children:[Object(u.jsx)("h4",{className:"alert-heading",children:"Users not found"}),Object(u.jsxs)("div",{className:"alert-body",children:["Users with id: ",t," doesn't exist. Check list of all Users: ",Object(u.jsx)(c.b,{to:"/app/user/list",children:"Users List"})]})]})}},478:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(1),r=t.n(n),l=t(2),i=t.n(l),o=t(27),d=t.n(o),j=t(80),u={tag:j.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,l=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(j.mapToCssModules)(d()(a,"card-body"),t);return r.a.createElement(l,Object(s.a)({},i,{className:o,ref:n}))};b.propTypes=u,b.defaultProps={tag:"div"},a.a=b},484:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(1),r=t.n(n),l=t(2),i=t.n(l),o=t(27),d=t.n(o),j=t(80),u={tag:j.tagPropType,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(j.mapToCssModules)(d()(a,"card-text"),t);return r.a.createElement(n,Object(s.a)({},l,{className:i}))};b.propTypes=u,b.defaultProps={tag:"p"},a.a=b},492:function(e,a,t){},507:function(e,a,t){"use strict";var s=t(14),c=t(15),n=t(476),r=t(1),l=t.n(r),i=t(2),o=t.n(i),d=t(27),j=t.n(d),u=t(80),b=t(498);function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var O={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:u.tagPropType,transition:o.a.shape(b.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},h={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:m(m({},b.a.defaultProps),{},{unmountOnExit:!0})};function f(e){var a=e.className,t=e.closeClassName,n=e.closeAriaLabel,r=e.cssModule,i=e.tag,o=e.color,d=e.isOpen,p=e.toggle,O=e.children,h=e.transition,f=e.fade,g=e.innerRef,x=Object(c.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=Object(u.mapToCssModules)(j()(a,"alert","alert-"+o,{"alert-dismissible":p}),r),v=Object(u.mapToCssModules)(j()("close",t),r),N=m(m(m({},b.a.defaultProps),h),{},{baseClass:f?h.baseClass:"",timeout:f?h.timeout:0});return l.a.createElement(b.a,Object(s.a)({},x,N,{tag:i,className:y,in:d,role:"alert",innerRef:g}),p?l.a.createElement("button",{type:"button",className:v,"aria-label":n,onClick:p},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,O)}f.propTypes=O,f.defaultProps=h,a.a=f}}]);
//# sourceMappingURL=171.548cdad0.chunk.js.map