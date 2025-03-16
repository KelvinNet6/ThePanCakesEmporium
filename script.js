document.addEventListener("DOMContentLoaded", () => {
    const menuItems = [
        { name: "Curry Chicken Plate", price: 7.99 },
        { name: "Fish Fry", price: 8.99 },
        { name: "Pizza", price: 9.99 }
    ];

    const menuContainer = document.getElementById("menu-items");
    const orderList = document.getElementById("order-list");
    let orders = [];

    function renderMenu() {
        menuContainer.innerHTML = "";
        menuItems.forEach((item, index) => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.innerHTML = `
                <p>${item.name} - $${item.price.toFixed(2)}</p>
                <button class="add-btn" data-index="${index}">Add</button>
            `;
            menuContainer.appendChild(menuItem);
        });
    }

    function updateOrders() {
        orderList.innerHTML = "";
        let subtotal = 0;
        orders.forEach((order, index) => {
            subtotal += order.price;
            const orderItem = document.createElement("div");
            orderItem.innerHTML = `
                <p>${order.name} - $${order.price.toFixed(2)}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            orderList.appendChild(orderItem);
        });
        document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById("total").textContent = `$${(subtotal + 8).toFixed(2)}`;
    }

    menuContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("add-btn")) {
            const index = e.target.dataset.index;
            orders.push(menuItems[index]);
            updateOrders();
        }
    });

    orderList.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
            const index = e.target.dataset.index;
            orders.splice(index, 1);
            updateOrders();
        }
    });

    renderMenu();
});
