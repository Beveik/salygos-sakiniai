
"use strict";
//Javascript "Sąlygos sakiniai"

//1. Suprogramuokite skriptą, kuris rastų didžiausią skaičių iš dviejų aprašytų.
//Papildomai:
//*Abu skaičiai yra paimami iš dviejų skirtingų input laukelių.
// *Rezultatas išvedamas neaktyviame(disabled) input laukelyje.


//2. Suprogramuokite skriptą, kuris rastų didžiausią skaičių iš trijų aprašytų.
// Papildomai:
// *Visi skaičiai yra paimami iš skirtingų input laukelių.
// *Rezultatas išvedamas neaktyviame(disabled) input laukelyje.
// var isvedimoElementas = document.querySelector(#Rez);
// isvedimoElementas.value = kintamasis;

//  var pirmas=13;
//  var antras=8;


// function didziausias() {

// var pirmas = parseInt(document.getElementById("skaicius1").value);
// var antras = parseInt(document.getElementById("skaicius2").value); 

//  if (pirmas>antras) {
 
//      document.getElementById("rezultatas").innerHTML = pirmas;
//     //  console.log("Didžiausias skaičius yra ", pirmas);
//  }
//  else if (pirmas<antras) {
//     document.getElementById("rezultatas").innerHTML = antras;
//     // console.log("Didžiausias skaičius yra ", antras);
//  }
//  else if (pirmas==antras)
//  {
//     document.getElementById("rezultatas").innerHTML = "Skaičiai vienodi";
//     // console.log("Abu skaičiai vienodi");
//  }
//  else
//  {
//     document.getElementById("rezultatas").innerHTML = "Įvedėte ne skaičių";
//     // console.log("Įvedėte ne skaičių");
//  }
// }

function didziausias() {

var a = parseInt(document.getElementById("skaicius1").value);
var b = parseInt(document.getElementById("skaicius2").value);
var c = parseInt(document.getElementById("skaicius3").value);
 
  if(a>b && a>c){
    document.getElementById("rezultatas").innerHTML = a;
    // console.log("Didžiausias skaičius yra ", a);
  }
    else if(b>a && b>c)
  {
    document.getElementById("rezultatas").innerHTML = b;
    // console.log("Didžiausias skaičius yra ", b);
  }
  else if (c>a && c>b)
  {
    document.getElementById("rezultatas").innerHTML = c;
    // console.log("Didžiausias skaičius yra ", c);
  }
else if (a==b && a==c && b==c)
 {
    document.getElementById("rezultatas").innerHTML = "Skaičiai vienodi";
    // console.log("Abu skaičiai vienodi");
 }
  else {
    document.getElementById("rezultatas").innerHTML = "Įvedėte ne skaičių";
    // console.log("Įvedėte ne skaičių");
  }
}