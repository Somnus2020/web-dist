!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(O){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),u=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=x(u,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,u),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}r.wrap=f;var h={};function d(){}function y(){}function p(){}var v={};s(v,u,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(j([])));m&&m!==n&&o.call(m,u)&&(v=m);var w=p.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(e,r){function n(i,u,a,c){var s=l(e[i],e,u);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return y.prototype=p,s(w,"constructor",p),s(p,"constructor",y),y.displayName=s(p,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(_.prototype),s(_.prototype,a,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var u=new _(f(t,e,n,o),i);return r.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},b(w),s(w,c,"Generator"),s(w,u,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,u){try{var a=t[i](u),c=a.value}catch(s){return void r(s)}a.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var u=t.apply(e,n);function a(t){r(u,o,i,a,c,"next",t)}function c(t){r(u,o,i,a,c,"throw",t)}a(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.9a99ed07.js","./useTitle-legacy.31538c92.js","./index-legacy.530595c1.js","./SettingItem-legacy.fd29ebdd.js","./index-legacy.de1200bb.js","./index-legacy.ae8e030e.js","./item_type-legacy.d1f1c701.js"],(function(t){"use strict";var r,i,u,a,c,s,f,l,h,d,y,p,v,g,m,w,b,_;return{setters:[function(t){r=t.a,i=t.m,u=t.aW,a=t.b9,c=t.bI,s=t.h,f=t.bP,l=t.d2,h=t.E,d=t.C,y=t.ba,p=t.n,v=t.I,g=t.ae,m=t.a8},function(t){w=t.b},function(t){b=t.G},function(t){_=t.I},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=r();w("manage.sidemenu.other");var x=o(i(""),2),k=x[0],L=x[1],E=o(i(""),2),j=E[0],S=E[1],O=o(i(""),2),I=O[0],A=O[1],C=o(i(""),2),G=C[0],$=C[1],N=o(i(""),2),P=N[0],q=N[1],T=o(i([]),2),F=T[0],Y=T[1],M=o(u((function(){return a.get("/admin/setting/list?groups=".concat(b.ARIA2,",").concat(b.SINGLE))})),2),R=M[0],U=M[1],W=o(u((function(){return a.post("/admin/setting/set_aria2",{uri:k(),secret:j()})})),2),z=W[0],B=W[1],D=o(u((function(){return a.post("/admin/setting/set_qbit",{url:I(),seedtime:G()})})),2),H=D[0],J=D[1],K=function(){var t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U();case 2:r=t.sent,y(r,(function(t){var e,r,n,o,i;L((null===(e=t.find((function(t){return"aria2_uri"===t.key})))||void 0===e?void 0:e.value)||""),S((null===(r=t.find((function(t){return"aria2_secret"===t.key})))||void 0===r?void 0:r.value)||""),q((null===(n=t.find((function(t){return"token"===t.key})))||void 0===n?void 0:n.value)||""),A((null===(o=t.find((function(t){return"qbittorrent_url"===t.key})))||void 0===o?void 0:o.value)||""),$((null===(i=t.find((function(t){return"qbittorrent_seedtime"===t.key})))||void 0===i?void 0:i.value)||""),Y(t)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();K();var Q=o(u((function(){return a.post("/admin/setting/reset_token")})),2),V=Q[0],X=Q[1],Z=c().copy;return s(m,{get loading(){return R()},get children(){return[s(f,{mb:"$2",get children(){return t("settings_other.aria2")}}),s(l,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[s(_,h((function(){return F().find((function(t){return"aria2_uri"===t.key}))}),{get value(){return k()},onChange:function(t){return L(t)}})),s(_,h((function(){return F().find((function(t){return"aria2_secret"===t.key}))}),{get value(){return j()},onChange:function(t){return S(t)}}))]}}),s(d,{my:"$2",get loading(){return z()},onClick:(o=n(e().mark((function r(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:n=e.sent,y(n,(function(e){p.success("".concat(t("settings_other.aria2_version")," ").concat(e))}));case 4:case"end":return e.stop()}}),r)}))),function(){return o.apply(this,arguments)}),get children(){return t("settings_other.set_aria2")}}),s(f,{my:"$2",get children(){return t("settings_other.qbittorrent")}}),s(l,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[s(_,h((function(){return F().find((function(t){return"qbittorrent_url"===t.key}))}),{get value(){return I()},onChange:function(t){return A(t)}})),s(_,h((function(){return F().find((function(t){return"qbittorrent_seedtime"===t.key}))}),{get value(){return G()},onChange:function(t){return $(t)}}))]}}),s(d,{my:"$2",get loading(){return H()},onClick:(r=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J();case 2:r=t.sent,y(r,(function(t){p.success(t)}));case 4:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)}),get children(){return t("settings_other.set_qbit")}}),s(f,{my:"$2",get children(){return t("settings.token")}}),s(v,{get value(){return P()},readOnly:!0}),s(g,{my:"$2",spacing:"$2",get children(){return[s(d,{onClick:function(){Z(P())},get children(){return t("settings_other.copy_token")}}),s(d,{colorScheme:"danger",get loading(){return V()},onClick:(r=n(e().mark((function r(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:n=e.sent,y(n,(function(e){p.success(t("settings_other.reset_token_success")),q(e)}));case 4:case"end":return e.stop()}}),r)}))),function(){return r.apply(this,arguments)}),get children(){return t("settings_other.reset_token")}})];var r}})];var r,o}})}))}}}))}();
