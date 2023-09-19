if('serviceWorker' in navigator) {
    window.addEventListener('load', function(){
        this.navigator.serviceWorker.register('sw.js')
        .then(res => console.log('service worker registrado', res))
        .catch(err => console.log('service worker no registrado', err));
    });
}