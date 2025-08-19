
document.querySelectorAll('.filter a').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        const category = this.textContent.toLowerCase();
        const products = document.querySelectorAll('.product-items');

        products.forEach(product => {
            if (category === "all" || product.dataset.category === category) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});
