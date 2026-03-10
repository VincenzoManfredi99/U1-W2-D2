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

//Esercizio 5

let costoDiSpedizione = 10
let totalShoppingCart = 45

if(totalShoppingCart > 50){
    console.log(totalShoppingCart)
} else {
    console.log(totalShoppingCart + costoDiSpedizione)
}

//Esercizio 6

let blackFriday = (totalShoppingCart * 80)/100

if(blackFriday > 50){
    console.log(blackFriday)
} else {
    console.log(blackFriday + costoDiSpedizione)
}

//Esercizio 8 
 
if(typeof x === 'number'){
    console.log("x è un numero")
} else{
    console.log("x non è un numero")
}

//Esercizio 9

if(y % 2 === 0){
    console.log('y è pari')
} else {
    console.log('y è dispari')
}

//Esercizio 10

  let val = 7

  if (val < 10) {
      console.log("Meno di 10");
    } else if (val > 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

    //Esercizio 11

    const me = {

    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
    city: "Toronto"
}

delete me.lastName

me.skills.pop()

console.log(me)

let numeri= []

numeri.push(1,2,3,4,5,6,7,8,9,10)

numeri[9]= 100

console.log(numeri)