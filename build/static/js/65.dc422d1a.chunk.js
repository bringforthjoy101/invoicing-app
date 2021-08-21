/*! For license information please see 65.dc422d1a.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[65],{1224:function(e,t,n){e.exports=function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var t=window.Element.prototype.matches,n=function(e,t){return e.closest(t)},s=function(e,t){return new window.Event(e,t)},c=function(e,t){return new window.CustomEvent(e,t)};function r(){if(window.Element.prototype.matches||(t=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(n=function(e,n){if(!document.documentElement.contains(e))return null;do{if(t.call(e,n))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),window.Event&&"function"===typeof window.Event||(s=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n}),"function"!==typeof window.CustomEvent){var e=window.Event.prototype.preventDefault;c=function(t,n){var s=document.createEvent("CustomEvent");return n=n||{bubbles:!1,cancelable:!1,detail:null},s.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),s.preventDefault=function(){this.cancelable&&(e.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},s}}}r();var a=1e3,i={ACTIVE:"active",LINEAR:"linear",BLOCK:"dstepper-block",NONE:"dstepper-none",FADE:"fade",VERTICAL:"vertical"},l="transitionend",o="bsStepper",d=function(e,t,n,s){var r=e[o];if(!r._steps[t].classList.contains(i.ACTIVE)&&!r._stepsContents[t].classList.contains(i.ACTIVE)){var a=c("show.bs-stepper",{cancelable:!0,detail:{from:r._currentIndex,to:t,indexStep:t}});e.dispatchEvent(a);var l=r._steps.filter((function(e){return e.classList.contains(i.ACTIVE)})),d=r._stepsContents.filter((function(e){return e.classList.contains(i.ACTIVE)}));a.defaultPrevented||(l.length&&l[0].classList.remove(i.ACTIVE),d.length&&(d[0].classList.remove(i.ACTIVE),e.classList.contains(i.VERTICAL)||r.options.animation||d[0].classList.remove(i.BLOCK)),u(e,r._steps[t],r._steps,n),j(e,r._stepsContents[t],r._stepsContents,d,s))}},u=function(e,t,n,s){n.forEach((function(t){var n=t.querySelector(s.selectors.trigger);n.setAttribute("aria-selected","false"),e.classList.contains(i.LINEAR)&&n.setAttribute("disabled","disabled")})),t.classList.add(i.ACTIVE);var c=t.querySelector(s.selectors.trigger);c.setAttribute("aria-selected","true"),e.classList.contains(i.LINEAR)&&c.removeAttribute("disabled")},j=function(e,t,n,s,r){var a=e[o],d=n.indexOf(t),u=c("shown.bs-stepper",{cancelable:!0,detail:{from:a._currentIndex,to:d,indexStep:d}});function j(){t.classList.add(i.BLOCK),t.removeEventListener(l,j),e.dispatchEvent(u),r()}if(t.classList.contains(i.FADE)){t.classList.remove(i.NONE);var b=m(t);t.addEventListener(l,j),s.length&&s[0].classList.add(i.NONE),t.classList.add(i.ACTIVE),p(t,b)}else t.classList.add(i.ACTIVE),t.classList.add(i.BLOCK),e.dispatchEvent(u),r()},m=function(e){if(!e)return 0;var t=window.getComputedStyle(e).transitionDuration;return parseFloat(t)?(t=t.split(",")[0],parseFloat(t)*a):0},p=function(e,t){var n=!1,c=t+5;function r(){n=!0,e.removeEventListener(l,r)}e.addEventListener(l,r),window.setTimeout((function(){n||e.dispatchEvent(s(l)),e.removeEventListener(l,r)}),c)},b=function(e,t){t.animation&&e.forEach((function(e){e.classList.add(i.FADE),e.classList.add(i.NONE)}))},h=function(){return function(e){e.preventDefault()}},f=function(e){return function(t){t.preventDefault();var s=n(t.target,e.selectors.steps),c=n(s,e.selectors.stepper),r=c[o],a=r._steps.indexOf(s);d(c,a,e,(function(){r._currentIndex=a}))}},O={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}};return function(){function t(t,n){var s=this;void 0===n&&(n={}),this._element=t,this._currentIndex=0,this._stepsContents=[],this.options=e({},O,{},n),this.options.selectors=e({},O.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(i.LINEAR),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter((function(e){return e.hasAttribute("data-target")})).forEach((function(e){s._stepsContents.push(s._element.querySelector(e.getAttribute("data-target")))})),b(this._stepsContents,this.options),this._setLinkListeners(),Object.defineProperty(this._element,o,{value:this,writable:!0}),this._steps.length&&d(this._element,this._currentIndex,this.options,(function(){}))}var n=t.prototype;return n._setLinkListeners=function(){var e=this;this._steps.forEach((function(t){var n=t.querySelector(e.options.selectors.trigger);e.options.linear?(e._clickStepLinearListener=h(e.options),n.addEventListener("click",e._clickStepLinearListener)):(e._clickStepNonLinearListener=f(e.options),n.addEventListener("click",e._clickStepNonLinearListener))}))},n.next=function(){var e=this,t=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;d(this._element,t,this.options,(function(){e._currentIndex=t}))},n.previous=function(){var e=this,t=this._currentIndex-1>=0?this._currentIndex-1:0;d(this._element,t,this.options,(function(){e._currentIndex=t}))},n.to=function(e){var t=this,n=e-1,s=n>=0&&n<this._steps.length?n:0;d(this._element,s,this.options,(function(){t._currentIndex=s}))},n.reset=function(){var e=this;d(this._element,0,this.options,(function(){e._currentIndex=0}))},n.destroy=function(){var e=this;this._steps.forEach((function(t){var n=t.querySelector(e.options.selectors.trigger);e.options.linear?n.removeEventListener("click",e._clickStepLinearListener):n.removeEventListener("click",e._clickStepNonLinearListener)})),this._element[o]=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},t}()}()},1225:function(e,t,n){},1226:function(e,t,n){},1227:function(e,t,n){},2206:function(e,t,n){"use strict";n.r(t);var s=n(28),c=n(1),r=n(925),a=n(475),i=n(474),l=n(27),o=n.n(l),d=n(659),u=n(1105),j=n(1107),m=n(493),p=n(482),b=n(488),h=n(679),f=n(468),O=n(525),x=n(513),v=n(526),y=n(499),g=n(800),N=n(6),w=function(e){var t=e.products,n=e.stepper,s=e.deleteCartItem,c=e.dispatch,r=e.addToWishlist,a=e.deleteWishlistItem,l=e.getCartItems,w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric"};return e?new Intl.DateTimeFormat("en-US",t).format(new Date(e)):e};return Object(N.jsxs)("div",{className:"list-view product-checkout",children:[Object(N.jsx)("div",{className:"checkout-items",children:t.length?t.map((function(e){return Object(N.jsxs)(m.a,{className:"ecommerce-card",children:[Object(N.jsx)("div",{className:"item-img",children:Object(N.jsx)(i.b,{to:"/apps/ecommerce/product/".concat(e.slug),children:Object(N.jsx)("img",{className:"img-fluid",src:e.image,alt:e.name})})}),Object(N.jsxs)(p.a,{children:[Object(N.jsxs)("div",{className:"item-name",children:[Object(N.jsx)("h6",{className:"mb-0",children:Object(N.jsx)(i.b,{to:"/apps/ecommerce/product/".concat(e.slug),children:e.name})}),Object(N.jsxs)("span",{className:"item-company",children:["By",Object(N.jsx)("a",{className:"ml-25",href:"/",onClick:function(e){return e.preventDefault()},children:e.brand})]}),Object(N.jsx)("div",{className:"item-rating",children:Object(N.jsx)("ul",{className:"unstyled-list list-inline",children:new Array(5).fill().map((function(t,n){return Object(N.jsx)("li",{className:"ratings-list-item mr-25",children:Object(N.jsx)(d.a,{className:o()({"filled-star":n+1<=e.rating,"unfilled-star":n+1>e.rating})})},n)}))})})]}),Object(N.jsx)("span",{className:"text-success mb-1",children:"In Stock"}),Object(N.jsxs)("div",{className:"item-quantity",children:[Object(N.jsx)("span",{className:"quantity-title mr-50",children:"Qty"}),Object(N.jsx)(g.a,{value:e.qty,min:1,max:10,size:"sm",style:{width:"7rem",height:"2.15rem"}})]}),Object(N.jsxs)("div",{className:"delivery-date text-muted",children:["Delivery by, ",w(e.shippingDate)]}),Object(N.jsxs)("span",{className:"text-success",children:[e.discountPercentage,"% off ",e.offers," offers Available"]})]}),Object(N.jsxs)("div",{className:"item-options text-center",children:[Object(N.jsx)("div",{className:"item-wrapper",children:Object(N.jsxs)("div",{className:"item-cost",children:[Object(N.jsxs)("h4",{className:"item-price",children:["$",e.price]}),e.hasFreeShipping?Object(N.jsx)(b.a,{className:"shipping",children:Object(N.jsx)(h.a,{color:"light-success",pill:!0,children:"Free Shipping"})}):null]})}),Object(N.jsxs)(f.a,{className:"mt-1 remove-wishlist",color:"light",onClick:function(){return c(s(e.id))},children:[Object(N.jsx)(u.a,{size:14,className:"mr-25"}),Object(N.jsx)("span",{children:"Remove"})]}),Object(N.jsxs)(f.a,{className:"btn-cart",color:"primary",onClick:function(){return t=e.id,n=e.isInWishlist,c(n?a(t):r(t)),void c(l());var t,n},children:[Object(N.jsx)(j.a,{size:14,className:o()("mr-25",{"fill-current":e.isInWishlist})}),Object(N.jsx)("span",{className:"text-truncate",children:"Wishlist"})]})]})]},e.name)})):Object(N.jsx)("h4",{children:"Your cart is empty"})}),Object(N.jsx)("div",{className:"checkout-options",children:Object(N.jsx)(m.a,{children:Object(N.jsxs)(p.a,{children:[Object(N.jsx)("label",{className:"section-label mb-1",children:"Options"}),Object(N.jsxs)(O.a,{className:"input-group-merge coupons",children:[Object(N.jsx)(x.a,{placeholder:"Coupons"}),Object(N.jsx)(v.a,{addonType:"append",children:Object(N.jsx)(y.a,{className:"text-primary",children:"Apply"})})]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:"price-details",children:[Object(N.jsx)("h6",{className:"price-title",children:"Price Details"}),Object(N.jsxs)("ul",{className:"list-unstyled",children:[Object(N.jsxs)("li",{className:"price-detail",children:[Object(N.jsx)("div",{className:"detail-title",children:"Total MRP"}),Object(N.jsx)("div",{className:"detail-amt",children:"$598"})]}),Object(N.jsxs)("li",{className:"price-detail",children:[Object(N.jsx)("div",{className:"detail-title",children:"Bag Discount"}),Object(N.jsx)("div",{className:"detail-amt discount-amt text-success",children:"-25$"})]}),Object(N.jsxs)("li",{className:"price-detail",children:[Object(N.jsx)("div",{className:"detail-title",children:"Estimated Tax"}),Object(N.jsx)("div",{className:"detail-amt",children:"$1.3"})]}),Object(N.jsxs)("li",{className:"price-detail",children:[Object(N.jsx)("div",{className:"detail-title",children:"EMI Eligibility"}),Object(N.jsx)("a",{href:"/",className:"detail-amt text-primary",onClick:function(e){return e.preventDefault()},children:"Details"})]}),Object(N.jsxs)("li",{className:"price-detail",children:[Object(N.jsx)("div",{className:"detail-title",children:"Delivery Charges"}),Object(N.jsx)("div",{className:"detail-amt discount-amt text-success",children:"Free"})]})]}),Object(N.jsx)("hr",{}),Object(N.jsx)("ul",{className:"list-unstyled",children:Object(N.jsxs)("li",{className:"price-detail",children:[Object(N.jsx)("div",{className:"detail-title detail-total",children:"Total"}),Object(N.jsx)("div",{className:"detail-amt font-weight-bolder",children:"$574"})]})}),Object(N.jsx)(f.a.Ripple,{color:"primary",classnames:"btn-next place-order",block:!0,disabled:!t.length,onClick:function(){return n.next()},children:"Place Order"})]})]})})})]})},E=n(489),k=n(486),C=n(490),L=n(491),I=n(678),T=n(517),_=n(649),S=function(e){var t=e.stepper;return Object(N.jsxs)(_.AvForm,{className:"list-view product-checkout",onSubmit:function(e,n){n.length||t.next(),e.preventDefault()},children:[Object(N.jsxs)(m.a,{children:[Object(N.jsxs)(E.a,{className:"flex-column align-items-start",children:[Object(N.jsx)(k.a,{tag:"h4",children:"Add New Address"}),Object(N.jsx)(b.a,{className:"text-muted mt-25",children:'Be sure to check "Deliver to this address" when you have finished'})]}),Object(N.jsx)(p.a,{children:Object(N.jsxs)(C.a,{children:[Object(N.jsx)(L.a,{md:"6",sm:"12",children:Object(N.jsxs)(I.a,{className:"mb-2",children:[Object(N.jsx)(T.a,{for:"checkout-name",children:"Full Name:"}),Object(N.jsx)(_.AvInput,{name:"checkout-name",id:"checkout-name",placeholder:"John Doe",required:!0})]})}),Object(N.jsx)(L.a,{md:"6",sm:"12",children:Object(N.jsxs)(I.a,{className:"mb-2",children:[Object(N.jsx)(T.a,{for:"checkout-number",children:"Number:"}),Object(N.jsx)(_.AvInput,{type:"number",name:"checkout-number",id:"checkout-number",placeholder:"0123456789",required:!0})]})}),Object(N.jsx)(L.a,{md:"6",sm:"12",children:Object(N.jsxs)(I.a,{className:"mb-2",children:[Object(N.jsx)(T.a,{for:"checkout-apt-number",children:"Flat, House No:"}),Object(N.jsx)(_.AvInput,{type:"number",name:"checkout-apt-number",id:"checkout-apt-number",placeholder:"9447 Glen Eagles Drive",required:!0})]})}),Object(N.jsx)(L.a,{md:"6",sm:"12",children:Object(N.jsxs)(I.a,{className:"mb-2",children:[Object(N.jsx)(T.a,{for:"checkout-landmark",children:"Landmark e.g. near apollo hospital:"}),Object(N.jsx)(_.AvInput,{name:"checkout-landmark",id:"checkout-landmark",placeholder:"Near Apollo Hospital",required:!0})]})}),Object(N.jsx)(L.a,{md:"6",sm:"12",children:Object(N.jsxs)(I.a,{className:"mb-2",children:[Object(N.jsx)(T.a,{for:"checkout-city",children:"Town/City:"}),Object(N.jsx)(_.AvInput,{name:"checkout-city",id:"checkout-city",placeholder:"Tokyo",required:!0})]})}),Object(N.jsx)(L.a,{md:"6",sm:"12",children:Object(N.jsxs)(I.a,{className:"mb-2",children:[Object(N.jsx)(T.a,{for:"checkout-pincode",children:"Pincode:"}),Object(N.jsx)(_.AvInput,{type:"number",name:"checkout-pincode",id:"checkout-pincode",placeholder:"201301",required:!0})]})}),Object(N.jsx)(L.a,{md:"6",sm:"12",children:Object(N.jsxs)(I.a,{className:"mb-2",children:[Object(N.jsx)(T.a,{for:"checkout-state",children:"State:"}),Object(N.jsx)(_.AvInput,{name:"checkout-state",id:"checkout-state",placeholder:"California",required:!0})]})}),Object(N.jsx)(L.a,{md:"6",sm:"12",children:Object(N.jsxs)(I.a,{className:"mb-2",children:[Object(N.jsx)(T.a,{for:"add-type",children:"Address Type:"}),Object(N.jsxs)(_.AvInput,{type:"select",name:"add-type",id:"add-type",required:!0,children:[Object(N.jsx)("option",{value:"home",children:"Home"}),Object(N.jsx)("option",{value:"work",children:"Work"})]})]})}),Object(N.jsx)(L.a,{sm:"12",children:Object(N.jsx)(f.a.Ripple,{type:"submit",className:"btn-next delivery-address",color:"primary",children:"Save And Deliver Here"})})]})})]}),Object(N.jsx)("div",{className:"customer-card",children:Object(N.jsxs)(m.a,{children:[Object(N.jsx)(E.a,{children:Object(N.jsx)(k.a,{tag:"h4",children:"John Doe"})}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(b.a,{className:"mb-0",children:"9447 Glen Eagles Drive"}),Object(N.jsx)(b.a,{children:"Lewis Center, OH 43035"}),Object(N.jsx)(b.a,{children:"UTC-5: Eastern Standard Time (EST)"}),Object(N.jsx)(b.a,{children:"202-555-0140"}),Object(N.jsx)(f.a,{block:!0,type:"button",color:"primary",onClick:function(){return t.next()},className:"btn-next delivery-address mt-2",children:"Deliver To This Address"})]})]})})]})},z=n(926),A=n(524),P=n(677),D=function(){return Object(N.jsxs)(A.a,{className:"list-view product-checkout",onSubmit:function(e){e.preventDefault()},children:[Object(N.jsx)("div",{className:"payment-type",children:Object(N.jsxs)(m.a,{children:[Object(N.jsxs)(E.a,{className:"flex-column align-items-start",children:[Object(N.jsx)(k.a,{tag:"h4",children:"Payment options"}),Object(N.jsx)(b.a,{className:"text-muted mt-25",children:"Be sure to click on correct payment option"})]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)("h6",{className:"card-holder-name my-75",children:"John Doe"}),Object(N.jsx)(P.a,{id:"card",type:"radio",defaultChecked:!0,label:"US Unlocked Debit Card 12XX XXXX XXXX 0000",name:"paymentMethod"}),Object(N.jsx)("div",{className:"customer-cvv mt-1",children:Object(N.jsxs)("div",{className:"form-inline",children:[Object(N.jsx)(T.a,{className:"mb-50",for:"card-holder-cvv",children:"Enter CVV:"}),Object(N.jsx)(x.a,{className:"input-cvv ml-sm-75 ml-0 mb-50",id:"card-holder-cvv"}),Object(N.jsx)(f.a,{className:"btn-cvv ml-0 ml-sm-1 mb-50",color:"primary",children:"Continue"})]})}),Object(N.jsx)("hr",{className:"my-2"}),Object(N.jsxs)("ul",{className:"other-payment-options list-unstyled",children:[Object(N.jsx)("li",{className:"py-50",children:Object(N.jsx)(P.a,{type:"radio",label:"Credit / Debit / ATM Card",name:"paymentMethod",id:"payment-card"})}),Object(N.jsx)("li",{className:"py-50",children:Object(N.jsx)(P.a,{type:"radio",label:"Net Banking",name:"paymentMethod",id:"payment-net-banking"})}),Object(N.jsx)("li",{className:"py-50",children:Object(N.jsx)(P.a,{type:"radio",label:"EMI (Easy Installment)",name:"paymentMethod",id:"payment-emi"})}),Object(N.jsx)("li",{className:"py-50",children:Object(N.jsx)(P.a,{type:"radio",label:"Cash On Delivery",name:"paymentMethod",id:"payment-cod"})})]}),Object(N.jsx)("hr",{className:"my-2"}),Object(N.jsx)("div",{className:"gift-card mb-25",children:Object(N.jsxs)(b.a,{children:[Object(N.jsx)(z.a,{className:"mr-50",size:21}),Object(N.jsx)("span",{className:"align-middle",children:"Add Gift Card"})]})})]})]})}),Object(N.jsx)("div",{className:"amount-payable checkout-options",children:Object(N.jsxs)(m.a,{children:[Object(N.jsx)(E.a,{children:Object(N.jsx)(k.a,{tag:"h4",children:"Price Details"})}),Object(N.jsxs)(p.a,{children:[Object(N.jsxs)("ul",{className:"list-unstyled price-details",children:[Object(N.jsxs)("li",{className:"price-detail",children:[Object(N.jsx)("div",{className:"details-title",children:"Price of 3 items"}),Object(N.jsx)("div",{className:"detail-amt",children:Object(N.jsx)("strong",{children:"$699.30"})})]}),Object(N.jsxs)("li",{className:"price-detail",children:[Object(N.jsx)("div",{className:"details-title",children:"Delivery Charges"}),Object(N.jsx)("div",{className:"detail-amt discount-amt text-success",children:"Free"})]})]}),Object(N.jsx)("hr",{}),Object(N.jsx)("ul",{className:"list-unstyled price-details",children:Object(N.jsxs)("li",{className:"price-detail",children:[Object(N.jsx)("div",{className:"details-title",children:"Amount Payable"}),Object(N.jsx)("div",{className:"detail-amt font-weight-bolder",children:"$699.30"})]})})]})]})})]})},R=n(1132),M=n(1113),q=n(1143),B=n(81),F=n(889);n(990),t.default=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(null),n=Object(s.a)(t,2),i=n[0],l=n[1],o=Object(B.b)(),d=Object(B.c)((function(e){return e.ecommerce}));Object(c.useEffect)((function(){o(Object(F.e)())}),[]);var u=[{id:"cart",title:"Cart",subtitle:"Your Cart Items",icon:Object(N.jsx)(R.a,{size:18}),content:Object(N.jsx)(w,{stepper:i,dispatch:o,products:d.cart,getCartItems:F.e,addToWishlist:F.b,deleteCartItem:F.c,deleteWishlistItem:F.d})},{id:"Address",title:"Address",subtitle:"Enter Your Address",icon:Object(N.jsx)(M.a,{size:18}),content:Object(N.jsx)(S,{stepper:i})},{id:"payment",title:"Payment",subtitle:"Select Payment Method",icon:Object(N.jsx)(q.a,{size:18}),content:Object(N.jsx)(D,{stepper:i})}];return Object(N.jsxs)(c.Fragment,{children:[Object(N.jsx)(a.a,{breadCrumbTitle:"Checkout",breadCrumbParent:"eCommerce",breadCrumbActive:"Checkout"}),Object(N.jsx)(r.a,{ref:e,steps:u,className:"checkout-tab-steps",instance:function(e){return l(e)},options:{linear:!1}})]})}},475:function(e,t,n){"use strict";var s=n(474),c=n(1152),r=n(1129),a=n(1128),i=n(1116),l=n(1130),o=n(504),d=n(505),u=n(503),j=n(690),m=n(681),p=n(682),b=n(6);t.a=function(e){var t=e.breadCrumbTitle,n=e.breadCrumbParent,h=e.breadCrumbParent2,f=e.breadCrumbParent3,O=e.breadCrumbActive;return Object(b.jsxs)("div",{className:"content-header row",children:[Object(b.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(b.jsx)("div",{className:"row breadcrumbs-top",children:Object(b.jsxs)("div",{className:"col-12",children:[t?Object(b.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(b.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(d.a,{tag:"li",children:Object(b.jsx)(s.b,{to:"/",children:"Home"})}),Object(b.jsx)(d.a,{tag:"li",className:"text-primary",children:n}),h?Object(b.jsx)(d.a,{tag:"li",className:"text-primary",children:h}):"",f?Object(b.jsx)(d.a,{tag:"li",className:"text-primary",children:f}):"",Object(b.jsx)(d.a,{tag:"li",active:!0,children:O})]})})]})})}),Object(b.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(b.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(j.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(b.jsx)(c.a,{size:14})}),Object(b.jsxs)(m.a,{tag:"ul",right:!0,children:[Object(b.jsxs)(p.a,{tag:s.b,to:"/apps/chat",children:[Object(b.jsx)(r.a,{className:"mr-1",size:14}),Object(b.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(b.jsxs)(p.a,{tag:s.b,to:"/apps/chat",children:[Object(b.jsx)(a.a,{className:"mr-1",size:14}),Object(b.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(b.jsxs)(p.a,{tag:s.b,to:"/apps/email",children:[Object(b.jsx)(i.a,{className:"mr-1",size:14}),Object(b.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(b.jsxs)(p.a,{tag:s.b,to:"/apps/calendar",children:[Object(b.jsx)(l.a,{className:"mr-1",size:14}),Object(b.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},513:function(e,t,n){"use strict";var s=n(14),c=n(15),r=n(121),a=n(57),i=n(1),l=n.n(i),o=n(2),d=n.n(o),u=n(27),j=n.n(u),m=n(80),p={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(r.a)(n)),n.focus=n.focus.bind(Object(r.a)(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.type,a=e.bsSize,i=e.valid,o=e.invalid,d=e.tag,u=e.addon,p=e.plaintext,b=e.innerRef,h=Object(c.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),f=["radio","checkbox"].indexOf(r)>-1,O=new RegExp("\\D","g"),x=d||("select"===r||"textarea"===r?r:"input"),v="form-control";p?(v+="-plaintext",x=d||"input"):"file"===r?v+="-file":"range"===r?v+="-range":f&&(v=u?null:"form-check-input"),h.size&&O.test(h.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),a=h.size,delete h.size);var y=Object(m.mapToCssModules)(j()(t,o&&"is-invalid",i&&"is-valid",!!a&&"form-control-"+a,v),n);return("input"===x||d&&"function"===typeof d)&&(h.type=r),h.children&&!p&&"select"!==r&&"string"===typeof x&&"select"!==x&&(Object(m.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(x,Object(s.a)({},h,{ref:b,className:y,"aria-invalid":o}))},t}(l.a.Component);b.propTypes=p,b.defaultProps={type:"text"},t.a=b},517:function(e,t,n){"use strict";var s=n(14),c=n(15),r=n(1),a=n.n(r),i=n(2),l=n.n(i),o=n(27),d=n.n(o),u=n(80),j=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:j,order:j,offset:j})]),p={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:l.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},f=function(e){var t=e.className,n=e.cssModule,r=e.hidden,i=e.widths,l=e.tag,o=e.check,j=e.size,m=e.for,p=Object(c.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];i.forEach((function(t,s){var c=e[t];if(delete p[t],c||""===c){var r,a=!s;if(Object(u.isObject)(c)){var i,l=a?"-":"-"+t+"-";r=h(a,t,c.size),b.push(Object(u.mapToCssModules)(d()(((i={})[r]=c.size||""===c.size,i["order"+l+c.order]=c.order||0===c.order,i["offset"+l+c.offset]=c.offset||0===c.offset,i))),n)}else r=h(a,t,c),b.push(r)}}));var f=Object(u.mapToCssModules)(d()(t,!!r&&"sr-only",!!o&&"form-check-label",!!j&&"col-form-label-"+j,b,!!b.length&&"col-form-label"),n);return a.a.createElement(l,Object(s.a)({htmlFor:m},p,{className:f}))};f.propTypes=p,f.defaultProps=b,t.a=f},659:function(e,t,n){"use strict";var s=n(1),c=n.n(s),r=n(2),a=n.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,s,c=function(e,t){if(null==e)return{};var n,s,c={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=Object(s.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,o=l(e,["color","size"]);return c.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),c.a.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))}));o.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},o.displayName="Star",t.a=o},794:function(e,t,n){"use strict";var s=n(1),c=n.n(s),r=n(2),a=n.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,s,c=function(e,t){if(null==e)return{};var n,s,c={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=Object(s.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,o=l(e,["color","size"]);return c.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),c.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),c.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));o.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},o.displayName="Plus",t.a=o},800:function(e,t,n){"use strict";var s=n(0),c=n(58),r=n(28),a=n(122),i=n(27),l=n.n(i),o=n(918),d=n(794),u=n(1),j=n(525),m=n(526),p=n(468),b=n(513),h=(n(1227),n(6)),f=function(e){var t,n=e.min,i=e.max,o=e.step,d=e.size,f=e.wrap,O=e.value,x=e.style,v=e.upIcon,y=e.disabled,g=e.readonly,N=e.onChange,w=e.downIcon,E=e.vertical,k=e.className,C=e.onDecrement,L=e.onIncrement,I=e.inputClassName,T=Object(a.a)(e,["min","max","step","size","wrap","value","style","upIcon","disabled","readonly","onChange","downIcon","vertical","className","onDecrement","onIncrement","inputClassName"]),_=Object(u.useState)(O||n),S=Object(r.a)(_,2),z=S[0],A=S[1],P=function(){if(!y&&!g){if(!f&&z<=n)return;A(z-o<n?f?i:n:z-o),C&&L(z)}},D=function(){if(!y&&!g){if(!f&&z>=i)return;A(z+o>i?f?n:i:z+o),L&&L(z)}};return Object(u.useEffect)((function(){N&&N(z)}),[z]),Object(h.jsxs)(j.a,Object(s.a)(Object(s.a)({className:l()("number-input",(t={disabled:y,readonly:g},Object(c.a)(t,k,k),Object(c.a)(t,"vertical-number-input",E),Object(c.a)(t,"vertical-number-input-".concat(d),E&&d),t))},x?{style:x}:{}),{},{children:[Object(h.jsx)(m.a,{addonType:"prepend",onClick:P,children:Object(h.jsx)(p.a,Object(s.a)(Object(s.a)({className:"btn-icon",color:"transparent"},d?{size:d}:{}),{},{disabled:!f&&z<=n||y||g,children:w}))}),Object(h.jsx)(b.a,Object(s.a)(Object(s.a)({},T),{},{type:"number",value:z,disabled:y,readOnly:g,onKeyDown:function(e){e.preventDefault(),g||(38===e.keyCode&&D(),40===e.keyCode&&P())},onChange:function(e){A(Number(e.target.value))},className:l()(Object(c.a)({},I,I))},d?{bsSize:d}:{})),Object(h.jsx)(m.a,{addonType:"append",onClick:D,children:Object(h.jsx)(p.a,Object(s.a)(Object(s.a)({className:"btn-icon",color:"transparent"},d?{size:d}:{}),{},{disabled:!f&&z>=i||y||g,children:v}))})]}))};t.a=f,f.defaultProps={min:1,step:1,wrap:!1,max:1/0,disabled:!1,readonly:!1,downIcon:Object(h.jsx)(o.a,{size:14}),upIcon:Object(h.jsx)(d.a,{size:14})}},838:function(e,t,n){"use strict";var s=n(1),c=n.n(s),r=n(2),a=n.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,s,c=function(e,t){if(null==e)return{};var n,s,c={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=Object(s.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,o=l(e,["color","size"]);return c.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),c.a.createElement("polyline",{points:"9 18 15 12 9 6"}))}));o.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},o.displayName="ChevronRight",t.a=o},889:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"h",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return j}));var s=n(82),c=n.n(s),r=function(e){return function(t){return c.a.get("/apps/ecommerce/products",{params:e}).then((function(n){t({type:"GET_PRODUCTS",data:n.data,params:e})}))}},a=function(e){return function(t,n){return c.a.post("/apps/ecommerce/cart",{productId:e}).then((function(e){t({type:"ADD_TO_CART",data:e.data}),t(r(n().ecommerce.params))}))}},i=function(){return function(e){return c.a.get("/apps/ecommerce/wishlist").then((function(t){e({type:"GET_WISHLIST",data:t.data})}))}},l=function(e){return function(t){return c.a.delete("/apps/ecommerce/wishlist/".concat(e)).then((function(e){t({type:"DELETE_WISHLIST_ITEM",data:e.data}),t(i())}))}},o=function(){return function(e){return c.a.get("/apps/ecommerce/cart").then((function(t){e({type:"GET_CART",data:t.data})}))}},d=function(e){return function(t){return c.a.get("/apps/ecommerce/products/".concat(e)).then((function(e){t({type:"GET_PRODUCT",data:e.data})}))}},u=function(e){return function(t){return c.a.post("/apps/ecommerce/wishlist",{productId:e}).then((function(){t({type:"ADD_TO_WISHLIST"})}))}},j=function(e){return function(t){return c.a.delete("/apps/ecommerce/cart/".concat(e)).then((function(e){t({type:"DELETE_CART_ITEM",data:e.data}),t(o())}))}}},918:function(e,t,n){"use strict";var s=n(1),c=n.n(s),r=n(2),a=n.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,s,c=function(e,t){if(null==e)return{};var n,s,c={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=Object(s.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,o=l(e,["color","size"]);return c.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),c.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));o.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},o.displayName="Minus",t.a=o},925:function(e,t,n){"use strict";var s=n(58),c=n(28),r=n(1),a=n(1224),i=n.n(a),l=n(27),o=n.n(l),d=n(838),u=(n(1225),n(1226),n(6)),j=Object(r.forwardRef)((function(e,t){var n,a=e.type,l=e.className,d=e.steps,j=e.separator,m=e.options,p=e.instance,b=Object(r.useState)(0),h=Object(c.a)(b,2),f=h[0],O=h[1],x=null;Object(r.useEffect)((function(){x=new i.a(t.current,m),t.current.addEventListener("shown.bs-stepper",(function(e){O(e.detail.indexStep)})),p&&p(x)}),[]);return Object(u.jsxs)("div",{ref:t,className:o()("bs-stepper",(n={},Object(s.a)(n,l,l),Object(s.a)(n,"vertical","vertical"===a),Object(s.a)(n,"vertical wizard-modern","modern-vertical"===a),Object(s.a)(n,"wizard-modern","modern-horizontal"===a),n)),children:[Object(u.jsx)("div",{className:"bs-stepper-header",children:d.map((function(e,t){return Object(u.jsxs)(r.Fragment,{children:[0!==t&&t!==d.length?Object(u.jsx)("div",{className:"line",children:j}):null,Object(u.jsx)("div",{className:o()("step",{crossed:f>t,active:t===f}),"data-target":"#".concat(e.id),children:Object(u.jsxs)("button",{type:"button",className:"step-trigger",children:[Object(u.jsx)("span",{className:"bs-stepper-box",children:e.icon?e.icon:t+1}),Object(u.jsxs)("span",{className:"bs-stepper-label",children:[Object(u.jsx)("span",{className:"bs-stepper-title",children:e.title}),e.subtitle?Object(u.jsx)("span",{className:"bs-stepper-subtitle",children:e.subtitle}):null]})]})})]},e.id)}))}),Object(u.jsx)("div",{className:"bs-stepper-content",children:d.map((function(e,t){return Object(u.jsx)("div",{className:o()("content",{"active dstepper-block":f===t}),id:e.id,children:e.content},e.id)}))})]})}));t.a=j,j.defaultProps={type:"horizontal",separator:Object(u.jsx)(d.a,{size:17}),options:{}}},926:function(e,t,n){"use strict";var s=n(1),c=n.n(s),r=n(2),a=n.n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,s,c=function(e,t){if(null==e)return{};var n,s,c={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=Object(s.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,r=e.size,a=void 0===r?24:r,o=l(e,["color","size"]);return c.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),c.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),c.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),c.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));o.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},o.displayName="PlusCircle",t.a=o},990:function(e,t,n){}}]);
//# sourceMappingURL=65.dc422d1a.chunk.js.map