(this.webpackJsonpdevopal=this.webpackJsonpdevopal||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(16),s=a.n(i),c=(a(24),a(8)),m=(a(25),a(13)),o=(a(26),function(e){var t=Object(l.useState)([]),a=Object(c.a)(t,2),i=a[0],s=a[1],o=function(e){var t=Object(m.a)(i);t.splice(e,1),s(t)},r=e.multipleOptions?n.a.createElement("input",{type:"email",list:"languages",onKeyDown:function(e){var t=e.target.value;if("Enter"===e.key&&t){if(i.find((function(e){return e.toLowerCase()===t.toLowerCase()})))return;s([].concat(Object(m.a)(i),[t])),e.target.value=null}else"Backspace"!==e.key||t||o(i.length-1)}}):n.a.createElement("input",{type:"email",list:"languages"});return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"input-tag"},n.a.createElement("ul",{className:"input-tag__tags"},i.map((function(e,t){return n.a.createElement("li",{key:e},e,n.a.createElement("button",{type:"button",onClick:function(){o(t)}},"+"))})),n.a.createElement("li",{className:"input-tag__tags__input"},r,n.a.createElement("datalist",{className:"datalist",id:"languages"},n.a.createElement("div",{className:"datalist__items"},n.a.createElement("option",{className:"datalist__items-item",value:"HTML"}),n.a.createElement("option",{className:"datalist__items-item",value:"CSS"}),n.a.createElement("option",{className:"datalist__items-item",value:"JavaScript"}),n.a.createElement("option",{className:"datalist__items-item",value:"Java"}),n.a.createElement("option",{className:"datalist__items-item",value:"Ruby"}),n.a.createElement("option",{className:"datalist__items-item",value:"PHP"}),n.a.createElement("option",{className:"datalist__items-item",value:"Go"}),n.a.createElement("option",{className:"datalist__items-item",value:"Erlang"}),n.a.createElement("option",{className:"datalist__items-item",value:"Python"}),n.a.createElement("option",{className:"datalist__items-item",value:"C"}),n.a.createElement("option",{className:"datalist__items-item",value:"C#"}),n.a.createElement("option",{className:"datalist__items-item",value:"C++"})))))))}),r=a(9),u=a(5),p=function(){var e=Object(l.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1];return n.a.createElement(r.a,null,n.a.createElement("div",null,n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(r.b,{onClick:function(){i(!1)},className:"link",to:"/one"},"Select One Option")),n.a.createElement("li",null,n.a.createElement(r.b,{onClick:function(){i(!0)},className:"link",to:"/multiple"},"Select Multiple Options")))),n.a.createElement(u.c,null,n.a.createElement(u.a,{path:"/one"},n.a.createElement(o,{multipleOptions:a})),n.a.createElement(u.a,{path:"/multiple"},n.a.createElement(o,{multipleOptions:a})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.f49eb7dd.chunk.js.map