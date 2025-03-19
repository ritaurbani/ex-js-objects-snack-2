// Code Question 1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // 'Double Cheese Burger'
console.log(secondBurger.name); // 'Double Cheese Burger'

//controllo quanti oggetti ho- due variabili che contengono una reference 
// a un oggetto sono uguali tra di loro solo quando le references sono identiche
console.log(hamburger===secondBurger) //true


// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console ?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? //un solo oggetto