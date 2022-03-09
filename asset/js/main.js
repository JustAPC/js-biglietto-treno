let km = prompt("Quanti kilometri devi percorrere?");
km = parseInt (km)
console.log("L'utente deve percorrere " + km + " kilometri");

let età = prompt("Quanti anni hai?");
età = parseInt (età);
console.log("L'utente ha " + età + " anni");

let prezzoBase = (km * 0.21);
console.log("Il prezzo del biglietto è di " + prezzoBase + "€");

if (età <= 17) {
    console.log ("Minorenne")
} else {
    console.log ("Maggiorenne")
}

if (età >= 65) {
    console.log ("Over 65")
} else {
    console.log ("Under 65")
}
