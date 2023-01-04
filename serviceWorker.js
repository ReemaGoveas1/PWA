const staticDevTea = "Tea-site-cached"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/green_tea.jpg",
  "/images/masala_tea.jpg",
  "/images/ice_tea.jpg",
  "/images/matcha_tea.jpg",
  "/images/hibiscus_tea.jpg",
  "/images/Genmaicha.jpg",
  "/images/Cinnamon_Tea.jpg",
  "/images/Lemongrass_tea.jpg",
  "/images/Bancha.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevTea).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })