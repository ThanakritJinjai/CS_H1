var response = require( './bmrclass.js')
let stdin = process.openStdin()
let weight
let height
let age
let sex
let BMR
console.log('Enter your Sex');
console.log('(1)Man');
console.log('(2)Women');
stdin.addListener("data", (set) => {
    if(set == 1){
        console.log('Enter the value weight(kg),height(cm),Age: ')
        stdin.addListener("data", (W) => {
            weight=W
            
            stdin.addListener("data", (H) => {
            height=H
            
            stdin.addListener("data", (A) => {
            age=A
            
            BMR=((response.W * weight)+(response.H * height)-(response.A * age)+5)

        
        console.log('You BMR is :'+ BMR.toFixed(3) )

        stdin.destroy()
        })
        })
        })
    }
    else {
        console.log('Enter the value weight(kg),height(cm),Age: ')
        stdin.addListener("data", (W) => {
            weight=W
            
            stdin.addListener("data", (H) => {
            height=H
          
            stdin.addListener("data", (A) => {
            age=A
            BMR=665+(response.WG * weight)+(response.HG * height)-(response.AG * age)

        
        console.log('You BMR is :'+BMR.toFixed(3) )
        
        stdin.destroy()
        })
        })
        })
    }
})



