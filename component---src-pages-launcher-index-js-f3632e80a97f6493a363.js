(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1eBI":function(e,t,n){e.exports={purple_primary:"#27135c",purple_secondary:"#6812e6",button:"Button-module--button--1msFE",primary:"Button-module--primary--2LfKB",disabled:"Button-module--disabled--1eg9r"}},"4IfV":function(e,t,n){e.exports={purple_primary:"#27135c",purple_secondary:"#6812e6",launcher:"Launcher-module--launcher--2UWdD",content:"Launcher-module--content--1y0Kk"}},"5MkH":function(e,t,n){"use strict";var a=n("zLVn"),r=n("q1tI"),o=n.n(r),l=n("Wbzz"),c=n("ybFB"),u=n.n(c);t.a=function(e){var t=e.to,n=e.href,r=e.target,c=e.children,i=e.className,s=Object(a.a)(e,["to","href","target","children","className"]),d=null;return t?d=l.a:n?d="a":console.error("[Link.js] Tag not specified!"),o.a.createElement(d,Object.assign({to:t||"",href:n||"",target:r||null,className:u.a.link+" "+(i||"")},s),c)}},"8E+Y":function(e,t,n){e.exports=n.p+"static/logo-bb57ab4479810b88204e9fdb62dccc81.png"},AjG9:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("5w8u"),l=n("yUdm"),c=n("5MkH"),u=n("R+8Y"),i=n("OaN2"),s=n.n(i),d=n("4IfV"),m=n.n(d),f="automatic",p="manual";t.default=function(){var e=Object(a.useState)(null),t=e[0],n=e[1],i=Object(a.useState)(f),d=i[0],b=i[1],h=s.a.owner,g=s.a.repository,E=s.a.filename,w=s.a.extension;Object(a.useEffect)((function(){fetch("https://api.github.com/repos/"+h+"/"+g+"/releases/latest").then((function(e){return e.json()})).then((function(e){n(e.tag_name),setTimeout((function(){return b(p)}),1e3)})).catch((function(e){b(p),console.error("Could not fetch the latest launcher version tag. Error: ",e)}))}),[]);var y="https://github.com/"+h+"/"+g+"/releases";return Object(a.useEffect)((function(){"undefined"!=typeof window&&(t?window.location=y+"/download/"+t+"/"+E+"-"+t.substr(1)+"."+w:void 0===t&&(window.location=y+"/latest"))}),[t,y,w,E]),r.a.createElement(o.a,{title:"Launcher"},r.a.createElement("div",{className:m.a.launcher},r.a.createElement(l.a,null),r.a.createElement("div",{className:m.a.content},d===f?r.a.createElement(u.a,{disabled:!0},r.a.createElement("span",null,"Download will begin shortly...")):r.a.createElement(c.a,{href:y},r.a.createElement(u.a,null,r.a.createElement("span",null,"Download manually"))))))}},"NOd+":function(e,t,n){e.exports={logo:"Logo-module--logo--NR-RC"}},OaN2:function(e,t){e.exports={owner:"purple-world",repository:"launcher",filename:"Purple-World-Launcher-Setup",extension:"exe"}},"R+8Y":function(e,t,n){"use strict";var a=n("zLVn"),r=n("q1tI"),o=n.n(r),l=n("1eBI"),c=n.n(l);t.a=function(e){var t=e.className,n=e.primary,r=e.disabled,l=e.children,u=Object(a.a)(e,["className","primary","disabled","children"]);return o.a.createElement("div",Object.assign({className:c.a.button+" "+(n?c.a.primary:"")+" "+(r?c.a.disabled:"")+" "+(t||"")},u),l)}},yUdm:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),l=n("NOd+"),c=n.n(l),u=n("8E+Y"),i=n.n(u);t.a=function(e){var t=e.to,n=e.className;return r.a.createElement("div",{className:c.a.logo+" "+(n||"")},t?r.a.createElement(o.a,{to:t},r.a.createElement("img",{src:i.a,alt:"Purple World logo"})):r.a.createElement("img",{src:i.a,alt:"Purple World logo"}))}},ybFB:function(e,t,n){e.exports={link:"Link-module--link--TeBQo"}},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-launcher-index-js-f3632e80a97f6493a363.js.map