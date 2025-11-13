const pets = [
  { name: "NM Semi Huge Spider 40kg", price: "50.000", image: "images/spider.png" },
  { name: "NM Titan Spider 86.63kg", price: "150.000", image: "images/spider.png" },
  { name: "NM Semi Godly Spider 98.50kg", price: "180.000", image: "images/spider.png" },
  { name: "NM Godly Spider 107.63kg", price: "200.000", image: "images/spider.png" },
  { name: "NM Echo Frog 39.26kg", price: "80.000", image: "images/echo_frog.png" },
  { name: "NM Mimic Octopus kg", price: "80.000", image: "images/mimicoctopus.png" },
];

const container = document.getElementById("pet-list");

pets.forEach(pet => {
  const card = document.createElement("div");
  card.className = "pet-card";
  card.innerHTML = `
    <img src="${pet.image}" alt="${pet.name}">
    <h3>${pet.name}</h3>
    <p class="price">Rp ${pet.price}</p>
  `;
  container.appendChild(card);
});











