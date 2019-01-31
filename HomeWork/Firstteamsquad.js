var response = require( './ReadTextclass')
let stdin = process.openStdin()
console.log('You choose Football Club')
console.log('(1) ManchesterUnited')
console.log('(2) Liverpool')
console.log('(3) Chelsea')
stdin.addListener("data",(number) => {
    if (number == 1) {
        console.log(response.M)
                
    }
    else if (number == 2) {
        console.log(response.L)
    } 
    else {
        console.log(response.C)

        
    }
stdin.destroy()
})

