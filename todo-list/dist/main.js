(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,'* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-size: 62.5%;\r\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\r\n  color: #d5d5d5;\r\n  background-color: #333;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  font-size: 1.2rem;\r\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\r\n  padding: 0.8rem 1.2rem;\r\n  border: none;\r\n  border-radius: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: stretch;\r\n  gap: 2.4rem;\r\n  padding: 2.4rem;\r\n  min-height: 100vh;\r\n}\r\n\r\n.projects {\r\n  flex: 1 0 10rem;\r\n}\r\n\r\n.todos {\r\n  flex: 3;\r\n}\r\n\r\n.projects,\r\n.todos {\r\n  background-color: #d5d5d5;\r\n  color: #333;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 1.6rem;\r\n  padding: 1.6rem;\r\n}\r\n\r\n.project-form,\r\n.form-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.project-form {\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  gap: 0.6rem;\r\n  padding: 0.8rem;\r\n}\r\n\r\n.form-group {\r\n  width: 100%;\r\n  gap: 0.4rem;\r\n}\r\n\r\n.form-group label {\r\n  width: 100%;\r\n}\r\n\r\n.form-btn {\r\n  font-size: 1rem;\r\n  padding: 0.4rem 0.8rem;\r\n}\r\n',""]);const s=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var c=t(n,o),d=0;d<i.length;d++){var l=e(i[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),s=e(565),c=e.n(s),d=e(216),l=e.n(d),u=e(589),p=e.n(u),f=e(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=function(n,r,e){const t=document.createElement(n);t.classList.add(e),r.append(t)},b=document.querySelector(".container");class y{constructor(n,r,e,t){this.title=n,this.desc=r,this.month=e,this.priority=t}}const h=function(){v("div",b,"projects");const n=document.querySelector(".projects");v("button",n,"projects-btn");const r=document.querySelector(".projects-btn");r.classList.add("btn"),r.textContent="Add project",v("div",b,"todos");const e=document.querySelector(".todos");v("button",e,"todos-btn");const t=document.querySelector(".todos-btn");return t.classList.add("btn"),t.textContent="Add Todo",{projects:n,todos:e,projectsBtn:r,todosBtn:t}}();h.projectsBtn.addEventListener("click",(function(){!function(n){const r=document.createElement("form");r.classList.add("project-form"),r.innerHTML='\n  <div class="form-group">\n    <label for="title">Project Title</label>\n    <input type="text" id="title" />\n  </div>\n  <div class="form-group">\n    <label for="desc">Description</label>\n    <input type="text" id="desc" />\n  </div>\n  <div class="form-group">\n    <label for="month">Due month</label>\n    <input type="text" id="month" />\n  </div>\n  <div class="form-group">\n    <label for="priority">Priority</label>\n    <input type="text" id="priority" />\n  </div>\n  <button class="btn form-btn">Submit</button>\n  ',n.append(r)}(h.projects),new y}))})()})();