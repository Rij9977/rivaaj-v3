self.addEventListener('install', e=>{e.waitUntil(caches.open('rivaaj-v3-final-no-xy').then(c=>c.addAll(['./index.html','./manifest.json'])));self.skipWaiting();});
self.addEventListener('activate', e=>{self.clients.claim();});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)).catch(()=>caches.match('./index.html')));});
self.addEventListener('periodicsync', event=>{if(event.tag==='7am-radar'){event.waitUntil(self.registration.showNotification('Rivaaj Radar: Time to run 3 daily ideas',{body:'Keyword: female coaches overwhelmed Kajabi - Open app',icon:'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',badge:'https://cdn-icons-png.flaticon.com/512/4712/4712109.png'}));}});
