(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[118],{1613:function(e,t,a){},2158:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(900),r=a(480),n=a(481),i=a(487),l=a(1101),o=a(1121),d=a(1201),j=a(6),m=function(){return Object(j.jsx)("div",{className:"item-features",children:Object(j.jsxs)(r.a,{className:"text-center",children:[Object(j.jsx)(n.a,{className:"mb-4 mb-md-0",md:"4",xs:"12",children:Object(j.jsxs)("div",{className:"w-75 mx-auto",children:[Object(j.jsx)(l.a,{}),Object(j.jsx)("h4",{className:"mt-2 mb-1",children:"100% Original"}),Object(j.jsx)(i.a,{children:"Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah."})]})}),Object(j.jsx)(n.a,{className:"mb-4 mb-md-0",md:"4",xs:"12",children:Object(j.jsxs)("div",{className:"w-75 mx-auto",children:[Object(j.jsx)(o.a,{}),Object(j.jsx)("h4",{className:"mt-2 mb-1",children:"10 Day Replacement"}),Object(j.jsx)(i.a,{children:"Marshmallow biscuit donut drag\xe9e fruitcake. Jujubes wafer cupcake."})]})}),Object(j.jsx)(n.a,{className:"mb-4 mb-md-0",md:"4",xs:"12",children:Object(j.jsxs)("div",{className:"w-75 mx-auto",children:[Object(j.jsx)(d.a,{}),Object(j.jsx)("h4",{className:"mt-2 mb-1",children:"1 Year Warranty"}),Object(j.jsx)(i.a,{children:"Cotton candy gingerbread cake I love sugar plum I love sweet croissant."})]})})]})})},b=a(0),u=a(28),p=a(473),h=a(27),O=a.n(h),x=a(1207),f=a(1203),g=a(1137),N=a(1075),v=a(1199),y=a(1145),w=a(1217),C=a(1231),T=a(1160),P=a(469),k=a(489),I=a(1418),D=a(1082),E=a(1084),M=function(e){var t=e.data,a=e.deleteWishlistItem,s=e.dispatch,l=e.addToWishlist,o=e.getProduct,d=e.productId,m=e.addToCart,h=Object(c.useState)("primary"),M=Object(u.a)(h,2),A=M[0],S=M[1],z=t.isInCart?p.b:"button";return Object(j.jsxs)(r.a,{className:"my-2",children:[Object(j.jsx)(n.a,{className:"d-flex align-items-center justify-content-center mb-2 mb-md-0",md:"5",xs:"12",children:Object(j.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(j.jsx)("img",{className:"img-fluid product-img",src:t.image,alt:t.name})})}),Object(j.jsxs)(n.a,{md:"7",xs:"12",children:[Object(j.jsx)("h4",{children:t.name}),Object(j.jsxs)(i.a,{tag:"span",className:"item-company",children:["By",Object(j.jsx)("a",{className:"company-name",href:"/",onClick:function(e){return e.preventDefault()},children:t.brand})]}),Object(j.jsxs)("div",{className:"ecommerce-details-price d-flex flex-wrap mt-1",children:[Object(j.jsxs)("h4",{className:"item-price mr-1",children:["$",t.price]}),Object(j.jsx)("ul",{className:"unstyled-list list-inline",children:new Array(5).fill().map((function(e,a){return Object(j.jsx)("li",{className:"ratings-list-item mr-25",children:Object(j.jsx)(x.a,{className:O()({"filled-star":a+1<=t.rating,"unfilled-star":a+1>t.rating})})},a)}))})]}),Object(j.jsxs)(i.a,{children:["Available -",Object(j.jsx)("span",{className:"text-success ml-25",children:"In stock"})]}),Object(j.jsx)(i.a,{children:t.description}),Object(j.jsxs)("ul",{className:"product-features list-unstyled",children:[t.hasFreeShipping?Object(j.jsxs)("li",{children:[Object(j.jsx)(f.a,{size:19}),Object(j.jsx)("span",{children:"Free Shipping"})]}):null,Object(j.jsxs)("li",{children:[Object(j.jsx)(g.a,{size:19}),Object(j.jsx)("span",{children:"EMI options available"})]})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"product-color-options",children:[Object(j.jsx)("h6",{children:"Colors"}),Object(j.jsx)("ul",{className:"list-unstyled mb-0",children:t.colorOptions.map((function(e){return Object(j.jsx)("li",{className:O()("d-inline-block",{selected:A===e}),onClick:function(){return S(e)},children:Object(j.jsx)("div",{className:"color-option b-".concat(e),children:Object(j.jsx)("div",{className:"filloption bg-".concat(e)})})},e)}))})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"d-flex flex-column flex-sm-row pt-1",children:[Object(j.jsxs)(P.a,Object(b.a)(Object(b.a)({tag:z,className:"btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0",color:"primary",onClick:function(){return e=t.id,!1===t.isInCart&&s(m(e)),void s(o(d));var e}},t.isInCart?{to:"/apps/ecommerce/checkout"}:{}),{},{children:[Object(j.jsx)(f.a,{className:"mr-50",size:14}),t.isInCart?"View in cart":"Move to cart"]})),Object(j.jsxs)(P.a,{className:"btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0",color:"secondary",outline:!0,onClick:function(){return e=t.isInWishlist,s(e?a(d):l(d)),void s(o(d));var e},children:[Object(j.jsx)(N.a,{size:14,className:O()("mr-50",{"text-danger":t.isInWishlist})}),Object(j.jsx)("span",{children:"Wishlist"})]}),Object(j.jsxs)(k.a,{className:"dropdown-icon-wrapper btn-share",children:[Object(j.jsx)(I.a,{className:"btn-icon hide-arrow",color:"secondary",caret:!0,outline:!0,children:Object(j.jsx)(v.a,{size:14})}),Object(j.jsxs)(D.a,{right:!0,children:[Object(j.jsx)(E.a,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(j.jsx)(y.a,{size:14})}),Object(j.jsx)(E.a,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(j.jsx)(w.a,{size:14})}),Object(j.jsx)(E.a,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(j.jsx)(C.a,{size:14})}),Object(j.jsx)(E.a,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(j.jsx)(T.a,{size:14})})]})]})]})]})]})},A=a(704),S=a(1280),z=a(2157),W=a(2080),_=a.p+"static/media/apple-watch.884c5ea7.png",B=a.p+"static/media/macbook-pro.4ecc26e8.png",R=a.p+"static/media/homepod.c5fa0cec.png",V=a.p+"static/media/magic-mouse.f8ccce24.png",G=a.p+"static/media/iphone-x.ba5bfe17.png",H=(a(963),function(){A.a.use([S.a]);var e=[{name:"Apple Watch Series 6",brand:"Apple",ratings:4,price:399.98,img:_},{name:"Apple MacBook Pro - Silver",brand:"Apple",ratings:2,price:2449.49,img:B},{name:"Apple HomePod (Space Grey)",brand:"Apple",ratings:3,price:229.29,img:R},{name:"Magic Mouse 2 - Black",brand:"Apple",ratings:3,price:90.98,img:V},{name:"iPhone 12 Pro",brand:"Apple",ratings:4,price:1559.99,img:G}];return Object(j.jsxs)(c.Fragment,{children:[Object(j.jsxs)("div",{className:"mt-4 mb-2 text-center",children:[Object(j.jsx)("h4",{children:"Related Products"}),Object(j.jsx)(i.a,{children:"People also search for this items"})]}),Object(j.jsx)(z.a,Object(b.a)(Object(b.a)({},{className:"swiper-responsive-breakpoints swiper-container px-4 py-2",slidesPerView:5,spaceBetween:55,navigation:!0,breakpoints:{1600:{slidesPerView:4,spaceBetween:55},1300:{slidesPerView:3,spaceBetween:55},768:{slidesPerView:2,spaceBetween:55},320:{slidesPerView:1,spaceBetween:55}}}),{},{children:e.map((function(e){return Object(j.jsx)(W.a,{children:Object(j.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(j.jsxs)("div",{className:"item-heading",children:[Object(j.jsx)("h5",{className:"text-truncate mb-0",children:e.name}),Object(j.jsxs)("small",{className:"text-body",children:["by ",e.brand]})]}),Object(j.jsx)("div",{className:"img-container w-50 mx-auto py-75",children:Object(j.jsx)("img",{src:e.img,alt:"swiper 1",className:"img-fluid"})}),Object(j.jsxs)("div",{className:"item-meta",children:[Object(j.jsx)("ul",{className:"unstyled-list list-inline mb-25",children:new Array(5).fill().map((function(t,a){return Object(j.jsx)("li",{className:"ratings-list-item mr-25",children:Object(j.jsx)(x.a,{className:O()({"filled-star":a+1<=e.ratings,"unfilled-star":a+1>e.ratings})})},a)}))}),Object(j.jsxs)(i.a,{className:"text-primary mb-0",children:["$",e.price]})]})]})},e.name)}))}))]})}),L=a(474),F=a(482),J=a(478),U=a(81),$=a(649);a(1613),t.default=function(){var e=Object(s.i)().product,t=e.substring(e.lastIndexOf("-")+1),a=Object(U.b)(),r=Object(U.c)((function(e){return e.ecommerce}));return Object(c.useEffect)((function(){a(Object($.f)(t))}),[]),Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(L.a,{breadCrumbTitle:"Product Details",breadCrumbParent:"eCommerce",breadCrumbActive:"Details"}),Object(j.jsx)("div",{className:"app-ecommerce-details",children:Object.keys(r.productDetail).length?Object(j.jsxs)(F.a,{children:[Object(j.jsx)(J.a,{children:Object(j.jsx)(M,{dispatch:a,addToCart:$.a,productId:t,getProduct:$.f,data:r.productDetail,addToWishlist:$.b,deleteWishlistItem:$.d})}),Object(j.jsx)(m,{}),Object(j.jsx)(J.a,{children:Object(j.jsx)(H,{})})]}):null})]})}},474:function(e,t,a){"use strict";var c=a(473),s=a(1153),r=a(1112),n=a(1175),i=a(1170),l=a(1109),o=a(490),d=a(491),j=a(489),m=a(1418),b=a(1082),u=a(1084),p=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,h=e.breadCrumbParent2,O=e.breadCrumbParent3,x=e.breadCrumbActive;return Object(p.jsxs)("div",{className:"content-header row",children:[Object(p.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(p.jsx)("div",{className:"row breadcrumbs-top",children:Object(p.jsxs)("div",{className:"col-12",children:[t?Object(p.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(p.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)(d.a,{tag:"li",children:Object(p.jsx)(c.b,{to:"/",children:"Home"})}),Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:a}),h?Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:h}):"",O?Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:O}):"",Object(p.jsx)(d.a,{tag:"li",active:!0,children:x})]})})]})})}),Object(p.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(p.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)(m.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(p.jsx)(s.a,{size:14})}),Object(p.jsxs)(b.a,{tag:"ul",right:!0,children:[Object(p.jsxs)(u.a,{tag:c.b,to:"/apps/chat",children:[Object(p.jsx)(r.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(p.jsxs)(u.a,{tag:c.b,to:"/apps/chat",children:[Object(p.jsx)(n.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(p.jsxs)(u.a,{tag:c.b,to:"/apps/email",children:[Object(p.jsx)(i.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(p.jsxs)(u.a,{tag:c.b,to:"/apps/calendar",children:[Object(p.jsx)(l.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},475:function(e,t,a){"use strict";var c=a(14),s=a(1),r=a.n(s),n=a(2),i=a.n(n),l=a(488),o={children:i.a.node},d=function(e){return r.a.createElement(l.a,Object(c.a)({group:!0},e))};d.propTypes=o,t.a=d},487:function(e,t,a){"use strict";var c=a(14),s=a(15),r=a(1),n=a.n(r),i=a(2),l=a.n(i),o=a(27),d=a.n(o),j=a(80),m={tag:j.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),l=Object(j.mapToCssModules)(d()(t,"card-text"),a);return n.a.createElement(r,Object(c.a)({},i,{className:l}))};b.propTypes=m,b.defaultProps={tag:"p"},t.a=b},489:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var c=a(476),s=a(14),r=a(121),n=a(57),i=a(1),l=a.n(i),o=a(2),d=a.n(o),j=a(475),m=a(80);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}var u=["defaultOpen"],p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(r.a)(a)),a}Object(n.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return l.a.createElement(j.a,Object(s.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(m.omit)(this.props,u)))},t}(i.Component);p.propTypes=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({defaultOpen:d.a.bool},j.a.propTypes)},490:function(e,t,a){"use strict";var c=a(14),s=a(15),r=a(1),n=a.n(r),i=a(2),l=a.n(i),o=a(27),d=a.n(o),j=a(80),m={tag:j.tagPropType,listTag:j.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},b=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,i=e.children,l=e.tag,o=e.listTag,m=e["aria-label"],b=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),u=Object(j.mapToCssModules)(d()(t),r),p=Object(j.mapToCssModules)(d()("breadcrumb",a),r);return n.a.createElement(l,Object(c.a)({},b,{className:u,"aria-label":m}),n.a.createElement(o,{className:p},i))};b.propTypes=m,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=b},491:function(e,t,a){"use strict";var c=a(14),s=a(15),r=a(1),n=a.n(r),i=a(2),l=a.n(i),o=a(27),d=a.n(o),j=a(80),m={tag:j.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.active,i=e.tag,l=Object(s.a)(e,["className","cssModule","active","tag"]),o=Object(j.mapToCssModules)(d()(t,!!r&&"active","breadcrumb-item"),a);return n.a.createElement(i,Object(c.a)({},l,{className:o,"aria-current":r?"page":void 0}))};b.propTypes=m,b.defaultProps={tag:"li"},t.a=b},649:function(e,t,a){"use strict";a.d(t,"g",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"h",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"f",(function(){return d})),a.d(t,"b",(function(){return j})),a.d(t,"c",(function(){return m}));var c=a(82),s=a.n(c),r=function(e){return function(t){return s.a.get("/apps/ecommerce/products",{params:e}).then((function(a){t({type:"GET_PRODUCTS",data:a.data,params:e})}))}},n=function(e){return function(t,a){return s.a.post("/apps/ecommerce/cart",{productId:e}).then((function(e){t({type:"ADD_TO_CART",data:e.data}),t(r(a().ecommerce.params))}))}},i=function(){return function(e){return s.a.get("/apps/ecommerce/wishlist").then((function(t){e({type:"GET_WISHLIST",data:t.data})}))}},l=function(e){return function(t){return s.a.delete("/apps/ecommerce/wishlist/".concat(e)).then((function(e){t({type:"DELETE_WISHLIST_ITEM",data:e.data}),t(i())}))}},o=function(){return function(e){return s.a.get("/apps/ecommerce/cart").then((function(t){e({type:"GET_CART",data:t.data})}))}},d=function(e){return function(t){return s.a.get("/apps/ecommerce/products/".concat(e)).then((function(e){t({type:"GET_PRODUCT",data:e.data})}))}},j=function(e){return function(t){return s.a.post("/apps/ecommerce/wishlist",{productId:e}).then((function(){t({type:"ADD_TO_WISHLIST"})}))}},m=function(e){return function(t){return s.a.delete("/apps/ecommerce/cart/".concat(e)).then((function(e){t({type:"DELETE_CART_ITEM",data:e.data}),t(o())}))}}},963:function(e,t,a){}}]);
//# sourceMappingURL=118.9879cd92.chunk.js.map