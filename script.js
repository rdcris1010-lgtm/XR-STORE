function openModal(title, price, desc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('productModal')) {
        closeModal();
    }
}

function searchProducts() {
    let input = document.getElementById('searchInput').value.toUpperCase();
    let products = document.getElementsByClassName('product');

    for (let i = 0; i < products.length; i++) {
        let title = products[i].getElementsByTagName('h3')[0].innerText.toUpperCase();
        if (title.indexOf(input) > -1) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}
