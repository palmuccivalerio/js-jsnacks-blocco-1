// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.





let numero = prompt("Inserisci un numero di 4 cifre:");

//  variabile per memorizzare la somma delle cifre
let sommaCifre = 0;

// Separare le cifre del numero e sommarle insieme
for (let i = 0; i < numero.length; i++) {
    // Convertiamo ogni cifra in una stringa e poi in un numero intero
    let cifra = parseInt(numero[i]);
    
    // Aggiungiamo la cifra corrente alla somma delle cifre
    sommaCifre += cifra;
}

// Stampiamo la somma delle cifre
console.log("La somma delle cifre di", numero, "è", sommaCifre);