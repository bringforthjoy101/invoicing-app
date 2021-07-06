(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[194],{2241:function(e,c,a){"use strict";a.r(c);var s=a(1),t=a(474),r=a(0),n=a(28),l=a(27),i=a.n(l),d=a(646),j=a(1038),o=a(983),b=a(1112),h=a(753),m=a(556),O=a(481),x=a(488),u=a(480),p=(a(1779),a(6)),g=function(e){var c=e.title,a=e.actions,t=e.children,l=e.collapseIcon,g=e.reloadIcon,N=e.removeIcon,f=e.endReload,v=Object(s.useState)(!1),C=Object(n.a)(v,2),y=C[0],z=C[1],w=Object(s.useState)(!0),k=Object(n.a)(w,2),R=k[0],A=k[1],T=Object(s.useState)(!0),I=Object(n.a)(T,2),P=I[0],F=I[1],S={collapse:l||j.a,remove:N||o.a,reload:g||b.a},E=function(e){switch(e){case"collapse":return A(!R);case"remove":return F(!1);case"reload":return z(!0)}},J=function(){z(!1)};Object(s.useEffect)((function(){y&&f(J)}));var Y="collapse"===a||a.includes("collapse")?h.a:s.Fragment,D="reload"===a||a.includes("reload")?d.a:s.Fragment;return Object(p.jsx)(D,Object(r.a)(Object(r.a)({},"reload"===a||a.includes("reload")?{blocking:y,className:"reload-wrapper",loader:Object(p.jsx)(m.a,{color:"primary",className:"reload-spinner"})}:{}),{},{children:Object(p.jsxs)(O.a,{className:i()("card-action",{"d-none":!P}),children:[Object(p.jsxs)(x.a,{children:[Object(p.jsx)(u.a,{tag:"h4",children:c}),Object(p.jsx)("div",{className:"action-icons",children:function(){if(Array.isArray(a))return a.map((function(e,c){var s=S[e];return Object(p.jsx)(s,{className:i()("cursor-pointer",{"mr-50":c<a.length-1}),size:15,onClick:function(){return E(e)}},c)}));var e=S[a];return Object(p.jsx)(e,{className:"cursor-pointer",size:15,onClick:function(){return E(a)}})}()})]}),Object(p.jsx)(Y,Object(r.a)(Object(r.a)({},"collapse"===a||a.includes("collapse")?{isOpen:R}:{}),{},{children:t}))]})}))},N=a(479),f=a(482),v=a(478),C=a(553),y=a(484);c.default=function(){return Object(p.jsxs)(s.Fragment,{children:[Object(p.jsx)(t.a,{breadCrumbTitle:"Card Actions",breadCrumbParent:"Card",breadCrumbActive:"Card Actions"}),Object(p.jsx)(N.a,{children:Object(p.jsx)(f.a,{sm:"12",children:Object(p.jsx)(g,{title:"Card Actions",actions:["collapse","reload","remove"],endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(p.jsx)(v.a,{className:"pt-0",children:Object(p.jsxs)(C.a,{responsive:!0,bordered:!0,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Action"}),Object(p.jsx)("th",{children:"Icon"}),Object(p.jsx)("th",{children:"Details"})]})}),Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Collapse"}),Object(p.jsx)("td",{className:"text-center",children:Object(p.jsx)(j.a,{className:"collapse-icon",size:15})}),Object(p.jsx)("td",{children:" Collapse card content using collapse action."})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Refresh Content"}),Object(p.jsx)("td",{className:"text-center",children:Object(p.jsx)(b.a,{size:15})}),Object(p.jsx)("td",{children:"Refresh your card content using refresh action."})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Remove Card"}),Object(p.jsx)("td",{className:"text-center",children:Object(p.jsx)(o.a,{size:15})}),Object(p.jsx)("td",{children:" Remove card from page using remove card action"})]})]})]})})})})}),Object(p.jsxs)(N.a,{children:[Object(p.jsx)(f.a,{md:"6",sm:"12",children:Object(p.jsx)(g,{title:"Collapse",actions:"collapse",children:Object(p.jsxs)(v.a,{className:"pt-0",children:[Object(p.jsxs)(y.a,{children:["You can create a collapsible content by using our",Object(p.jsx)("code",{children:"CardAction"})," component and by passing prop",Object(p.jsx)("code",{children:"actions='collapse'"}),"."]}),Object(p.jsxs)(y.a,{className:"mb-0",children:["Click on ",Object(p.jsx)(j.a,{size:15})," to see card collapse in action"]})]})})}),Object(p.jsx)(f.a,{md:"6",sm:"12",children:Object(p.jsx)(g,{title:"Reload",actions:"reload",endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(p.jsxs)(v.a,{className:"pt-0",children:[Object(p.jsxs)(y.a,{children:["To create a re-loadable card pass prop",Object(p.jsx)("code",{children:"actions='reload'"})," and pass prop ",Object(p.jsx)("code",{children:"endReload"}),"to end the loading."]}),Object(p.jsxs)(y.a,{className:"mb-0",children:["Click on ",Object(p.jsx)(b.a,{size:15})," to see card refresh in action"]})]})})}),Object(p.jsx)(f.a,{md:"6",sm:"12",children:Object(p.jsx)(g,{title:"Remove",actions:"remove",children:Object(p.jsxs)(v.a,{className:"pt-0",children:[Object(p.jsxs)(y.a,{children:["You can add refresh content action to card by adding class",Object(p.jsx)("code",{children:".card-reload"})," with your card tag, and add conditional spinner into card body to show when card is refreshing."]}),Object(p.jsxs)(y.a,{className:"mb-0",children:["Click on ",Object(p.jsx)(b.a,{size:15})," to see card refresh in action"]})]})})})]})]})}},474:function(e,c,a){"use strict";var s=a(473),t=a(1076),r=a(1007),n=a(1008),l=a(1006),i=a(1034),d=a(490),j=a(491),o=a(489),b=a(1331),h=a(994),m=a(995),O=a(6);c.a=function(e){var c=e.breadCrumbTitle,a=e.breadCrumbParent,x=e.breadCrumbParent2,u=e.breadCrumbParent3,p=e.breadCrumbActive;return Object(O.jsxs)("div",{className:"content-header row",children:[Object(O.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(O.jsx)("div",{className:"row breadcrumbs-top",children:Object(O.jsxs)("div",{className:"col-12",children:[c?Object(O.jsx)("h2",{className:"content-header-title float-left mb-0",children:c}):"",Object(O.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(j.a,{tag:"li",children:Object(O.jsx)(s.b,{to:"/",children:"Home"})}),Object(O.jsx)(j.a,{tag:"li",className:"text-primary",children:a}),x?Object(O.jsx)(j.a,{tag:"li",className:"text-primary",children:x}):"",u?Object(O.jsx)(j.a,{tag:"li",className:"text-primary",children:u}):"",Object(O.jsx)(j.a,{tag:"li",active:!0,children:p})]})})]})})}),Object(O.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(O.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(b.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(O.jsx)(t.a,{size:14})}),Object(O.jsxs)(h.a,{tag:"ul",right:!0,children:[Object(O.jsxs)(m.a,{tag:s.b,to:"/apps/chat",children:[Object(O.jsx)(r.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(O.jsxs)(m.a,{tag:s.b,to:"/apps/chat",children:[Object(O.jsx)(n.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(O.jsxs)(m.a,{tag:s.b,to:"/apps/email",children:[Object(O.jsx)(l.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(O.jsxs)(m.a,{tag:s.b,to:"/apps/calendar",children:[Object(O.jsx)(i.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}}}]);
//# sourceMappingURL=194.c93a626a.chunk.js.map