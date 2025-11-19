// DATA FUNGSI PET
const petInfo = {
    "NM Huge Spider 47.02kg": "Fungsi: Menambah damage dan kecepatan panen.",
    "NM Spider 86.63kg": "Fungsi: Meningkatkan drop item langka.",
    "NM Spider 98.50kg": "Fungsi: Menambah kapasitas panen.",
    // Tambah semua pet kamu di sini
};

// Elemen modal
const modal = document.getElementById("petModal");
const modalImg = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalFunction = document.getElementById("modalFunction");
const orderBtn = document.getElementById("orderBtn");
const orderOptions = document.getElementById("orderOptions");
const buyAmount = document.getElementById("buyAmount");
const confirmOrder = document.getElementById("confirmOrder");

// Tutup modal
document.querySelector(".closeBtn").onclick = () => {
    modal.style.display = "none";
    orderOptions.style.display = "none";
};

// Klik pet-card
document.querySelectorAll(".pet-card").forEach(card => {
    card.addEventListener("click", () => {
        const name = card.getAttribute("data-name");
        const img = card.getAttribute("data-images");

        modalName.textContent = name;
        modalImg.src = img;
        modalFunction.textContent = petInfo[name] || "Fungsi belum tersedia.";

        modal.style.display = "block";
    });
});

// Tombol PESAN
orderBtn.onclick = () => {
    orderOptions.style.display = "block";
};

// Konfirmasi PESAN → DM Instagram
confirmOrder.onclick = () => {
    const name = modalName.textContent;
    const amount = buyAmount.value;

    const message = encodeURIComponent(
        `Halo kak, saya mau pesan:\n\n${name}\nJumlah: ${amount}\n\nApakah masih ready?`
    );

    // Ganti username IG kamu!
    window.open(`https://www.instagram.com/direct/t/hansoo.4/?text=${message}`, "_blank");
};


