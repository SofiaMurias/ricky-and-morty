(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var a=t(1),r=t.n(a),n=t(4),s=t.n(n),i=(t(10),t(5)),j=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{image:e.image,name:e.name,species:e.species}}))}))},o=t.p+"static/media/logo.de13d484.png",u=(t(3),t(0)),m=function(e){return Object(u.jsxs)("article",{className:"card",children:[Object(u.jsx)("img",{className:"card-image",src:e.character.image,alt:"Foto de ".concat(e.character.name)}),Object(u.jsxs)("h3",{className:"card-title",children:[" ",e.character.name]}),Object(u.jsx)("p",{className:"card-text",children:e.character.species})]})},d=function(e){var c=e.character.map((function(e){return Object(u.jsx)(m,{character:e},e.id)}));return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:"cards",children:c})})},h=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],r=c[1];return Object(a.useEffect)((function(){j().then((function(e){r(e)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:Object(u.jsx)("img",{className:"title",src:o,alt:"Ricky and Morty"})}),Object(u.jsx)("input",{className:"input",type:"text"})]}),";",Object(u.jsx)(d,{character:t})]})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))},3:function(e,c,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.b781f3af.chunk.js.map