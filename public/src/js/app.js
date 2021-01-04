if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then((){
        console.log('Service worker registered!');
    });

}

window.addEventListener('beforeinstallprompt', function(event){
    console.log('before install prompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
})