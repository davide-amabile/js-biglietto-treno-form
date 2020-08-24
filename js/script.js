// 1.creare evento click con genera
var btnGenera = document.getElementById("genera");
btnGenera.addEventListener ("click",
 function () {

  // rendere visibile ilbiglietto
  document.getElementById("ticket").classList.add("show");

   // prelevare input nome
   var nome = document.getElementById("name").value;
   // stamapare il nome nel biglietto
   document.getElementById("name_passeggero").innerHTML = nome;

   // generare numero random da 1 a 9 Carrozza
   var numCarrozza = Math.floor( Math.random() * 10 ) + 1;
   // stampare numero random da 1 a 9 Carrozza
   document.getElementById("carrozza").innerHTML = numCarrozza;

   // generare numero random da 90000 a 99999 per codice cp
   var codCp = Math.floor( Math.random() * 10000 ) + 90000;
   // stampare numero random da 90000 a 99999
   document.getElementById("codice").innerHTML = codCp;

   // calcolare prezzo fascia sconto biglietto con sconti
   var fasciaEta = document.getElementById("range_eta").value;
   var distanza = document.getElementById("km").value;
   var km = ( distanza * 0.21);
   var fasciaSconto = "Tariffa standard";
   // calcolare sconti
   if ( fasciaEta == "minorenne") {
     km = (km - (km / 100 * 20 ));
     var fasciaSconto = "Sconto minorenne";
   }
   else if ( fasciaEta == "over65") {
       km = (km - (km / 100 * 40 ));
       var fasciaSconto = "Sconto over 65";
   }

   // stampare prezzo dati_biglietto e fascia sconti
   document.getElementById("prezzo").innerHTML = km.toFixed(2) +"&euro;";
   // stampare fascia Sconto
   document.getElementById("offerta").innerHTML = fasciaSconto;
 }
);

// creare evento click con annulla

var btnAnnulla = document.getElementById("annulla");
btnAnnulla.addEventListener("click",
function() {

  // rendere invisibile il biglietto
  document.getElementById("ticket").classList.remove("show");

  // rendere form vuoti
  document.getElementById("name").value = "";
  document.getElementById("range_eta").value = "";
  document.getElementById("km").value = "";
}
);
