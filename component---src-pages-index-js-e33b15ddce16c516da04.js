(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1eBI":function(e,t,n){e.exports={purple_primary:"#27135c",purple_secondary:"#6812e6",button:"Button-module--button--1msFE",primary:"Button-module--primary--2LfKB",disabled:"Button-module--disabled--1eg9r"}},"2fPP":function(e,t,n){e.exports=n.p+"static/image4-6cbbdfb654c8c9813ef5fedbc7539446.jpg"},"5MkH":function(e,t,n){"use strict";var a=n("zLVn"),r=n("q1tI"),i=n.n(r),o=n("Wbzz"),l=n("ybFB"),c=n.n(l);t.a=function(e){var t=e.to,n=e.href,r=e.target,l=e.children,s=e.className,u=Object(a.a)(e,["to","href","target","children","className"]),m=null;return t?m=o.a:n?m="a":console.error("[Link.js] Tag not specified!"),i.a.createElement(m,Object.assign({to:t||"",href:n||"",target:r||null,className:c.a.link+" "+(s||"")},u),l)}},FQsB:function(e,t){e.exports={title:"Welcome to Purple World",desc:"A whitelisted free-to-play roleplay FiveM server"}},KVUF:function(e,t,n){e.exports={purple_primary:"#27135c",purple_secondary:"#6812e6",background:"Background-module--background--3SHGE"}},PgDl:function(e,t){e.exports=[{link:"launcher",priority:1,to:"/launcher",text:"Launcher"},{link:"keybindings",priority:2,to:"/keybindings",text:"Keybindings"}]},"R+8Y":function(e,t,n){"use strict";var a=n("zLVn"),r=n("q1tI"),i=n.n(r),o=n("1eBI"),l=n.n(o);t.a=function(e){var t=e.className,n=e.primary,r=e.disabled,o=e.children,c=Object(a.a)(e,["className","primary","disabled","children"]);return i.a.createElement("div",Object.assign({className:l.a.button+" "+(n?l.a.primary:"")+" "+(r?l.a.disabled:"")+" "+(t||"")},c),o)}},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("AwEm"),o=n("5w8u"),l=n("yUdm"),c=n("5MkH"),s=n("R+8Y"),u=n("XzHR"),m=n.n(u),d=n("uJTu"),p=n.n(d),f=n("Z0JE"),g=n.n(f),y=n("2fPP"),b=n.n(y),h=n("KVUF"),E=n.n(h),k=function(){var e=[m.a,p.a,g.a,b.a],t="\n    @keyframes backgroundAnimation {\n      0% {\n        transform: translateX(-5%);\n        opacity: 0;\n      }\n      "+20/e.length+"% {\n        opacity: 0.25;\n      }\n      "+100/e.length+"% {\n        opacity: 0.25;\n      }\n      "+120/e.length+"% {\n        opacity: 0;\n        transform: translateX(5%);\n      }\n    }\n  ";return r.a.createElement("ul",{className:E.a.background},r.a.createElement("style",null,t),e&&e.length&&e.map((function(t,n){return r.a.createElement("li",{key:t,style:{animationName:"backgroundAnimation",animationDuration:10*e.length+"s",animationDelay:10*n+"s",animationTimingFunction:"linear",animationIterationCount:"infinite"}},r.a.createElement("img",{src:t,alt:"Background "+(n+1)}))})))},x=function(e){if(e)return e.split("\n\n").map((function(e){return e.replace(/\n/g,"<br/>")})).join("")},v=n("FQsB"),w=n.n(v),N=n("PgDl"),B=n.n(N),I=n("yGnP"),_=n.n(I),j=n("iJ1V"),P=n.n(j);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:P.a.index},r.a.createElement("div",{className:P.a.logo},r.a.createElement(l.a,{to:"/"})),r.a.createElement("div",{className:P.a.content},r.a.createElement("h1",{dangerouslySetInnerHTML:{__html:x(w.a.title)}}),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:x(w.a.desc)}})),r.a.createElement("div",{className:P.a.navigation},r.a.createElement("div",{className:P.a.list},B.a.sort((function(e,t){return e.priority>t.priority?1:-1})).map((function(e){return r.a.createElement(c.a,{key:e.link,className:P.a.item,href:e.href,to:e.to,target:e.tab&&"_blank"},r.a.createElement(s.a,{primary:!0},r.a.createElement("span",null,e.text)))}))),r.a.createElement("div",{className:P.a.list},_.a.sort((function(e,t){return e.priority>t.priority?1:-1})).map((function(e){return r.a.createElement(c.a,{key:e.social,className:P.a.item,href:e.href,target:"_blank"},r.a.createElement(s.a,null,e.icon&&r.a.createElement(i.a,{src:"/icons/"+e.icon})))}))))),r.a.createElement(k,null))}},XzHR:function(e,t,n){e.exports=n.p+"static/image1-4e9a72abb9df5ee62ff48763750fb9b2.jpg"},Z0JE:function(e,t,n){e.exports=n.p+"static/image3-4bfe978d88c95b6aaeb3a6b5493114ad.jpg"},iJ1V:function(e,t,n){e.exports={purple_primary:"#27135c",purple_secondary:"#6812e6",index:"Index-module--index--Bmjml",logo:"Index-module--logo--3lXjA",content:"Index-module--content--1RxKR",navigation:"Index-module--navigation--2Ey9E",list:"Index-module--list--_OAY-",item:"Index-module--item--1MZK_"}},uJTu:function(e,t,n){e.exports=n.p+"static/image2-e519db368df3a314d5a5cc312a5d72c7.jpg"},yGnP:function(e,t){e.exports=[{social:"forums",priority:1,href:"https://purpleworld.net",icon:"forums.svg"},{social:"discord",priority:2,href:"https://discord.gg/xTSA32P",icon:"discord.svg"},{social:"reddit",priority:3,href:"https://www.reddit.com/r/PurpleWorld",icon:"reddit.svg"},{social:"twitter",priority:4,href:"https://twitter.com/PurpleWorldRP",icon:"twitter.svg"},{social:"patreon",priority:5,href:"https://www.patreon.com/purpleworld",icon:"patreon.svg"}]},ybFB:function(e,t,n){e.exports={link:"Link-module--link--TeBQo"}},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-index-js-e33b15ddce16c516da04.js.map