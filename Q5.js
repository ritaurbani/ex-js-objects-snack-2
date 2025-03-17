// Code Question 5

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // chef hyur
console.log(secondBurger.maker.name); // chef hyur
console.log(hamburger.maker.restaurant.name); // ?
console.log(secondBurger.maker.restaurant.name); // ?

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console ?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?