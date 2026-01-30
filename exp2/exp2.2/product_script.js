function filterProducts() {
    let option = document.getElementById("filter").value;
    let container = document.getElementById("products");
    let products = Array.from(container.children);

    products.forEach(product => {
        if (option === "") {
            product.style.display = "block";
        } 
        else if (product.dataset.category === option) {
            product.style.display = "block";
        } 
        else {
            product.style.display = "none";
        }
    });
}
