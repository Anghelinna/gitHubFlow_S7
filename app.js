const products = [];
    function addProduct() {
        const input = document.getElementById('product-name');
        const name = input.value.trim();
        if (name !== '') {
        products.push(name);
        renderList();
        input.value = '';
        }
    }
    function renderList() {
        const list = document.getElementById('product-list');
        list.innerHTML = '';
        products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        list.appendChild(li);
        });
    }
    
    renderList();