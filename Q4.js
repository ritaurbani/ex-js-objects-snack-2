// Code Question 4

const chef = {
    name: "Chef Hyur",
    age: 29,
    //anche come function(num=1) {} funzione anonima associata a variabile
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

//RESP:
// const secondChef = { ...chef }
// console.log(secondChef)
//chef non ha proprietà annidate complesse (solo una funzione).
//con lo spread posso copiare funzione,
// mentre structuredcloned and json.parse non copierebbero la funzione
// const secondChef = JSON.parse(JSON.stringify(chef))
// console.log(secondChef) //non avro la proprieta makeBurger
//const secondChef = structuredClone(chef) //ci da errore nel copiare funzione

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché ?
//c`e`oggetto annidato quindi necessito di deep copy
//e`presente l oggetto date quindi possiamo usare structuredClone() perche ci permette di copiare oggetti complessi come date
//con jason.parse la data sara` turned into string