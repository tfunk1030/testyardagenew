/*! For license information please see calculator.bundle.js.LICENSE.txt */
(()=>{"use strict";function t(t,e,r){if("number"!=typeof t||isNaN(t))throw console.error("Invalid temperature value:",t),new Error("Temperature must be a valid number");if("number"!=typeof e||isNaN(e))throw console.error("Invalid pressure value:",e),new Error("Pressure must be a valid number");if("number"!=typeof r||isNaN(r))throw console.error("Invalid humidity value:",r),new Error("Humidity must be a valid number");if(t<-40||t>120)throw console.error("Temperature out of range:",t),new Error("Temperature must be between -40°F and 120°F");if(e<25||e>32)throw console.error("Pressure out of range:",e),new Error("Pressure must be between 25 and 32 inHg");if(r<0||r>100)throw console.error("Humidity out of range:",r),new Error("Humidity must be between 0% and 100%");if(59===t&&29.92===e&&0===r)return console.log("Standard conditions detected - returning 1.0"),1;var n=5/9*(t-32),o=6.11*Math.exp(17.27*n/(237.3+n))*(r/100),a=6.11*Math.exp(259.05/252.3)*0,i=33.8639*e,c=i-o,u=(28.964*c+18.016*o)/(8314.32*(n+273.15)),s=(28.964*(29.92*33.8639-a)+18.016*a)/(8314.32*288.15);return console.log("Air density calculation results:",{temperature:t,pressure:e,humidity:r,tempC:n,vaporPressure:o,pressureHPa:i,dryPressure:c,density:u,standardDensity:s,relativeDensity:u/s}),Number((u/s).toFixed(6))}function e(){var t=Number(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)||0,e=.045*Math.log(t/1e3+1),r=0;t>2e3&&(r+=(t-2e3)/12e4),t>4e3&&(r+=(t-4e3)/11e4),t>6e3&&(r+=(t-6e3)/1e5);var n=Math.exp(-t/3e4);return{total:1+1.15*(e+r)*n,components:{base:e,progressive:r,spin:Math.min(t/12e4,.065),density:n,empirical:1.15}}}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(){n=function(){return e};var t,e={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new T(n||[]);return i(a,"_invoke",{value:I(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var p="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function b(){}function w(){}function E(){}var x={};f(x,u,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(C([])));S&&S!==o&&a.call(S,u)&&(x=S);var M=E.prototype=b.prototype=Object.create(x);function N(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(o,i,c,u){var s=d(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}})}function I(e,r,n){var o=p;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=d(e,r,n);if("normal"===s.type){if(o=n.done?v:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(r(e)+" is not iterable")}return w.prototype=E,i(M,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:w,configurable:!0}),w.displayName=f(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,l,"GeneratorFunction")),t.prototype=Object.create(M),t},e.awrap=function(t){return{__await:t}},N(j.prototype),f(j.prototype,s,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},N(M),f(M,l,"Generator"),f(M,u,(function(){return this})),f(M,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}}console.log("Running Core Calculation Tests...\n"),console.log("=== Wind Effect Tests ==="),[{speed:10,dir:"N",desc:"10mph headwind"},{speed:10,dir:"S",desc:"10mph tailwind"},{speed:15,dir:"E",desc:"15mph crosswind"}].forEach((function(t){var e=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"medium",n=Math.abs(Number(t)||0),o={low:.65,medium:1,high:1.35}[r]||1;"low"===r&&n>10&&(o*=1-.015*(n-10));var a=function(t){return{N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5}[t]||0}(e),i=Math.cos(a*Math.PI/180)*n,c=Math.sin(a*Math.PI/180)*n,u=Math.pow(Math.abs(i),.92),s=Math.pow(Math.abs(c),.92),l=1,f=1;return Math.abs(i)>10&&(l=1+.02*(Math.abs(i)-10)),Math.abs(c)>10&&(f=1+.015*(Math.abs(c)-10)),{distanceEffect:-Math.sign(i)*u*.0078*o*l,lateralEffect:Math.sign(c)*s*.0052*o*f}}(t.speed,t.dir);console.log("\n".concat(t.desc,":")),console.log("Distance Effect: ".concat((100*e.distanceEffect).toFixed(1),"%")),console.log("Lateral Effect: ".concat((100*e.lateralEffect).toFixed(1),"%"))})),console.log("\n=== Altitude Effect Tests ==="),[{alt:0,desc:"Sea Level"},{alt:5280,desc:"Denver"},{alt:7350,desc:"Mexico City"}].forEach((function(t){var r=e(t.alt);console.log("\n".concat(t.desc," (").concat(t.alt,"ft):")),console.log("Total Effect: ".concat((100*(r.total-1)).toFixed(1),"%")),console.log("Components:",r.components)})),console.log("\n=== Air Density Tests ==="),[{temp:59,pressure:29.92,humidity:50,desc:"Standard Conditions"},{temp:90,pressure:29.92,humidity:80,desc:"Hot & Humid"},{temp:30,pressure:29.92,humidity:20,desc:"Cold & Dry"}].forEach((function(t){var e,r,n,o,a=(r=((e=t).temp||59)+459.67,n=59+459.67,o=Math.pow((e.pressure||29.92)/29.92,.45)*Math.pow(n/r,.5)*(1-((e.humidity||50)-50)/100*.008),Math.pow(o,1));console.log("\n".concat(t.desc,":")),console.log("Density Ratio: ".concat(a.toFixed(3)))}));var c=document.getElementById("calculate-btn"),u=document.getElementById("results"),s=document.getElementById("adjusted-distance"),l=document.getElementById("club-option-1"),f=document.getElementById("club-option-2");function h(){var t=localStorage.getItem("weatherData");if(!t)return null;var e=JSON.parse(t),r=e.data,n=e.timestamp;return Date.now()-n<18e5?r:null}function d(t){return p.apply(this,arguments)}function p(){return(p=i(n().mark((function r(o){var a,i,c,u,s,l,f,d,p,y,m,v,g,b,w,E,x;return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,a=h()){r.next=17;break}return r.next=5,new Promise((function(t,e){navigator.geolocation.getCurrentPosition(t,e)}));case 5:return i=r.sent,c=i.coords,u=c.latitude,s=c.longitude,l="https://api.tomorrow.io/v4/weather/realtime?location=".concat(u,",").concat(s,"&apikey=").concat("jG9onLuVeiR4NWlVIO85EWWLCtQ2Uzqv","&units=imperial"),r.next=11,fetch(l);case 11:return f=r.sent,r.next=14,f.json();case 14:d=r.sent,a=d.data,localStorage.setItem("weatherData",JSON.stringify({data:a,timestamp:Date.now()}));case 17:return p=a.values.temperature,y=a.values.pressureSeaLevel||29.92,m=a.values.humidity||0,v=a.values.altitude||0,console.log("Weather conditions:",{temperature:"".concat(p,"°F"),pressure:"".concat(y," inHg"),humidity:"".concat(m,"%"),altitude:"".concat(v," ft")}),g=t(p,y,m),b=e(v),console.log("Environmental effects:",{airDensityMultiplier:g,altitudeMultiplier:b.total}),w=(g-1)*o,E=(b.total-1)*o,console.log("Distance adjustments:",{airDensityEffect:"".concat(Math.round(w)," yards (").concat((100*(g-1)).toFixed(1),"%)"),altitudeEffect:"".concat(Math.round(E)," yards (").concat((100*(b.total-1)).toFixed(1),"%)"),total:"".concat(Math.round(w+E)," yards")}),((x=Math.round(o+w+E))<.85*o||x>1.15*o)&&console.warn("Large distance adjustment detected:",{originalDistance:o,adjustedDistance:x,percentageChange:((x-o)/o*100).toFixed(1)+"%"}),r.abrupt("return",x);case 33:return r.prev=33,r.t0=r.catch(0),console.error("Error calculating adjusted distance:",r.t0),r.abrupt("return",o);case 37:case"end":return r.stop()}}),r,null,[[0,33]])})))).apply(this,arguments)}function y(t){var e=JSON.parse(localStorage.getItem("clubs")||"[]");if(0===e.length)return["No clubs saved","Please add clubs first"];e.sort((function(t,e){return e.distance-t.distance}));for(var r=e[0],n=e[0],o=0;o<e.length;o++)if(e[o].distance<t){r=e[o-1]||e[o],n=e[o];break}return["".concat(r.type," (").concat(r.distance," yards)"),"".concat(n.type," (").concat(n.distance," yards)")]}c.addEventListener("click",i(n().mark((function t(){var e,r,a,i,h,p;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=parseInt(document.getElementById("shot-distance").value)){t.next=4;break}return alert("Please enter a valid distance"),t.abrupt("return");case 4:return c.disabled=!0,c.innerHTML='<i class="fas fa-spinner fa-spin mr-2"></i>Calculating...',t.prev=6,t.next=9,d(e);case 9:r=t.sent,a=y(r),m=2,i=function(t){if(Array.isArray(t))return t}(n=a)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(n,m)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(n,m)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),h=i[0],p=i[1],u.style.display="block",s.textContent="".concat(r," yards"),l.textContent=h,f.textContent=p,t.next=21;break;case 17:t.prev=17,t.t0=t.catch(6),console.error("Error:",t.t0),alert("Error calculating distance. Please try again.");case 21:return t.prev=21,c.disabled=!1,c.innerHTML="Calculate",t.finish(21);case 25:case"end":return t.stop()}var n,m}),t,null,[[6,17,21,25]])}))))})();