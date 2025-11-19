// DATA FUNGSI PET
const petInfo = {
    "NM Huge Spider 47.02kg": "Every 3:20 minutes, weaves a 30.42 stud web that lasts for 16.90s. Pets on the web advance cooldown on extra 1.50s every second & plants grow an additional 25.35s every second.",
    "NM Spider 86.63kg": "Every 3:20 minutes, weaves a 36 stud web that lasts for 20s. Pets on the web advance cooldown on extra 1.50s every second & plants grow an additional 30s every second.",
    "NM Spider 98.50kg": "Every 3:20 minutes, weaves a 36 stud web that lasts for 20s. Pets on the web advance cooldown on extra 1.50s every second & plants grow an additional 30s every second.",
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
        const stock = card.getAttribute("data-stock");
        const qty = parseInt(card.getAttribute("data-qty")) || 1;  // AMBIL JUMLAH STOK

        modalName.textContent = name;
        modalImg.src = img;
        modalFunction.textContent = petInfo[name] || "Fungsi belum tersedia.";

        // === ATUR JUMLAH PEMBELIAN SESUAI STOK ===
        buyAmount.max = qty;
        buyAmount.value = 1;
        buyAmount.disabled = (qty === 1); // disable jika cuma punya 1

        // Jika sold
        if (stock === "sold") {
            orderBtn.disabled = true;
            orderBtn.textContent = "SOLD OUT";
            orderBtn.style.background = "#777";
        } else {
            orderBtn.disabled = false;
            orderBtn.textContent = "PESAN";
            orderBtn.style.background = "#4CAF50";
        }

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

    const username = "hansoo.4";

    const appLink = `instagram://user?username=${username}`;
    const webLink = `https://www.instagram.com/${username}/?text=${message}`;

    window.location.href = appLink;

    setTimeout(() => {
        window.open(webLink, "_blank");
    }, 800);
};
