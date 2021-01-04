self.addEventListener('install', function(event){

    console.log('[Service Worker] Installing serrvice worker',event)
});

self.addEventListener('activate', function(event){

    console.log('[Service Worker] Activating serrvice worker',event)
});


self.addEventListener('fetch', function(event){

    console.log('[Service Worker] Fetching serrvice worker',event);
    event.respondWith(fetch(event.request));
});