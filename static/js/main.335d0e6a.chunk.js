(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},18:function(e){e.exports={}},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),u=(a(14),a(1)),l=(a(3),a(17),a(18),function(e){var t=function(e){};return Object(n.useEffect)(function(){document.querySelectorAll(".drum-pad").forEach(function(a){return a.disabled=!e.power,a.addEventListener("click",t),function(){return a.removeEventListener("click",t)}})}),c.a.createElement("section",{className:"sound-button"},c.a.createElement("button",{id:"Q",className:"drum-pad"},"Q"),c.a.createElement("button",{id:"W",className:"drum-pad"},"W"),c.a.createElement("button",{id:"E",className:"drum-pad"},"E"),c.a.createElement("button",{id:"A",className:"drum-pad"},"A"),c.a.createElement("button",{id:"S",className:"drum-pad"},"S"),c.a.createElement("button",{id:"D",className:"drum-pad"},"D"),c.a.createElement("button",{id:"Z",className:"drum-pad"},"Z"),c.a.createElement("button",{id:"X",className:"drum-pad"},"X"),c.a.createElement("button",{id:"C",className:"drum-pad"},"C"))}),m=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(50),m=Object(u.a)(l,2),s=m[0],d=m[1];return c.a.createElement("section",{className:"sound-panel"},c.a.createElement("label",{className:"switch"},c.a.createElement("h4",null,"Power"),c.a.createElement("input",{className:"power",type:"checkbox",onClick:function(t){document.querySelector(".power").checked?e.setPower(!0):e.setPower(!1)},defaultChecked:!0}),c.a.createElement("span",{className:"slider round"})),c.a.createElement("div",{className:"monitor"},e.power?r:""),c.a.createElement("div",{className:"sound-volume-box"},c.a.createElement("h4",null,"Volume"),c.a.createElement("input",{className:"sound-volume",type:"range",min:"0",max:"100",value:s,onChange:function(e){d(e.target.value),o("Volume: ".concat(s))},disabled:!e.power})))};var s=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],r=t[1];return c.a.createElement("main",{id:"drum-machine"},c.a.createElement(l,{power:a}),c.a.createElement(m,{power:a,setPower:r}))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,20)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null))),d()},3:function(e,t,a){},5:function(e,t,a){e.exports=a(19)}},[[5,3,2]]]);
//# sourceMappingURL=main.335d0e6a.chunk.js.map