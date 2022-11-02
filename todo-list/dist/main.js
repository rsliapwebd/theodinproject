(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),c=e.n(i)()(o());c.push([r.id,'* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-size: 62.5%;\r\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\r\n  color: #d5d5d5;\r\n  background-color: #333;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  font-size: 1.2rem;\r\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\r\n  padding: 0.8rem 1.2rem;\r\n  border: none;\r\n  border-radius: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: stretch;\r\n  gap: 2.4rem;\r\n  padding: 2.4rem;\r\n  min-height: 100vh;\r\n}\r\n\r\n.projects {\r\n  flex: 1 0 10rem;\r\n}\r\n\r\n.todos {\r\n  flex: 2;\r\n}\r\n\r\n.projects,\r\n.todos {\r\n  background-color: #d5d5d5;\r\n  color: #333;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 1.6rem;\r\n  padding: 1.6rem;\r\n}\r\n\r\n.projects-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  gap: 0.8rem;\r\n}\r\n\r\n.project {\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  background-color: #14b8a6;\r\n  color: #fff;\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 0.8rem;\r\n  padding: 1.2rem;\r\n  position: relative;\r\n}\r\n\r\n.project-title {\r\n  font-size: 1.2rem;\r\n  text-decoration: underline;\r\n}\r\n\r\n.project-info {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.project-author,\r\n.project-priority {\r\n  color: #e2e8f0;\r\n  font-weight: 500;\r\n}\r\n\r\n.close {\r\n  height: 1rem;\r\n  width: 1rem;\r\n  color: #fff;\r\n  background-color: #fb7185;\r\n  position: absolute;\r\n  top: 1rem;\r\n  right: 1rem;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding-bottom: 0.2rem;\r\n}\r\n\r\n.project-form,\r\n.form-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.project-form {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  font-size: 1rem;\r\n  gap: 0.8rem;\r\n  padding: 0.8rem;\r\n}\r\n\r\n.form-group {\r\n  width: 100%;\r\n  gap: 0.4rem;\r\n}\r\n\r\n.form-group input {\r\n  display: inline-block;\r\n  width: 100%;\r\n  border-radius: 1rem;\r\n  padding: 0.4rem 0.8rem;\r\n  border: none;\r\n}\r\n\r\n.form-btn {\r\n  font-size: 1rem;\r\n  padding: 0.6rem 1rem;\r\n  align-self: center;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n',""]);const s=c},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var c={};if(t)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(c[a]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);t&&c[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},c=[],s=0;s<r.length;s++){var a=r[s],l=t.base?a[0]+t.base:a[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=e(u),f={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var c=0;c<i.length;c++){var s=e(i[c]);n[s].references--}for(var a=t(r,o),l=0;l<i.length;l++){var d=e(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=a}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),i=e(569),c=e.n(i),s=e(565),a=e.n(s),l=e(216),d=e.n(l),u=e(589),p=e.n(u),f=e(426),m={};m.styleTagTransform=p(),m.setAttributes=a(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=function(r,n,e){const t=document.createElement(r);t.classList.add(e),n.append(t)},y=document.querySelector(".container");class h{constructor(r,n,e,t){this.title=r,this.desc=n,this.author=e,this.priority=t}}const g=[{title:"Simple project",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quo unde quasi delectus autem amet cumque praesentium tenetur molestiae soluta nihil consequuntur ipsum modi eveniet expedita doloremque, illum repellendus suscipit.",author:"Roman",priority:"Low"}],b=function(r){r.innerHTML="",g.forEach((n=>{const e=document.createElement("div");e.classList.add("project"),e.innerHTML=`<span class="project-title">${n.title}</span><span>${n.desc}</span><div class="project-info"><span class="project-author">Added by ${n.author}</span><span class="project-priority">${n.priority} priority</span></div><div class="close">×</div>\n    `,r.append(e)}))},j=function(r){r.form.classList.toggle("hidden"),r.projectsBtn.classList.toggle("hidden")},x=function(){v("div",y,"projects");const r=document.querySelector(".projects");v("div",r,"projects-container");const n=document.querySelector(".projects-container");v("button",r,"projects-btn");const e=document.querySelector(".projects-btn");e.classList.add("btn"),e.textContent="Add project",v("form",r,"project-form");const t=document.querySelector("form");t.classList.add("hidden"),t.innerHTML='\n  <div class="form-group">\n    <label for="title">Project Title</label>\n    <input type="text" id="title" />\n  </div>\n  <div class="form-group">\n    <label for="desc">Description</label>\n    <input type="text" id="desc" />\n  </div>\n  <div class="form-group">\n    <label for="author">Author</label>\n    <input type="text" id="author" />\n  </div>\n  <div class="form-group">\n    <label for="priority">Priority</label>\n    <input type="text" id="priority" />\n  </div>\n  <button class="btn form-btn">Submit</button>\n  ';const o=document.querySelector(".form-btn"),i=document.querySelector("#title"),c=document.querySelector("#desc"),s=document.querySelector("#author"),a=document.querySelector("#priority");v("div",y,"todos");const l=document.querySelector(".todos");v("button",l,"todos-btn");const d=document.querySelector(".todos-btn");return d.classList.add("btn"),d.textContent="Add Todo",{projects:r,projectsCont:n,projectsBtn:e,form:t,formBtn:o,title:i,desc:c,author:s,priority:a,todos:l,todosBtn:d}}();b(x.projectsCont),x.projectsBtn.addEventListener("click",(function(){j(x)})),x.formBtn.addEventListener("click",(function(r){var n;r.preventDefault(),console.log(g),function(r,n){const e=new h(r.title.value,r.desc.value,r.author.value,r.priority.value);n.push(e)}(x,g),b(x.projectsCont),j(x),n=g,document.querySelectorAll(".close").forEach(((r,e)=>{r.addEventListener("click",(function(r){0!==e&&(r.target.closest(".project").remove(),n.splice(e,1),console.log(e,n))}))}))}))})()})();