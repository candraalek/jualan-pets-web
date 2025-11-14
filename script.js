// Ganti username IG kamu di sini
const instagramDM = "https://ig.me/m/your_instagram_username";

// Data pets — kamu bisa tambah / edit sesuai kebutuhan
const pets = [
  {
    name: "Spider",
    price: "25.000",
    image: "images/spider.jpg"
  },
  {
    name: "Elephant",
    price: "60.000",
    image: "images/elephant.jpg"
  },
  {
    name: "Ostrich",
    price: "40.000",
    image: "images/ostrich.jpg"
  }
  // Tambahkan lagi sesuai jualan kamu
];

const list = document.getElementById("pet-list");

pets.forEach((pet) => {
  const card = document.createElement("div");
  card.className = "pet-card";

  const img = document.createElement("img");
  img.src = pet.image;
  img.alt = pet.name;
  img.className = "pet-img";

  // Klik gambar → otomatis buka DM IG
  img.style.cursor = "pointer";
  img.onclick = () => {
    window.location.href = instagramDM;
  };

  const name = document.createElement("h3");
  name.textContent = pet.name;

  const price = document.createElement("p");
  price.className = "price";
  price.textContent = "Harga: Rp " + pet.price;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(price);
  list.appendChild(card);
});
