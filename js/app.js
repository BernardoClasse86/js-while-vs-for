console.log('hello')

// Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt. 
// Se il numero è dispari, lo salviamo in una lista. 
// Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari. 
// Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).
// Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.

// ciclo while per chiedere 10 numeri 
// se il numero che esce fuori e' dispari lo inseriamo in console altrimenti lo scartiamo
// inseriamo numeri finche non abbiamo 10 numeri dispari dentro la lista dei numeri dispari
// una volta che abbiamo tutti i numeri li inseriamo uno ad uno dentro all array vuoto

let number

let remainder

let totalCount = 10

let startCount = 0

let oddNumbers = []
console.log(oddNumbers)

while (startCount < totalCount) {

    number = parseInt(prompt('add a number'))
    console.log('choosen number', number)

    remainder = number % 2

    if (remainder === 0 || isNaN(number)){

    }

    else if (remainder === 1){

        startCount++

        oddNumbers.push(number)
        console.log(oddNumbers, 'odd array')
    }
}

for (i = 0; i < oddNumbers.length; i++){
    console.log(oddNumbers[i])
}











