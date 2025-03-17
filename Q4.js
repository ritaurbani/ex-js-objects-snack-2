// Code Question 4

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};



// Qual è il metodo migliore per clonare l’oggetto chef, e perché ?
//chef non ha proprietà annidate complesse (solo una funzione).

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché ?
//structuredClone() perche ci permette di clonare oggetti complessi come date