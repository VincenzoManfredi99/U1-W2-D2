//Esercizio 1

const x = 5
const y = 10

if(y > x){
    console.log('Il numero x è più grande di y')
}

//Esercizio 2

if(y!==5){
    console.log('Not equal')
}

//Esercizio 3

if( x % 5 === 0){
    console.log('divisibile per 5')
}

//Esercizio 4

const a = 24
const b = 16
if( a === 8 || b === 8){
    console.log("Uno dei due numeri è 8")
} else if (a+b===8 || a-b === 8) {
    console.log("L'addizione o la sottrazione dei due numeri è uguale a 8")
} else {
    console.log("Le condizioni non sono soddisfatte")
}