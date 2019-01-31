var response = require( './calrorieclass.js')
let stdin = process.openStdin()
let Protein
let Carbohydrates
let Fat
let Cal

console.log('Enter your food(Protein,Carbohydrates,Fat)(g): ')
stdin.addListener("data", (P) => {
    Protein=P*response.pro
    stdin.addListener("data", (F) => {
    Fat=F*response.oil
    stdin.addListener("data", (C) => {
    Carbohydrates=C*response.cab
    Cal=Protein+Fat+Carbohydrates

console.log('Foodcalrorie is :' + Cal + 'Cal' )
stdin.destroy()
})
})
})






