// aggiungo elementi difficoltà, gioca e creazione quadrato generale
const gameDifficult = document.getElementById("game-difficult");
const buttonPlayGame = document.getElementById("play-button");
const generalSquare = document.getElementById("general-square");

// aggiungo difficoltà con scelta al click
buttonPlayGame.addEventListener("click", function () {
    const livelloScelto = parseInt(gameDifficult.value);
    const boxesToCreate = quantityBoxes(livelloScelto);
    generateBoxes(boxesToCreate);
    // console.log("il livello scelto è: ", livelloScelto);
    // console.log(`box da creare ${boxesToCreate}`);
});

function quantityBoxes(livelloScelto) {
    // let quantity;
    // switch (parseInt(livelloScelto)) {
    //     case 1: quantity = 100; break;
    //     case 2: quantity = 81; break;
    //     case 3: quantity = 49; break;
    // }
    // return quantity;


    // calcoli scelta difficoltà
     //metto il let perchè il valore della "quantity" cambiarà in base alla scelta
    //qui otterrò la quantità di celle da generare
    let quantity;
    if (livelloScelto === 1) {
        quantity = 100;
    } else if (livelloScelto === 2) {
        quantity = 81;
    } else if (livelloScelto === 3) {
        quantity = 49;
    }
    return quantity;
}

