(()=>{"use strict";var n={114:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),c=e.n(i)()(o());c.push([n.id,"@media (max-width: 500px) {\r\n  .container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .todo-info {\r\n    flex-direction: column;\r\n  }\r\n}\r\n",""]);const s=c},426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),c=e.n(i)()(o());c.push([n.id,'* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-size: 62.5%;\r\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\r\n  color: #d5d5d5;\r\n  background-color: #333;\r\n  padding: 2.4rem;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.4rem;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  font-size: 1.2rem;\r\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\r\n  padding: 0.8rem 1.2rem;\r\n  border: none;\r\n  border-radius: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: stretch;\r\n  gap: 2.4rem;\r\n  padding: 2.4rem;\r\n  min-height: 100vh;\r\n}\r\n\r\n.projects {\r\n  flex: 1 0 10rem;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.todos {\r\n  flex: 2;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.projects,\r\n.todos {\r\n  background-color: #d5d5d5;\r\n  color: #333;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 1.6rem;\r\n  padding: 1.6rem;\r\n}\r\n\r\n.projects-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  gap: 0.8rem;\r\n}\r\n\r\n.project {\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  background-color: #14b8a6;\r\n  color: #fff;\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 0.8rem;\r\n  padding: 1.2rem;\r\n  position: relative;\r\n}\r\n\r\n.project-title {\r\n  font-size: 1.2rem;\r\n  text-decoration: underline;\r\n}\r\n\r\n.project-info {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.project-author,\r\n.project-priority {\r\n  color: #e2e8f0;\r\n  font-weight: 500;\r\n}\r\n\r\n.close {\r\n  height: 1rem;\r\n  width: 1rem;\r\n  color: #fff;\r\n  background-color: #fb7185;\r\n  position: absolute;\r\n  top: 1rem;\r\n  right: 1rem;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding-bottom: 0.2rem;\r\n}\r\n\r\n.project-form,\r\n.form-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.project-form {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  font-size: 1rem;\r\n  gap: 0.8rem;\r\n  padding: 0.8rem;\r\n}\r\n\r\n.form-group {\r\n  width: 100%;\r\n  gap: 0.4rem;\r\n}\r\n\r\n.form-group input {\r\n  display: inline-block;\r\n  width: 100%;\r\n  border-radius: 1rem;\r\n  padding: 0.4rem 0.8rem;\r\n  border: none;\r\n}\r\n\r\n.form-btn {\r\n  font-size: 1rem;\r\n  padding: 0.6rem 1rem;\r\n  align-self: center;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.active {\r\n  background-color: #047857;\r\n  cursor: pointer;\r\n}\r\n\r\n.description {\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  padding: 1.6rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1.6rem;\r\n}\r\n\r\n.todo-container {\r\n  width: 100%;\r\n}\r\n\r\n.todos-inner {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1.2rem;\r\n}\r\n\r\n.todo-info {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1.2rem;\r\n}\r\n\r\n.todo-input {\r\n  padding: 0.6rem 0.8rem;\r\n  border: none;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.todo-btn {\r\n  font-size: 0.8rem;\r\n  padding: 0.6rem 0.8rem;\r\n}\r\n\r\n.todo {\r\n  background-color: #fb7185;\r\n  color: #fff;\r\n  padding: 1.2rem;\r\n  width: 50%;\r\n  text-align: center;\r\n  border-radius: 1rem;\r\n}\r\n',""]);const s=c},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(t)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(c[a]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},c=[],s=0;s<n.length;s++){var a=n[s],d=t.base?a[0]+t.base:a[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=e(u),f={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<i.length;c++){var s=e(i[c]);r[s].references--}for(var a=t(n,o),d=0;d<i.length;d++){var l=e(i[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=a}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),c=e.n(i),s=e(565),a=e.n(s),d=e(216),l=e.n(d),u=e(589),p=e.n(u),f=e(426),m={};m.styleTagTransform=p(),m.setAttributes=a(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var v=e(114),h={};h.styleTagTransform=p(),h.setAttributes=a(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),r()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;const y=function(n,r,e){const t=document.createElement(n);t.classList.add(e),r.append(t)},g=document.querySelector(".container");class b{constructor(n,r,e,t){this.title=n,this.desc=r,this.author=e,this.priority=t,this.todos=[]}}function x(n){const r=document.querySelector(".todos-inner");r.innerHTML="",n.forEach((n=>{const e=document.createElement("div");e.classList.add("todo"),e.innerHTML=`\n        <h3>${n}</h3>\n      `,r.append(e)}))}const j=[{title:"Simple project",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quo unde quasi delectus autem amet cumque praesentium tenetur molestiae soluta nihil consequuntur ipsum modi eveniet expedita doloremque, illum repellendus suscipit.",author:"Roman",priority:"Low",todos:["Test"]}],L=function(n){n.innerHTML="",j.forEach((r=>{const e=document.createElement("div");e.classList.add("project"),e.innerHTML=`<span class="project-title">${r.title}</span><div class="project-info"><span class="project-author">Added by ${r.author}</span><span class="project-priority">${r.priority} priority</span></div><div class="close">×</div>\n    `,n.append(e)}))},S=function(n,r){document.querySelectorAll(".project").forEach(((e,t,o)=>{e.addEventListener("click",(function(){if(!e.classList.contains("active")){n.innerHTML="",o.forEach((n=>n.classList.remove("active")));const i=document.createElement("div");i.classList.add("description"),i.innerHTML=`\n        <h3>Project description:</h3>\n        <p>${r[t].desc}</p>\n        <div class="todos-inner">\n        </div>\n        <div class="todo-info">\n          <input type="text" class="todo-input">\n          <button class="btn todo-btn">Add Todo</button>\n        </div>\n        `,n.append(i),e.classList.add("active")}!function(n){const r=document.querySelector(".todo-input");document.querySelector(".todo-btn").addEventListener("click",(function(){n.push(r.value),r.value="",x(n)})),x(n)}(j[t].todos)}))}))},w=function(n){n.form.classList.toggle("hidden"),n.projectsBtn.classList.toggle("hidden")},T=function(){y("div",g,"projects");const n=document.querySelector(".projects");y("div",n,"projects-container");const r=document.querySelector(".projects-container");y("button",n,"projects-btn");const e=document.querySelector(".projects-btn");e.classList.add("btn"),e.textContent="Add project",y("form",n,"project-form");const t=document.querySelector("form");t.classList.add("hidden"),t.innerHTML='\n  <div class="form-group">\n    <label for="title">Project Title</label>\n    <input type="text" id="title" />\n  </div>\n  <div class="form-group">\n    <label for="desc">Description</label>\n    <input type="text" id="desc" />\n  </div>\n  <div class="form-group">\n    <label for="author">Author</label>\n    <input type="text" id="author" />\n  </div>\n  <div class="form-group">\n    <label for="priority">Priority</label>\n    <input type="text" id="priority" />\n  </div>\n  <button class="btn form-btn">Submit</button>\n  ';const o=document.querySelector(".form-btn"),i=document.querySelector("#title"),c=document.querySelector("#desc"),s=document.querySelector("#author"),a=document.querySelector("#priority");return y("div",g,"todos"),{projects:n,projectsCont:r,projectsBtn:e,form:t,formBtn:o,title:i,desc:c,author:s,priority:a,todos:document.querySelector(".todos")}}();L(T.projectsCont),S(T.todos,j),T.projectsBtn.addEventListener("click",(function(){w(T)})),T.formBtn.addEventListener("click",(function(n){var r;n.preventDefault(),function(n,r){const e=new b(n.title.value,n.desc.value,n.author.value,n.priority.value);r.push(e)}(T,j),L(T.projectsCont),w(T),r=j,document.querySelectorAll(".close").forEach(((n,e)=>{n.addEventListener("click",(function(n){0!==e&&(n.target.closest(".project").remove(),r.splice(e,1))}))})),S(T.todos,j)}))})()})();