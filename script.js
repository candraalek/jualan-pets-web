const pets = [
  { name: "NM Huge Spider 47.02kg", price: "40.000", image: "images/spider.png" },
  { name: "NM Spider 86.63kg", price: "100.000", image: "images/spider.png" },
  { name: "NM Spider 98.50kg", price: "125.000", image: "images/spider.png" },
  { name: "NM Spider 107.63kg", price: "150.000", image: "images/spider.png" },
  { name: "M Ostrich 106.36kg", price: "100.000", image: "images/ostrich.png" },
  { name: "M GrizzlyBear 107.70kg", price: "100.000", image: "images/grizzlybear.png" },
  { name: "NM Echo Frog 39.26kg", price: "80.000", image: "images/echo_frog.png" },
  { name: "NM Mimic Octopus 39,18kg", price: "60.000", image: "images/mimicoctopus.png" },
  { name: "NM Mimic Octopus 26.68kg", price: "40.000", image: "images/mimicoctopus.png" },
  { name: "NM Mimic Octopus 26.33kg", price: "40.000", image: "images/mimicoctopus.png" },
  { name: "Mimic Octopus base 2.5kg+", price: "20.000", image: "images/mimicoctopus.png" },
  { name: "Red Fox base 1kg+(5)", price: "7.000", image: "images/redfox.png" },
  { name: "Red Fox base 2kg+(3)", price: "9.000", image: "images/redfox.png" },
  { name: "Headless Horseman base 1kg+(12)", price: "10.000", image: "images/headless_horseman.png" },
  { name: "Headless Horseman base 2kg+(5)", price: "15.000", image: "images/headless_horseman.png" },
  { name: "Headless Horseman base 2.5kg+(3)", price: "20.000", image: "images/headless_horseman.png" },
  { name: "RB Queen Bee base 2kg+", price: "15.000", image: "images/queen_bee.png" },
  { name: "M Queen Bee base 2kg+", price: "?", image: "images/queen_bee.png" },
  { name: "Queen Bee base 2.09kg", price: "10.000", image: "images/queen_bee.png" },
  { name: "M Butterfly 39.06kg+", price: "35.000", image: "images/butterfly.png" },
  { name: "DragonFly 1kg+", price: "8.000", image: "images/dragonfly.png" },
  { name: "DragonFly 2kg+", price: "10.000", image: "images/dragonfly.png" },
  { name: "Elephant 1kg+(4)", price: "12.000", image: "images/elephant.png" },
  { name: "Pet Tumbal Age 45,50,75", price: "3.000", image: "images/pet_tumbal.png" },
  { name: "Mutasi Golden", price: "50.000", image: "images/petmutationmachine.png" },
  { name: "Mutasi Mega", price: "80.000", image: "images/petmutationmachine.png" },
  { name: "Mutasi Rainbow", price: "120.000", image: "images/petmutationmachine.png" },
  { name: "Joki Mutasi Nightmare", price: "7.000", image: "images/nightmaremutation.png" },
  { name: "Joki Weight 1x Putaran", price: "10.000", image: "images/weight.png" },
  { name: "Joki Weight 10x Putaran", price: "85.000", image: "images/weight.png" },
  { name: "Joki Weight 10x Putaran", price: "85.000", image: "images/weight.png" },
  { name: "Joki Weight 10x Putaran", price: "85.000", image: "images/weight.png" },
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

















