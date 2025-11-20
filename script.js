// GANTI DENGAN LINK IG ANDA
const instagramURL = "https://instagram.com/hansoo.4";

// modal elements
const modal = document.getElementById("petModal");
const modalImg = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalFunction = document.getElementById("modalFunction");

const orderBtn = document.getElementById("orderBtn");
const orderOptions = document.getElementById("orderOptions");
const confirmOrder = document.getElementById("confirmOrder");

// Klik kartu pet
document.querySelectorAll(".pet-card").forEach(card => {
    card.addEventListener("click", () => {

        modal.style.display = "block";
        modalImg.src = card.dataset.images;
        modalName.innerText = card.dataset.name;

        const stock = card.dataset.stock;
        modalFunction.innerHTML = "Stock: <b>" + stock + "</b>";

        // RESET setiap buka modal
        orderBtn.style.display = "block";   // tampilkan tombol pesan
        orderOptions.style.display = "none"; // sembunyikan konfirmasi terlebih dulu

        // Atur tombol konfirmasi
        if (stock === "sold") {
            confirmOrder.disabled = true;
            confirmOrder.style.background = "#999";
            confirmOrder.style.cursor = "not-allowed";
        } else {
            confirmOrder.disabled = false;
            confirmOrder.style.background = "#28a745";
            confirmOrder.style.cursor = "pointer";
        }
    });
});

// Close modal
document.querySelector(".closeBtn").onclick = () => {
    modal.style.display = "none";
};

// Setelah klik tombol Pesan
orderBtn.onclick = () => {
    orderBtn.style.display = "none";   // tombol PESAN hilang
    orderOptions.style.display = "block"; // muncul tombol KONFIRMASI
};

// Jika ready → klik konfirmasi menuju IG
confirmOrder.onclick = () => {
    if (!confirmOrder.disabled) {
        window.location.href = instagramURL;
    }
};

