(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[15],{493:function(e,t,n){"use strict";var o=n(14),i=n(15),s=n(121),a=n(57),r=n(1),c=n.n(r),l=n(2),u=n.n(l),p=n(27),d=n.n(p),f=n(80),h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(s.a)(n)),n.focus=n.focus.bind(Object(s.a)(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,s=e.type,a=e.bsSize,r=e.valid,l=e.invalid,u=e.tag,p=e.addon,h=e.plaintext,m=e.innerRef,b=Object(i.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),v=u||("select"===s||"textarea"===s?s:"input"),O="form-control";h?(O+="-plaintext",v=u||"input"):"file"===s?O+="-file":"range"===s?O+="-range":g&&(O=p?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),a=b.size,delete b.size);var C=Object(f.mapToCssModules)(d()(t,l&&"is-invalid",r&&"is-valid",!!a&&"form-control-"+a,O),n);return("input"===v||u&&"function"===typeof u)&&(b.type=s),b.children&&!h&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(f.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(v,Object(o.a)({},b,{ref:m,className:C,"aria-invalid":l}))},t}(c.a.Component);m.propTypes=h,m.defaultProps={type:"text"},t.a=m},495:function(e,t,n){"use strict";var o=n(14),i=n(15),s=n(1),a=n.n(s),r=n(2),c=n.n(r),l=n(27),u=n.n(l),p=n(80),d={tag:p.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,n=e.cssModule,s=e.tag,r=Object(i.a)(e,["className","cssModule","tag"]),c=Object(p.mapToCssModules)(u()(t,"input-group-text"),n);return a.a.createElement(s,Object(o.a)({},r,{className:c}))};f.propTypes=d,f.defaultProps={tag:"span"},t.a=f},497:function(e,t,n){"use strict";var o=n(14),i=n(15),s=n(1),a=n.n(s),r=n(2),c=n.n(r),l=n(27),u=n.n(l),p=n(80),d=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:d,order:d,offset:d})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:p.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},m={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,s=e.hidden,r=e.widths,c=e.tag,l=e.check,d=e.size,f=e.for,h=Object(i.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];r.forEach((function(t,o){var i=e[t];if(delete h[t],i||""===i){var s,a=!o;if(Object(p.isObject)(i)){var r,c=a?"-":"-"+t+"-";s=b(a,t,i.size),m.push(Object(p.mapToCssModules)(u()(((r={})[s]=i.size||""===i.size,r["order"+c+i.order]=i.order||0===i.order,r["offset"+c+i.offset]=i.offset||0===i.offset,r))),n)}else s=b(a,t,i),m.push(s)}}));var g=Object(p.mapToCssModules)(u()(t,!!s&&"sr-only",!!l&&"form-check-label",!!d&&"col-form-label-"+d,m,!!m.length&&"col-form-label"),n);return a.a.createElement(c,Object(o.a)({htmlFor:f},h,{className:g}))};g.propTypes=h,g.defaultProps=m,t.a=g},508:function(e,t,n){"use strict";var o=n(14),i=n(15),s=n(121),a=n(57),r=n(1),c=n.n(r),l=n(2),u=n.n(l),p=n(27),d=n.n(p),f=n(80),h={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(s.a)(n)),n.submit=n.submit.bind(Object(s.a)(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,s=e.inline,a=e.tag,r=e.innerRef,l=Object(i.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(f.mapToCssModules)(d()(t,!!s&&"form-inline"),n);return c.a.createElement(a,Object(o.a)({},l,{ref:r,className:u}))},t}(r.Component);m.propTypes=h,m.defaultProps={tag:"form"},t.a=m},514:function(e,t,n){"use strict";var o=n(14),i=n(15),s=n(1),a=n.n(s),r=n(2),c=n.n(r),l=n(27),u=n.n(l),p=n(80),d={tag:p.tagPropType,size:c.a.string,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,n=e.cssModule,s=e.tag,r=e.size,c=Object(i.a)(e,["className","cssModule","tag","size"]),l=Object(p.mapToCssModules)(u()(t,"input-group",r?"input-group-"+r:null),n);return a.a.createElement(s,Object(o.a)({},c,{className:l}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},515:function(e,t,n){"use strict";var o=n(14),i=n(15),s=n(1),a=n.n(s),r=n(2),c=n.n(r),l=n(27),u=n.n(l),p=n(80),d=n(495),f={tag:p.tagPropType,addonType:c.a.oneOf(["prepend","append"]).isRequired,children:c.a.node,className:c.a.string,cssModule:c.a.object},h=function(e){var t=e.className,n=e.cssModule,s=e.tag,r=e.addonType,c=e.children,l=Object(i.a)(e,["className","cssModule","tag","addonType","children"]),f=Object(p.mapToCssModules)(u()(t,"input-group-"+r),n);return"string"===typeof c?a.a.createElement(s,Object(o.a)({},l,{className:f}),a.a.createElement(d.a,{children:c})):a.a.createElement(s,Object(o.a)({},l,{className:f,children:c}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},535:function(e,t,n){"use strict";var o=n(14),i=n(15),s=n(1),a=n.n(s),r=n(2),c=n.n(r),l=n(27),u=n.n(l),p=n(80),d={tag:p.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,n=e.cssModule,s=e.tag,r=Object(i.a)(e,["className","cssModule","tag"]),c=Object(p.mapToCssModules)(u()(t,"modal-body"),n);return a.a.createElement(s,Object(o.a)({},r,{className:c}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},539:function(e,t,n){"use strict";var o=n(476),i=n(14),s=n(121),a=n(57),r=n(1),c=n.n(r),l=n(2),u=n.n(l),p=n(27),d=n.n(p),f=n(18),h=n.n(f),m=n(80),b={children:u.a.node.isRequired,node:u.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(a.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},n.render=function(){return m.canUseDOM?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(c.a.Component);g.propTypes=b;var y=g,v=n(498);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(){}var T=u.a.shape(v.a.propTypes),M={isOpen:u.a.bool,autoFocus:u.a.bool,centered:u.a.bool,scrollable:u.a.bool,size:u.a.string,toggle:u.a.func,keyboard:u.a.bool,role:u.a.string,labelledBy:u.a.string,backdrop:u.a.oneOfType([u.a.bool,u.a.oneOf(["static"])]),onEnter:u.a.func,onExit:u.a.func,onOpened:u.a.func,onClosed:u.a.func,children:u.a.node,className:u.a.string,wrapClassName:u.a.string,modalClassName:u.a.string,backdropClassName:u.a.string,contentClassName:u.a.string,external:u.a.node,fade:u.a.bool,cssModule:u.a.object,zIndex:u.a.oneOfType([u.a.number,u.a.string]),backdropTransition:T,modalTransition:T,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func]),unmountOnClose:u.a.bool,returnFocusAfterClose:u.a.bool,container:m.targetPropType},k=Object.keys(M),E={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:j,onClosed:j,modalTransition:{timeout:m.TransitionTimeouts.Modal},backdropTransition:{mountOnEnter:!0,timeout:m.TransitionTimeouts.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},N=function(e){function t(t){var n;return(n=e.call(this,t)||this)._element=null,n._originalBodyPadding=null,n.getFocusableChildren=n.getFocusableChildren.bind(Object(s.a)(n)),n.handleBackdropClick=n.handleBackdropClick.bind(Object(s.a)(n)),n.handleBackdropMouseDown=n.handleBackdropMouseDown.bind(Object(s.a)(n)),n.handleEscape=n.handleEscape.bind(Object(s.a)(n)),n.handleStaticBackdropAnimation=n.handleStaticBackdropAnimation.bind(Object(s.a)(n)),n.handleTab=n.handleTab.bind(Object(s.a)(n)),n.onOpened=n.onOpened.bind(Object(s.a)(n)),n.onClosed=n.onClosed.bind(Object(s.a)(n)),n.manageFocusAfterClose=n.manageFocusAfterClose.bind(Object(s.a)(n)),n.clearBackdropAnimationTimeout=n.clearBackdropAnimationTimeout.bind(Object(s.a)(n)),n.state={isOpen:!1,showStaticBackdropAnimation:!1},n}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.isOpen,n=e.autoFocus,o=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),n&&this.setFocus()),o&&o(),this._isMounted=!0},n.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},n.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),this._isMounted=!1},n.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||j)(e,t)},n.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||j)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},n.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},n.getFocusableChildren=function(){return this._element.querySelectorAll(m.focusableElements.join(", "))},n.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(n){e=t[0]}return e},n.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},n.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),n=t.length;if(0!==n){for(var o=this.getFocusedChild(),i=0,s=0;s<n;s+=1)if(t[s]===o){i=s;break}e.shiftKey&&0===i?(e.preventDefault(),t[n-1].focus()):e.shiftKey||i!==n-1||(e.preventDefault(),t[0].focus())}}},n.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},n.handleEscape=function(e){this.props.isOpen&&e.keyCode===m.keyCodes.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},n.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},n.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(m.getTarget)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(m.getOriginalBodyPadding)(),Object(m.conditionallyUpdateScrollbar)(),0===t.openCount&&(document.body.className=d()(document.body.className,Object(m.mapToCssModules)("modal-open",this.props.cssModule))),t.openCount+=1},n.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},n.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},n.close=function(){if(t.openCount<=1){var e=Object(m.mapToCssModules)("modal-open",this.props.cssModule),n=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(n," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(m.setScrollbarWidth)(this._originalBodyPadding)},n.renderModalDialog=function(){var e,t=this,n=Object(m.omit)(this.props,k),o="modal-dialog";return c.a.createElement("div",Object(i.a)({},n,{className:Object(m.mapToCssModules)(d()(o,this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),c.a.createElement("div",{className:Object(m.mapToCssModules)(d()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},n.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var n=this.props,o=n.wrapClassName,s=n.modalClassName,a=n.backdropClassName,r=n.cssModule,l=n.isOpen,u=n.backdrop,p=n.role,f=n.labelledBy,h=n.external,b=n.innerRef,g={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":f,role:p,tabIndex:"-1"},O=this.props.fade,j=C(C(C({},v.a.defaultProps),this.props.modalTransition),{},{baseClass:O?this.props.modalTransition.baseClass:"",timeout:O?this.props.modalTransition.timeout:0}),T=C(C(C({},v.a.defaultProps),this.props.backdropTransition),{},{baseClass:O?this.props.backdropTransition.baseClass:"",timeout:O?this.props.backdropTransition.timeout:0}),M=u&&(O?c.a.createElement(v.a,Object(i.a)({},T,{in:l&&!!u,cssModule:r,className:Object(m.mapToCssModules)(d()("modal-backdrop",a),r)})):c.a.createElement("div",{className:Object(m.mapToCssModules)(d()("modal-backdrop","show",a),r)}));return c.a.createElement(y,{node:this._element},c.a.createElement("div",{className:Object(m.mapToCssModules)(o)},c.a.createElement(v.a,Object(i.a)({},g,j,{in:l,onEntered:this.onOpened,onExited:this.onClosed,cssModule:r,className:Object(m.mapToCssModules)(d()("modal",s,this.state.showStaticBackdropAnimation&&"modal-static"),r),innerRef:b}),h,this.renderModalDialog()),M))}return null},n.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(c.a.Component);N.propTypes=M,N.defaultProps=E,N.openCount=0;t.a=N},583:function(e,t,n){"use strict";var o=n(14),i=n(15),s=n(1),a=n.n(s),r=n(2),c=n.n(r),l=n(27),u=n.n(l),p=n(80),d={tag:p.tagPropType,flush:c.a.bool,className:c.a.string,cssModule:c.a.object,horizontal:c.a.oneOfType([c.a.bool,c.a.string])},f=function(e){var t=e.className,n=e.cssModule,s=e.tag,r=e.flush,c=e.horizontal,l=Object(i.a)(e,["className","cssModule","tag","flush","horizontal"]),d=Object(p.mapToCssModules)(u()(t,"list-group",r?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(c)),n);return a.a.createElement(s,Object(o.a)({},l,{className:d}))};f.propTypes=d,f.defaultProps={tag:"ul",horizontal:!1},t.a=f},601:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o=n(1),i=n(2),s=function(){return(s=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a={onActivate:i.func,onAddUndo:i.func,onBeforeAddUndo:i.func,onBeforeExecCommand:i.func,onBeforeGetContent:i.func,onBeforeRenderUI:i.func,onBeforeSetContent:i.func,onBeforePaste:i.func,onBlur:i.func,onChange:i.func,onClearUndos:i.func,onClick:i.func,onContextMenu:i.func,onCopy:i.func,onCut:i.func,onDblclick:i.func,onDeactivate:i.func,onDirty:i.func,onDrag:i.func,onDragDrop:i.func,onDragEnd:i.func,onDragGesture:i.func,onDragOver:i.func,onDrop:i.func,onExecCommand:i.func,onFocus:i.func,onFocusIn:i.func,onFocusOut:i.func,onGetContent:i.func,onHide:i.func,onInit:i.func,onKeyDown:i.func,onKeyPress:i.func,onKeyUp:i.func,onLoadContent:i.func,onMouseDown:i.func,onMouseEnter:i.func,onMouseLeave:i.func,onMouseMove:i.func,onMouseOut:i.func,onMouseOver:i.func,onMouseUp:i.func,onNodeChange:i.func,onObjectResizeStart:i.func,onObjectResized:i.func,onObjectSelected:i.func,onPaste:i.func,onPostProcess:i.func,onPostRender:i.func,onPreProcess:i.func,onProgressState:i.func,onRedo:i.func,onRemove:i.func,onReset:i.func,onSaveContent:i.func,onSelectionChange:i.func,onSetAttrib:i.func,onSetContent:i.func,onShow:i.func,onSubmit:i.func,onUndo:i.func,onVisualAid:i.func},r=s({apiKey:i.string,id:i.string,inline:i.bool,init:i.object,initialValue:i.string,onEditorChange:i.func,outputFormat:i.oneOf(["html","text"]),value:i.string,tagName:i.string,cloudChannel:i.string,plugins:i.oneOfType([i.string,i.array]),toolbar:i.oneOfType([i.string,i.array]),disabled:i.bool,textareaName:i.string,tinymceScriptSrc:i.string,scriptLoading:i.shape({async:i.bool,defer:i.bool,delay:i.number})},a),c=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],a=0,r=s.length;a<r;a++,i++)o[i]=s[a];return o},l=function(e){return"function"===typeof e},u=function(e){return e in a},p=function(e){return e.substr(2)},d=function(e,t,n,o){return f(e.on.bind(e),e.off.bind(e),(function(t){return function(n){return t(n,e)}}),t,n,o)},f=function(e,t,n,o,i,s){var a=Object.keys(o).filter(u),r=Object.keys(i).filter(u),l=a.filter((function(e){return void 0===i[e]})),d=r.filter((function(e){return void 0!==o[e]&&o[e]!=i[e]})),f=r.filter((function(e){return void 0===o[e]}));c(l,d).forEach((function(e){var n=p(e),o=s[n];t(n,o),delete s[n]})),c(d,f).forEach((function(t){var o=i[t];if(void 0!==o){var a=p(t),r=n(o);s[a]=r,e(a,r)}}))},h=0,m=function(e){var t=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++h+String(t)},b=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},g=function(){return{listeners:[],scriptId:m("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},y=function(){var e=g();return{load:function(t,n,o,i,s,a){var r=function(){return function(e,t,n,o,i,s){var a=t.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=e,a.src=n,a.async=o,a.defer=i,a.addEventListener("load",(function e(){a.removeEventListener("load",e),s()})),t.head&&t.head.appendChild(a)}(e.scriptId,t,n,o,i,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0}))};e.scriptLoaded?a():(e.listeners.push(a),e.scriptLoading||(e.scriptLoading=!0,s>0?setTimeout(r,s):r()))},reinitialize:function(){e=g()}}}(),v=n(636),O=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),C=function(){return(C=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},j=function(e){function t(t){var n,i,s,a=e.call(this,t)||this;return a.handleEditorChange=function(e){var t,n=a.editor;if(n){var o=n.getContent({format:a.props.outputFormat});o!==a.currentContent&&(a.currentContent=o,l(a.props.onEditorChange)&&a.props.onEditorChange(null!==(t=a.currentContent)&&void 0!==t?t:"",n))}},a.handleInit=function(e){var t=a.editor;t&&(t.setContent(a.getInitialValue()),t.undoManager.clear(),t.undoManager.add(),t.setDirty(!1),l(a.props.onEditorChange)&&t.on("change keyup setcontent",a.handleEditorChange),l(a.props.onInit)&&a.props.onInit(e,t),d(t,{},a.props,a.boundHandlers))},a.initialise=function(){var e=a.elementRef.current;if(e){var t=Object(v.a)();if(!t)throw new Error("tinymce should have been loaded into global scope");var n,o,i,s=C(C({},a.props.init),{selector:void 0,target:e,readonly:a.props.disabled,inline:a.inline,plugins:(n=a.props.init&&a.props.init.plugins,o=a.props.plugins,b(n).concat(b(o))),toolbar:a.props.toolbar||a.props.init&&a.props.init.toolbar,setup:function(e){a.editor=e,e.on("init",a.handleInit),a.props.init&&l(a.props.init.setup)&&a.props.init.setup(e)}});null!==(i=a.elementRef.current)&&"textarea"===i.tagName.toLowerCase()&&(a.elementRef.current.style.visibility=""),t.init(s)}},a.id=a.props.id||m("tiny-react"),a.elementRef=o.createRef(),a.inline=null!==(s=null!==(n=a.props.inline)&&void 0!==n?n:null===(i=a.props.init)||void 0===i?void 0:i.inline)&&void 0!==s&&s,a.boundHandlers={},a}return O(t,e),t.prototype.componentDidUpdate=function(e){var t,n=this;if(this.editor&&this.editor.initialized){if(d(this.editor,e,this.props,this.boundHandlers),this.currentContent=null!==(t=this.currentContent)&&void 0!==t?t:this.editor.getContent({format:this.props.outputFormat}),"string"===typeof this.props.value&&this.props.value!==e.value&&this.props.value!==this.currentContent){var o=this.editor;o.undoManager.transact((function(){return o.setContent(n.props.value)}))}"boolean"===typeof this.props.disabled&&this.props.disabled!==e.disabled&&this.editor.setMode(this.props.disabled?"readonly":"design")}},t.prototype.componentDidMount=function(){var e,t,n,o,i,s;null!==Object(v.a)()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&y.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(t=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.async)&&void 0!==t&&t,null!==(o=null===(n=this.props.scriptLoading)||void 0===n?void 0:n.defer)&&void 0!==o&&o,null!==(s=null===(i=this.props.scriptLoading)||void 0===i?void 0:i.delay)&&void 0!==s?s:0,this.initialise)},t.prototype.componentWillUnmount=function(){var e=this,t=this.editor;t&&(t.off("init",this.handleInit),t.initialized&&(t.off("change keyup setcontent",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(n){t.off(n,e.boundHandlers[n])})),this.boundHandlers={}),t.remove())},t.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},t.prototype.renderInline=function(){var e=this.props.tagName,t=void 0===e?"div":e;return o.createElement(t,{ref:this.elementRef,id:this.id})},t.prototype.renderIframe=function(){return o.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},t.prototype.getScriptSrc=function(){if("string"===typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var e=this.props.cloudChannel;return"https://cdn.tiny.cloud/1/"+(this.props.apiKey?this.props.apiKey:"no-api-key")+"/tinymce/"+e+"/tinymce.min.js"},t.prototype.getInitialValue=function(){return"string"===typeof this.props.value?this.props.value:"string"===typeof this.props.initialValue?this.props.initialValue:""},t.propTypes=r,t.defaultProps={cloudChannel:"5"},t}(o.Component)},636:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var o=function(){return"undefined"!==typeof window?window:e},i=function(){var e=o();return e&&e.tinymce?e.tinymce:null}}).call(this,n(9))}}]);
//# sourceMappingURL=15.d5f6b16a.chunk.js.map