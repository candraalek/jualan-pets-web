// GANTI DENGAN LINK IG ANDA
const instagramURL = "https://instagram.com/USERNAME_ANDA";

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

        // Tampilkan tombol setelah klik "Pesan"
        orderOptions.style.display = "none";

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

// Tampilkan tombol konfirmasi setelah klik Pesan
orderBtn.onclick = () => {
    orderOptions.style.display = "block";
};

// Jika ready → klik konfirmasi menuju IG
confirmOrder.onclick = () => {
    if (!confirmOrder.disabled) {
        window.location.href = instagramURL;
    }
};
