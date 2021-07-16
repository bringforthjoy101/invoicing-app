(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[177],{2196:function(e,t,r){"use strict";r.r(t);var n=r(485),o=r.n(n),a=r(0),i=r(486),s=r(28),c=r(1),l=r(477),u=r(538),h=r(132),f=r(133),d=r(82),p=r.n(d),j={loginEndpoint:"/jwt/login",registerEndpoint:"/jwt/register",refreshEndpoint:"/jwt/refresh-token",logoutEndpoint:"/jwt/logout",appiaLoginEndpoint:"".concat("https://api.appiawave.com","/admin/sign_in"),tokenType:"Bearer",storageTokenKeyName:"accessToken",storageRefreshTokenKeyName:"refreshToken"};var m={jwt:new(function(){function e(t){var r=this;Object(h.a)(this,e),this.jwtConfig=Object(a.a)({},j),this.isAlreadyFetchingAccessToken=!1,this.subscribers=[],this.jwtConfig=Object(a.a)(Object(a.a)({},this.jwtConfig),t),p.a.interceptors.request.use((function(e){var t=r.getToken();return t&&(e.headers.Authorization="".concat(r.jwtConfig.tokenType," ").concat(t)),e}),(function(e){return Promise.reject(e)})),p.a.interceptors.response.use((function(e){return e}),(function(e){var t=e.config,n=e.response,o=t;return n&&401===n.status?(r.isAlreadyFetchingAccessToken||(r.isAlreadyFetchingAccessToken=!0,r.refreshToken().then((function(e){r.isAlreadyFetchingAccessToken=!1,r.setToken(e.data.accessToken),r.setRefreshToken(e.data.refreshToken),r.onAccessTokenFetched(e.data.accessToken)}))),new Promise((function(e){r.addSubscriber((function(t){o.headers.Authorization="".concat(r.jwtConfig.tokenType," ").concat(t),e(r.axios(o))}))}))):Promise.reject(e)}))}return Object(f.a)(e,[{key:"onAccessTokenFetched",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t(e)}))}},{key:"addSubscriber",value:function(e){this.subscribers.push(e)}},{key:"getToken",value:function(){return localStorage.getItem(this.jwtConfig.storageTokenKeyName)}},{key:"getRefreshToken",value:function(){return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)}},{key:"setToken",value:function(e){localStorage.setItem(this.jwtConfig.storageTokenKeyName,e)}},{key:"setRefreshToken",value:function(e){localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName,e)}},{key:"login",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return p.a.post.apply(p.a,[this.jwtConfig.appiaLoginEndpoint].concat(t))}},{key:"register",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return p.a.post.apply(p.a,[this.jwtConfig.registerEndpoint].concat(t))}},{key:"refreshToken",value:function(){return p.a.post(this.jwtConfig.refreshEndpoint,{refreshToken:this.getRefreshToken()})}}]),e}())({})}.jwt,g=r(81),b=r(125),y=r(1006),v=r(128),x=r(807),O=r(473),w=r(522),k=r(483),N=r(1054),L=r(511),T=r(480),E=r(482),C=r(479),F=r(484),P=r(986),A=r(495),S=r(983),_=r(469),I=r(551),G=(r(545),r(6)),R=function(e){var t=e.name,r=e.role;return Object(G.jsxs)(c.Fragment,{children:[Object(G.jsx)("div",{className:"toastify-header",children:Object(G.jsxs)("div",{className:"title-wrapper",children:[Object(G.jsx)(l.a,{size:"sm",color:"success",icon:Object(G.jsx)(N.a,{size:12})}),Object(G.jsxs)("h6",{className:"toast-title font-weight-bold",children:["Welcome, ",t]})]})}),Object(G.jsx)("div",{className:"toastify-body",children:Object(G.jsxs)("span",{children:["You have successfully logged in as an ",r," user to Appia. Now you can start to explore. Enjoy!"]})})]})},z=function(e){var t=e.message;return Object(G.jsxs)(c.Fragment,{children:[Object(G.jsx)("div",{className:"toastify-header",children:Object(G.jsxs)("div",{className:"title-wrapper",children:[Object(G.jsx)(l.a,{size:"sm",color:"success",icon:Object(G.jsx)(N.a,{size:12})}),Object(G.jsx)("h6",{className:"toast-title font-weight-bold",children:t})]})}),Object(G.jsx)("div",{className:"toastify-body",children:Object(G.jsx)("span",{children:"Pls, reconfirm login credentials"})})]})};t.default=function(e){var t=Object(u.a)(),n=Object(s.a)(t,2),l=n[0],h=(n[1],Object(c.useContext)(v.a)),f=Object(g.b)(),d=Object(x.g)(),p=Object(c.useState)(""),j=Object(s.a)(p,2),N=j[0],K=j[1],B=Object(c.useState)(""),q=Object(s.a)(B,2),J=q[0],M=q[1],W=Object(c.useState)(!1),Y=Object(s.a)(W,2),D=Y[0],Z=Y[1],V="dark"===l?"login-v2-dark.svg":"login-v2.svg",H=r(676)("./".concat(V)).default,Q=function(){var e=Object(i.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||r.length){e.next=4;break}return Z(!0),e.next=4,m.login({email:N,password:J}).then((function(e){if(console.log({res:e}),e.data.success){var t=Object(a.a)(Object(a.a)({},e.data.data),{},{accessToken:e.data.token,refreshToken:e.data.token,ability:[{action:"manage",subject:"all"}],avatar:"/demo/Appia-react-admin-dashboard-template/demo-1/static/media/avatar-s-11.1d46cc62.jpg",extras:{eCommerceCartItemsCount:5}});f(Object(y.a)(t)),h.update(t.ability),d.push(Object(k.d)(t.role_name)),b.f.error(Object(G.jsx)(R,{name:"".concat(t.first_name," ").concat(t.last_name)||t.fullName||t.username||"John Doe",role:t.role||"admin"}),{transition:b.c,hideProgressBar:!0,autoClose:2e3})}else b.f.error(Object(G.jsx)(z,{message:"".concat(e.data.message)||"Invalid Login"}),{transition:b.c,hideProgressBar:!0,autoClose:2e3}),Z(!1)})).catch((function(e){console.log(e),Z(!1)}));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return Object(G.jsx)("div",{className:"auth-wrapper auth-v2",children:Object(G.jsxs)(T.a,{className:"auth-inner m-0",children:[Object(G.jsxs)(O.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(G.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(G.jsxs)("defs",{children:[Object(G.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(G.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(G.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(G.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(G.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(G.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(G.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(G.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(G.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(G.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(G.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(G.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(G.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(G.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(G.jsx)("h2",{className:"brand-text text-primary ml-1",children:"Appia"})]}),Object(G.jsx)(E.a,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(G.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(G.jsx)("img",{className:"img-fluid",src:H,alt:"Login V2"})})}),Object(G.jsx)(E.a,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(G.jsxs)(E.a,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(G.jsx)(C.a,{tag:"h2",className:"font-weight-bold mb-1",children:"Welcome to Appia! \ud83d\udc4b"}),Object(G.jsx)(F.a,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),Object(G.jsxs)(L.AvForm,{className:"auth-login-form mt-2",onSubmit:Q,children:[Object(G.jsxs)(P.a,{children:[Object(G.jsx)(A.a,{className:"form-label",for:"login-email",children:"Email"}),Object(G.jsx)(L.AvInput,{required:!0,autoFocus:!0,type:"email",value:N,id:"login-email",name:"login-email",placeholder:"john@example.com",onChange:function(e){return K(e.target.value)}})]}),Object(G.jsxs)(P.a,{children:[Object(G.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(G.jsx)(A.a,{className:"form-label",for:"login-password",children:"Password"}),Object(G.jsx)(O.b,{to:"/forgot-password",children:Object(G.jsx)("small",{children:"Forgot Password?"})})]}),Object(G.jsx)(w.a,{required:!0,tag:L.AvInput,value:J,id:"login-password",name:"login-password",autoComplete:"on",className:"input-group-merge",onChange:function(e){return M(e.target.value)}})]}),Object(G.jsx)(P.a,{children:Object(G.jsx)(S.a,{type:"checkbox",className:"custom-control-Primary",id:"remember-me",label:"Remember Me"})}),Object(G.jsxs)(_.a.Ripple,{color:"primary",block:!0,disabled:D,children:[D&&Object(G.jsx)(I.a,{color:"white",size:"sm"}),Object(G.jsx)("span",{className:"ml-50",children:"Sign In"})]})]})]})})]})})}},485:function(e,t,r){e.exports=r(493)},486:function(e,t,r){"use strict";function n(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,c,"next",e)}function c(e){n(i,o,a,s,c,"throw",e)}s(void 0)}))}}r.d(t,"a",(function(){return o}))},493:function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(e,t,r){var n=h;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return F()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=N(i,r);if(s){if(s===j)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=u(e,t,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===j)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(P){return{type:"throw",arg:P}}}e.wrap=l;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",j={};function m(){}function g(){}function b(){}var y={};y[a]=function(){return this};var v=Object.getPrototypeOf,x=v&&v(v(C([])));x&&x!==r&&n.call(x,a)&&(y=x);var O=b.prototype=m.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,a,i,s){var c=u(e[o],e,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(h).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function N(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method))return j;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,j;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,j):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,j)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function C(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:t,done:!0}}return g.prototype=O.constructor=b,b.constructor=g,g.displayName=c(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,s,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},w(k.prototype),k.prototype[i]=function(){return this},e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(O),c(O,s,"Generator"),O[a]=function(){return this},O.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=C,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,j):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),j},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),j}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),j}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},522:function(e,t,r){"use strict";var n=r(0),o=r(58),a=r(28),i=r(122),s=r(1),c=r(27),l=r.n(c),u=r(1069),h=r(1068),f=r(495),d=r(998),p=r(1e3),j=r(999),m=r(812),g=r(6),b=function(e){var t=e.label,r=e.hideIcon,c=e.showIcon,b=e.visible,y=e.className,v=e.htmlFor,x=e.placeholder,O=e.iconSize,w=Object(i.a)(e,["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize"]),k=Object(s.useState)(b),N=Object(a.a)(k,2),L=N[0],T=N[1];return Object(g.jsxs)(s.Fragment,{children:[t?Object(g.jsx)(f.a,{for:v,children:t}):null,Object(g.jsxs)(d.a,{className:l()(Object(o.a)({},y,y)),children:[Object(g.jsx)(p.a,Object(n.a)(Object(n.a)({type:!1===L?"password":"text",placeholder:x||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7"},t&&v?{id:v}:{}),w)),Object(g.jsx)(j.a,{addonType:"append",onClick:function(){return T(!L)},children:Object(g.jsx)(m.a,{className:"cursor-pointer",children:function(){var e=O||14;return!1===L?r||Object(g.jsx)(u.a,{size:e}):c||Object(g.jsx)(h.a,{size:e})}()})})]})]})};t.a=b,b.defaultProps={visible:!1}}}]);
//# sourceMappingURL=177.14c073eb.chunk.js.map