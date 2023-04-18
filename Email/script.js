/*
Creare un array di indirizzi mail
Chiedere all'utente la sua mail
Confrontarla con il database e vedere se la mail è presente
Stampare un messaggio di avvenuto o mancato riscontro
*/

const emailAddresses = ["pincopallo@gmail.com", "yuppidu@gmail.com", "rossimario@tiscali.it", "gengiscan@gmail.com", "booleaners@gmail.com" ]
const userAddress = prompt("Scrivi la tua Email per verificare che sia presente nel database")

// if (emailAddresses.includes(userAddress)) {
//     console.log(`${userAddress} è presente nell'array`);
//   } else {
//     console.log(`${userAddress} non è presente nell'array`);
// }

let flag = false;
for (let i = 0; i < emailAddresses.length && !flag; i++) {
  if (emailAddresses[i] == userAddress) {
    let flag = true;
  }
}

if (flag) {
  console.log("L\'email è presente nel database")
} else {
  console.log("L\'email non è presente nel database")
}