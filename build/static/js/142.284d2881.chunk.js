(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[142],{1090:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/banner.06ea9907.png"},1246:function(e,a,t){"use strict";var s=t(823),n=t(502),c=t(492),r=t(497),i=t(536),l=t(537),o=t(538),d=t(506),u=t(519),b=t(6);a.a=function(e){var a=e.searchTerm,p=e.setSearchTerm,j=e.handleFilter;return Object(b.jsx)("div",{id:"knowledge-base-search",children:Object(b.jsx)(n.a,{className:"knowledge-base-bg",style:{backgroundImage:"url(".concat(t(1090).default,")")},children:Object(b.jsxs)(c.a,{className:"text-center",children:[Object(b.jsx)("h2",{className:"text-primary",children:"Dedicated Source Used on Website"}),Object(b.jsxs)(r.a,{className:"mb-2",children:["Popular searches: ",Object(b.jsx)("span",{className:"font-weight-bolder",children:"Sales automation, Email marketing"})]}),Object(b.jsx)(i.a,{className:"kb-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(b.jsxs)(l.a,{className:"input-group-merge",children:[Object(b.jsx)(o.a,{addonType:"prepend",children:Object(b.jsx)(d.a,{children:Object(b.jsx)(s.a,{size:14})})}),Object(b.jsx)(u.a,{value:a,onChange:function(e){return function(e){j?j(e):p(e.target.value)}(e)},placeholder:"Ask a question..."})]})})]})})})}},1247:function(e,a,t){},2091:function(e,a,t){"use strict";t.r(a);var s=t(123),n=t(58),c=t(28),r=t(1),i=t(82),l=t.n(i),o=t(472),d=t(27),u=t.n(d),b=t(1205),p=t(482),j=t(491),m=t(1246),g=t(501),h=t(502),f=t(492),O=t(636),x=t(637),v=t(500),N=(t(1247),t(6));a.default=function(){var e=Object(r.useState)(null),a=Object(c.a)(e,2),t=a[0],i=a[1],d=Object(r.useState)([]),y=Object(c.a)(d,2),T=y[0],M=y[1],C=Object(r.useState)(""),z=Object(c.a)(C,2),P=z[0],w=z[1];Object(r.useEffect)((function(){l.a.get("/faq/data/category").then((function(e){return i(e.data)}))}),[]);var k=Object(b.i)(),R=function(e){var a=e.item,t=o[a.icon];return Object(N.jsx)(g.a,{className:"kb-search-content",md:"4",sm:"6",children:Object(N.jsx)(h.a,{children:Object(N.jsxs)(f.a,{children:[Object(N.jsxs)("h6",{className:"kb-title",children:[Object(N.jsx)(t,{size:20,className:u()("mr-50",Object(n.a)({},a.iconColor,a.iconColor))}),Object(N.jsxs)("span",{children:[a.title," ","(".concat(a.questions.length,")")]})]}),Object(N.jsx)(O.a,{className:"list-group-circle mt-2",children:a.questions.map((function(e){return Object(N.jsx)(x.a,{tag:p.b,to:"/pages/knowledge-base/".concat(k.category,"/").concat(e.slug),className:"text-body",children:e.question},e.id)}))})]})})})};return Object(N.jsxs)(r.Fragment,{children:[Object(N.jsx)(j.a,{breadCrumbTitle:"Knowledge Base",breadCrumbParent:"Pages",breadCrumbParent2:"Knowledge Base",breadCrumbActive:"Category"}),Object(N.jsx)(m.a,{searchTerm:P,setSearchTerm:w,handleFilter:function(e){var a=e.target.value,n=e.target.value.toLowerCase();w(e.target.value);var c=[];a.length&&(c=t.filter((function(e){return e.title.toLowerCase().includes(n)||e.questions.filter((function(e){return e.question.toLowerCase().includes(n)})).length}))),M(Object(s.a)(c))}}),null!==t?Object(N.jsx)("div",{id:"knowledge-base-category",children:Object(N.jsx)(v.a,{className:"kb-search-content-info match-height",children:(P.length?T:t).map((function(e){return Object(N.jsx)(R,{item:e},e.id)}))})}):null]})}},491:function(e,a,t){"use strict";var s=t(482),n=t(1153),c=t(1130),r=t(1129),i=t(1117),l=t(1131),o=t(515),d=t(516),u=t(514),b=t(669),p=t(663),j=t(664),m=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,g=e.breadCrumbParent2,h=e.breadCrumbParent3,f=e.breadCrumbActive;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[a?Object(m.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(d.a,{tag:"li",children:Object(m.jsx)(s.b,{to:"/",children:"Home"})}),Object(m.jsx)(d.a,{tag:"li",className:"text-primary",children:t}),g?Object(m.jsx)(d.a,{tag:"li",className:"text-primary",children:g}):"",h?Object(m.jsx)(d.a,{tag:"li",className:"text-primary",children:h}):"",Object(m.jsx)(d.a,{tag:"li",active:!0,children:f})]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(b.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(n.a,{size:14})}),Object(m.jsxs)(p.a,{tag:"ul",right:!0,children:[Object(m.jsxs)(j.a,{tag:s.b,to:"/apps/chat",children:[Object(m.jsx)(c.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(j.a,{tag:s.b,to:"/apps/chat",children:[Object(m.jsx)(r.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(j.a,{tag:s.b,to:"/apps/email",children:[Object(m.jsx)(i.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(j.a,{tag:s.b,to:"/apps/calendar",children:[Object(m.jsx)(l.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},497:function(e,a,t){"use strict";var s=t(14),n=t(15),c=t(1),r=t.n(c),i=t(2),l=t.n(i),o=t(27),d=t.n(o),u=t(80),b={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"card-text"),t);return r.a.createElement(c,Object(s.a)({},i,{className:l}))};p.propTypes=b,p.defaultProps={tag:"p"},a.a=p},506:function(e,a,t){"use strict";var s=t(14),n=t(15),c=t(1),r=t.n(c),i=t(2),l=t.n(i),o=t(27),d=t.n(o),u=t(80),b={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"input-group-text"),t);return r.a.createElement(c,Object(s.a)({},i,{className:l}))};p.propTypes=b,p.defaultProps={tag:"span"},a.a=p},519:function(e,a,t){"use strict";var s=t(14),n=t(15),c=t(121),r=t(57),i=t(1),l=t.n(i),o=t(2),d=t.n(o),u=t(27),b=t.n(u),p=t(80),j={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.focus=t.focus.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.type,r=e.bsSize,i=e.valid,o=e.invalid,d=e.tag,u=e.addon,j=e.plaintext,m=e.innerRef,g=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(c)>-1,f=new RegExp("\\D","g"),O=d||("select"===c||"textarea"===c?c:"input"),x="form-control";j?(x+="-plaintext",O=d||"input"):"file"===c?x+="-file":"range"===c?x+="-range":h&&(x=u?null:"form-check-input"),g.size&&f.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var v=Object(p.mapToCssModules)(b()(a,o&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,x),t);return("input"===O||d&&"function"===typeof d)&&(g.type=c),g.children&&!j&&"select"!==c&&"string"===typeof O&&"select"!==O&&(Object(p.warnOnce)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),l.a.createElement(O,Object(s.a)({},g,{ref:m,className:v,"aria-invalid":o}))},a}(l.a.Component);m.propTypes=j,m.defaultProps={type:"text"},a.a=m},536:function(e,a,t){"use strict";var s=t(14),n=t(15),c=t(121),r=t(57),i=t(1),l=t.n(i),o=t(2),d=t.n(o),u=t(27),b=t.n(u),p=t(80),j={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,r=e.tag,i=e.innerRef,o=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(p.mapToCssModules)(b()(a,!!c&&"form-inline"),t);return l.a.createElement(r,Object(s.a)({},o,{ref:i,className:d}))},a}(i.Component);m.propTypes=j,m.defaultProps={tag:"form"},a.a=m},537:function(e,a,t){"use strict";var s=t(14),n=t(15),c=t(1),r=t.n(c),i=t(2),l=t.n(i),o=t(27),d=t.n(o),u=t(80),b={tag:u.tagPropType,size:l.a.string,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.tag,i=e.size,l=Object(n.a)(e,["className","cssModule","tag","size"]),o=Object(u.mapToCssModules)(d()(a,"input-group",i?"input-group-"+i:null),t);return r.a.createElement(c,Object(s.a)({},l,{className:o}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},538:function(e,a,t){"use strict";var s=t(14),n=t(15),c=t(1),r=t.n(c),i=t(2),l=t.n(i),o=t(27),d=t.n(o),u=t(80),b=t(506),p={tag:u.tagPropType,addonType:l.a.oneOf(["prepend","append"]).isRequired,children:l.a.node,className:l.a.string,cssModule:l.a.object},j=function(e){var a=e.className,t=e.cssModule,c=e.tag,i=e.addonType,l=e.children,o=Object(n.a)(e,["className","cssModule","tag","addonType","children"]),p=Object(u.mapToCssModules)(d()(a,"input-group-"+i),t);return"string"===typeof l?r.a.createElement(c,Object(s.a)({},o,{className:p}),r.a.createElement(b.a,{children:l})):r.a.createElement(c,Object(s.a)({},o,{className:p,children:l}))};j.propTypes=p,j.defaultProps={tag:"div"},a.a=j},636:function(e,a,t){"use strict";var s=t(14),n=t(15),c=t(1),r=t.n(c),i=t(2),l=t.n(i),o=t(27),d=t.n(o),u=t(80),b={tag:u.tagPropType,flush:l.a.bool,className:l.a.string,cssModule:l.a.object,horizontal:l.a.oneOfType([l.a.bool,l.a.string])},p=function(e){var a=e.className,t=e.cssModule,c=e.tag,i=e.flush,l=e.horizontal,o=Object(n.a)(e,["className","cssModule","tag","flush","horizontal"]),b=Object(u.mapToCssModules)(d()(a,"list-group",i?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(l)),t);return r.a.createElement(c,Object(s.a)({},o,{className:b}))};p.propTypes=b,p.defaultProps={tag:"ul",horizontal:!1},a.a=p},637:function(e,a,t){"use strict";var s=t(14),n=t(15),c=t(1),r=t.n(c),i=t(2),l=t.n(i),o=t(27),d=t.n(o),u=t(80),b={tag:u.tagPropType,active:l.a.bool,disabled:l.a.bool,color:l.a.string,action:l.a.bool,className:l.a.any,cssModule:l.a.object},p=function(e){e.preventDefault()},j=function(e){var a=e.className,t=e.cssModule,c=e.tag,i=e.active,l=e.disabled,o=e.action,b=e.color,j=Object(n.a)(e,["className","cssModule","tag","active","disabled","action","color"]),m=Object(u.mapToCssModules)(d()(a,!!i&&"active",!!l&&"disabled",!!o&&"list-group-item-action",!!b&&"list-group-item-"+b,"list-group-item"),t);return l&&(j.onClick=p),r.a.createElement(c,Object(s.a)({},j,{className:m}))};j.propTypes=b,j.defaultProps={tag:"li"},a.a=j}}]);
//# sourceMappingURL=142.284d2881.chunk.js.map