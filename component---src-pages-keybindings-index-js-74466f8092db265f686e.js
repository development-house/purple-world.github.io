(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/27M":function(e,t,r){e.exports={purple_primary:"#27135c",purple_secondary:"#6812e6",keyboard:"KeyboardDetail-module--keyboard--3JIkn",row:"KeyboardDetail-module--row--1YknQ",detail:"KeyboardDetail-module--detail--3R87x",key:"KeyboardDetail-module--key--2MK6Z",inner:"KeyboardDetail-module--inner--msXKC",active:"KeyboardDetail-module--active--3sAHk",action_item:"KeyboardDetail-module--action_item--10QZg"}},"1KsK":function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function(e){var t=n.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===n.call(e.callee)),r}},"1TsT":function(e,t,r){"use strict";r.r(t),r.d(t,"addEventListener",(function(){return c}));var n=!("undefined"==typeof window||!window.document||!window.document.createElement);var o=void 0;function a(){return void 0===o&&(o=function(){if(!n)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),r=function(){};window.addEventListener("testPassiveEventSupport",r,t),window.removeEventListener("testPassiveEventSupport",r,t)}catch(o){}return e}()),o}function i(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function s(e){this.target=e,this.events={}}s.prototype.getEventHandlers=function(e,t){var r,n=String(e)+" "+String((r=t)?!0===r?100:(r.capture<<0)+(r.passive<<1)+(r.once<<2):0);return this.events[n]||(this.events[n]={handlers:[],handleEvent:void 0},this.events[n].nextHandlers=this.events[n].handlers),this.events[n]},s.prototype.handleEvent=function(e,t,r){var n=this.getEventHandlers(e,t);n.handlers=n.nextHandlers,n.handlers.forEach((function(e){e&&e(r)}))},s.prototype.add=function(e,t,r){var n=this,o=this.getEventHandlers(e,r);i(o),0===o.nextHandlers.length&&(o.handleEvent=this.handleEvent.bind(this,e,r),this.target.addEventListener(e,o.handleEvent,r)),o.nextHandlers.push(t);var a=!0;return function(){if(a){a=!1,i(o);var s=o.nextHandlers.indexOf(t);o.nextHandlers.splice(s,1),0===o.nextHandlers.length&&(n.target&&n.target.removeEventListener(e,o.handleEvent,r),o.handleEvent=void 0)}}};function c(e,t,r,n){e.__consolidated_events_handlers__||(e.__consolidated_events_handlers__=new s(e));var o=function(e){if(e)return a()?e:!!e.capture}(n);return e.__consolidated_events_handlers__.add(t,r,o)}},"1seS":function(e,t,r){"use strict";var n=Array.prototype.slice,o=r("1KsK"),a=Object.keys,i=a?function(e){return a(e)}:r("sYn3"),s=Object.keys;i.shim=function(){Object.keys?function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2)||(Object.keys=function(e){return o(e)?s(n.call(e)):s(e)}):Object.keys=i;return Object.keys||i},e.exports=i},"2nUb":function(e,t){e.exports=[{tag:"general",label:"General",default:!0},{tag:"vehicle",label:"Vehicle",default:!0,color:"#9e8bf9"},{tag:"jobs",label:"Jobs",default:!0,color:"#fda739"}]},"36xY":function(e,t,r){e.exports={purple_primary:"#27135c",purple_secondary:"#6812e6",options:"KeyboardOptions-module--options--3CQrf",select:"KeyboardOptions-module--select--3wC4x",button:"KeyboardOptions-module--button--1FaB-",option:"KeyboardOptions-module--option--1L9mL",active:"KeyboardOptions-module--active--j0--y"}},"3gBW":function(e,t,r){e.exports=r("50qU")},"4cSd":function(e,t,r){"use strict";var n=r("82c2"),o=r("PrET"),a=r("rQy3"),i=r("xoj2"),s=r("ib7Q"),c=o(i(),Object);n(c,{getPolyfill:i,implementation:a,shim:s}),e.exports=c},"50qU":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=y(r("q1tI")),a=y(r("17x9")),i=r("Hsqg"),s=r("1TsT"),c=y(r("4cSd")),l=y(r("n1Y7"));function y(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d={BLOCK:"block",FLEX:"flex",INLINE:"inline",INLINE_BLOCK:"inline-block",CONTENTS:"contents"},f=(0,i.forbidExtraProps)({children:a.default.node.isRequired,onOutsideClick:a.default.func.isRequired,disabled:a.default.bool,useCapture:a.default.bool,display:a.default.oneOf((0,c.default)(d))}),h={disabled:!1,useCapture:!0,display:d.BLOCK},v=function(e){function t(){var e;u(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var a=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return a.onMouseDown=a.onMouseDown.bind(a),a.onMouseUp=a.onMouseUp.bind(a),a.setChildNodeRef=a.setChildNodeRef.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.disabled,r=e.useCapture;t||this.addMouseDownEventListener(r)}},{key:"componentDidUpdate",value:function(e){var t=e.disabled,r=this.props,n=r.disabled,o=r.useCapture;t!==n&&(n?this.removeEventListeners():this.addMouseDownEventListener(o))}},{key:"componentWillUnmount",value:function(){this.removeEventListeners()}},{key:"onMouseDown",value:function(e){var t=this.props.useCapture;this.childNode&&(0,l.default)(this.childNode,e.target)||(this.removeMouseUp&&(this.removeMouseUp(),this.removeMouseUp=null),this.removeMouseUp=(0,s.addEventListener)(document,"mouseup",this.onMouseUp,{capture:t}))}},{key:"onMouseUp",value:function(e){var t=this.props.onOutsideClick,r=this.childNode&&(0,l.default)(this.childNode,e.target);this.removeMouseUp&&(this.removeMouseUp(),this.removeMouseUp=null),r||t(e)}},{key:"setChildNodeRef",value:function(e){this.childNode=e}},{key:"addMouseDownEventListener",value:function(e){this.removeMouseDown=(0,s.addEventListener)(document,"mousedown",this.onMouseDown,{capture:e})}},{key:"removeEventListeners",value:function(){this.removeMouseDown&&this.removeMouseDown(),this.removeMouseUp&&this.removeMouseUp()}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.display;return o.default.createElement("div",{ref:this.setChildNodeRef,style:r!==d.BLOCK&&(0,c.default)(d).includes(r)?{display:r}:void 0},t)}}]),t}(o.default.Component);t.default=v,v.propTypes=f,v.defaultProps=h},"5yQQ":function(e,t,r){"use strict";var n=r("nRDI");e.exports=function(){if("undefined"!=typeof document){if(document.contains)return document.contains;if(document.body&&document.body.contains)try{if("boolean"==typeof document.body.contains.call(document,""))return document.body.contains}catch(e){}}return n}},"82c2":function(e,t,r){"use strict";var n=r("1seS"),o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),a=Object.prototype.toString,i=Array.prototype.concat,s=Object.defineProperty,c=s&&function(){var e={};try{for(var t in s(e,"x",{enumerable:!1,value:e}),e)return!1;return e.x===e}catch(r){return!1}}(),l=function(e,t,r,n){var o;(!(t in e)||"function"==typeof(o=n)&&"[object Function]"===a.call(o)&&n())&&(c?s(e,t,{configurable:!0,enumerable:!1,value:r,writable:!0}):e[t]=r)},y=function(e,t){var r=arguments.length>2?arguments[2]:{},a=n(t);o&&(a=i.call(a,Object.getOwnPropertySymbols(t)));for(var s=0;s<a.length;s+=1)l(e,a[s],t[a[s]],r[a[s]])};y.supportsDescriptors=!!c,e.exports=y},AM7I:function(e,t,r){"use strict";var n=SyntaxError,o=Function,a=TypeError,i=function(e){try{return Function('"use strict"; return ('+e+").constructor;")()}catch(t){}},s=Object.getOwnPropertyDescriptor;if(s)try{s({},"")}catch(x){s=null}var c=function(){throw new a},l=s?function(){try{return c}catch(e){try{return s(arguments,"callee").get}catch(t){return c}}}():c,y=r("UVaH")(),u=Object.getPrototypeOf||function(e){return e.__proto__},p=i("async function* () {}"),d=p?p.prototype:void 0,f=d?d.prototype:void 0,h="undefined"==typeof Uint8Array?void 0:u(Uint8Array),v={"%AggregateError%":"undefined"==typeof AggregateError?void 0:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayIteratorPrototype%":y?u([][Symbol.iterator]()):void 0,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":i("async function () {}"),"%AsyncGenerator%":d,"%AsyncGeneratorFunction%":p,"%AsyncIteratorPrototype%":f?u(f):void 0,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%BigInt%":"undefined"==typeof BigInt?void 0:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?void 0:FinalizationRegistry,"%Function%":o,"%GeneratorFunction%":i("function* () {}"),"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":y?u(u([][Symbol.iterator]())):void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&y?u((new Map)[Symbol.iterator]()):void 0,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&y?u((new Set)[Symbol.iterator]()):void 0,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":y?u(""[Symbol.iterator]()):void 0,"%Symbol%":y?Symbol:void 0,"%SyntaxError%":n,"%ThrowTypeError%":l,"%TypedArray%":h,"%TypeError%":a,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?void 0:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet},m={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},g=r("D3zA"),b=r("oNNP"),w=g.call(Function.call,Array.prototype.concat),k=g.call(Function.apply,Array.prototype.splice),E=g.call(Function.call,String.prototype.replace),A=g.call(Function.call,String.prototype.slice),O=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,P=/\\(\\)?/g,S=function(e){var t=A(e,0,1),r=A(e,-1);if("%"===t&&"%"!==r)throw new n("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new n("invalid intrinsic syntax, expected opening `%`");var o=[];return E(e,O,(function(e,t,r,n){o[o.length]=r?E(n,P,"$1"):t||e})),o},j=function(e,t){var r,o=e;if(b(m,o)&&(o="%"+(r=m[o])[0]+"%"),b(v,o)){var i=v[o];if(void 0===i&&!t)throw new a("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:i}}throw new n("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new a("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new a('"allowMissing" argument must be a boolean');var r=S(e),o=r.length>0?r[0]:"",i=j("%"+o+"%",t),c=i.name,l=i.value,y=!1,u=i.alias;u&&(o=u[0],k(r,w([0,1],u)));for(var p=1,d=!0;p<r.length;p+=1){var f=r[p],h=A(f,0,1),m=A(f,-1);if(('"'===h||"'"===h||"`"===h||'"'===m||"'"===m||"`"===m)&&h!==m)throw new n("property names with quotes must have matching quotes");if("constructor"!==f&&d||(y=!0),b(v,c="%"+(o+="."+f)+"%"))l=v[c];else if(null!=l){if(!(f in l)){if(!t)throw new a("base intrinsic for "+e+" exists, but the property is not available.");return}if(s&&p+1>=r.length){var g=s(l,f);l=(d=!!g)&&"get"in g&&!("originalValue"in g.get)?g.get:l[f]}else d=b(l,f),l=l[f];d&&!y&&(v[c]=l)}}return l}},BCe8:function(e,t,r){"use strict";e.exports=r("TVLE")},D3zA:function(e,t,r){"use strict";var n=r("aI7X");e.exports=Function.prototype.bind||n},DciD:function(e,t,r){"use strict";function n(){return null}function o(){return n}n.isRequired=n,e.exports={and:o,between:o,booleanSome:o,childrenHavePropXorChildren:o,childrenOf:o,childrenOfType:o,childrenSequenceOf:o,componentWithName:o,disallowedIf:o,elementType:o,empty:o,explicitNull:o,forbidExtraProps:Object,integer:o,keysOf:o,mutuallyExclusiveProps:o,mutuallyExclusiveTrueProps:o,nChildren:o,nonNegativeInteger:n,nonNegativeNumber:o,numericString:o,object:o,or:o,predicate:o,range:o,ref:o,requiredBy:o,restrictedProp:o,sequenceOf:o,shape:o,stringEndsWith:o,stringStartsWith:o,uniqueArray:o,uniqueArrayOf:o,valuesOf:o,withShape:o}},FpZJ:function(e,t,r){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},Gn0q:function(e,t,r){"use strict";var n=r("82c2"),o=r("5yQQ");e.exports=function(){var e=o();return"undefined"!=typeof document&&(n(document,{contains:e},{contains:function(){return document.contains!==e}}),"undefined"!=typeof Element&&n(Element.prototype,{contains:e},{contains:function(){return Element.prototype.contains!==e}})),e}},Hsqg:function(e,t,r){e.exports=r("DciD")},NIgv:function(e,t,r){e.exports={keybindings:"Keybindings-module--keybindings--2dqzs",header:"Keybindings-module--header--3sAeb",group:"Keybindings-module--group--2GP5b",logo:"Keybindings-module--logo--3CT9H",title:"Keybindings-module--title--BxJc4",footer:"Keybindings-module--footer--wtQ_c"}},PrET:function(e,t,r){"use strict";var n=r("D3zA"),o=r("AM7I"),a=o("%Function.prototype.apply%"),i=o("%Function.prototype.call%"),s=o("%Reflect.apply%",!0)||n.call(i,a),c=o("%Object.getOwnPropertyDescriptor%",!0),l=o("%Object.defineProperty%",!0),y=o("%Math.max%");if(l)try{l({},"a",{value:1})}catch(p){l=null}e.exports=function(e){var t=s(n,i,arguments);if(c&&l){var r=c(t,"length");r.configurable&&l(t,"length",{value:1+y(0,e.length-(arguments.length-1))})}return t};var u=function(){return s(n,a,arguments)};l?l(e.exports,"apply",{value:u}):e.exports.apply=u},TVLE:function(e,t,r){"use strict";var n=r("AM7I")("%TypeError%");e.exports=function(e,t){if(null==e)throw new n(t||"Cannot call method on "+e);return e}},UVaH:function(e,t,r){"use strict";(function(t){var n=t.Symbol,o=r("FpZJ");e.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&o())))}}).call(this,r("yLpj"))},VF6F:function(e,t,r){"use strict";var n=r("AM7I"),o=r("PrET"),a=o(n("String.prototype.indexOf"));e.exports=function(e,t){var r=n(e,!!t);return"function"==typeof r&&a(e,".prototype.")>-1?o(r):r}},Vq6K:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("5w8u"),i=r("yUdm");var s=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",r=crypto.getRandomValues(new Uint8Array(e));e--;){var n=63&r[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t},c=r("Wyl0"),l=r.n(c),y=function(e){var t=e.width,r=e.isSpacer,n=e.label,a=e.keybinds,i=e.keyEvent,c=e.activeTags,y=e.tagsConfig,u=function(e){i(e)},p=[];return a&&a.forEach((function(e){c.some((function(t){return e.tags.indexOf(t)>=0}))&&p.push(e)})),o.a.createElement("div",{className:l.a.key+" "+(r?l.a.spacer:"")+" "+(p.length?"":l.a.unassigned),"data-width":t},o.a.createElement("div",{className:l.a.inner,onMouseEnter:function(){return u({key:n,keybinds:a})},onMouseLeave:function(){return u(null)}},o.a.createElement("div",{className:l.a.label},o.a.createElement("span",null,n)),o.a.createElement("div",{className:l.a.actions},p.length>0&&p.slice(0,2).map((function(e){var t;return o.a.createElement("div",{key:s(),className:l.a.item,style:{color:null===(t=y.find((function(t){return t.tag===e.tags[0]})))||void 0===t?void 0:t.color}},o.a.createElement("div",{className:l.a.tags},e.modifier&&o.a.createElement("span",null,e.modifier,"+")),o.a.createElement("span",null,e.desc))})),p.length>2&&o.a.createElement("div",{className:l.a.item},o.a.createElement("span",null,"+",p.length-2," more")))))},u=function(e){var t=["CTRL","ALT"],r={};return e.forEach((function(e){var n,o=e.keys[e.keys.length-1],a=null;e.keys.length>1&&t.forEach((function(t){e.keys.indexOf(t)>-1&&(a=t)}));var i={desc:e.desc,tags:e.tags,modifier:a},s=[];r[o]&&(s=r[o]),s.push(i),r=Object.assign({},r,((n={})[o]=s,n))})),r},p=r("oy2U"),d=r.n(p),f=r("2nUb"),h=r.n(f),v=r("qLXk"),m=r.n(v),g=r("pmKG"),b=r.n(g),w=Object(n.memo)((function(e){var t=e.keyEvent,r=e.activeTags,n=u(m.a);return o.a.createElement("div",{className:b.a.keyboard},d.a.length&&d.a.map((function(e){var a=e.row,i=e.keys;return o.a.createElement("div",{key:a,className:b.a.row},i.length&&i.map((function(e){var a=e.key,i=e.width;return o.a.createElement(y,{key:s(),width:i,isSpacer:"__spacer"===a,label:a,keybinds:n[a],keyEvent:t,activeTags:r,tagsConfig:h.a})})))})))})),k=r("/27M"),E=r.n(k),A=function(e){var t=e.currentKey;return o.a.createElement("div",{className:E.a.detail},o.a.createElement("div",{className:E.a.row},o.a.createElement("div",{className:E.a.key+" "+l.a.key},o.a.createElement("div",{className:E.a.inner+" "+l.a.inner+" "+(t?E.a.active:"")},o.a.createElement("div",{className:l.a.label},o.a.createElement("span",null,t?t.key:"No key selected")),o.a.createElement("div",{className:l.a.actions},(null==t?void 0:t.keybinds)&&t.keybinds.map((function(e){var t;return o.a.createElement("div",{key:s(),className:E.a.action_item+" "+l.a.item,style:{color:null===(t=h.a.find((function(t){return t.tag===e.tags[0]})))||void 0===t?void 0:t.color}},o.a.createElement("div",{className:l.a.tags},e.modifier&&o.a.createElement("span",null,e.modifier,"+")),o.a.createElement("span",null,e.desc))})))))))},O=r("AwEm"),P=r("3gBW"),S=r.n(P),j=r("R+8Y"),x=r("KQm4"),N=function(e,t){var r=e.findIndex((function(e){return e===t}));return-1===r?[].concat(Object(x.a)(e),[t]):function(e,t){var r=Object(x.a)(e);return r.splice(t,1),r}(e,r)},F=r("36xY"),I=r.n(F),_=Object(n.memo)((function(e){var t=e.activeTags,r=e.tagsEvent,a=Object(n.useState)(!1),i=a[0],s=a[1];return o.a.createElement("div",{className:I.a.options},o.a.createElement(S.a,{onOutsideClick:function(){return s(!1)}},o.a.createElement("div",{className:I.a.select+" "+(i?I.a.active:"")},o.a.createElement(j.a,{className:I.a.button,onClick:function(){return s(!i)},primary:!0},o.a.createElement("span",null,"Select filters")),h.a&&h.a.length&&o.a.createElement("div",{className:I.a.options},h.a.map((function(e){return o.a.createElement(j.a,{key:e.tag,className:I.a.option,onClick:function(){return n=e.tag,o=N(t,n),void r(o);var n,o}},o.a.createElement(O.a,{src:"/icons/"+(t.includes(e.tag)?"checkmark":"crossmark")+".svg"}),o.a.createElement("span",{style:{color:e.color?e.color:"inherit"}},e.label))}))))))})),C=r("NIgv"),U=r.n(C);t.default=function(){var e=Object(n.useState)(null),t=e[0],r=e[1],s=Object(n.useState)(["general","vehicle","jobs"]),c=s[0],l=s[1];return o.a.createElement(a.a,{title:"Keybindings"},o.a.createElement("div",{className:U.a.keybindings},o.a.createElement("div",{className:U.a.header},o.a.createElement("div",{className:U.a.group},o.a.createElement(i.a,{to:"/",className:U.a.logo}),o.a.createElement("div",{className:U.a.title},o.a.createElement("h1",null,"Keybindings guide"),o.a.createElement("span",null,"Hover over the target key to see its detail")))),o.a.createElement(w,{keyEvent:r,activeTags:c}),o.a.createElement("div",{className:U.a.footer},o.a.createElement(A,{currentKey:t}),o.a.createElement(_,{activeTags:c,tagsEvent:l}))))}},Wyl0:function(e,t,r){e.exports={purple_primary:"#27135c",purple_secondary:"#6812e6",key:"Key-module--key--2CIEi",inner:"Key-module--inner--3aGPu",label:"Key-module--label--2CMlH",actions:"Key-module--actions--1xI9I",item:"Key-module--item--3j1Oc",tags:"Key-module--tags--3f66B",spacer:"Key-module--spacer--35yoN",unassigned:"Key-module--unassigned--3Q9le"}},aI7X:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ",o=Array.prototype.slice,a=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==a.call(t))throw new TypeError(n+t);for(var r,i=o.call(arguments,1),s=function(){if(this instanceof r){var n=t.apply(this,i.concat(o.call(arguments)));return Object(n)===n?n:this}return t.apply(e,i.concat(o.call(arguments)))},c=Math.max(0,t.length-i.length),l=[],y=0;y<c;y++)l.push("$"+y);if(r=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this,arguments); }")(s),t.prototype){var u=function(){};u.prototype=t.prototype,r.prototype=new u,u.prototype=null}return r}},ib7Q:function(e,t,r){"use strict";var n=r("xoj2"),o=r("82c2");e.exports=function(){var e=n();return o(Object,{values:e},{values:function(){return Object.values!==e}}),e}},n1Y7:function(e,t,r){"use strict";var n=r("82c2"),o=r("nRDI"),a=r("5yQQ"),i=a(),s=function(e,t){return i.apply(e,[t])};n(s,{getPolyfill:a,implementation:o,shim:r("Gn0q")}),e.exports=s},nRDI:function(e,t,r){"use strict";e.exports=function(e){if(arguments.length<1)throw new TypeError("1 argument is required");if("object"!=typeof e)throw new TypeError("Argument 1 (”other“) to Node.contains must be an instance of Node");var t=e;do{if(this===t)return!0;t&&(t=t.parentNode)}while(t);return!1}},oNNP:function(e,t,r){"use strict";var n=r("D3zA");e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},oy2U:function(e,t){e.exports=[{row:1,keys:[{key:"ESC",width:4},{key:"__spacer",width:3},{key:"F1",width:4},{key:"F2",width:4},{key:"F3",width:4},{key:"F4",width:4},{key:"__spacer",width:2},{key:"F5",width:4},{key:"F6",width:4},{key:"F7",width:4},{key:"F8",width:4},{key:"__spacer",width:2},{key:"F9",width:4},{key:"F10",width:4},{key:"F11",width:4},{key:"F12",width:4}]},{row:2,keys:[{key:"`",width:4},{key:"1",width:4},{key:"2",width:4},{key:"3",width:4},{key:"4",width:4},{key:"5",width:4},{key:"6",width:4},{key:"7",width:4},{key:"8",width:4},{key:"9",width:4},{key:"0",width:4},{key:"-",width:4},{key:"=",width:4},{key:"BACKSPACE",width:7},{key:"__spacer",width:2},{key:"INSERT",width:4},{key:"HOME",width:4},{key:"PAGE UP",width:4}]},{row:3,keys:[{key:"TAB",width:6},{key:"Q",width:4},{key:"W",width:4},{key:"E",width:4},{key:"R",width:4},{key:"T",width:4},{key:"Y",width:4},{key:"U",width:4},{key:"I",width:4},{key:"O",width:4},{key:"P",width:4},{key:"[",width:4},{key:"]",width:4},{key:"\\",width:5},{key:"__spacer",width:2},{key:"DELETE",width:4},{key:"END",width:4},{key:"PAGE DOWN",width:4}]},{row:4,keys:[{key:"CAPS LOCK",width:7},{key:"A",width:4},{key:"S",width:4},{key:"D",width:4},{key:"F",width:4},{key:"G",width:4},{key:"H",width:4},{key:"J",width:4},{key:"K",width:4},{key:"L",width:4},{key:";",width:4},{key:"'",width:4},{key:"ENTER",width:8}]},{row:5,keys:[{key:"SHIFT",width:9},{key:"Z",width:4},{key:"X",width:4},{key:"C",width:4},{key:"V",width:4},{key:"B",width:4},{key:"N",width:4},{key:"M",width:4},{key:",",width:4},{key:".",width:4},{key:"/",width:4},{key:"SHIFT",width:10},{key:"__spacer",width:6},{key:"UP",width:4}]},{row:6,keys:[{key:"CTRL",width:6},{key:"__spacer",width:6},{key:"ALT",width:6},{key:"SPACE",width:23},{key:"ALT",width:6},{key:"__spacer",width:6},{key:"CTRL",width:6},{key:"__spacer",width:2},{key:"LEFT",width:4},{key:"DOWN",width:4},{key:"RIGHT",width:4}]}]},pmKG:function(e,t,r){e.exports={purple_primary:"#27135c",purple_secondary:"#6812e6",keyboard:"Keyboard-module--keyboard--LxXJR",row:"Keyboard-module--row--z1Oo2"}},qLXk:function(e,t){e.exports=[{keys:["W"],desc:"Movement",tags:["general","vehicle"]},{keys:["A"],desc:"Movement",tags:["general","vehicle"]},{keys:["S"],desc:"Movement",tags:["general","vehicle"]},{keys:["D"],desc:"Movement",tags:["general","vehicle"]},{keys:["CTRL"],desc:"Crouch",tags:["general"]},{keys:["SHIFT"],desc:"Sprint",tags:["general"]},{keys:["E"],desc:"Interaction",tags:["general"]},{keys:["T"],desc:"Chat",tags:["general"]},{keys:["Y"],desc:"Player IDs",tags:["general"]},{keys:["U"],desc:"Vehicle lock",tags:["general","vehicle"]},{keys:["F"],desc:"Enter/exit vehicle",tags:["general","vehicle"]},{keys:["G"],desc:"Glovebox",tags:["vehicle"]},{keys:["Z"],desc:"Radial menu",tags:["general"]},{keys:["X"],desc:"Hands up animation",tags:["general"]},{keys:["C"],desc:"Look behind",tags:["general","vehicle"]},{keys:["V"],desc:"Change camera",tags:["general","vehicle"]},{keys:["B"],desc:"Point at animation",tags:["general"]},{keys:["B"],desc:"Seatbelt",tags:["vehicle"]},{keys:["F1"],desc:"Voice volume",tags:["general"]},{keys:["F5"],desc:"Command job menu",tags:["jobs"]},{keys:["F6"],desc:"Job menu",tags:["jobs"]},{keys:["F7"],desc:"Bills menu",tags:["general"]},{keys:["F8"],desc:"Console",tags:["general"]},{keys:["F10"],desc:"Player list",tags:["general"]},{keys:["TAB"],desc:"Inventory",tags:["general"]},{keys:["CAPS LOCK"],desc:"Radio",tags:["general"]},{keys:["ALT","W"],desc:"Cruise control",tags:["vehicle"]},{keys:["ALT","UP"],desc:"Panic button",tags:["jobs"]}]},rQy3:function(e,t,r){"use strict";var n=r("oNNP"),o=r("BCe8"),a=r("VF6F")("Object.prototype.propertyIsEnumerable");e.exports=function(e){var t=o(e),r=[];for(var i in t)n(t,i)&&a(t,i)&&r.push(t[i]);return r}},sYn3:function(e,t,r){"use strict";var n;if(!Object.keys){var o=Object.prototype.hasOwnProperty,a=Object.prototype.toString,i=r("1KsK"),s=Object.prototype.propertyIsEnumerable,c=!s.call({toString:null},"toString"),l=s.call((function(){}),"prototype"),y=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=function(e){var t=e.constructor;return t&&t.prototype===e},p={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},d=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!p["$"+e]&&o.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{u(window[e])}catch(t){return!0}}catch(t){return!0}return!1}();n=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===a.call(e),n=i(e),s=t&&"[object String]"===a.call(e),p=[];if(!t&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var f=l&&r;if(s&&e.length>0&&!o.call(e,0))for(var h=0;h<e.length;++h)p.push(String(h));if(n&&e.length>0)for(var v=0;v<e.length;++v)p.push(String(v));else for(var m in e)f&&"prototype"===m||!o.call(e,m)||p.push(String(m));if(c)for(var g=function(e){if("undefined"==typeof window||!d)return u(e);try{return u(e)}catch(t){return!1}}(e),b=0;b<y.length;++b)g&&"constructor"===y[b]||!o.call(e,y[b])||p.push(y[b]);return p}}e.exports=n},xoj2:function(e,t,r){"use strict";var n=r("rQy3");e.exports=function(){return"function"==typeof Object.values?Object.values:n}}}]);
//# sourceMappingURL=component---src-pages-keybindings-index-js-74466f8092db265f686e.js.map