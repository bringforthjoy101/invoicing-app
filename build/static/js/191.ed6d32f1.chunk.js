(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[191],{2084:function(t,e,r){"use strict";r.r(e);var n=r(485),o=r.n(n),a=r(486),i=r(28),c=r(1),s=r(483),l=r(82),u=r.n(l),h=r(538),f=r(1041),p=r(473),d=r(807),m=r(480),y=r(482),v=r(479),g=r(484),j=r(986),b=r(495),x=r(469),O=r(551),w=(r(545),r(81)),L=r(511),E=r(6);e.default=function(){Object(w.b)();var t=Object(h.a)(),e=Object(i.a)(t,2),n=e[0],l=(e[1],Object(c.useState)("")),N=Object(i.a)(l,2),F=N[0],k=N[1],G=Object(c.useState)(!1),_=Object(i.a)(G,2),P=_[0],C=_[1],S=function(){var t=Object(a.a)(o.a.mark((function t(e,r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===e||void 0===e||e.preventDefault(),!r||r.length){t.next=13;break}return C(!0),t.prev=3,t.next=6,u.a.post("https://api.appiawave.com/admin/reset_password",{email:F});case 6:(n=t.sent).data.success?(Object(s.l)("Great job!",n.data.message,"success"),C(!1),k("")):Object(s.l)("Oops!",n.data.message,"error"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.error({error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e,r){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){S()}),[]);var A="dark"===n?"forgot-password-v2-dark.svg":"forgot-password-v2.svg",T=r(676)("./".concat(A)).default;return Object(s.g)()?Object(E.jsx)(d.a,{to:"/"}):Object(E.jsx)("div",{className:"auth-wrapper auth-v2",children:Object(E.jsxs)(m.a,{className:"auth-inner m-0",children:[Object(E.jsxs)(p.b,{className:"brand-logo",to:"/",children:[Object(E.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(E.jsxs)("defs",{children:[Object(E.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(E.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(E.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(E.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(E.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(E.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(E.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(E.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(E.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(E.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(E.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(E.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(E.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(E.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(E.jsx)("h2",{className:"brand-text text-primary ml-1",children:"Appia"})]}),Object(E.jsx)(y.a,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(E.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(E.jsx)("img",{className:"img-fluid",src:T,alt:"Login V2"})})}),Object(E.jsx)(y.a,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(E.jsxs)(y.a,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(E.jsx)(v.a,{tag:"h2",className:"font-weight-bold mb-1",children:"Forgot Password? \ud83d\udd12"}),Object(E.jsx)(g.a,{className:"mb-2",children:"Enter your email and we'll send you instructions to reset your password"}),Object(E.jsxs)(L.AvForm,{className:"auth-forgot-password-form mt-2",onSubmit:S,children:[Object(E.jsxs)(j.a,{children:[Object(E.jsx)(b.a,{className:"form-label",for:"login-email",children:"Email"}),Object(E.jsx)(L.AvInput,{required:!0,autoFocus:!0,type:"email",value:F,id:"login-email",name:"login-email",placeholder:"john@example.com",onChange:function(t){return k(t.target.value)}})]}),Object(E.jsxs)(x.a.Ripple,{color:"primary",block:!0,disabled:P,children:[P&&Object(E.jsx)(O.a,{color:"white",size:"sm"}),"Send reset link"]})]}),Object(E.jsx)("p",{className:"text-center mt-2",children:Object(E.jsxs)(p.b,{to:"/login",children:[Object(E.jsx)(f.a,{className:"mr-25",size:14}),Object(E.jsx)("span",{className:"align-middle",children:"Back to login"})]})})]})})]})})}},485:function(t,e,r){t.exports=r(493)},486:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},493:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",m={};function y(){}function v(){}function g(){}var j={};j[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(G([])));x&&x!==r&&n.call(x,a)&&(j=x);var O=g.prototype=y.prototype=Object.create(j);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function G(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:_}}function _(){return{value:e,done:!0}}return v.prototype=O.constructor=g,g.constructor=v,v.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},w(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(O),s(O,c,"Generator"),O[a]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=191.ed6d32f1.chunk.js.map