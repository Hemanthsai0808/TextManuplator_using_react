(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t(27)},23:function(e,a,t){},25:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),c=t(13),l=t.n(c),o=(t(23),t(3)),m=(t(25),t(8));function A(e){return n.a.createElement("div",{className:"continer"},n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.Curmode," bg-").concat(e.Curmode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"TextManuplator"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link",to:"/About"},"About"))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.Curmode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.ToggleMode}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"DarkMode"))))))}function s(e){var a=Object(r.useState)(""),t=Object(o.a)(a,2),c=t[0],l=t[1];return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"mb-3 text-".concat("light"===e.Curmode?"dark":"light")},n.a.createElement("label",{for:"exampleFormControlTextarea1",className:"form-label",colr:"".concat(e.Curmode,'==="light"?"black":"white"')},"Manupulate The Text"),n.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"8",onChange:function(e){l(e.target.value)},value:c}),n.a.createElement("button",{type:"button",class:"btn btn-primary my-2",onClick:function(){c=c.toUpperCase(),l(c)},value:c},"To Upper"),n.a.createElement("button",{type:"button",class:"btn btn-primary my-2 mx-2",onClick:function(){c=c.toLowerCase(),l(c)}},"To Lower"),n.a.createElement("button",{type:"button",class:"btn btn-primary my-2 mx-1",onClick:function(){l(c="")}},"Clear"),n.a.createElement("br",null),n.a.createElement("p1",null,function(){var e=0,a=c.trim();a+=" ";for(var t=1;t<a.length-1;t++)" "!==a.charAt(t)&&" "===a.charAt(t+1)&&e++;return e}()," total words,",""===c?0:c.length," Total length")))}function i(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"card mb-3 my-2"},n.a.createElement("div",{className:"row g-0"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"data:image/jpeg;base64,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",className:"img-fluid rounded-start",alt:"..."})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Hey its me Hemanth Sai its my first react application !"),n.a.createElement("p",{className:"card-text"},"This is a text manuplator you can convert your text to uppercase,lowercase and you can also count no of words,characters in the Text"))))))}var b=t(0);var u=function(){var e=Object(r.useState)("light"),a=Object(o.a)(e,2),t=a[0],c=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null," ",n.a.createElement(A,{Curmode:t,ToggleMode:function(){"light"===t?(c("dark"),document.body.style.background="#200b46"):(c("light"),document.body.style.background="white")}}),n.a.createElement(b.c,null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",n.a.createElement(b.a,{exact:!0,path:"/",element:n.a.createElement(s,{Curmode:t})}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",n.a.createElement(b.a,{exact:!0,path:"/About",element:n.a.createElement(i,null)}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")))},g=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,28)).then(function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,l=a.getTTFB;t(e),r(e),n(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null))),g()}},[[14,3,2]]]);
//# sourceMappingURL=main.8e00f2a5.chunk.js.map