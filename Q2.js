// Code Question 2

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

//nuovo hamburger che ha come ingredients la reference a stesso array
const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad


// Ricordati che gli Array, come gli oggetti, sono dei Reference Type(Tipi di Riferimento)!
// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console ?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//RESP:
//  Sono state creati 3 arrays: hamburger e secondBurger e ingredients(questo non e duplicato)
