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
// genera quadrati
function generateBoxes(boxesNumber) {
    // su riga 66 resetto quello generato sul generalSquare.
    // se non faccio questo reset le celle create si andranno
    // ad aggiungere sullo stesso generalSquare
    generalSquare.innerHTML = "";
    // calcolo le row delle celle che sarebbe la radice quadrata di 100,81,49
    const boxesXrow = Math.sqrt(boxesNumber);
    // calcolo la size di ogni cella con ???
    const boxesSize = 100 / boxesXrow;

// ciclo per creare ogni singola cella
    //  e dichiarare la size e la classe assegnata su css
    // le aggiungo sul generalSquare con append

    //  e al click dovranno eseguire una funzione (dichiarata dopo)
    for (let i = 0; i < boxesNumber; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = boxesSize + "%";
        box.style.height = boxesSize + "%";
        generalSquare.append(box);
        box.textContent = i + 1;
        box.addEventListener("click", boxOnClick);
    }
}
// click colorato sul numero / casella scelta
function boxOnClick() {
    this.classList.toggle("box-on-click");
}
