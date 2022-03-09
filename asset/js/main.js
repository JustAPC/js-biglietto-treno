let km = prompt("Quanti kilometri devi percorrere?");
km = parseInt (km)
console.log("L'utente deve percorrere " + km + " kilometri");

let età = prompt("Quanti anni hai?");
età = parseInt (età);
console.log("L'utente ha " + età + " anni");

let prezzoBase = (km * 0.21);
console.log("Il prezzo base del biglietto è di " + prezzoBase + "€");

let prezzoScontato = 0;

if (età <= 17) {
    console.log ("Minorenne")
    prezzoScontato = prezzoBase - (prezzoBase * 0.2);
    document.getElementById("prezzo-scontato").innerHTML = "Il prezzo del tuo biglietto scontato è di " + prezzoScontato.toFixed(2) + "	&#8364;" 
} else if (età >= 65){
    console.log ("Over 65")
    prezzoScontato = prezzoBase - (prezzoBase * 0.4);
    document.getElementById("prezzo-scontato").innerHTML = "Il prezzo del tuo biglietto scontato è di " + prezzoScontato.toFixed(2) + "	&#8364;" 
} else {
    console.log ("Range medio")
    document.getElementById("prezzo-pieno").innerHTML = "Il prezzo del tuo biglietto è di " + prezzoBase.toFixed(2) + "	&#8364;"
}