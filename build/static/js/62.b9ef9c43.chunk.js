(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[62],{1091:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1809);t.Menu=o.Menu;var r=n(1811);t.Item=r.Item;var i=n(1812);t.Separator=i.Separator;var s=n(1813);t.IconFont=s.IconFont;var a=n(1814);t.Submenu=a.Submenu;var u=n(1815);t.MenuProvider=u.MenuProvider;var c=n(1816);t.contextMenu=c.contextMenu;var l=n(966);t.theme=l.theme,t.animation=l.animation},1287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HIDE_ALL=0,t.DISPLAY_MENU=function(e){return"DISPLAY_"+e}},1288:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={eventList:new Map,on:function(e,t){var n=this;return this.eventList.has(e)||this.eventList.set(e,new Set),this.eventList.get(e).add(t),function(){return n.eventList.get(e).delete(t)}},emit:function(e){for(var t=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return this.eventList.has(e)?(this.eventList.get(e).forEach((function(e){return e.call.apply(e,[t].concat(n))})),!0):(console.warn("<"+e+"> Event is not registered. Did you forgot to bind the event ?"),!1)}};t.eventManager=o},1431:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);t.cloneItem=function(e,t){return o.Children.map(o.Children.toArray(e).filter((function(e){return Boolean(e)})),(function(e){return o.cloneElement(e,t)}))}},1809:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(1)),u=s(n(2)),c=s(n(27)),l=n(1431),d=n(1810),f=n(1287),p=n(966),h=n(1288),v=13,m=27,y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={x:0,y:0,visible:!1,nativeEvent:{},propsFromTrigger:{},onShown:null,onHidden:null},t.unsub=[],t.bindWindowEvent=function(){window.addEventListener("resize",t.hide),window.addEventListener("contextmenu",t.hide),window.addEventListener("mousedown",t.hide),window.addEventListener("click",t.hide),window.addEventListener("scroll",t.hide),window.addEventListener("keydown",t.handleKeyboard)},t.unBindWindowEvent=function(){window.removeEventListener("resize",t.hide),window.removeEventListener("contextmenu",t.hide),window.removeEventListener("mousedown",t.hide),window.removeEventListener("click",t.hide),window.removeEventListener("scroll",t.hide),window.removeEventListener("keydown",t.handleKeyboard)},t.onMouseEnter=function(){return window.removeEventListener("mousedown",t.hide)},t.onMouseLeave=function(){return window.addEventListener("mousedown",t.hide)},t.hide=function(e){var n=e;("undefined"===typeof n||2!==n.button&&!0!==n.ctrlKey||"contextmenu"===n.type)&&(t.unBindWindowEvent(),t.setState({visible:!1}))},t.handleKeyboard=function(e){e.keyCode!==v&&e.keyCode!==m||(t.unBindWindowEvent(),t.setState({visible:!1}))},t.setRef=function(e){t.menuRef=e},t.show=function(e,n){e.stopPropagation(),h.eventManager.emit(f.HIDE_ALL);var o=t.getMousePosition(e),r=o.x,i=o.y;t.setState({visible:!0,x:r,y:i,nativeEvent:e,propsFromTrigger:n},t.setMenuPosition)},t}return o(t,e),t.prototype.componentDidMount=function(){this.unsub.push(h.eventManager.on(f.DISPLAY_MENU(this.props.id),this.show)),this.unsub.push(h.eventManager.on(f.HIDE_ALL,this.hide))},t.prototype.componentWillUnmount=function(){this.unsub.forEach((function(e){return e()})),this.unBindWindowEvent()},t.prototype.componentDidUpdate=function(e,t){this.state.visible!==t.visible&&(this.state.visible&&this.props.onShown?this.props.onShown():!this.state.visible&&this.props.onHidden&&this.props.onHidden())},t.prototype.setMenuPosition=function(){var e=window.innerWidth,t=window.innerHeight,n=this.menuRef,o=n.offsetWidth,r=n.offsetHeight,i=this.state,s=i.x,a=i.y;s+o>e&&(s-=s+o-e),a+r>t&&(a-=a+r-t),this.setState({x:s,y:a},this.bindWindowEvent)},t.prototype.getMousePosition=function(e){var t={x:e.clientX,y:e.clientY};return"touchend"===e.type&&(!t.x||!t.y)&&e.changedTouches&&e.changedTouches.length>0&&(t.x=e.changedTouches[0].clientX,t.y=e.changedTouches[0].clientY),(!t.x||t.x<0)&&(t.x=0),(!t.y||t.y<0)&&(t.y=0),t},t.prototype.render=function(){var e,t=this.props,n=t.theme,o=t.animation,i=t.style,s=t.className,u=t.children,f=this.state,h=f.visible,v=f.nativeEvent,m=f.propsFromTrigger,y=f.x,b=f.y,_=c.default(p.styles.menu,s,((e={})[p.styles.theme+n]=n,e[p.styles.animationWillEnter+o]=o,e)),g=r({},i,{left:y,top:b+1,opacity:1});return a.default.createElement(d.Portal,null,h&&a.default.createElement("div",{className:_,style:g,ref:this.setRef,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},a.default.createElement("div",null,l.cloneItem(u,{nativeEvent:v,propsFromTrigger:m}))))},t.propTypes={id:u.default.oneOfType([u.default.string,u.default.number]).isRequired,children:u.default.node.isRequired,theme:u.default.string,animation:u.default.string,className:u.default.string,style:u.default.object},t}(a.Component);t.Menu=y},1810:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(18),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={canRender:!1},t.container={},t}return o(t,e),t.prototype.componentDidMount=function(){this.container=document.createElement("div"),document.body.appendChild(this.container),this.setState({canRender:!0})},t.prototype.componentWillUnmount=function(){document.body.removeChild(this.container)},t.prototype.render=function(){return this.state.canRender&&i.createPortal(this.props.children,this.container)},t}(r.PureComponent);t.Portal=s},1811:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(1)),u=s(n(2)),c=s(n(27)),l=n(966),d=function(){},f=function(e){function t(t){var n=e.call(this,t)||this;n.handleClick=function(e){n.isDisabled?e.stopPropagation():n.props.onClick({event:n.props.nativeEvent,props:r({},n.props.propsFromTrigger,n.props.data)})};var o=n.props,i=o.disabled,s=o.nativeEvent,a=o.propsFromTrigger,u=o.data;return n.isDisabled="function"===typeof i?i({event:s,props:r({},a,u)}):i,n}return o(t,e),t.prototype.render=function(){var e,t=this.props,n=t.className,o=t.style,r=t.children,i=c.default(l.styles.item,n,((e={})[""+l.styles.itemDisabled]=this.isDisabled,e));return a.default.createElement("div",{className:i,style:o,onClick:this.handleClick,role:"presentation"},a.default.createElement("div",{className:l.styles.itemContent},r))},t.propTypes={children:u.default.node.isRequired,data:u.default.object,disabled:u.default.oneOfType([u.default.func,u.default.bool]),onClick:u.default.func,nativeEvent:u.default.object,propsFromTrigger:u.default.object,className:u.default.string,style:u.default.object},t.defaultProps={disabled:!1,onClick:d},t}(a.Component);t.Item=f},1812:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(1)),i=n(966);t.Separator=function(){return r.default.createElement("div",{className:i.styles.separator})}},1813:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(1)),i=o(n(2)),s=o(n(27)),a=n(966),u=function(e){var t=e.className,n=e.style,o=e.children;return r.default.createElement("i",{className:s.default(a.styles.itemIcon,t),style:n},o||"")};t.IconFont=u,u.propTypes={children:i.default.node,className:i.default.string,style:i.default.object}},1814:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(1)),u=s(n(2)),c=s(n(27)),l=n(1431),d=n(966),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={left:"100%",top:0,bottom:"initial"},t.setRef=function(e){t.menu=e},t}return o(t,e),t.prototype.componentDidMount=function(){var e=window.innerWidth,t=window.innerHeight,n=this.menu.getBoundingClientRect(),o={};n.right<e?(o.left="100%",o.right=void 0):(o.right="100%",o.left=void 0),n.bottom>t?(o.bottom=0,o.top="initial"):(o.bottom="initial",o.top=0),this.setState(o)},t.prototype.handleClick=function(e){e.stopPropagation()},t.prototype.render=function(){var e,t=this.props,n=t.arrow,o=t.disabled,i=t.className,s=t.style,u=t.label,f=t.nativeEvent,p=t.children,h=t.propsFromTrigger,v=c.default(d.styles.item,i,((e={})[""+d.styles.itemDisabled]="function"===typeof o?o({event:f,props:r({},h)}):o,e)),m=r({},s,this.state);return a.default.createElement("div",{className:v,role:"presentation"},a.default.createElement("div",{className:d.styles.itemContent,onClick:this.handleClick},u,a.default.createElement("span",{className:d.styles.submenuArrow},n)),a.default.createElement("div",{className:d.styles.submenu,ref:this.setRef,style:m},l.cloneItem(p,{propsFromTrigger:h,nativeEvent:f})))},t.propTypes={label:u.default.node.isRequired,children:u.default.node.isRequired,nativeEvent:u.default.object,arrow:u.default.node,disabled:u.default.oneOfType([u.default.func,u.default.bool]),className:u.default.string,style:u.default.object},t.defaultProps={arrow:"\u25b6",disabled:!1,nativeEvent:{}},t}(a.Component);t.Submenu=f},1815:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=s(n(2)),c=n(1287),l=n(1288),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.childrenRefs=[],t.handleEvent=function(e){e.preventDefault(),e.stopPropagation(),l.eventManager.emit(c.DISPLAY_MENU(t.props.id),e.nativeEvent,r({ref:1===t.childrenRefs.length?t.childrenRefs[0]:t.childrenRefs},t.props.data))},t.setChildRef=function(e){return null===e||t.childrenRefs.push(e)},t}return o(t,e),t.prototype.getChildren=function(){var e=this,t=this.props,n=(t.id,t.component,t.event,t.children),o=(t.className,t.style,t.storeRef),s=(t.data,i(t,["id","component","event","children","className","style","storeRef","data"]));return this.childrenRefs=[],a.Children.map(n,(function(t){return a.isValidElement(t)?a.cloneElement(t,r({},s,o?{ref:e.setChildRef}:{})):t}))},t.prototype.render=function(){var e,t=this.props,n=t.component,o=t.render,i=t.event,s=t.className,u=t.style,c=((e={})[i]=this.handleEvent,e.className=s,e.style=u,e);return"function"===typeof o?o(r({},c,{children:this.getChildren()})):a.createElement(n,c,this.getChildren())},t.propTypes={id:u.default.oneOfType([u.default.string,u.default.number]).isRequired,children:u.default.node.isRequired,component:u.default.oneOfType([u.default.node,u.default.func]),render:u.default.func,event:u.default.string,className:u.default.string,style:u.default.object,storeRef:u.default.bool,data:u.default.object},t.defaultProps={component:"div",event:"onContextMenu",storeRef:!0},t}(a.Component);t.MenuProvider=d},1816:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1288),r=n(1287),i={show:function(e){var t=e.id,n=e.event,i=e.props;o.eventManager.emit(r.DISPLAY_MENU(t),n.nativeEvent||n,i)},hideAll:function(){o.eventManager.emit(r.HIDE_ALL)}};t.contextMenu=i},1817:function(e,t,n){},482:function(e,t,n){"use strict";var o=n(14),r=n(15),i=n(1),s=n.n(i),a=n(2),u=n.n(a),c=n(27),l=n.n(c),d=n(80),f={tag:d.tagPropType,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},p=function(e){var t=e.className,n=e.cssModule,i=e.innerRef,a=e.tag,u=Object(r.a)(e,["className","cssModule","innerRef","tag"]),c=Object(d.mapToCssModules)(l()(t,"card-body"),n);return s.a.createElement(a,Object(o.a)({},u,{className:c,ref:i}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},486:function(e,t,n){"use strict";var o=n(14),r=n(15),i=n(1),s=n.n(i),a=n(2),u=n.n(a),c=n(27),l=n.n(c),d=n(80),f={tag:d.tagPropType,className:u.a.string,cssModule:u.a.object},p=function(e){var t=e.className,n=e.cssModule,i=e.tag,a=Object(r.a)(e,["className","cssModule","tag"]),u=Object(d.mapToCssModules)(l()(t,"card-title"),n);return s.a.createElement(i,Object(o.a)({},a,{className:u}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},489:function(e,t,n){"use strict";var o=n(14),r=n(15),i=n(1),s=n.n(i),a=n(2),u=n.n(a),c=n(27),l=n.n(c),d=n(80),f={tag:d.tagPropType,className:u.a.string,cssModule:u.a.object},p=function(e){var t=e.className,n=e.cssModule,i=e.tag,a=Object(r.a)(e,["className","cssModule","tag"]),u=Object(d.mapToCssModules)(l()(t,"card-header"),n);return s.a.createElement(i,Object(o.a)({},a,{className:u}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},490:function(e,t,n){"use strict";var o=n(14),r=n(15),i=n(1),s=n.n(i),a=n(2),u=n.n(a),c=n(27),l=n.n(c),d=n(80),f=u.a.oneOfType([u.a.number,u.a.string]),p={tag:d.tagPropType,noGutters:u.a.bool,className:u.a.string,cssModule:u.a.object,form:u.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},h={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e){var t=e.className,n=e.cssModule,i=e.noGutters,a=e.tag,u=e.form,c=e.widths,f=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];c.forEach((function(t,n){var o=e[t];if(delete f[t],o){var r=!n;p.push(r?"row-cols-"+o:"row-cols-"+t+"-"+o)}}));var h=Object(d.mapToCssModules)(l()(t,i?"no-gutters":null,u?"form-row":"row",p),n);return s.a.createElement(a,Object(o.a)({},f,{className:h}))};v.propTypes=p,v.defaultProps=h,t.a=v},491:function(e,t,n){"use strict";var o=n(14),r=n(15),i=n(1),s=n.n(i),a=n(2),u=n.n(a),c=n(27),l=n.n(c),d=n(80),f=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:f,offset:f})]),h={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},y=function(e){var t=e.className,n=e.cssModule,i=e.widths,a=e.tag,u=Object(r.a)(e,["className","cssModule","widths","tag"]),c=[];i.forEach((function(t,o){var r=e[t];if(delete u[t],r||""===r){var i=!o;if(Object(d.isObject)(r)){var s,a=i?"-":"-"+t+"-",f=m(i,t,r.size);c.push(Object(d.mapToCssModules)(l()(((s={})[f]=r.size||""===r.size,s["order"+a+r.order]=r.order||0===r.order,s["offset"+a+r.offset]=r.offset||0===r.offset,s)),n))}else{var p=m(i,t,r);c.push(p)}}})),c.length||c.push("col");var f=Object(d.mapToCssModules)(l()(t,c),n);return s.a.createElement(a,Object(o.a)({},u,{className:f}))};y.propTypes=h,y.defaultProps=v,t.a=y},493:function(e,t,n){"use strict";var o=n(14),r=n(15),i=n(1),s=n.n(i),a=n(2),u=n.n(a),c=n(27),l=n.n(c),d=n(80),f={tag:d.tagPropType,inverse:u.a.bool,color:u.a.string,body:u.a.bool,outline:u.a.bool,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},p=function(e){var t=e.className,n=e.cssModule,i=e.color,a=e.body,u=e.inverse,c=e.outline,f=e.tag,p=e.innerRef,h=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),v=Object(d.mapToCssModules)(l()(t,"card",!!u&&"text-white",!!a&&"card-body",!!i&&(c?"border":"bg")+"-"+i),n);return s.a.createElement(f,Object(o.a)({},h,{className:v,ref:p}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},660:function(e,t,n){"use strict";var o=n(1),r=n.n(o),i=n(2),s=n.n(i);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=Object(o.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,s=void 0===i?24:i,c=u(e,["color","size"]);return r.a.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.a.createElement("polyline",{points:"20 6 9 17 4 12"}))}));c.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},c.displayName="Check",t.a=c},966:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styles={menu:"react-contexify",submenu:"react-contexify react-contexify__submenu",submenuArrow:"react-contexify__submenu-arrow",separator:"react-contexify__separator",item:"react-contexify__item",itemDisabled:"react-contexify__item--disabled",itemContent:"react-contexify__item__content",itemIcon:"react-contexify__item__icon",theme:"react-contexify__theme--",animationWillEnter:"react-contexify__will-enter--",animationWillLeave:"react-contexify__will-leave--"},t.theme={light:"light",dark:"dark"},t.animation={fade:"fade",flip:"flip",pop:"pop",zoom:"zoom"}}}]);
//# sourceMappingURL=62.b9ef9c43.chunk.js.map