// Code Question 3

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

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

// Quanti oggetti sono stati creati in memoria durante 
// l'esecuzione di questo codice? 

//RESP:
// 3 objects: hamburger, secondBurger, thirdBurger
// dentro ogni oggetto ce ne sono altri 2
// quindi in totale 6 oggetti