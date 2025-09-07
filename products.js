const hotCoffee = document.getElementById("hot-coffee-card");
const icedCoffee = document.getElementById("iced-coffee-card");
const nonCoffee = document.getElementById("non-coffee-card");
const dessert = document.getElementById("dessert");

const hotCoffeeItems = [
    {
        img: "assets/hotcoffee/french-vanilla.jpg",
        name: "French Vanilla", 
        price: "₱230", 
        description: "Smooth coffee blend infused with sweet and creamy vanilla flavor."
    },
    {
        img: "assets/hotcoffee/espresso.jpg",
        name: "Espresso", 
        price: "₱200", 
        description: "A bold and concentrated shot of pure coffee perfection."
    },
    {
        img: "assets/hotcoffee/mocha.jpg",
        name: "Mocha", 
        price: "₱230", 
        description: "A delicious blend of chocolate and coffee for a comforting cup."
    },
    {
        img: "assets/hotcoffee/hazelnut.jpg",
        name: "Hazelnut", 
        price: "₱250", 
        description: "Warm roasted hazelnut flavor mixed with smooth hot coffee."
    }
];

const icedCoffeeItems = [
    {
        img: "assets/iced/capuccino.jpg",
        name: "Capuccino on Ice", 
        price: "₱280", 
        description: "Chilled cappuccino with a bold espresso flavor and creamy texture."
    },
    {
        img: "assets/iced/creamy.jpg",
        name: "Creamy Iced Coffee", 
        price: "₱230", 
        description: "Silky smooth coffee served cold with a touch of cream."
    },
    {
        img: "assets/iced/caramel-iced.jpg",
        name: "Iced Caramel", 
        price: "₱230", 
        description: "Iced espresso drink with sweet caramel and a refreshing finish."
    },
    {
        img: "assets/iced/choco.jpg",
        name: "Chocolate-y Iced Mocha", 
        price: "₱250", 
        description: "Iced coffee with rich chocolate flavor for a decadent treat."
    }
];

const nonCoffeeItems = [
    {
        img: "assets/non/matcha.jpg",
        name: "Iced Matcha Latte", 
        price: "₱280", 
        description: "Chilled green tea matcha latte with creamy milk for a fresh boost."
    },
    {
        img: "assets/non/hot-choco.jpg",
        name: "Hot Chocolate", 
        price: "₱230", 
        description: "Classic hot cocoa made with rich chocolate and steamed milk."
    },
    {
        img: "assets/non/frappe.jpg",
        name: "Strawberry Frappe", 
        price: "₱230", 
        description: "A refreshing, ice-blended treat bursting with sweet strawberry flavor and creamy goodness."
    },
    {
        img: "assets/non/matcha-frappe.jpg",
        name: "Matcha Crème Frappuccino", 
        price: "₱300", 
        description: "Blended creamy matcha with whipped cream—an energizing delight."
    }
];

const dessertItems = [
    {
        img: "assets/dessert/ice-cream-coffee.jpg",
        name: "Coffee Ice Cream", 
        price: "₱200", 
        description: "Creamy ice cream infused with bold coffee flavor for caffeine lovers."
    },
    {
        img: "assets/dessert/mocha.jpg",
        name: "Mocha Cake", 
        price: "₱400", 
        description: "Layered cake with mocha cream and chocolate drizzle."
    },
    {
        img: "assets/dessert/coffee-cake.jpg",
        name: "Coffee Chocolate Cake", 
        price: "₱450", 
        description: "Decadent chocolate cake with a deep coffee flavor in every bite."
    },
    {
        img: "assets/dessert/tiramisu.jpg",
        name: "Tiramisu Cheescake", 
        price: "₱300", 
        description: "Cheesecake version of the classic tiramisu with espresso-soaked layers."
    }
];

function generateCards(products, tagId){
    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "coffee-cards hidden left";

        card.innerHTML = `
            <div class="card-img-container">
                <img src="${product.img}" alt="${product.name}" class="card-img">
            </div>
            <div class="card-body">
                <h1 class="card-name">${product.name}</h1>
                <p class="description">${product.description}</p>
            </div>
            <span class="card-info">
                <p class="price">${product.price}</p>
                <button class="order-btn">Order Now</button>
            </span>
        `;

        tagId.appendChild(card);
    });
}

generateCards(hotCoffeeItems, hotCoffee);
generateCards(icedCoffeeItems, icedCoffee);
generateCards(nonCoffeeItems, nonCoffee);
generateCards(dessertItems, dessert);