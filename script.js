let age1 = prompt("quanti anni hai");
let km = prompt("quanti km devi percorrere");
const prezzo = 0.21;
const prezzoMinorenni = 0.168;
const prezzoOver65 = 0.126;

if (age1 < 18) {
    document.getElementById('my-output').innerHTML = prezzoMinorenni * km;    
} else if(age1 > 65){
    document.getElementById('my-output').innerHTML = prezzoOver65 * km; 
} 
