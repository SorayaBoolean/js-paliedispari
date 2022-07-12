//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
const numeroUser = parseInt (prompt ('scegli un numero da 1 a 5'));
console.log (numeroUser);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
const numeroPc = Math.floor (Math.random() * 4) + 1;
console.log (numeroPc)

const somma  = (numeroUser + numeroPc) ;
console.log (somma)

if (somma % 2 == 0) {
    console.log ('pari')
    alert ('hai vinto tu')
} else {
    console.log ('dispari')
    alert ('ha vinto il pc')
};






//funzione struttura di base

//function numeroRandomPc () {

//Math.floor (Math.random() * 4) + 1;

//}