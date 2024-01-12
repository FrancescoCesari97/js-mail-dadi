// creare due variabili per la creazione casuale di un numero da 1 a 6 sia per il giocatore sia per il computer

let numberUser = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(numberUser);

let numberComputer = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(numberComputer);

const result = document.getElementById("printResult");

// confrontare i risultati per vedere chi ha generato il numero più alto

let backgroundColor = "";

addEventListener("click", function () {
  if (numberUser > numberComputer) {
    result.innerHTML = ` <h1 class="vinto" > HAI VINTO </h1>`;
  } else if (numberUser < numberComputer) {
    result.innerHTML = ` <h1 class="perso"> HAI PERSO </h1>`;
  } else if (numberUser == numberComputer) {
    result.innerHTML = ` <h1 class="pareggio"> PAREGGIO </h1>`;
  }
});
