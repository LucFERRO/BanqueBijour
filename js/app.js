// import { user } from "./user.js";

// console.dir(user);

// console.log(
//   `hello ${user.firstname}, i know your password :-) ${user.password}`
// );

// document.querySelector("#firstname").textContent = user.firstname;

// on stocke toutes les opérations de compte dans un array[]
let operationsCompte = [];
operationsCompte.push(["+", "salaire", 1520]);
operationsCompte.push(["-", "achat PS4", 499.99]);
operationsCompte.push(["-", "achat TV", 599]);

// on déclare nos variables
let solde = 0;
let operator = "";
let devise = "€";

let totalAccount = document.getElementById('total');

let credit = document.getElementById('detailsCredit')
let debit = document.getElementById('detailsDebit')
let totalCredit = document.getElementById('totalCredit')
let totalDebit = document.getElementById('totalDebit')

let li = document.createElement("li")
let span = document.createElement("span")

let liId = 1
let liIdString = liId.toString()    //New id pour les li



// function calcul(operateur, libelle, montant) {}
// // on execute la function
// // calcul();



// send form, add operation
const formulaire = document.getElementById("ajoutOperation");
formulaire.addEventListener("submit", function (e) {
    e.preventDefault();
    // on récupère les valeurs des champs du formulaire
    let operateur = document.getElementById('operation').value
    let libelle = document.getElementById('intitule').value
    let montant = parseFloat(document.getElementById('montant').value)
    // console.log(result);
    // console.log(textForm);
    // console.log(montant);
    // on stocke ces valeurs dans un array[]
    let arrayOperations = [operateur,libelle,montant]
    // on ajoute cet array dans notre array global operationsCompte
    operationsCompte.push(arrayOperations);

    // on execute la fonction pour actualiser

    // if (operateur == '+'){
    //     li.innerHTML = "<span class='intitule'>"+libelle+"</span><span class='montant txt-color-gazoil'>"+montant+" "+devise+"</span>";
    //     credit.appendChild(li);
    // }
    // if (operateur == '-'){
    //     li.innerHTML = "<span class='intitule'>"+libelle+"</span><span class='montant txt-color-red'>"+montant+" "+devise+"</span>";
    //     debit.appendChild(li);
    // }

    // if (operateur == '+'){
    //     credit.appendChild(newLineCredit(libelle,montant));
    // }
    // if (operateur == '-'){
    //     debit.appendChild(newLineDebit(libelle,montant));
    //   }



    if (operateur == '+'){
      let NewLi = document.createElement('li');
      NewLi.innerHTML = "<span class='intitule'>"+libelle+"</span><span class='montant txt-color-gazoil'>"+montant+" "+devise+"</span>";
      credit.appendChild(NewLi);
    } 
    if (operateur == '-'){
      let NewLi = document.createElement('li');
      NewLi.innerHTML = "<span class='intitule'>"+libelle+"</span><span class='montant txt-color-red'>"+montant+" "+devise+"</span>";
      debit.appendChild(NewLi);
    }



    liId++;



    // if (operateur == '+'){
    // }
    // if (operateur == '-'){

    // }

    console.log(arrayOperations);
    console.log(operationsCompte);
    console.log(operationsCompte.length);
    console.log(operationsCompte[0]);
    console.log(operationsCompte[operationsCompte.length-1]);
    console.log(operationsCompte[operationsCompte.length-1][0]);















    let creditTot = 0
    let debitTot = 0

    operationsCompte.forEach(element => {
      if(element[0]=='+'){
        creditTot = creditTot + element[2];
      } else {
        debitTot = debitTot + element[2];
      }
  });

  let AccountTot = creditTot-debitTot

  totalCredit.innerHTML = " "+creditTot+" "+devise;
  totalDebit.innerHTML = " "+debitTot+" "+devise;

  totalAccount.innerHTML = " "+Math.round(AccountTot*100)/100+" "+devise;       // Round AccountTot

    // on reset le formulaire
    formulaire.reset();
});
