const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalFungsi = document.getElementById("modal-fungsi");
const modalPrice = document.getElementById("modal-price");
const jumlahInput = document.getElementById("jumlah");
const closeModal = document.getElementById("close-modal");

// Klik card → buka modal
document.querySelectorAll(".pet-card").forEach(card => {
    card.addEventListener("click", function() {

        const imgSrc = this.querySelector(".pet-img").src;
        const name = this.querySelector(".pet-name").innerText;
        const price = this.querySelector(".pet-price").innerText;
        const fungsi = this.querySelector(".pet-fungsi").innerText;

        modalImg.src = imgSrc;
        modalName.innerText = name;
        modalFungsi.innerText = "Fungsi: " + fungsi;
        modalPrice.innerText = price;

        modal.style.display = "flex";
    });
});

// Tutup modal
closeModal.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
};

// Tombol PESAN → buka IG
document.getElementById("btn-pesan").addEventListener("click", () => {

    const name = modalName.innerText;
    const jumlah = jumlahInput.value;

    const message =
        `Halo kak, saya mau beli ${name} (${jumlah} pcs). Apakah masih ready?`;

    const encodedMessage = encodeURIComponent(message);

    // GANTI USERNAME DI SINI
    const igUsername = "USERNAME_IG_KAMU";

    const url = `https://instagram.com/${igUsername}?text=${encodedMessage}`;

    window.open(url, "_blank");
});
