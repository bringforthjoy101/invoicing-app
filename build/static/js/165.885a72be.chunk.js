(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[165],{1689:function(e,a,t){},2197:function(e,a,t){"use strict";t.r(a);var c=t(28),s=t(1),r=t(623),n=t(1009),l=t(1010),i=t(1090),j=t(6),o=function(e){var a=e.activeTab,t=e.toggleTab;return Object(j.jsxs)(r.a,{className:"nav-left",pills:!0,vertical:!0,children:[Object(j.jsx)(n.a,{children:Object(j.jsxs)(l.a,{active:"1"===a,onClick:function(){return t("1")},children:[Object(j.jsx)(i.a,{size:18,className:"mr-1"}),Object(j.jsx)("span",{className:"font-weight-bold",children:"Change Password"})]})}),Object(j.jsx)(n.a,{children:Object(j.jsxs)(l.a,{active:"2"===a,onClick:function(){return t("2")},children:[Object(j.jsx)(i.a,{size:18,className:"mr-1"}),Object(j.jsx)("span",{className:"font-weight-bold",children:" Reset Password"})]})})]})},b=t(82),d=t.n(b),m=t(474),u=t(0),O=t(485),h=t.n(O),x=t(486),p=t(480),g=t(482),v=t(992),f=t(469),N=t(526),w=t(58),C=t(122),S=t(27),y=t.n(S),z=t(499),I=t(514),k=t(494),F=function(e){var a=e.label,t=(e.hideIcon,e.showIcon,e.className),c=e.htmlFor,r=(e.placeholder,e.iconSize,Object(C.a)(e,["label","hideIcon","showIcon","className","htmlFor","placeholder","iconSize"]));return Object(j.jsxs)(s.Fragment,{children:[a?Object(j.jsx)(z.a,{for:c,children:a}):null,Object(j.jsx)(I.a,{className:y()(Object(w.a)({},t,t)),children:Object(j.jsx)(k.a,Object(u.a)(Object(u.a)({type:"email",placeholder:"email@gmail.com"},a&&c?{id:c}:{}),r))})]})},P=F;F.defaultProps={visible:!1};var _=t(516),T=t(484),A=t(81),R=function(){var e=Object(A.b)(),a=Object(s.useState)({old_password:"",new_password:"",email:""}),t=Object(c.a)(a,2),r=t[0],n=t[1],l=function(){var a=Object(x.a)(h.a.mark((function a(t,c){var s,n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),console.log({errors:c}),!c||c.length){a.next=16;break}return console.log({userData:r}),s=JSON.stringify(r),a.prev=5,a.next=8,Object(T.a)({url:"/admin/change_password",method:"POST",body:s},e);case 8:n=a.sent,console.log({response:n}),n.data.success?(Object(T.l)("Great job!",n.data.message,"success"),toggleSidebar()):Object(T.l)("Oops!",n.data.message,"error"),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(5),console.error({error:a.t0});case 16:case"end":return a.stop()}}),a,null,[[5,13]])})));return function(e,t){return a.apply(this,arguments)}}();return Object(j.jsxs)(_.AvForm,{onSubmit:l,children:[Object(j.jsx)(p.a,{children:Object(j.jsx)(g.a,{sm:"6",children:Object(j.jsx)(v.a,{children:Object(j.jsx)(N.a,{tag:_.AvInput,className:"input-group-merge",label:"Old Password",htmlFor:"old_password",name:"old_password",required:!0,value:r.old_password,onChange:function(e){return n(Object(u.a)(Object(u.a)({},r),{},{old_password:e.target.value}))}})})})}),Object(j.jsxs)(p.a,{children:[Object(j.jsx)(g.a,{sm:"6",children:Object(j.jsx)(v.a,{children:Object(j.jsx)(N.a,{tag:_.AvInput,className:"input-group-merge",label:"New Password",htmlFor:"new_password",name:"new_password",required:!0,value:r.new_password,onChange:function(e){return n(Object(u.a)(Object(u.a)({},r),{},{new_password:e.target.value}))}})})}),Object(j.jsx)(g.a,{sm:"6",children:Object(j.jsx)(v.a,{children:Object(j.jsx)(P,{tag:_.AvInput,className:"input-group-merge",label:"Email",htmlFor:"email",name:"email",required:!0,value:r.email,onChange:function(e){return n(Object(u.a)(Object(u.a)({},r),{},{email:e.target.value}))}})})}),Object(j.jsxs)(g.a,{className:"mt-1",sm:"12",children:[Object(j.jsx)(f.a.Ripple,{className:"mr-1",color:"primary",children:"Save changes"}),Object(j.jsx)(f.a.Ripple,{color:"secondary",outline:!0,children:"Cancel"})]})]})]})},q=function(){var e=Object(A.b)(),a=Object(s.useState)({email:""}),t=Object(c.a)(a,2),r=t[0],n=t[1],l=function(){var a=Object(x.a)(h.a.mark((function a(t,c){var s,n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),!c||c.length){a.next=13;break}return s=JSON.stringify(r),a.prev=3,a.next=6,Object(T.a)({url:"/admin/reset_password",method:"POST",body:s},e);case 6:(n=a.sent).data.success?Object(T.l)("Great job!",n.data.message,"success"):Object(T.l)("Oops!",n.data.message,"error"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),console.error({error:a.t0});case 13:case"end":return a.stop()}}),a,null,[[3,10]])})));return function(e,t){return a.apply(this,arguments)}}();return Object(j.jsx)(_.AvForm,{onSubmit:l,children:Object(j.jsxs)(p.a,{children:[Object(j.jsx)(g.a,{sm:"6",children:Object(j.jsx)(v.a,{children:Object(j.jsx)(P,{tag:_.AvInput,className:"input-group-merge",label:"Email",htmlFor:"email",name:"email",required:!0,value:r.email,onChange:function(e){return n(Object(u.a)(Object(u.a)({},r),{},{email:e.target.value}))}})})}),Object(j.jsxs)(g.a,{className:"mt-1",sm:"12",children:[Object(j.jsx)(f.a.Ripple,{className:"mr-1",color:"primary",children:"Save changes"}),Object(j.jsx)(f.a.Ripple,{color:"secondary",outline:!0,children:"Cancel"})]})]})})},E=t(481),J=t(478),D=t(643),G=t(644);t(498),t(1689),a.default=function(){var e=Object(s.useState)("1"),a=Object(c.a)(e,2),t=a[0],r=a[1],n=Object(s.useState)(null),l=Object(c.a)(n,2),i=(l[0],l[1]);return Object(s.useEffect)((function(){d.a.get("/account-setting/data").then((function(e){return i(e.data)}))}),[]),Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(m.a,{breadCrumbTitle:"Account Settings",breadCrumbParent:"Pages",breadCrumbActive:"Account Settings"}),Object(j.jsxs)(p.a,{children:[Object(j.jsx)(g.a,{className:"mb-2 mb-md-0",md:"3",children:Object(j.jsx)(o,{activeTab:t,toggleTab:function(e){r(e)}})}),Object(j.jsx)(g.a,{md:"9",children:Object(j.jsx)(E.a,{children:Object(j.jsx)(J.a,{children:Object(j.jsxs)(D.a,{activeTab:t,children:[Object(j.jsx)(G.a,{tabId:"1",children:Object(j.jsx)(R,{})}),Object(j.jsx)(G.a,{tabId:"2",children:Object(j.jsx)(q,{})})]})})})})]})]})}},474:function(e,a,t){"use strict";var c=t(473),s=t(1074),r=t(1033),n=t(1096),l=t(1091),i=t(1030),j=t(490),o=t(491),b=t(489),d=t(1339),m=t(1004),u=t(1005),O=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,h=e.breadCrumbParent2,x=e.breadCrumbParent3,p=e.breadCrumbActive;return Object(O.jsxs)("div",{className:"content-header row",children:[Object(O.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(O.jsx)("div",{className:"row breadcrumbs-top",children:Object(O.jsxs)("div",{className:"col-12",children:[a?Object(O.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(O.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(o.a,{tag:"li",children:Object(O.jsx)(c.b,{to:"/",children:"Home"})}),Object(O.jsx)(o.a,{tag:"li",className:"text-primary",children:t}),h?Object(O.jsx)(o.a,{tag:"li",className:"text-primary",children:h}):"",x?Object(O.jsx)(o.a,{tag:"li",className:"text-primary",children:x}):"",Object(O.jsx)(o.a,{tag:"li",active:!0,children:p})]})})]})})}),Object(O.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(O.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(d.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(O.jsx)(s.a,{size:14})}),Object(O.jsxs)(m.a,{tag:"ul",right:!0,children:[Object(O.jsxs)(u.a,{tag:c.b,to:"/apps/chat",children:[Object(O.jsx)(r.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(O.jsxs)(u.a,{tag:c.b,to:"/apps/chat",children:[Object(O.jsx)(n.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(O.jsxs)(u.a,{tag:c.b,to:"/apps/email",children:[Object(O.jsx)(l.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(O.jsxs)(u.a,{tag:c.b,to:"/apps/calendar",children:[Object(O.jsx)(i.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},498:function(e,a,t){},526:function(e,a,t){"use strict";var c=t(0),s=t(58),r=t(28),n=t(122),l=t(1),i=t(27),j=t.n(i),o=t(1065),b=t(1064),d=t(499),m=t(514),u=t(494),O=t(515),h=t(495),x=t(6),p=function(e){var a=e.label,t=e.hideIcon,i=e.showIcon,p=e.visible,g=e.className,v=e.htmlFor,f=e.placeholder,N=e.iconSize,w=Object(n.a)(e,["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize"]),C=Object(l.useState)(p),S=Object(r.a)(C,2),y=S[0],z=S[1];return Object(x.jsxs)(l.Fragment,{children:[a?Object(x.jsx)(d.a,{for:v,children:a}):null,Object(x.jsxs)(m.a,{className:j()(Object(s.a)({},g,g)),children:[Object(x.jsx)(u.a,Object(c.a)(Object(c.a)({type:!1===y?"password":"text",placeholder:f||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7"},a&&v?{id:v}:{}),w)),Object(x.jsx)(O.a,{addonType:"append",onClick:function(){return z(!y)},children:Object(x.jsx)(h.a,{className:"cursor-pointer",children:function(){var e=N||14;return!1===y?t||Object(x.jsx)(o.a,{size:e}):i||Object(x.jsx)(b.a,{size:e})}()})})]})]})};a.a=p,p.defaultProps={visible:!1}}}]);
//# sourceMappingURL=165.885a72be.chunk.js.map