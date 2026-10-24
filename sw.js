
/* GramConnect service worker: offline support.
   Pehli baar online khulne par app shell + CDN files cache ho jaati hain. */
const CACHE = 'gramconnect-v4';
const SHELL = ['./', 'index.html', 'style.css', 'lang.js', 'i18n.js', 'app.js', 'extra.js', 'farm.jpg'];

self.addEventListener('install', e => {
  // Har file alag add hoti hai: koi ek file missing ho (jaise farm.jpg) to baaki cache hoti rahengi.
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(SHELL.map(url => c.add(url).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || !req.url.startsWith('http')) return;

  // Stale-while-revalidate: cache se turant, background me update.
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(req).then(hit => {
        const net = fetch(req)
          .then(res => {
            if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
            return res;
          })
          .catch(() => hit || (req.mode === 'navigate' ? cache.match('index.html') : undefined));
        return hit || net;
      })
    )
  );
});