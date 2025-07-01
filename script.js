const km = parseInt(prompt(`Inserisci il numero di kilometri che vuoi percorrere`))

const age = parseInt(prompt(`Inserisci la tua età`))

let originalPrice = km * 0.21
//prezzoScontato = prezzoIntero - prezzoIntero * valorePercentuale / 100
//prezzoScontato = prezzoIntero * (1 - valorePercentuale / 100)
//prezzi
if (age < 18) {
  originalPrice = originalPrice - originalPrice * 20 / 100
}
console.log(originalPrice)