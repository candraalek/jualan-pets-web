const pets = [
  { name: "Titan Spider 86kg+", price: "150.000", image: "images/spider.png" },
  { name: "Semi Godly Spider 98kg+", price: "180.000", image: "images/spider.png" },
  { name: "Godly Spider 107kg+(slod)", price: "200.000", image: "images/spider.png" },
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



