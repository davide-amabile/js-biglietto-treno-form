var distance = parseInt(prompt("Immetere distanza in km?"));

var age =  parseInt(prompt("Immettere la sua età?"));

// calcolo per il prezzo biglietto intero
var calcDist = (distance * 0.21);

// condizioni per lo sconto
if (age < 18) {
  calcDist = (calcDist - (calcDist / 100 * 20 ));
}
else if ( age >= 65) {
    calcDist = (calcDist - (calcDist / 100 * 40 ));
}

// stampa a video
document.getElementById('ticket').innerHTML = calcDist.toFixed(2) + "&euro;";
