

// costante che dichiare un allert e dove scrivere 
const nameInvite = prompt ("DIMMI L'INVITATIO");
// array che riunisce  un insieme 
const invitati = ["giovannino" , "albertino" ,"francesco"];
// costante variabile che sta ad indicare il valore 
let accessConsent= false;
// ripetezione che serve per accedere all'array
for (let i = 0; i<invitati.length;i++){
// condizione per il quale se il nome inseri allert e uguale a quello in lista stampa vero
if (nameInvite === invitati[i]){
    // cambio di variabile nel caso diventasse vera
    accessConsent= true
    console.log (nameInvite)
}}
// una volta verificate le condizioni riverifichiamo e stampiampo
if (accessConsent) {
    console.log("Accesso consentito per :", nameInvite);
    document.getElementById("result").innerHTML = nameInvite;
} else {
    console.log("Accesso negato per :", nameInvite );
    document.getElementById("result").innerHTML = nameInvite ;
}