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
//4 (+restaurant)
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };//qui se uso jsone parse posso copiare anche annidate-non ci sono oggetti complessi
//5(+hamburger)
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // chef hyur
console.log(secondBurger.maker.name); // chef hyur
console.log(hamburger.maker.restaurant.name); // Hyur's II
console.log(secondBurger.maker.restaurant.name); // Hyur's II

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console ?

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?