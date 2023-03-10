(()=>{"use strict";var r,n,o,e,t,a,i,s,c,p,A,u,f,d,l={122:(r,n,o)=>{o.d(n,{Z:()=>s});var e=o(537),t=o.n(e),a=o(645),i=o.n(a)()(t());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]),i.push([r.id,":root {\r\n    --cor-primaria: rgb(2, 114, 241);\r\n    --cor-primaria-escura: rgb(2, 69, 146);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: var(--cor-primaria);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--cor-primaria);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background-color: var(--cor-primaria);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background-color: var(--cor-primaria-escura);\r\n}\r\n\r\n/* form button:active {\r\n    background-color: red;\r\n} */","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,gCAAgC;IAChC,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,qCAAqC;IACrC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,qCAAqC;IACrC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;;GAEG",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\r\n\r\n:root {\r\n    --cor-primaria: rgb(2, 114, 241);\r\n    --cor-primaria-escura: rgb(2, 69, 146);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: var(--cor-primaria);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--cor-primaria);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background-color: var(--cor-primaria);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background-color: var(--cor-primaria-escura);\r\n}\r\n\r\n/* form button:active {\r\n    background-color: red;\r\n} */"],sourceRoot:""}]);const s=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var o="",e=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),e&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=r(n),e&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(r,o,e,t,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(e)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<r.length;p++){var A=[].concat(r[p]);e&&i[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),o&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=o):A[2]=o),t&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=t):A[4]="".concat(t)),n.push(A))}},n}},537:r=>{r.exports=function(r){var n=r[1],o=r[3];if(!o)return n;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),a="/*# ".concat(t," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function o(r){for(var o=-1,e=0;e<n.length;e++)if(n[e].identifier===r){o=e;break}return o}function e(r,e){for(var a={},i=[],s=0;s<r.length;s++){var c=r[s],p=e.base?c[0]+e.base:c[0],A=a[p]||0,u="".concat(p," ").concat(A);a[p]=A+1;var f=o(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(d);else{var l=t(d,e);e.byIndex=s,n.splice(s,0,{identifier:u,updater:l,references:1})}i.push(u)}return i}function t(r,n){var o=n.domAPI(n);return o.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;o.update(r=n)}else o.remove()}}r.exports=function(r,t){var a=e(r=r||[],t=t||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var s=o(a[i]);n[s].references--}for(var c=e(r,t),p=0;p<a.length;p++){var A=o(a[p]);0===n[A].references&&(n[A].updater(),n.splice(A,1))}a=c}}},569:r=>{var n={};r.exports=function(r,o){var e=function(r){if(void 0===n[r]){var o=document.querySelector(r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(r){o=null}n[r]=o}return n[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,o)=>{r.exports=function(r){var n=o.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(o){!function(r,n,o){var e="";o.supports&&(e+="@supports (".concat(o.supports,") {")),o.media&&(e+="@media ".concat(o.media," {"));var t=void 0!==o.layer;t&&(e+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),e+=o.css,t&&(e+="}"),o.media&&(e+="}"),o.supports&&(e+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(e,r,n.options)}(n,r,o)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},m={};function g(r){var n=m[r];if(void 0!==n)return n.exports;var o=m[r]={id:r,exports:{}};return l[r](o,o.exports,g),o.exports}g.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return g.d(n,{a:n}),n},g.d=(r,n)=>{for(var o in n)g.o(n,o)&&!g.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:n[o]})},g.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),g.nc=void 0,r=g(379),n=g.n(r),o=g(795),e=g.n(o),t=g(569),a=g.n(t),i=g(565),s=g.n(i),c=g(216),p=g.n(c),A=g(589),u=g.n(A),f=g(122),(d={}).styleTagTransform=u(),d.setAttributes=s(),d.insert=a().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=p(),n()(f.Z,d),f.Z&&f.Z.locals&&f.Z.locals})();
//# sourceMappingURL=bundle.js.map