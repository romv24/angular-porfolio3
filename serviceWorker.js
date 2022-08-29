const staticDevCoffee = "dev-ALPIC-site-v1"
const assets = [
 "/",
 "/index.html",
 "/css/style.css",
 "src\assets\Argentina.svg",
 "src\assets\banderita.png",
 "src\assets\banner2alpic.png",
 "src\assets\consulta.png",
 "src\assets\leyes discapacidad.jpg",
 "src\assets\logo ALPIC.svg",
 "src\assets\portada Banner ALPIC.png",
 "src\assets\transparencia.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevALPIC).then(cache => {
            cache.addAll(assets)
        })
    )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith( caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
        })
    )
})