(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/27M":function(e,t,r){e.exports={purple_primary:"#27135c",purple_secondary:"#6812e6",keyboard:"KeyboardDetail-module--keyboard--3JIkn",row:"KeyboardDetail-module--row--1YknQ",detail:"KeyboardDetail-module--detail--3R87x",key:"KeyboardDetail-module--key--2MK6Z",inner:"KeyboardDetail-module--inner--msXKC",active:"KeyboardDetail-module--active--3sAHk",action_item:"KeyboardDetail-module--action_item--10QZg"}},"1KsK":function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function(e){var t=n.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===n.call(e.callee)),r}},"1TsT":function(e,t,r){"use strict";r.r(t),r.d(t,"addEventListener",(function(){return s}));var n=!("undefined"==typeof window||!window.document||!window.document.createElement);var o=void 0;function i(){return void 0===o&&(o=function(){if(!n)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),r=function(){};window.addEventListener("testPassiveEventSupport",r,t),window.removeEventListener("testPassiveEventSupport",r,t)}catch(o){}return e}()),o}function a(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function c(e){this.target=e,this.events={}}c.prototype.getEventHandlers=function(e,t){var r,n=String(e)+" "+String((r=t)?!0===r?100:(r.capture<<0)+(r.passive<<1)+(r.once<<2):0);return this.events[n]||(this.events[n]={handlers:[],handleEvent:void 0},this.events[n].nextHandlers=this.events[n].handlers),this.events[n]},c.prototype.handleEvent=function(e,t,r){var n=this.getEventHandlers(e,t);n.handlers=n.nextHandlers,n.handlers.forEach((function(e){e&&e(r)}))},c.prototype.add=function(e,t,r){var n=this,o=this.getEventHandlers(e,r);a(o),0===o.nextHandlers.length&&(o.handleEvent=this.handleEvent.bind(this,e,r),this.target.addEventListener(e,o.handleEvent,r)),o.nextHandlers.push(t);var i=!0;return function(){if(i){i=!1,a(o);var c=o.nextHandlers.indexOf(t);o.nextHandlers.splice(c,1),0===o.nextHandlers.length&&(n.target&&n.target.removeEventListener(e,o.handleEvent,r),o.handleEvent=void 0)}}};function s(e,t,r,n){e.__consolidated_events_handlers__||(e.__consolidated_events_handlers__=new c(e));var o=function(e){if(e)return i()?e:!!e.capture}(n);return e.__consolidated_events_handlers__.add(t,r,o)}},"1seS":function(e,t,r){"use strict";var n=Array.prototype.slice,o=r("1KsK"),i=Object.keys,a=i?function(e){return i(e)}:r("sYn3"),c=Object.keys;a.shim=function(){Object.keys?function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2)||(Object.keys=function(e){return o(e)?c(n.call(e)):c(e)}):Object.keys=a;return Object.keys||a},e.exports=a},"36xY":function(e,t,r){e.exports={purple_primary:"#27135c",purple_secondary:"#6812e6",options:"KeyboardOptions-module--options--3CQrf",select:"KeyboardOptions-module--select--3wC4x",button:"KeyboardOptions-module--button--1FaB-",option:"KeyboardOptions-module--option--1L9mL",active:"KeyboardOptions-module--active--j0--y"}},"3gBW":function(e,t,r){e.exports=r("50qU")},"4cSd":function(e,t,r){"use strict";var n=r("82c2"),o=r("PrET"),i=r("rQy3"),a=r("xoj2"),c=r("ib7Q"),s=o(a(),Object);n(s,{getPolyfill:a,implementation:i,shim:c}),e.exports=s},"50qU":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=y(r("q1tI")),i=y(r("17x9")),a=r("Hsqg"),c=r("1TsT"),s=y(r("4cSd")),l=y(r("n1Y7"));function y(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d={BLOCK:"block",FLEX:"flex",INLINE:"inline",INLINE_BLOCK:"inline-block",CONTENTS:"contents"},f=(0,a.forbidExtraProps)({children:i.default.node.isRequired,onOutsideClick:i.default.func.isRequired,disabled:i.default.bool,useCapture:i.default.bool,display:i.default.oneOf((0,s.default)(d))}),v={disabled:!1,useCapture:!0,display:d.BLOCK},h=function(e){function t(){var e;u(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return i.onMouseDown=i.onMouseDown.bind(i),i.onMouseUp=i.onMouseUp.bind(i),i.setChildNodeRef=i.setChildNodeRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.disabled,r=e.useCapture;t||this.addMouseDownEventListener(r)}},{key:"componentDidUpdate",value:function(e){var t=e.disabled,r=this.props,n=r.disabled,o=r.useCapture;t!==n&&(n?this.removeEventListeners():this.addMouseDownEventListener(o))}},{key:"componentWillUnmount",value:function(){this.removeEventListeners()}},{key:"onMouseDown",value:function(e){var t=this.props.useCapture;this.childNode&&(0,l.default)(this.childNode,e.target)||(this.removeMouseUp&&(this.removeMouseUp(),this.removeMouseUp=null),this.removeMouseUp=(0,c.addEventListener)(document,"mouseup",this.onMouseUp,{capture:t}))}},{key:"onMouseUp",value:function(e){var t=this.props.onOutsideClick,r=this.childNode&&(0,l.default)(this.childNode,e.target);this.removeMouseUp&&(this.removeMouseUp(),this.removeMouseUp=null),r||t(e)}},{key:"setChildNodeRef",value:function(e){this.childNode=e}},{key:"addMouseDownEventListener",value:function(e){this.removeMouseDown=(0,c.addEventListener)(document,"mousedown",this.onMouseDown,{capture:e})}},{key:"removeEventListeners",value:function(){this.removeMouseDown&&this.removeMouseDown(),this.removeMouseUp&&this.removeMouseUp()}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.display;return o.default.createElement("div",{ref:this.setChildNodeRef,style:r!==d.BLOCK&&(0,s.default)(d).includes(r)?{display:r}:void 0},t)}}]),t}(o.default.Component);t.default=h,h.propTypes=f,h.defaultProps=v},"5yQQ":function(e,t,r){"use strict";var n=r("nRDI");e.exports=function(){if("undefined"!=typeof document){if(document.contains)return document.contains;if(document.body&&document.body.contains)try{if("boolean"==typeof document.body.contains.call(document,""))return document.body.contains}catch(e){}}return n}},"82c2":function(e,t,r){"use strict";var n=r("1seS"),o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Array.prototype.concat,c=Object.defineProperty,s=c&&function(){var e={};try{for(var t in c(e,"x",{enumerable:!1,value:e}),e)return!1;return e.x===e}catch(r){return!1}}(),l=function(e,t,r,n){var o;(!(t in e)||"function"==typeof(o=n)&&"[object Function]"===i.call(o)&&n())&&(s?c(e,t,{configurable:!0,enumerable:!1,value:r,writable:!0}):e[t]=r)},y=function(e,t){var r=arguments.length>2?arguments[2]:{},i=n(t);o&&(i=a.call(i,Object.getOwnPropertySymbols(t)));for(var c=0;c<i.length;c+=1)l(e,i[c],t[i[c]],r[i[c]])};y.supportsDescriptors=!!s,e.exports=y},AM7I:function(e,t,r){"use strict";var n=SyntaxError,o=Function,i=TypeError,a=function(e){try{return o('"use strict"; return ('+e+").constructor;")()}catch(t){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"")}catch(S){c=null}var s=function(){throw new i},l=c?function(){try{return s}catch(e){try{return c(arguments,"callee").get}catch(t){return s}}}():s,y=r("UVaH")(),u=Object.getPrototypeOf||function(e){return e.__proto__},p={},d="undefined"==typeof Uint8Array?void 0:u(Uint8Array),f={"%AggregateError%":"undefined"==typeof AggregateError?void 0:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayIteratorPrototype%":y?u([][Symbol.iterator]()):void 0,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":p,"%AsyncGenerator%":p,"%AsyncGeneratorFunction%":p,"%AsyncIteratorPrototype%":p,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%BigInt%":"undefined"==typeof BigInt?void 0:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?void 0:FinalizationRegistry,"%Function%":o,"%GeneratorFunction%":p,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":y?u(u([][Symbol.iterator]())):void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&y?u((new Map)[Symbol.iterator]()):void 0,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&y?u((new Set)[Symbol.iterator]()):void 0,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":y?u(""[Symbol.iterator]()):void 0,"%Symbol%":y?Symbol:void 0,"%SyntaxError%":n,"%ThrowTypeError%":l,"%TypedArray%":d,"%TypeError%":i,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?void 0:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet},v={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},h=r("D3zA"),m=r("oNNP"),b=h.call(Function.call,Array.prototype.concat),w=h.call(Function.apply,Array.prototype.splice),g=h.call(Function.call,String.prototype.replace),k=h.call(Function.call,String.prototype.slice),E=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,A=/\\(\\)?/g,O=function(e){var t=k(e,0,1),r=k(e,-1);if("%"===t&&"%"!==r)throw new n("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new n("invalid intrinsic syntax, expected opening `%`");var o=[];return g(e,E,(function(e,t,r,n){o[o.length]=r?g(n,A,"$1"):t||e})),o},P=function(e,t){var r,o=e;if(m(v,o)&&(o="%"+(r=v[o])[0]+"%"),m(f,o)){var c=f[o];if(c===p&&(c=function e(t){var r;if("%AsyncFunction%"===t)r=a("async function () {}");else if("%GeneratorFunction%"===t)r=a("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=a("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&(r=u(o.prototype))}return f[t]=r,r}(o)),void 0===c&&!t)throw new i("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:c}}throw new n("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new i("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new i('"allowMissing" argument must be a boolean');var r=O(e),o=r.length>0?r[0]:"",a=P("%"+o+"%",t),s=a.name,l=a.value,y=!1,u=a.alias;u&&(o=u[0],w(r,b([0,1],u)));for(var p=1,d=!0;p<r.length;p+=1){var v=r[p],h=k(v,0,1),g=k(v,-1);if(('"'===h||"'"===h||"`"===h||'"'===g||"'"===g||"`"===g)&&h!==g)throw new n("property names with quotes must have matching quotes");if("constructor"!==v&&d||(y=!0),m(f,s="%"+(o+="."+v)+"%"))l=f[s];else if(null!=l){if(!(v in l)){if(!t)throw new i("base intrinsic for "+e+" exists, but the property is not available.");return}if(c&&p+1>=r.length){var E=c(l,v);l=(d=!!E)&&"get"in E&&!("originalValue"in E.get)?E.get:l[v]}else d=m(l,v),l=l[v];d&&!y&&(f[s]=l)}}return l}},BCe8:function(e,t,r){"use strict";e.exports=r("TVLE")},D3zA:function(e,t,r){"use strict";var n=r("aI7X");e.exports=Function.prototype.bind||n},DciD:function(e,t,r){"use strict";function n(){return null}function o(){return n}n.isRequired=n,e.exports={and:o,between:o,booleanSome:o,childrenHavePropXorChildren:o,childrenOf:o,childrenOfType:o,childrenSequenceOf:o,componentWithName:o,disallowedIf:o,elementType:o,empty:o,explicitNull:o,forbidExtraProps:Object,integer:o,keysOf:o,mutuallyExclusiveProps:o,mutuallyExclusiveTrueProps:o,nChildren:o,nonNegativeInteger:n,nonNegativeNumber:o,numericString:o,object:o,or:o,predicate:o,range:o,ref:o,requiredBy:o,restrictedProp:o,sequenceOf:o,shape:o,stringEndsWith:o,stringStartsWith:o,uniqueArray:o,uniqueArrayOf:o,valuesOf:o,withShape:o}},FpZJ:function(e,t,r){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},Gn0q:function(e,t,r){"use strict";var n=r("82c2"),o=r("5yQQ");e.exports=function(){var e=o();return"undefined"!=typeof document&&(n(document,{contains:e},{contains:function(){return document.contains!==e}}),"undefined"!=typeof Element&&n(Element.prototype,{contains:e},{contains:function(){return Element.prototype.contains!==e}})),e}},Hsqg:function(e,t,r){e.exports=r("DciD")},NIgv:function(e,t,r){e.exports={keybindings:"Keybindings-module--keybindings--2dqzs",header:"Keybindings-module--header--3sAeb",group:"Keybindings-module--group--2GP5b",logo:"Keybindings-module--logo--3CT9H",title:"Keybindings-module--title--BxJc4",footer:"Keybindings-module--footer--wtQ_c"}},PrET:function(e,t,r){"use strict";var n=r("D3zA"),o=r("AM7I"),i=o("%Function.prototype.apply%"),a=o("%Function.prototype.call%"),c=o("%Reflect.apply%",!0)||n.call(a,i),s=o("%Object.getOwnPropertyDescriptor%",!0),l=o("%Object.defineProperty%",!0),y=o("%Math.max%");if(l)try{l({},"a",{value:1})}catch(p){l=null}e.exports=function(e){var t=c(n,a,arguments);if(s&&l){var r=s(t,"length");r.configurable&&l(t,"length",{value:1+y(0,e.length-(arguments.length-1))})}return t};var u=function(){return c(n,i,arguments)};l?l(e.exports,"apply",{value:u}):e.exports.apply=u},TVLE:function(e,t,r){"use strict";var n=r("AM7I")("%TypeError%");e.exports=function(e,t){if(null==e)throw new n(t||"Cannot call method on "+e);return e}},UVaH:function(e,t,r){"use strict";var n="undefined"!=typeof Symbol&&Symbol,o=r("FpZJ");e.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&o())))}},VF6F:function(e,t,r){"use strict";var n=r("AM7I"),o=r("PrET"),i=o(n("String.prototype.indexOf"));e.exports=function(e,t){var r=n(e,!!t);return"function"==typeof r&&i(e,".prototype.")>-1?o(r):r}},Vq6K:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),i=r("5w8u"),a=r("yUdm"),c=r("Wbzz"),s=r("jzzL"),l=r.n(s);var y=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",r=crypto.getRandomValues(new Uint8Array(e));e--;){var n=63&r[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t},u=r("Wyl0"),p=r.n(u),d=function(e){var t=e.width,r=e.isSpacer,n=e.label,i=e.keybinds,a=e.keyEvent,c=e.activeTags,s=e.tagsConfig,l=function(e){a(e)},u=[];return i&&i.forEach((function(e){c.some((function(t){return e.tags.indexOf(t)>=0}))&&u.push(e)})),o.a.createElement("div",{className:p.a.key+" "+(r?p.a.spacer:"")+" "+(u.length?"":p.a.unassigned),"data-width":t},o.a.createElement("div",{className:p.a.inner,onMouseEnter:function(){return l({key:n,keybinds:i})},onMouseLeave:function(){return l(null)}},o.a.createElement("div",{className:p.a.label},o.a.createElement("span",null,n)),o.a.createElement("div",{className:p.a.actions},u.length>0&&u.slice(0,2).map((function(e){var t;return o.a.createElement("div",{key:y(),className:p.a.item,style:{color:null===(t=s.find((function(t){return t.tag===e.tags[0]})))||void 0===t?void 0:t.color}},o.a.createElement("div",{className:p.a.tags},e.modifier&&o.a.createElement("span",null,e.modifier,"+")),o.a.createElement("span",null,e.desc))})),u.length>2&&o.a.createElement("div",{className:p.a.item},o.a.createElement("span",null,"+",u.length-2," more")))))},f=function(e){var t=["CTRL","ALT","SHIFT"],r={};return e.forEach((function(e){var n,o=e.keys[e.keys.length-1],i=null;e.keys.length>1&&t.forEach((function(t){e.keys.indexOf(t)>-1&&(i=t)}));var a={desc:e.desc,tags:e.tags,modifier:i},c=[];r[o]&&(c=r[o]),c.push(a),r=Object.assign({},r,((n={})[o]=c,n))})),r},v=r("oy2U"),h=r.n(v),m=r("pmKG"),b=r.n(m),w=Object(n.memo)((function(e){var t,r=e.keyEvent,n=e.activeTags,i=null===(t=Object(c.d)("2878206956").allKeybindings)||void 0===t?void 0:t.nodes[0],a=f(l.a.parse(i.keybinds));return o.a.createElement("div",{className:b.a.keyboard},h.a.length&&h.a.map((function(e){var t=e.row,c=e.keys;return o.a.createElement("div",{key:t,className:b.a.row},c.length&&c.map((function(e){var t=e.key,c=e.width;return o.a.createElement(d,{key:y(),width:c,isSpacer:"__spacer"===t,label:t,keybinds:a[t],keyEvent:r,activeTags:n,tagsConfig:l.a.parse(i.tags)})})))})))})),g=r("/27M"),k=r.n(g),E=function(e){var t,r,n=e.currentKey,i=l.a.parse(null===(t=Object(c.d)("856845510").allKeybindings)||void 0===t||null===(r=t.nodes[0])||void 0===r?void 0:r.tags);return o.a.createElement("div",{className:k.a.detail},o.a.createElement("div",{className:k.a.row},o.a.createElement("div",{className:k.a.key+" "+p.a.key},o.a.createElement("div",{className:k.a.inner+" "+p.a.inner+" "+(n?k.a.active:"")},o.a.createElement("div",{className:p.a.label},o.a.createElement("span",null,n?n.key:"No key selected")),o.a.createElement("div",{className:p.a.actions},(null==n?void 0:n.keybinds)&&n.keybinds.map((function(e){var t;return o.a.createElement("div",{key:y(),className:k.a.action_item+" "+p.a.item,style:{color:null===(t=i.find((function(t){return t.tag===e.tags[0]})))||void 0===t?void 0:t.color}},o.a.createElement("div",{className:p.a.tags},e.modifier&&o.a.createElement("span",null,e.modifier,"+")),o.a.createElement("span",null,e.desc))})))))))},A=r("AwEm"),O=r("3gBW"),P=r.n(O),S=r("R+8Y"),j=r("KQm4"),x=function(e,t){var r=e.findIndex((function(e){return e===t}));return-1===r?[].concat(Object(j.a)(e),[t]):function(e,t){var r=Object(j.a)(e);return r.splice(t,1),r}(e,r)},N=r("36xY"),_=r.n(N),I=Object(n.memo)((function(e){var t,r,i=e.activeTags,a=e.tagsEvent,s=l.a.parse(null===(t=Object(c.d)("1180701241").allKeybindings)||void 0===t||null===(r=t.nodes[0])||void 0===r?void 0:r.tags),y=Object(n.useState)(!1),u=y[0],p=y[1];return o.a.createElement("div",{className:_.a.options},o.a.createElement(P.a,{onOutsideClick:function(){return p(!1)}},o.a.createElement("div",{className:_.a.select+" "+(u?_.a.active:"")},o.a.createElement(S.a,{className:_.a.button,onClick:function(){return p(!u)},primary:!0},o.a.createElement("span",null,"Select filters")),s&&s.length&&o.a.createElement("div",{className:_.a.options},s.map((function(e){return o.a.createElement(S.a,{key:e.tag,className:_.a.option,onClick:function(){return t=e.tag,r=x(i,t),void a(r);var t,r}},o.a.createElement(A.a,{src:"/icons/"+(i.includes(e.tag)?"checkmark":"crossmark")+".svg"}),o.a.createElement("span",{style:{color:e.color?e.color:"inherit"}},e.label))}))))))})),F=r("NIgv"),U=r.n(F);t.default=function(){var e=Object(n.useState)(null),t=e[0],r=e[1],c=Object(n.useState)(["general","vehicle","jobs"]),s=c[0],l=c[1];return o.a.createElement(i.a,{title:"Keybindings"},o.a.createElement("div",{className:U.a.keybindings},o.a.createElement("div",{className:U.a.header},o.a.createElement("div",{className:U.a.group},o.a.createElement(a.a,{to:"/",className:U.a.logo}),o.a.createElement("div",{className:U.a.title},o.a.createElement("h1",null,"Keybindings guide"),o.a.createElement("span",null,"Hover over the target key to see its detail")))),o.a.createElement(w,{keyEvent:r,activeTags:s}),o.a.createElement("div",{className:U.a.footer},o.a.createElement(E,{currentKey:t}),o.a.createElement(I,{activeTags:s,tagsEvent:l}))))}},Wyl0:function(e,t,r){e.exports={purple_primary:"#27135c",purple_secondary:"#6812e6",key:"Key-module--key--2CIEi",inner:"Key-module--inner--3aGPu",label:"Key-module--label--2CMlH",actions:"Key-module--actions--1xI9I",item:"Key-module--item--3j1Oc",tags:"Key-module--tags--3f66B",spacer:"Key-module--spacer--35yoN",unassigned:"Key-module--unassigned--3Q9le"}},aI7X:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ",o=Array.prototype.slice,i=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==i.call(t))throw new TypeError(n+t);for(var r,a=o.call(arguments,1),c=function(){if(this instanceof r){var n=t.apply(this,a.concat(o.call(arguments)));return Object(n)===n?n:this}return t.apply(e,a.concat(o.call(arguments)))},s=Math.max(0,t.length-a.length),l=[],y=0;y<s;y++)l.push("$"+y);if(r=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this,arguments); }")(c),t.prototype){var u=function(){};u.prototype=t.prototype,r.prototype=new u,u.prototype=null}return r}},ib7Q:function(e,t,r){"use strict";var n=r("xoj2"),o=r("82c2");e.exports=function(){var e=n();return o(Object,{values:e},{values:function(){return Object.values!==e}}),e}},n1Y7:function(e,t,r){"use strict";var n=r("82c2"),o=r("nRDI"),i=r("5yQQ"),a=i(),c=function(e,t){return a.apply(e,[t])};n(c,{getPolyfill:i,implementation:o,shim:r("Gn0q")}),e.exports=c},nRDI:function(e,t,r){"use strict";e.exports=function(e){if(arguments.length<1)throw new TypeError("1 argument is required");if("object"!=typeof e)throw new TypeError("Argument 1 (”other“) to Node.contains must be an instance of Node");var t=e;do{if(this===t)return!0;t&&(t=t.parentNode)}while(t);return!1}},oNNP:function(e,t,r){"use strict";var n=r("D3zA");e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},oy2U:function(e,t){e.exports=[{row:1,keys:[{key:"ESC",width:4},{key:"__spacer",width:3},{key:"F1",width:4},{key:"F2",width:4},{key:"F3",width:4},{key:"F4",width:4},{key:"__spacer",width:2},{key:"F5",width:4},{key:"F6",width:4},{key:"F7",width:4},{key:"F8",width:4},{key:"__spacer",width:2},{key:"F9",width:4},{key:"F10",width:4},{key:"F11",width:4},{key:"F12",width:4}]},{row:2,keys:[{key:"`",width:4},{key:"1",width:4},{key:"2",width:4},{key:"3",width:4},{key:"4",width:4},{key:"5",width:4},{key:"6",width:4},{key:"7",width:4},{key:"8",width:4},{key:"9",width:4},{key:"0",width:4},{key:"-",width:4},{key:"=",width:4},{key:"BACKSPACE",width:7},{key:"__spacer",width:2},{key:"INSERT",width:4},{key:"HOME",width:4},{key:"PAGE UP",width:4}]},{row:3,keys:[{key:"TAB",width:6},{key:"Q",width:4},{key:"W",width:4},{key:"E",width:4},{key:"R",width:4},{key:"T",width:4},{key:"Y",width:4},{key:"U",width:4},{key:"I",width:4},{key:"O",width:4},{key:"P",width:4},{key:"[",width:4},{key:"]",width:4},{key:"\\",width:5},{key:"__spacer",width:2},{key:"DELETE",width:4},{key:"END",width:4},{key:"PAGE DOWN",width:4}]},{row:4,keys:[{key:"CAPS LOCK",width:7},{key:"A",width:4},{key:"S",width:4},{key:"D",width:4},{key:"F",width:4},{key:"G",width:4},{key:"H",width:4},{key:"J",width:4},{key:"K",width:4},{key:"L",width:4},{key:";",width:4},{key:"'",width:4},{key:"ENTER",width:8}]},{row:5,keys:[{key:"SHIFT",width:9},{key:"Z",width:4},{key:"X",width:4},{key:"C",width:4},{key:"V",width:4},{key:"B",width:4},{key:"N",width:4},{key:"M",width:4},{key:",",width:4},{key:".",width:4},{key:"/",width:4},{key:"SHIFT",width:10},{key:"__spacer",width:6},{key:"UP",width:4}]},{row:6,keys:[{key:"CTRL",width:6},{key:"__spacer",width:6},{key:"ALT",width:6},{key:"SPACE",width:23},{key:"ALT",width:6},{key:"__spacer",width:6},{key:"CTRL",width:6},{key:"__spacer",width:2},{key:"LEFT",width:4},{key:"DOWN",width:4},{key:"RIGHT",width:4}]}]},pmKG:function(e,t,r){e.exports={purple_primary:"#27135c",purple_secondary:"#6812e6",keyboard:"Keyboard-module--keyboard--LxXJR",row:"Keyboard-module--row--z1Oo2"}},rQy3:function(e,t,r){"use strict";var n=r("oNNP"),o=r("BCe8"),i=r("VF6F")("Object.prototype.propertyIsEnumerable");e.exports=function(e){var t=o(e),r=[];for(var a in t)n(t,a)&&i(t,a)&&r.push(t[a]);return r}},sYn3:function(e,t,r){"use strict";var n;if(!Object.keys){var o=Object.prototype.hasOwnProperty,i=Object.prototype.toString,a=r("1KsK"),c=Object.prototype.propertyIsEnumerable,s=!c.call({toString:null},"toString"),l=c.call((function(){}),"prototype"),y=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=function(e){var t=e.constructor;return t&&t.prototype===e},p={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},d=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!p["$"+e]&&o.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{u(window[e])}catch(t){return!0}}catch(t){return!0}return!1}();n=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===i.call(e),n=a(e),c=t&&"[object String]"===i.call(e),p=[];if(!t&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var f=l&&r;if(c&&e.length>0&&!o.call(e,0))for(var v=0;v<e.length;++v)p.push(String(v));if(n&&e.length>0)for(var h=0;h<e.length;++h)p.push(String(h));else for(var m in e)f&&"prototype"===m||!o.call(e,m)||p.push(String(m));if(s)for(var b=function(e){if("undefined"==typeof window||!d)return u(e);try{return u(e)}catch(t){return!1}}(e),w=0;w<y.length;++w)b&&"constructor"===y[w]||!o.call(e,y[w])||p.push(y[w]);return p}}e.exports=n},xoj2:function(e,t,r){"use strict";var n=r("rQy3");e.exports=function(){return"function"==typeof Object.values?Object.values:n}}}]);
//# sourceMappingURL=component---src-pages-keybindings-index-js-34b9e45d5d6540c17e24.js.map