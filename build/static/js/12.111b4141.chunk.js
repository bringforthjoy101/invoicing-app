(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[12],{1374:function(e,a,t){},2174:function(e,a,t){"use strict";t.r(a);var s=t(28),c=t(1),l=t(806),i=t(27),n=t.n(i),r=t(483),j=t(477),m=t(1124),d=t(1102),o=t(1001),b=t(6),h=function(e){var a=e.mail,t=e.dispatch,s=e.selectMail,c=e.labelColors,l=e.updateMails,i=e.selectedMails,h=e.handleMailClick,x=e.handleMailReadUpdate,u=e.formatDateToMonthShort;return Object(b.jsxs)(o.a,{tag:"li",onClick:function(){return a.id,h(a.id),void x([a.id],!0)},className:n()({"mail-read":a.isRead}),children:[Object(b.jsxs)("div",{className:"media-left pr-50",children:[Object(b.jsx)(j.a,{img:a.from.avatar}),Object(b.jsxs)("div",{className:"user-action",children:[Object(b.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(b.jsx)("input",{className:"custom-control-input",type:"checkbox",id:"".concat(a.from.name,"-").concat(a.id),checked:i.includes(a.id),onChange:function(e){return e.stopPropagation()},onClick:function(e){t(s(a.id)),e.stopPropagation()}}),Object(b.jsx)("label",{className:"custom-control-label",htmlFor:"".concat(a.from.name,"-").concat(a.id),onClick:function(e){e.stopPropagation()}})]}),Object(b.jsx)("div",{className:"email-favorite",onClick:function(e){e.stopPropagation(),t(l([a.id],{isStarred:!a.isStarred}))},children:Object(b.jsx)(m.a,{size:14,className:n()({favorite:a.isStarred})})})]})]}),Object(b.jsxs)(o.a,{body:!0,children:[Object(b.jsxs)("div",{className:"mail-details",children:[Object(b.jsxs)("div",{className:"mail-items",children:[Object(b.jsx)("h5",{className:"mb-25",children:a.from.name}),Object(b.jsx)("span",{className:"text-truncate",children:a.subject})]}),Object(b.jsxs)("div",{className:"mail-meta-item",children:[a.attachments&&a.attachments.length?Object(b.jsx)(d.a,{size:14}):null,function(e){if(e&&e.length)return e.map((function(e){return Object(b.jsx)("span",{className:"bullet bullet-".concat(c[e]," bullet-sm mx-50")},e)}))}(a.labels),Object(b.jsx)("span",{className:"mail-date",children:u(a.time)})]})]}),Object(b.jsx)("div",{className:"mail-message",children:Object(b.jsx)("p",{className:"text-truncate mb-0",children:Object(r.e)(a.message)})})]})]})},x=t(1003),u=t(481),O=t(488),p=t(990),f=t(1331),g=t(994),N=t(553),v=t(995),C=t(478),k=t(700),M=t(479),y=t(482),S=t(1100),z=t(1055),w=t(1056),T=t(1130),D=t(1039),P=t(1073),L=t(1064),A=t(1081),I=t(1131),E=t(1127),_=t(1006),R=t(1040),U=t(537),F=t.n(U),B=function(e){var a=e.mail,t=e.openMail,l=e.dispatch,i=e.labelColors,o=e.setOpenMail,h=e.updateMails,U=e.paginateMail,B=e.handleMailToTrash,G=e.handleFolderUpdate,q=e.handleLabelsUpdate,J=e.handleMailReadUpdate,H=e.formatDateToMonthShort,Q=Object(c.useState)(!1),K=Object(s.a)(Q,2),V=K[0],W=K[1],X=function(e){return Object(b.jsxs)(u.a,{children:[Object(b.jsxs)(O.a,{className:"email-detail-head",children:[Object(b.jsxs)("div",{className:"user-details d-flex justify-content-between align-items-center flex-wrap",children:[Object(b.jsx)(j.a,{img:e.from.avatar,className:"mr-75",imgHeight:"48",imgWidth:"48"}),Object(b.jsxs)("div",{className:"mail-items",children:[Object(b.jsx)("h5",{className:"mb-0",children:e.from.name}),Object(b.jsxs)(p.a,{className:"email-info-dropup",children:[Object(b.jsx)(f.a,{className:"font-small-3 text-muted cursor-pointer",tag:"span",caret:!0,children:e.from.email}),Object(b.jsx)(g.a,{children:Object(b.jsx)(N.a,{className:"font-small-3",size:"sm",borderless:!0,children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"text-right text-muted align-top",children:"From:"}),Object(b.jsx)("td",{children:e.from.email})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"text-right text-muted align-top",children:"To:"}),Object(b.jsx)("td",{children:e.to[0].email})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"text-right text-muted align-top",children:"Date:"}),Object(b.jsxs)("td",{children:[H(e.time),", ",H(e.time,!1)]})]})]})})})]})]})]}),Object(b.jsxs)("div",{className:"mail-meta-item d-flex align-items-center",children:[Object(b.jsx)("small",{className:"mail-date-time text-muted",children:Object(r.b)(e.time)}),Object(b.jsxs)(p.a,{className:"ml-50",children:[Object(b.jsx)(f.a,{className:"cursor-pointer",tag:"span",children:Object(b.jsx)(S.a,{size:14})}),Object(b.jsxs)(g.a,{right:!0,children:[Object(b.jsxs)(v.a,{className:"d-flex align-items-center w-100",children:[Object(b.jsx)(z.a,{className:"mr-50",size:14}),"Reply"]}),Object(b.jsxs)(v.a,{className:"d-flex align-items-center w-100",children:[Object(b.jsx)(w.a,{className:"mr-50",size:14}),"Forward"]}),Object(b.jsxs)(v.a,{className:"d-flex align-items-center w-100",children:[Object(b.jsx)(T.a,{className:"mr-50",size:14}),"Delete"]})]})]})]})]}),Object(b.jsx)(C.a,{className:"mail-message-wrapper pt-2",children:Object(b.jsx)("div",{className:"mail-message",dangerouslySetInnerHTML:{__html:e.message}})}),e.attachments&&e.attachments.length?Object(b.jsx)(k.a,{children:Object(b.jsxs)("div",{className:"mail-attachments",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center mb-1",children:[Object(b.jsx)(d.a,{size:16}),Object(b.jsxs)("h5",{className:"font-weight-bolder text-body mb-0 ml-50",children:[e.attachments.length," Attachment"]})]}),Object(b.jsx)("div",{className:"d-flex flex-column",children:(a=e.attachments,a.map((function(e,t){return Object(b.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},className:n()({"mb-50":t+1!==a.length}),children:[Object(b.jsx)("img",{src:e.thumbnail,alt:e.fileName,width:"16",className:"mr-50"}),Object(b.jsx)("span",{className:"text-muted font-weight-bolder align-text-top",children:e.fileName}),Object(b.jsx)("span",{className:"text-muted font-small-2 ml-25",children:"(".concat(e.size,")")})]},e.fileName)})))})]})}):null]});var a},Y=function(){o(!1)},Z=function(e,a,t){G(e,a,[t]),Y()};return Object(b.jsx)("div",{className:n()("email-app-details",{show:t}),children:null!==a&&void 0!==a?Object(b.jsxs)(c.Fragment,{children:[Object(b.jsxs)("div",{className:"email-detail-header",children:[Object(b.jsxs)("div",{className:"email-header-left d-flex align-items-center",children:[Object(b.jsx)("span",{className:"go-back mr-1",onClick:Y,children:Object(b.jsx)(D.a,{size:20})}),Object(b.jsx)("h4",{className:"email-subject mb-0",children:a.subject})]}),Object(b.jsx)("div",{className:"email-header-right ml-2 pl-1",children:Object(b.jsxs)("ul",{className:"list-inline m-0",children:[Object(b.jsx)("li",{className:"list-inline-item mr-1",children:Object(b.jsx)("span",{className:"action-icon favorite",onClick:function(){return l(h([a.id],{isStarred:!a.isStarred}))},children:Object(b.jsx)(m.a,{size:18,className:n()({"text-warning fill-current":a.isStarred})})})}),Object(b.jsx)("li",{className:"list-inline-item mr-1",children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(f.a,{tag:"span",children:Object(b.jsx)(P.a,{size:18})}),Object(b.jsxs)(g.a,{right:!0,children:[Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return Z(e,"draft",a.id)},className:"d-flex align-items-center",children:[Object(b.jsx)(L.a,{className:"mr-50",size:18}),Object(b.jsx)("span",{children:"Draft"})]}),Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return Z(e,"spam",a.id)},className:"d-flex align-items-center",children:[Object(b.jsx)(A.a,{className:"mr-50",size:18}),Object(b.jsx)("span",{children:"Spam"})]}),Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return Z(e,"trash",a.id)},className:"d-flex align-items-center",children:[Object(b.jsx)(I.a,{className:"mr-50",size:18}),Object(b.jsx)("span",{children:"Trash"})]})]})]})}),Object(b.jsx)("li",{className:"list-inline-item mr-1",children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(f.a,{tag:"span",children:Object(b.jsx)(E.a,{size:18})}),Object(b.jsxs)(g.a,{right:!0,children:[Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return q(e,"personal",[a.id])},className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-success bullet-sm mr-50"}),Object(b.jsx)("span",{children:"Personal"})]}),Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return q(e,"company",[a.id])},className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-primary bullet-sm mr-50"}),Object(b.jsx)("span",{children:"Company"})]}),Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return q(e,"important",[a.id])},className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-warning bullet-sm mr-50"}),Object(b.jsx)("span",{children:"Important"})]}),Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return q(e,"private",[a.id])},className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-danger bullet-sm mr-50"}),Object(b.jsx)("span",{children:"Private"})]})]})]})}),Object(b.jsx)("li",{className:"list-inline-item mr-1",children:Object(b.jsx)("span",{className:"action-icon",onClick:function(){J([a.id],!1),Y()},children:Object(b.jsx)(_.a,{size:18})})}),Object(b.jsx)("li",{className:"list-inline-item mr-1",children:Object(b.jsx)("span",{className:"action-icon",onClick:function(){B([a.id]),Y()},children:Object(b.jsx)(I.a,{size:18})})}),Object(b.jsx)("li",{className:"list-inline-item email-prev",children:Object(b.jsx)("span",{className:n()({"action-icon":a.hasPreviousMail}),onClick:function(){return a.hasPreviousMail?l(U("next",a.id)):null},children:Object(b.jsx)(D.a,{size:18,className:n()({"text-muted":!a.hasPreviousMail})})})}),Object(b.jsx)("li",{className:"list-inline-item email-next",children:Object(b.jsx)("span",{className:n()({"action-icon":a.hasNextMail}),onClick:function(){return a.hasNextMail?l(U("previous",a.id)):null},children:Object(b.jsx)(R.a,{size:18,className:n()({"text-muted":!a.hasNextMail})})})})]})})]}),Object(b.jsxs)(F.a,{className:"email-scroll-area",options:{wheelPropagation:!1},children:[Object(b.jsx)(M.a,{children:Object(b.jsx)(y.a,{sm:"12",children:Object(b.jsx)("div",{className:"email-label",children:function(e){if(e&&e.length)return e.map((function(e){return Object(b.jsx)(x.a,{color:"light-".concat(i[e]),className:"mr-50 text-capitalize",pill:!0,children:e},e)}))}(a.labels)})})}),a.replies&&a.replies.length?Object(b.jsxs)(c.Fragment,{children:[!1===V?Object(b.jsx)(M.a,{className:"mb-1",children:Object(b.jsx)(y.a,{sm:"12",children:Object(b.jsxs)("a",{className:"font-weight-bold",href:"/",onClick:function(e){e.preventDefault(),W(!0)},children:["View ",a.replies.length," Earlier Messages"]})})}):null,function(e){if(e.length&&!0===V)return e.map((function(e,a){return Object(b.jsx)(M.a,{children:Object(b.jsx)(y.a,{sm:"12",children:X(e)})},a)}))}(a.replies)]}):null,Object(b.jsx)(M.a,{children:Object(b.jsx)(y.a,{sm:"12",children:X(a)})}),Object(b.jsx)(M.a,{children:Object(b.jsx)(y.a,{sm:"12",children:Object(b.jsx)(u.a,{children:Object(b.jsx)(C.a,{children:Object(b.jsxs)("h5",{className:"mb-0",children:["Click here to"," ",Object(b.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:"Reply"})," ","or"," ",Object(b.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:"Forward"})]})})})})})]})]}):null})},G=t(0),q=t(122),J=t(592),H=t(660),Q=t(515),K=t(999),V=t(1094),W=t(983),X=t(547),Y=t(538),Z=t(506),$=t(496),ee=t(998),ae=t(489),te=t(469),se=t(536),ce=t(23),le=t(32),ie=t(60),ne=t(83),re=t(42),je=t(84),me=(t(754),t(519),function(e){var a=Object(se.a)(),t=Object(s.a)(a,2),l=t[0],i=(t[1],e.composeOpen),n=e.toggleCompose,m=Object(c.useState)(!1),o=Object(s.a)(m,2),h=o[0],x=o[1],u=Object(c.useState)(!1),O=Object(s.a)(u,2),N=O[0],C=O[1],k=[{value:"pheobe",label:"Pheobe Buffay",img:ce.default},{value:"chandler",label:"Chandler Bing",img:le.default},{value:"ross",label:"Ross Geller",img:ie.default},{value:"monica",label:"Monica Geller",img:ne.default},{value:"joey",label:"Joey Tribbiani",img:re.default},{value:"Rachel",label:"Rachel Green",img:je.default}],M=function(e){var a=e.data,t=Object(q.a)(e,["data"]);return Object(b.jsx)(H.z.Option,Object(G.a)(Object(G.a)({},t),{},{children:Object(b.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[Object(b.jsx)(j.a,{className:"my-0 mr-50",size:"sm",img:a.img}),a.label]})}))},y=function(e){e.preventDefault(),x(!h)},z=function(e){e.preventDefault(),C(!N)},w=function(e){e.preventDefault(),n()};return Object(b.jsxs)(X.a,{scrollable:!0,fade:!1,id:"compose-mail",container:".content-body",className:"modal-lg",isOpen:i,backdrop:!1,contentClassName:"p-0",toggle:n,modalClassName:"modal-sticky",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",children:"Compose Mail"}),Object(b.jsxs)("div",{className:"modal-actions",children:[Object(b.jsx)("a",{href:"/",className:"text-body mr-75",onClick:w,children:Object(b.jsx)(K.a,{size:14})}),Object(b.jsx)("a",{href:"/",className:"text-body mr-75",onClick:function(e){return e.preventDefault()},children:Object(b.jsx)(V.a,{size:14})}),Object(b.jsx)("a",{href:"/",className:"text-body",onClick:w,children:Object(b.jsx)(W.a,{size:14})})]})]}),Object(b.jsx)(Y.a,{className:"flex-grow-1 p-0",children:Object(b.jsxs)(Z.a,{className:"compose-form",onSubmit:function(e){return e.preventDefault()},children:[Object(b.jsxs)("div",{className:"compose-mail-form-field",children:[Object(b.jsx)($.a,{for:"email-to",className:"form-label",children:"To:"}),Object(b.jsx)("div",{className:"flex-grow-1",children:Object(b.jsx)(Q.a,{isMulti:!0,id:"email-to",isClearable:!1,theme:r.j,options:k,className:"react-select select-borderless",classNamePrefix:"select",components:{Option:M}})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{href:"/",className:"toggle-cc text-body mr-1",onClick:y,children:"CC"}),Object(b.jsx)("a",{href:"/",className:"toggle-cc text-body",onClick:z,children:"BCC"})]})]}),!0===h?Object(b.jsxs)("div",{className:"compose-mail-form-field cc-wrapper",children:[Object(b.jsx)($.a,{for:"email-cc",className:"form-label",children:"CC:"}),Object(b.jsx)("div",{className:"flex-grow-1",children:Object(b.jsx)(Q.a,{isMulti:!0,id:"email-cc",isClearable:!1,theme:r.j,options:k,className:"react-select select-borderless",classNamePrefix:"select",components:{Option:M}})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/",className:"toggle-cc text-body",onClick:y,children:Object(b.jsx)(W.a,{size:14})})})]}):null,!0===N?Object(b.jsxs)("div",{className:"compose-mail-form-field cc-wrapper",children:[Object(b.jsx)($.a,{for:"email-bcc",className:"form-label",children:"BCC:"}),Object(b.jsx)("div",{className:"flex-grow-1",children:Object(b.jsx)(Q.a,{isMulti:!0,id:"email-bcc",isClearable:!1,theme:r.j,options:k,className:"react-select select-borderless",classNamePrefix:"select",components:{Option:M}})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/",className:"toggle-cc text-body",onClick:z,children:Object(b.jsx)(W.a,{size:14})})})]}):null,Object(b.jsxs)("div",{className:"compose-mail-form-field",children:[Object(b.jsx)($.a,{for:"email-subject",className:"form-label",children:"Subject:"}),Object(b.jsx)(ee.a,{id:"email-subject",placeholder:"Subject"})]}),Object(b.jsx)("div",{id:"message-editor",children:Object(b.jsx)(J.a,{apiKey:"emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64",init:{height:296,menubar:!1,branding:!1,statusbar:!1,placeholder:"Message",toolbar_location:"bottom",skin:"dark"===l?"dark":void 0,toolbar:"fontselect bold italic underline link",content_css:"dark"===l?"dark":void 0}})}),Object(b.jsxs)("div",{className:"compose-footer-wrapper",children:[Object(b.jsxs)("div",{className:"btn-wrapper d-flex align-items-center",children:[Object(b.jsxs)(ae.a,{direction:"up",className:"mr-1",children:[Object(b.jsx)(te.a,{color:"primary",onClick:n,children:"Send"}),Object(b.jsx)(f.a,{className:"dropdown-toggle-split",color:"primary",caret:!0}),Object(b.jsx)(g.a,{right:!0,children:Object(b.jsx)(v.a,{href:"/",tag:"a",onClick:w,children:"Schedule Send"})})]}),Object(b.jsx)("div",{className:"email-attachement",children:Object(b.jsxs)($.a,{className:"mb-0",for:"attach-email-item",children:[Object(b.jsx)(d.a,{className:"cursor-pointer ml-50",size:18}),Object(b.jsx)("input",{type:"file",name:"attach-email-item",id:"attach-email-item",hidden:!0})]})})]}),Object(b.jsxs)("div",{className:"footer-action d-flex align-items-center",children:[Object(b.jsxs)(p.a,{className:"mr-50",direction:"up",children:[Object(b.jsx)(f.a,{tag:"span",children:Object(b.jsx)(S.a,{className:"cursor-pointer",size:18})}),Object(b.jsxs)(g.a,{right:!0,children:[Object(b.jsx)(v.a,{href:"/",tag:"a",onClick:function(e){return e.preventDefault()},children:"Add Label"}),Object(b.jsx)(v.a,{href:"/",tag:"a",onClick:function(e){return e.preventDefault()},children:"Plain text mode"}),Object(b.jsx)(v.a,{divider:!0}),Object(b.jsx)(v.a,{href:"/",tag:"a",onClick:function(e){return e.preventDefault()},children:"Print"}),Object(b.jsx)(v.a,{href:"/",tag:"a",onClick:function(e){return e.preventDefault()},children:"Check Spelling"})]})]}),Object(b.jsx)(I.a,{size:18,onClick:n})]})]})]})})]})}),de=t(996),oe=t(997),be=t(811),he=t(981),xe=t(1095),ue=t(1015),Oe=function(e){var a=e.query,t=e.store,l=e.setQuery,i=e.dispatch,n=e.selectMail,j=e.composeOpen,m=e.updateMails,d=e.paginateMail,o=e.selectAllMail,x=e.toggleCompose,u=e.setSidebarOpen,O=e.updateMailLabel,N=e.resetSelectedMail,C=e.selectCurrentMail,k=t.mails,M=t.selectedMails,y=Object(c.useState)(!1),S=Object(s.a)(y,2),z=S[0],w=S[1],T={personal:"success",company:"primary",important:"warning",private:"danger"},D=function(e){i(C(e)),w(!0)},R=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:M;e.preventDefault(),i(m(t,{folder:a})),i(N())},U=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:M;e.preventDefault(),i(O(t,a)),i(N())},G=function(e,a){i(m(e,{isRead:a})).then((function(){return i(N())})),i(o(!1))},q=function(e){i(m(e,{folder:"trash"})),i(N())};return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsxs)("div",{className:"email-app-list",children:[Object(b.jsxs)("div",{className:"app-fixed-search d-flex align-items-center",children:[Object(b.jsx)("div",{className:"sidebar-toggle d-block d-lg-none ml-1",onClick:function(){return u(!0)},children:Object(b.jsx)(xe.a,{})}),Object(b.jsx)("div",{className:"d-flex align-content-center justify-content-between w-100",children:Object(b.jsxs)(de.a,{className:"input-group-merge",children:[Object(b.jsx)(oe.a,{addonType:"prepend",children:Object(b.jsx)(be.a,{children:Object(b.jsx)(ue.a,{className:"text-muted",size:14})})}),Object(b.jsx)(ee.a,{id:"email-search",placeholder:"Search email",value:a,onChange:function(e){return l(e.target.value)}})]})})]}),Object(b.jsxs)("div",{className:"app-action",children:[Object(b.jsx)("div",{className:"action-left",children:Object(b.jsx)(he.a,{type:"checkbox",id:"select-all",label:"Select All",onChange:function(e){i(o(e.target.checked))},checked:M.length&&M.length===k.length})}),M.length?Object(b.jsx)("div",{className:"action-right",children:Object(b.jsxs)("ul",{className:"list-inline m-0",children:[Object(b.jsx)("li",{className:"list-inline-item mr-1",children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(f.a,{tag:"span",children:Object(b.jsx)(P.a,{size:18})}),Object(b.jsxs)(g.a,{right:!0,children:[Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return R(e,"draft")},className:"d-flex align-items-center",children:[Object(b.jsx)(L.a,{className:"mr-50",size:18}),Object(b.jsx)("span",{children:"Draft"})]}),Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return R(e,"spam")},className:"d-flex align-items-center",children:[Object(b.jsx)(A.a,{className:"mr-50",size:18}),Object(b.jsx)("span",{children:"Spam"})]}),Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return R(e,"trash")},className:"d-flex align-items-center",children:[Object(b.jsx)(I.a,{className:"mr-50",size:18}),Object(b.jsx)("span",{children:"Trash"})]})]})]})}),Object(b.jsx)("li",{className:"list-inline-item mr-1",children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(f.a,{tag:"span",children:Object(b.jsx)(E.a,{size:18})}),Object(b.jsxs)(g.a,{right:!0,children:[Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return U(e,"personal")},className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-success bullet-sm mr-50"}),Object(b.jsx)("span",{children:"Personal"})]}),Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return U(e,"company")},className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-primary bullet-sm mr-50"}),Object(b.jsx)("span",{children:"Company"})]}),Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return U(e,"important")},className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-warning bullet-sm mr-50"}),Object(b.jsx)("span",{children:"Important"})]}),Object(b.jsxs)(v.a,{tag:"a",href:"/",onClick:function(e){return U(e,"private")},className:"d-flex align-items-center",children:[Object(b.jsx)("span",{className:"bullet bullet-danger bullet-sm mr-50"}),Object(b.jsx)("span",{children:"Private"})]})]})]})}),Object(b.jsx)("li",{className:"list-inline-item mr-1",children:Object(b.jsx)("span",{className:"action-icon",onClick:function(){return G(M,!1)},children:Object(b.jsx)(_.a,{size:18})})}),Object(b.jsx)("li",{className:"list-inline-item mr-1",children:Object(b.jsx)("span",{className:"action-icon",onClick:function(){return q(M)},children:Object(b.jsx)(I.a,{size:18})})})]})}):null]}),Object(b.jsx)(F.a,{className:"email-user-list",options:{wheelPropagation:!1},children:k.length?Object(b.jsx)("ul",{className:"email-media-list",children:function(){if(k.length)return k.map((function(e,a){return Object(b.jsx)(h,{mail:e,dispatch:i,selectMail:n,updateMails:m,labelColors:T,selectedMails:M,handleMailClick:D,handleMailReadUpdate:G,formatDateToMonthShort:r.c},a)}))}()}):Object(b.jsx)("div",{className:"no-results d-block",children:Object(b.jsx)("h5",{children:"No Items Found"})})})]}),Object(b.jsx)(B,{openMail:z,dispatch:i,mail:t.currentMail,labelColors:T,setOpenMail:w,updateMails:m,paginateMail:d,updateMailLabel:O,handleMailToTrash:q,handleFolderUpdate:R,handleLabelsUpdate:U,handleMailReadUpdate:G,formatDateToMonthShort:r.c}),Object(b.jsx)(me,{composeOpen:j,toggleCompose:x})]})},pe=t(473),fe=t(1115),ge=t(573),Ne=t(574),ve=function(e){var a=e.store,t=e.sidebarOpen,s=e.toggleCompose,c=e.dispatch,i=e.getMails,r=e.resetSelectedMail,j=e.setSidebarOpen,d=Object(l.i)(),o=function(e){c(i(Object(G.a)(Object(G.a)({},a.params),{},{folder:e}))),c(r())},h=function(e){c(i(Object(G.a)(Object(G.a)({},a.params),{},{label:e}))),c(r())},u=function(e){return!!(d.folder&&d.folder===e||d.label&&d.label===e)};return Object(b.jsx)("div",{className:n()("sidebar-left",{show:t}),children:Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)("div",{className:"sidebar-content email-app-sidebar",children:Object(b.jsxs)("div",{className:"email-app-menu",children:[Object(b.jsx)("div",{className:"form-group-compose text-center compose-btn",children:Object(b.jsx)(te.a.Ripple,{className:"compose-email",color:"primary",block:!0,onClick:function(){s(),j(!1)},children:"Compose"})}),Object(b.jsxs)(F.a,{className:"sidebar-menu-list",options:{wheelPropagation:!1},children:[Object(b.jsxs)(ge.a,{tag:"div",className:"list-group-messages",children:[Object(b.jsxs)(Ne.a,{tag:pe.b,to:"/apps/email/inbox",onClick:function(){return o("inbox")},action:!0,active:!Object.keys(d).length||u("inbox"),children:[Object(b.jsx)(_.a,{size:18,className:"mr-75"}),Object(b.jsx)("span",{className:"align-middle",children:"Inbox"}),a.emailsMeta.inbox?Object(b.jsx)(x.a,{className:"float-right",color:"light-primary",pill:!0,children:a.emailsMeta.inbox}):null]}),Object(b.jsxs)(Ne.a,{tag:pe.b,to:"/apps/email/sent",onClick:function(){return o("sent")},action:!0,active:u("sent"),children:[Object(b.jsx)(fe.a,{size:18,className:"mr-75"}),Object(b.jsx)("span",{className:"align-middle",children:"Sent"})]}),Object(b.jsxs)(Ne.a,{tag:pe.b,to:"/apps/email/draft",onClick:function(){return o("draft")},action:!0,active:u("draft"),children:[Object(b.jsx)(L.a,{size:18,className:"mr-75"}),Object(b.jsx)("span",{className:"align-middle",children:"Draft"}),a.emailsMeta.draft?Object(b.jsx)(x.a,{className:"float-right",color:"light-warning",pill:!0,children:a.emailsMeta.draft}):null]}),Object(b.jsxs)(Ne.a,{tag:pe.b,to:"/apps/email/starred",onClick:function(){return o("starred")},action:!0,active:u("starred"),children:[Object(b.jsx)(m.a,{size:18,className:"mr-75"}),Object(b.jsx)("span",{className:"align-middle",children:"Starred"})]}),Object(b.jsxs)(Ne.a,{tag:pe.b,to:"/apps/email/spam",onClick:function(){return o("spam")},action:!0,active:u("spam"),children:[Object(b.jsx)(A.a,{size:18,className:"mr-75"}),Object(b.jsx)("span",{className:"align-middle",children:"Spam"}),a.emailsMeta.spam?Object(b.jsx)(x.a,{className:"float-right",color:"light-danger",pill:!0,children:a.emailsMeta.spam}):null]}),Object(b.jsxs)(Ne.a,{tag:pe.b,to:"/apps/email/trash",onClick:function(){return o("trash")},action:!0,active:u("trash"),children:[Object(b.jsx)(I.a,{size:18,className:"mr-75"}),Object(b.jsx)("span",{className:"align-middle",children:"Trash"})]})]}),Object(b.jsx)("h6",{className:"section-label mt-3 mb-1 px-2",children:"Labels"}),Object(b.jsxs)(ge.a,{tag:"div",className:"list-group-labels",children:[Object(b.jsxs)(Ne.a,{tag:pe.b,to:"/apps/email/label/personal",onClick:function(){return h("personal")},active:u("personal"),action:!0,children:[Object(b.jsx)("span",{className:"bullet bullet-sm bullet-success mr-1"}),"Personal"]}),Object(b.jsxs)(Ne.a,{tag:pe.b,to:"/apps/email/label/company",onClick:function(){return h("company")},active:u("company"),action:!0,children:[Object(b.jsx)("span",{className:"bullet bullet-sm bullet-primary mr-1"}),"Company"]}),Object(b.jsxs)(Ne.a,{tag:pe.b,to:"/apps/email/label/important",onClick:function(){return h("important")},active:u("important"),action:!0,children:[Object(b.jsx)("span",{className:"bullet bullet-sm bullet-warning mr-1"}),"Important"]}),Object(b.jsxs)(Ne.a,{tag:pe.b,to:"/apps/email/label/private",onClick:function(){return h("private")},active:u("private"),action:!0,children:[Object(b.jsx)("span",{className:"bullet bullet-sm bullet-danger mr-1"}),"Private"]})]})]})]})})})})},Ce=t(81),ke=t(82),Me=t.n(ke),ye=function(e){return function(a){return Me.a.get("/apps/email/emails",{params:e}).then((function(t){a({type:"GET_MAILS",data:t.data,params:e})}))}},Se=function(e,a){return function(t,s){return Me.a.post("/apps/email/update-emails",{emailIds:e,dataToUpdate:a}).then((function(c){t({type:"UPDATE_MAILS",emailIds:e,dataToUpdate:a,data:c.data}),t(ye(s().email.params))}))}},ze=function(e,a){return function(t,s){return Me.a.post("/apps/email/update-emails-label",{emailIds:e,label:a}).then((function(e){t({type:"UPDATE_MAIL_LABEL",data:e.data}),t(ye(s().email.params))}))}},we=function(e,a){return function(t){return Me.a.get("/apps/email/paginate-email",{params:{dir:e,emailId:a}}).then((function(e){t({type:"PAGINATE_MAIL",data:e.data})}))}},Te=function(e){return function(a){return Me.a.get("/apps/email/get-email",{id:e}).then((function(e){a({type:"SELECT_CURRENT_MAIL",mail:e.data})}))}},De=function(e){return function(a){return a({type:"SELECT_MAIL",id:e})}},Pe=function(e){return function(a){return a({type:"SELECT_ALL_MAIL",val:e})}},Le=function(){return function(e){return e({type:"RESET_SELECT_MAILS"})}};t(1374),a.default=function(){var e=Object(c.useState)(""),a=Object(s.a)(e,2),t=a[0],i=a[1],r=Object(c.useState)(!1),j=Object(s.a)(r,2),m=j[0],d=j[1],o=Object(c.useState)(!1),h=Object(s.a)(o,2),x=h[0],u=h[1],O=function(){return u(!x)},p=Object(Ce.b)(),f=Object(Ce.c)((function(e){return e.email})),g=Object(l.i)();return Object(c.useEffect)((function(){p(ye({q:t||"",folder:g.folder||"inbox",label:g.label||""}))}),[t,g.folder,g.label]),Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)(ve,{store:f,dispatch:p,getMails:ye,sidebarOpen:m,toggleCompose:O,setSidebarOpen:d,resetSelectedMail:Le}),Object(b.jsx)("div",{className:"content-right",children:Object(b.jsxs)("div",{className:"content-body",children:[Object(b.jsx)("div",{className:n()("body-content-overlay",{show:m}),onClick:function(){return d(!1)}}),Object(b.jsx)(Oe,{store:f,query:t,setQuery:i,dispatch:p,getMails:ye,selectMail:De,updateMails:Se,composeOpen:x,paginateMail:we,selectAllMail:Pe,toggleCompose:O,setSidebarOpen:d,updateMailLabel:ze,selectCurrentMail:Te,resetSelectedMail:Le})]})})]})}}}]);
//# sourceMappingURL=12.111b4141.chunk.js.map