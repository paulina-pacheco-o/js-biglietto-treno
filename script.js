const km = parseInt(prompt(`Inserisci il numero di kilometri che vuoi percorrere`))

const age = parseInt(prompt(`Inserisci la tua età`))

let finalPrice;
const originalPrice = km * 0.21

//prezzoScontato = prezzoIntero - prezzoIntero * valorePercentuale / 100
//prezzoScontato = prezzoIntero * (1 - valorePercentuale / 100)
//prezzi


if (age < 18) {
  finalPrice = originalPrice - originalPrice * 20 / 100
}

else if (age > 65) {
  finalPrice = originalPrice - originalPrice * 40 / 100
}


else {
  finalPrice = originalPrice
}

console.log(`Il prezzo finale del biglietto è di ${finalPrice.toFixed(2)}`)
