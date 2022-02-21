let age1 = prompt("Quanti anni hai");
let km = prompt("Quanti km devi percorrere");
const prezzo = 0.21;
const minorenni = 0.21 - 0.042;
const over65 = 0.21- 0.084;


if (age1 < 18) {
    let prezzoMinorenni = minorenni * km;
    document.getElementById('under18').innerHTML ="prezzo scontato per under18 &euro;" + prezzoMinorenni.toFixed(2);   
} else if(age1 > 65){
    let prezzoOver65 = over65 * km;
    document.getElementById('over65').innerHTML ="Prezzo scontato per  over65 &euro;" + prezzoOver65.toFixed(2); 
} else{
    document.getElementById('ticket-price').innerHTML = prezzo * km;
} 

document.getElementById('ticket-price').innerHTML = `
<!-- stampa dati utente -->
<div>
    <span>Distanza coperta: ${km} Km - Anni: ${age1}</span>
<hr>
</div>
<!-- stampa dettagli prezzo -->
<div>
    <p>Sconti: 20% per i minorenni - 40% per gli over 65</p>
    <span>Prezzo base km : ${prezzo} &euro;</span>
    <hr>
</div>
<div>
<strong>Prezzo complessivo: ${km * prezzo } &euro;</strong>
</div>
`;