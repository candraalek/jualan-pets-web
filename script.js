// modal
const modal = document.getElementById("petModal");
const modalImg = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalFunction = document.getElementById("modalFunction");

const orderBtn = document.getElementById("orderBtn");
const orderOptions = document.getElementById("orderOptions");
const buyAmount = document.getElementById("buyAmount");
const confirmOrder = document.getElementById("confirmOrder");

document.querySelectorAll(".pet-card").forEach(card => {
    card.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = card.dataset.images;
        modalName.innerText = card.dataset.name;

        modalFunction.innerHTML = 
            "Stock: <b>" + card.dataset.stock + "</b>";
    });
});

// Close modal
document.querySelector(".closeBtn").onclick = () => {
    modal.style.display = "none";
    orderOptions.style.display = "none";
};

// Open order box
orderBtn.onclick = () => {
    orderOptions.style.display = "block";
};

// Confirm order
confirmOrder.onclick = () => {
    alert("Pesanan dikonfirmasi! Jumlah: " + buyAmount.value);
};
