const pets = [
  { name: "Spider", price: "150.000", image: "images/spider.png" },
  { name: "Bunny", price: "120.000", image: "images/bunny.png" },
  { name: "Fox", price: "180.000", image: "images/fox.png" },
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
