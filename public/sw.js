if(!self.define){let e,s={};const i=(i,t)=>(i=new URL(i+".js",t).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(t,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>i(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-cb477421"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/EeFOwzTTgYYpIjIAzHbRi/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/EeFOwzTTgYYpIjIAzHbRi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/173-32f9ff9bdfb525b3.js",revision:"EeFOwzTTgYYpIjIAzHbRi"},{url:"/_next/static/chunks/23-df62406fd8df4a89.js",revision:"EeFOwzTTgYYpIjIAzHbRi"},{url:"/_next/static/chunks/app/_not-found/page-05886c10710171db.js",revision:"EeFOwzTTgYYpIjIAzHbRi"},{url:"/_next/static/chunks/app/layout-6313a5673d6bb09a.js",revision:"EeFOwzTTgYYpIjIAzHbRi"},{url:"/_next/static/chunks/app/page-2320b1b0c79a9af4.js",revision:"EeFOwzTTgYYpIjIAzHbRi"},{url:"/_next/static/chunks/fd9d1056-2821b0f0cabcd8bd.js",revision:"EeFOwzTTgYYpIjIAzHbRi"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"EeFOwzTTgYYpIjIAzHbRi"},{url:"/_next/static/chunks/main-app-471ee890b586d435.js",revision:"EeFOwzTTgYYpIjIAzHbRi"},{url:"/_next/static/chunks/main-f5a3a80567218eaf.js",revision:"EeFOwzTTgYYpIjIAzHbRi"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"EeFOwzTTgYYpIjIAzHbRi"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"EeFOwzTTgYYpIjIAzHbRi"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-879f858537244e02.js",revision:"EeFOwzTTgYYpIjIAzHbRi"},{url:"/_next/static/css/d076efd8cee096b1.css",revision:"d076efd8cee096b1"},{url:"/app-icon.png",revision:"857bd9a33b27aa8b988e227200e66b72"},{url:"/manifest.json",revision:"9a13e5ee279a214d32968c5fc0623805"},{url:"/nnzzImage.jpeg",revision:"088c59e89f4755a95ec260d23cd50d86"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"offlineCache",plugins:[new e.ExpirationPlugin({maxEntries:200,maxAgeSeconds:86400})]}),"GET")}));
