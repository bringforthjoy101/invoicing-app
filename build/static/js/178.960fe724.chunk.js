(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[178],{1691:function(e,a,t){},2095:function(e,a,t){"use strict";t.r(a);var c=t(28),s=t(1),l=t(82),i=t.n(l),r=t(516),n=t(477),o=t(544),d=t(601),b=t(474),m=t(484),j=t(480),u=t(481),h=t(482),p=t(478),g=t(540),x=t(487),O=t(508),f=t(1070),v=t(497),k=t(493),N=t(1067),y=t(469),C=(t(847),t(1691),t(518),t(827),t(6));a.default=function(){var e=Object(o.a)(),a=Object(c.a)(e,2),t=a[0],l=(a[1],Object(s.useState)(null)),w=Object(c.a)(l,2),_=w[0],S=w[1],q=Object(s.useState)(""),z=Object(c.a)(q,2),P=z[0],D=z[1],E=Object(s.useState)(""),F=Object(c.a)(E,2),M=F[0],T=F[1],A=Object(s.useState)([]),R=Object(c.a)(A,2),B=R[0],H=R[1],J=Object(s.useState)(null),G=Object(c.a)(J,2),I=G[0],L=G[1],V=Object(s.useState)("banner.jpg"),Y=Object(c.a)(V,2),K=Y[0],Q=Y[1],U=Object(s.useState)(""),W=Object(c.a)(U,2),X=W[0],Z=W[1];Object(s.useEffect)((function(){i.a.get("/blog/list/data/edit").then((function(e){S(e.data),D(e.data.blogTitle),T(e.data.slug),H(e.data.blogCategories),L(e.data.featuredImage),Z(e.data.status)}))}),[]);return Object(C.jsxs)("div",{className:"blog-edit-wrapper",children:[Object(C.jsx)(b.a,{breadCrumbTitle:"Blog Edit",breadCrumbParent:"Pages",breadCrumbParent2:"Blog",breadCrumbActive:"Edit"}),null!==_?Object(C.jsx)(j.a,{children:Object(C.jsx)(u.a,{sm:"12",children:Object(C.jsx)(h.a,{children:Object(C.jsxs)(p.a,{children:[Object(C.jsxs)(g.a,{children:[Object(C.jsx)(n.a,{className:"mr-75",img:_.avatar,width:"38",height:"38"}),Object(C.jsxs)(g.a,{body:!0,children:[Object(C.jsx)("h6",{className:"mb-25",children:_.userFullName}),Object(C.jsx)(x.a,{children:_.createdTime})]})]}),Object(C.jsx)(O.a,{className:"mt-2",onSubmit:function(e){return e.preventDefault()},children:Object(C.jsxs)(j.a,{children:[Object(C.jsx)(u.a,{md:"6",children:Object(C.jsxs)(f.a,{className:"mb-2",children:[Object(C.jsx)(v.a,{for:"blog-edit-title",children:"Title"}),Object(C.jsx)(k.a,{id:"blog-edit-title",value:P,onChange:function(e){return D(e.target.value)}})]})}),Object(C.jsx)(u.a,{md:"6",children:Object(C.jsxs)(f.a,{className:"mb-2",children:[Object(C.jsx)(v.a,{for:"blog-edit-category",children:"Category"}),Object(C.jsx)(r.a,{id:"blog-edit-category",isClearable:!1,theme:m.j,value:B,isMulti:!0,name:"colors",options:[{value:"fashion",label:"Fashion"},{value:"gaming",label:"Gaming"},{value:"quote",label:"Quote"},{value:"video",label:"Video"},{value:"food",label:"Food"}],className:"react-select",classNamePrefix:"select",onChange:function(e){return H(e)}})]})}),Object(C.jsx)(u.a,{md:"6",children:Object(C.jsxs)(f.a,{className:"mb-2",children:[Object(C.jsx)(v.a,{for:"blog-edit-slug",children:"Slug"}),Object(C.jsx)(k.a,{id:"blog-edit-slug",value:M,onChange:function(e){return T(e.target.value)}})]})}),Object(C.jsx)(u.a,{md:"6",children:Object(C.jsxs)(f.a,{className:"mb-2",children:[Object(C.jsx)(v.a,{for:"blog-edit-status",children:"Status"}),Object(C.jsxs)(k.a,{type:"select",id:"blog-edit-status",value:X,onChange:function(e){return Z(e.target.value)},children:[Object(C.jsx)("option",{value:"Published",children:"Published"}),Object(C.jsx)("option",{value:"Pending",children:"Pending"}),Object(C.jsx)("option",{value:"Draft",children:"Draft"})]})]})}),Object(C.jsx)(u.a,{sm:"12",children:Object(C.jsxs)(f.a,{className:"mb-2",children:[Object(C.jsx)(v.a,{children:"Content"}),Object(C.jsx)(d.a,{apiKey:"emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64",initialValue:"\n  <p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p>\n  <p>Liquorice drag\xe9e cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans drag\xe9e macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>\n  ",init:{height:250,selector:"textarea#full-featured",plugins:"print preview importcss tinydrive searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media  template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",mobile:{plugins:"print preview importcss tinydrive searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media  template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount textpattern noneditable help charmap quickbars emoticons"},menu:{tc:{items:"addcomment showcomments deleteallconversations"}},menubar:"file edit view insert format tools table tc help",toolbar:"undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor casechange removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment",autosave_ask_before_unload:!0,autosave_interval:"30s",autosave_prefix:"{path}{query}-{id}-",autosave_restore_when_empty:!1,autosave_retention:"2m",image_advtab:!0,importcss_append:!0,template_cdate_format:"[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",template_mdate_format:"[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",image_caption:!0,quickbars_selection_toolbar:"bold italic | quicklink h2 h3 blockquote quickimage quicktable",noneditable_noneditable_class:"mceNonEditable",toolbar_mode:"sliding",spellchecker_whitelist:["Ephox","Moxiecode"],_mode:"embedded",content_style:".mymention{ color: gray; }",contextmenu:"link image imagetools table configur",a11y_advanced_options:!0,skin:"dark"===t?"dark":void 0,content_css:"dark"===t?"dark":void 0}})]})}),Object(C.jsx)(u.a,{className:"mb-2",sm:"12",children:Object(C.jsxs)("div",{className:"border rounded p-2",children:[Object(C.jsx)("h4",{className:"mb-1",children:"Featured Image"}),Object(C.jsxs)(g.a,{className:"flex-column flex-md-row",children:[Object(C.jsx)("img",{className:"rounded mr-2 mb-1 mb-md-0",src:I,alt:"featured img",width:"170",height:"110"}),Object(C.jsxs)(g.a,{body:!0,children:[Object(C.jsx)("small",{className:"text-muted",children:"Required image resolution 800x400, image size 10mb."}),Object(C.jsx)("p",{className:"my-50",children:Object(C.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:"C:/fakepath/".concat(K)})}),Object(C.jsx)("div",{className:"d-inline-block",children:Object(C.jsx)(f.a,{className:"mb-0",children:Object(C.jsx)(N.a,{type:"file",id:"exampleCustomFileBrowser",name:"customFile",onChange:function(e){var a=new FileReader,t=e.target.files;Q(t[0].name),a.onload=function(){L(a.result)},a.readAsDataURL(t[0])},accept:".jpg, .png, .gif"})})})]})]})]})}),Object(C.jsxs)(u.a,{className:"mt-50",children:[Object(C.jsx)(y.a.Ripple,{color:"primary",className:"mr-1",children:"Save Changes"}),Object(C.jsx)(y.a.Ripple,{color:"secondary",outline:!0,children:"Cancel"})]})]})})]})})})}):null]})}},474:function(e,a,t){"use strict";var c=t(473),s=t(1153),l=t(1112),i=t(1175),r=t(1170),n=t(1109),o=t(490),d=t(491),b=t(489),m=t(1418),j=t(1082),u=t(1084),h=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,p=e.breadCrumbParent2,g=e.breadCrumbParent3,x=e.breadCrumbActive;return Object(h.jsxs)("div",{className:"content-header row",children:[Object(h.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(h.jsx)("div",{className:"row breadcrumbs-top",children:Object(h.jsxs)("div",{className:"col-12",children:[a?Object(h.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(h.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(d.a,{tag:"li",children:Object(h.jsx)(c.b,{to:"/",children:"Home"})}),Object(h.jsx)(d.a,{tag:"li",className:"text-primary",children:t}),p?Object(h.jsx)(d.a,{tag:"li",className:"text-primary",children:p}):"",g?Object(h.jsx)(d.a,{tag:"li",className:"text-primary",children:g}):"",Object(h.jsx)(d.a,{tag:"li",active:!0,children:x})]})})]})})}),Object(h.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(h.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(m.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(h.jsx)(s.a,{size:14})}),Object(h.jsxs)(j.a,{tag:"ul",right:!0,children:[Object(h.jsxs)(u.a,{tag:c.b,to:"/apps/chat",children:[Object(h.jsx)(l.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(h.jsxs)(u.a,{tag:c.b,to:"/apps/chat",children:[Object(h.jsx)(i.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(h.jsxs)(u.a,{tag:c.b,to:"/apps/email",children:[Object(h.jsx)(r.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(h.jsxs)(u.a,{tag:c.b,to:"/apps/calendar",children:[Object(h.jsx)(n.a,{className:"mr-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},827:function(e,a,t){}}]);
//# sourceMappingURL=178.960fe724.chunk.js.map