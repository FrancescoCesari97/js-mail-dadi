const result = document.getElementById("result");
result.innerHTML = "";

// creare una lista di email con un Array

const emails = ["Wind@gmail.com", "Fire@gmail.com", "Water@gmail.com"];
console.log(emails);

// chiedere con un promt l'email all'utente

const emailUser = prompt("inserisci la tua email");
console.log(emailUser);

// verificare se l'email inserita
if (
  emailUser == emails[0] ||
  emailUser == emails[1] ||
  emailUser == emails[2]
) {
  result.innerHTML = ` <h1> Accesso approvato </h1>`;
} else {
  if (
    emailUser != emails[0] ||
    emailUser != emails[1] ||
    emailUser != emails[2]
  ) {
    result.innerHTML = ` <h1> Accesso Negato</h1>`;
    emailUser = prompt("email sbagliata riprovare ad inserire");
  }
  //
}
