
// Creiamo un array vuoto per memorizzare i numeri dispari
let numeriDispari = [];

// Chiediamo all'utente di inserire un numero per sei volte
for (let i = 0; i < 6; i++) {
    // Chiediamo all'utente di inserire un numero
    let numero = parseInt(prompt("Inserisci un numero:"));

    // Controlliamo se il numero inserito è dispari
    if (numero % 2 !== 0) {
        // Se è dispari, lo aggiungiamo all'array dei numeri dispari
        numeriDispari.push(numero);
    }
}

// Stampiamo l'array dei numeri dispari
console.log("Numeri dispari inseriti:", numeriDispari);