const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const stokTersedia = parseInt(card.dataset.stock);
    const inputJumlah = card.querySelector('.jumlah');

    inputJumlah.addEventListener("input", () => {
        let val = parseInt(inputJumlah.value);

        if (isNaN(val) || val < 1) {
            inputJumlah.value = 1;
            return;
        }

        if (val > stokTersedia) {
            inputJumlah.value = stokTersedia;
        }
    });
});
