(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-size: 62.5%;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  padding: 4.8rem;\r\n  background-color: #ddd;\r\n  color: #333;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  font-size: 0.8rem;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  padding: 0.4rem 0.6rem;\r\n  border-radius: 1rem;\r\n  border: none;\r\n  cursor: pointer;\r\n  align-self: center;\r\n}\r\n\r\n.container {\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 9.6rem;\r\n}\r\n\r\n.title-container {\r\n  font-size: 3.6rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 2.4rem;\r\n}\r\n\r\n.title-left {\r\n  align-self: start;\r\n}\r\n\r\n.title-right {\r\n  align-self: end;\r\n}\r\n\r\n.inner-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 2.4rem;\r\n  width: 100%;\r\n}\r\n\r\n.weather-summary {\r\n  flex: 2;\r\n  font-size: 2.4rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1.6rem;\r\n  padding: 1.6rem;\r\n}\r\n\r\n.user-location {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1.6rem;\r\n}\r\n\r\n.form {\r\n  font-size: 1.6rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  gap: 1.2rem;\r\n}\r\n\r\n.form input {\r\n  width: 100%;\r\n  padding: 0.4rem 0.6rem;\r\n  border-radius: 1rem;\r\n  border: none;\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=r(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=t(n,o),l=0;l<a.length;l++){var u=r(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),a=r(569),i=r.n(a),c=r(565),s=r.n(c),l=r(216),u=r.n(l),d=r(589),p=r.n(d),f=r(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=r.p+"8b2ebe8f38fc3b848631.jpg",h=document.querySelector("#content"),v=(navigator.geolocation.getCurrentPosition((function(n){const e={lat:n.coords.latitude,long:n.coords.longitude};v(e)})),async function(n){const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n.lat}&lon=${n.long}&appid=c4fd4dbbe8a63984662de3192f30f560`),r=await e.json();console.log(r),y(r)}),y=function(n){const e=document.createElement("div");e.classList.add("container"),e.innerHTML=`\n    <div class="title-container">\n      <h2 class="title-left">Hi, you are currently</h2>\n      <h2 class="title-right">in ${n.name}, ${n.sys.country}</h2>\n    </div>\n    <div class="inner-container">\n      <section class="weather-summary">\n        <span>${(n.main.temp-273.15).toFixed(1)} Celsius degree</span>\n        <span>Currently: ${n.weather[0].main}</span>\n        <span>Wind is ${n.wind.speed} m/s</span>\n      </section>\n      <section class="user-location">\n        <form class="form">\n          <label for ="place">Try another place</label>\n          <input type="text" required>\n          <button class="btn">Submit</button>\n        </form>\n      </section>\n    </div>\n  `,document.querySelector("body").style.background=`url(${g}) no-repeat center center/cover`,h.appendChild(e)}})()})();