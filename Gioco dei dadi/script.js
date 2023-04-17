let numUser = Math.floor(Math.random() * 6) + 1;
document.getElementById("user").innerHTML = numUser;

let numPc = Math.floor(Math.random() * 6) + 1;
document.getElementById("computer").innerHTML = numPc;

if (numUser > numPc) {
    document.getElementById("winner").innerHTML = "HAI VINTO"
} else if (numPc > numUser) {
    document.getElementById("winner").innerHTML = "HAI PERSO"
} else {
    document.getElementById("winner").innerHTML = "PAREGGIO"
}