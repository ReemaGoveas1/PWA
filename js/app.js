const container = document.querySelector(".container")
const coffees = [
  { name: "Green Tea", image: "images/green_tea.jpg" },
  { name: "Masala Tea", image: "images/masala_tea.jpg" },
  { name: "Ice Tea", image: "images/ice_tea.jpg" },
  { name: "Matcha", image: "images/matcha_tea.jpg" },
  { name: "Hibiscus Tea", image: "images/hibiscus_tea.jpg" },
  { name: "Genmaicha", image: "images/Genmaicha.jpg" },
  { name: "Cinnamon Tea", image: "images/Cinnamon_Tea.jpg" },
  { name: "Lemongrass Tea", image: "images/Lemongrass_tea.jpg" },
  { name: "Bancha", image: "images/Bancha.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }