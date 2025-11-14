const pets = [
  { name: "NM Huge Spider 47.02kg", price: "50.000", image: "images/spider.png" },
  { name: "NM Spider 86.63kg", price: "125.000", image: "images/spider.png" },
  { name: "NM Spider 98.50kg", price: "150.000", image: "images/spider.png" },
  { name: "NM Spider 107.63kg", price: "180.000", image: "images/spider.png" },
  { name: "NM Echo Frog 39.26kg", price: "80.000", image: "images/echo_frog.png" },
  { name: "NM Mimic Octopus 39,18kg", price: "80.000", image: "images/mimicoctopus.png" },
  { name: "NM Mimic Octopus 26.68kg", price: "40.000", image: "images/mimicoctopus.png" },
  { name: "NM Mimic Octopus 26.33kg", price: "40.000", image: "images/mimicoctopus.png" },
  { name: "Mimic Octopus base 1kg", price: "8.000", image: "images/mimicoctopus.png" },
  { name: "Mimic Octopus base 2kg", price: "12.000", image: "images/mimicoctopus.png" },
  { name: "Mimic Octopus base 2.5kg", price: "20.000", image: "images/mimicoctopus.png" },
  { name: "Headless Horseman base 1kg+", price: "10.000", image: "images/headless_horseman.png" },
  { name: "Headless Horseman base 2kg+", price: "15.000", image: "images/headless_horseman.png" },
  { name: "RB Queen Bee base 2kg+", price: "15.000", image: "images/queen_bee.png" },
  { name: "M Queen Bee base 2kg+", price: "13.000", image: "images/queen_bee.png" },
  { name: "Queen Bee base 2.09kg", price: "10.000", image: "images/queen_bee.png" },
  { name: "M Butterfly ?kg+", price: "35.000", image: "images/butterfly.png" },
  { name: "DragonFly 1kg+", price: "8.000", image: "images/dragonfly.png" },
  { name: "DragonFly 2kg+", price: "10.000", image: "images/dragonfly.png" },
  { name: "Elephant 1kg+", price: "12.000", image: "images/elephant.png" },
];

const container = document.getElementById("pet-list");

// Ganti ke username Instagram kamu
const instagramDM = "https://ig.me/m/hansoo.4";

pets.forEach(pet => {
  const card = document.createElement("div");
  card.className = "pet-card";

  card.innerHTML = `
    <img src="${pet.image}" alt="${pet.name}" class="pet-img">
    <h3>${pet.name}</h3>
    <p class="price">Rp ${pet.price}</p>
  `;

  // Tambahkan fitur klik gambar → DM Instagram
  const img = card.querySelector("img");
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    window.location.href = instagramDM;
  });

  container.appendChild(card);
});

