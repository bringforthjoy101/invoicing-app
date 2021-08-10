(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[133],{1691:function(e,t,a){},2187:function(e,t,a){"use strict";a.r(t);var s=a(28),c=a(1),l=a(82),n=a.n(l),r=a(480),i=a(482),o=a(595),d=a(6),u=function(e){var t=e.data;return Object(d.jsxs)("div",{className:"pricing-faq",children:[Object(d.jsx)("h3",{className:"text-center",children:"FAQ's"}),Object(d.jsx)("p",{className:"text-center",children:"Let us help answer the most common questions."}),Object(d.jsx)(r.a,{className:"my-2",children:Object(d.jsx)(i.a,{className:"mx-auto",sm:"12",lg:{size:10,offset:2},children:Object(d.jsx)(o.a,{type:"margin",data:t,titleKey:"question",contentKey:"ans",accordion:!0})})})]})},j=a(58),b=a(27),m=a.n(b),p=a(481),h=a(478),O=a(998),g=a(487),f=a(583),x=a(584),y=a(469),N=function(e){var t=e.data,a=e.duration;return Object(d.jsx)(r.a,{className:"pricing-card",children:Object(d.jsx)(i.a,{className:"mx-auto",sm:{offset:2,size:10},lg:{offset:2,size:10},md:"12",children:Object(d.jsx)(r.a,{children:t.map((function(e,t){var s,c="yearly"===a?e.yearlyPlan.perMonth:e.monthlyPrice,l="yearly"===a?e.yearlyPlan.totalAnnual:e.monthlyPrice,n="Basic"===e.title?"mb-2 mt-5":"Standard"===e.title?"mb-1":"mb-2";return Object(d.jsx)(i.a,{md:"4",xs:"12",children:Object(d.jsx)(p.a,{className:m()("text-center",(s={},Object(j.a)(s,"".concat(e.title.toLowerCase(),"-pricing"),e.title),Object(j.a)(s,"popular",!0===e.popular),s)),children:Object(d.jsxs)(h.a,{children:[!0===e.popular?Object(d.jsx)("div",{className:"pricing-badge text-right",children:Object(d.jsx)(O.a,{color:"light-primary",pill:!0,children:"Popular"})}):null,Object(d.jsx)("img",{className:n,src:e.img,alt:"pricing svg"}),Object(d.jsx)("h3",{children:e.title}),Object(d.jsx)(g.a,{children:e.subtitle}),Object(d.jsxs)("div",{className:"annual-plan",children:[Object(d.jsxs)("div",{className:"plan-price mt-2",children:[Object(d.jsx)("sup",{className:"font-medium-1 font-weight-bold text-primary mr-25",children:"$"}),Object(d.jsx)("span",{className:"pricing-".concat(e.title.toLowerCase(),"-value font-weight-bolder text-primary"),children:c}),Object(d.jsx)("span",{className:"pricing-duration text-body font-medium-1 font-weight-bold ml-25",children:"/month"})]}),"Basic"!==e.title&&"yearly"===a?Object(d.jsxs)("small",{className:"annual-pricing text-muted",children:["USD ",l," / year"]}):null]}),Object(d.jsx)(f.a,{tag:"ul",className:"list-group-circle text-left mb-2",children:e.planBenefits.map((function(e,t){return Object(d.jsx)(x.a,{tag:"li",children:e},t)}))}),Object(d.jsx)(y.a.Ripple,{color:"Basic"===e.title?"success":"primary",outline:"Standard"!==e.title,block:!0,children:"Basic"===e.title?"Your current plan":"Upgrade"})]})})},t)}))})})})},v=a.p+"static/media/pricing-Illustration.b00baee8.svg",M=function(){return Object(d.jsx)("div",{className:"pricing-free-trial",children:Object(d.jsx)(r.a,{children:Object(d.jsx)(i.a,{className:"mx-auto",lg:{size:10,offset:3},sm:"12",children:Object(d.jsxs)("div",{className:"pricing-trial-content d-flex justify-content-between",children:[Object(d.jsxs)("div",{className:"text-center text-md-left mt-3",children:[Object(d.jsx)("h3",{className:"text-primary",children:"Still not convinced? Start with a 14-day FREE trial!"}),Object(d.jsx)("h5",{children:"You will get full access to with all the features for 14 days."}),Object(d.jsx)("div",{className:"mt-2 mt-lg-3",children:Object(d.jsx)(y.a.Ripple,{color:"primary",children:"Start 14-day FREE trial"})})]}),Object(d.jsx)("img",{className:"pricing-trial-img img-fluid",src:v,alt:"trial svg",style:{transform:"scaleX(1)"}})]})})})})},P=(a(502),a(989)),T=function(e){var t=e.duration,a=e.setDuration;return Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("h1",{className:"mt-5",children:"Pricing Plans"}),Object(d.jsx)("p",{className:"mb-2 pb-75",children:"All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs."}),Object(d.jsxs)("div",{className:"d-flex align-items-center justify-content-center mb-5 pb-50",children:[Object(d.jsx)("h6",{className:"mr-1 mb-0",children:"Monthly"}),Object(d.jsx)(P.a,{id:"plan-switch",type:"switch",checked:"yearly"===t,onChange:function(e){e.target.checked?a("yearly"):a("monthly")}}),Object(d.jsx)("h6",{className:"ml-50 mb-0",children:"Annually"})]})]})};a(1691),t.default=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(c.useState)(null),i=Object(s.a)(r,2),o=i[0],j=i[1],b=Object(c.useState)("monthly"),m=Object(s.a)(b,2),p=m[0],h=m[1];return Object(c.useEffect)((function(){n.a.get("/pricing/data").then((function(e){var t=[],a=[];Object.entries(e.data).forEach((function(e){var c=Object(s.a)(e,2),n=c[0],r=c[1];"qandA"!==n?(t.push(r),l([].concat(t))):(a.push(r),j(a[0]))}))}))}),[]),Object(d.jsxs)("div",{id:"pricing-table",children:[Object(d.jsx)(T,{duration:p,setDuration:h}),null!==a&&null!==o?Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(N,{data:a,duration:p}),Object(d.jsx)(M,{}),Object(d.jsx)(u,{data:o})]}):null]})}},478:function(e,t,a){"use strict";var s=a(14),c=a(15),l=a(1),n=a.n(l),r=a(2),i=a.n(r),o=a(27),d=a.n(o),u=a(80),j={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var t=e.className,a=e.cssModule,l=e.innerRef,r=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(u.mapToCssModules)(d()(t,"card-body"),a);return n.a.createElement(r,Object(s.a)({},i,{className:o,ref:l}))};b.propTypes=j,b.defaultProps={tag:"div"},t.a=b},479:function(e,t,a){"use strict";var s=a(14),c=a(15),l=a(1),n=a.n(l),r=a(2),i=a.n(r),o=a(27),d=a.n(o),u=a(80),j={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,a=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),i=Object(u.mapToCssModules)(d()(t,"card-title"),a);return n.a.createElement(l,Object(s.a)({},r,{className:i}))};b.propTypes=j,b.defaultProps={tag:"div"},t.a=b},483:function(e,t,a){"use strict";var s=a(14),c=a(15),l=a(1),n=a.n(l),r=a(2),i=a.n(r),o=a(27),d=a.n(o),u=a(80),j={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,a=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),i=Object(u.mapToCssModules)(d()(t,"card-header"),a);return n.a.createElement(l,Object(s.a)({},r,{className:i}))};b.propTypes=j,b.defaultProps={tag:"div"},t.a=b},487:function(e,t,a){"use strict";var s=a(14),c=a(15),l=a(1),n=a.n(l),r=a(2),i=a.n(r),o=a(27),d=a.n(o),u=a(80),j={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,a=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),i=Object(u.mapToCssModules)(d()(t,"card-text"),a);return n.a.createElement(l,Object(s.a)({},r,{className:i}))};b.propTypes=j,b.defaultProps={tag:"p"},t.a=b},583:function(e,t,a){"use strict";var s=a(14),c=a(15),l=a(1),n=a.n(l),r=a(2),i=a.n(r),o=a(27),d=a.n(o),u=a(80),j={tag:u.tagPropType,flush:i.a.bool,className:i.a.string,cssModule:i.a.object,horizontal:i.a.oneOfType([i.a.bool,i.a.string])},b=function(e){var t=e.className,a=e.cssModule,l=e.tag,r=e.flush,i=e.horizontal,o=Object(c.a)(e,["className","cssModule","tag","flush","horizontal"]),j=Object(u.mapToCssModules)(d()(t,"list-group",r?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(i)),a);return n.a.createElement(l,Object(s.a)({},o,{className:j}))};b.propTypes=j,b.defaultProps={tag:"ul",horizontal:!1},t.a=b},584:function(e,t,a){"use strict";var s=a(14),c=a(15),l=a(1),n=a.n(l),r=a(2),i=a.n(r),o=a(27),d=a.n(o),u=a(80),j={tag:u.tagPropType,active:i.a.bool,disabled:i.a.bool,color:i.a.string,action:i.a.bool,className:i.a.any,cssModule:i.a.object},b=function(e){e.preventDefault()},m=function(e){var t=e.className,a=e.cssModule,l=e.tag,r=e.active,i=e.disabled,o=e.action,j=e.color,m=Object(c.a)(e,["className","cssModule","tag","active","disabled","action","color"]),p=Object(u.mapToCssModules)(d()(t,!!r&&"active",!!i&&"disabled",!!o&&"list-group-item-action",!!j&&"list-group-item-"+j,"list-group-item"),a);return i&&(m.onClick=b),n.a.createElement(l,Object(s.a)({},m,{className:p}))};m.propTypes=j,m.defaultProps={tag:"li"},t.a=m},595:function(e,t,a){"use strict";var s=a(0),c=a(58),l=a(28),n=a(123),r=a(1),i=a(27),o=a.n(i),d=a(1038),u=a(481),j=a(483),b=a(479),m=a(759),p=a(478),h=a(6),O=function(e){var t,a=e.data,i=e.type,O=e.accordion,g=e.active,f=e.toggle,x=e.titleKey,y=e.contentKey,N=e.className,v=Object(r.useState)(O?g:Object(n.a)(g)),M=Object(l.a)(v,2),P=M[0],T=M[1],w=function(e){if(O)T(e===P?null:e);else{var t=P,a=t.indexOf(e);t.includes(e)?(t.splice(a,1),T(Object(n.a)(t))):(t.push(e),T(Object(n.a)(t)))}};return Object(h.jsx)("div",{className:o()("collapse-icon",(t={},Object(c.a)(t,N,N),Object(c.a)(t,"collapse-default",!i),Object(c.a)(t,"collapse-shadow","shadow"===i),Object(c.a)(t,"collapse-border","border"===i),Object(c.a)(t,"collapse-margin","margin"===i),t)),children:a.map((function(e,t){var a,l=x?e[x]:e.title,n=y?e[y]:e.content;return Object(h.jsxs)(u.a,{className:o()("app-collapse",(a={},Object(c.a)(a,e.className,e.className),Object(c.a)(a,"open",O?P===t:P.includes(t)&&"shadow"===i),a)),children:[Object(h.jsxs)(j.a,Object(s.a)(Object(s.a)({className:o()("align-items-center",{collapsed:O?P!==t:!P.includes(t)})},"hover"===f?{onMouseEnter:function(){return w(t)}}:{onClick:function(){return w(t)}}),{},{children:[Object(h.jsx)(b.a,{className:"collapse-title",children:l}),Object(h.jsx)(d.a,{size:14})]})),Object(h.jsx)(m.a,{isOpen:O?P===t:P.includes(t),children:Object(h.jsx)(p.a,{children:n})})]},t)}))})};t.a=O,O.defaultProps={active:[],toggle:"click"}}}]);
//# sourceMappingURL=133.a119ecab.chunk.js.map