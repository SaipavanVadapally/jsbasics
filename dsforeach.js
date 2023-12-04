//+44 7876519385

// function addInternationalCode(num, index){
//     console.log(`${index} +44 ${num}`)
// }

// const numbersWithInternationalCode = []

// phoneNumbers.forEach(function(num){
//     numbersWithInternationalCode.push(`+44 ${num}`)
// })

// const numbersWithInternationalCode = phoneNumbers.map(function(num){
//     return `+44 ${num}`
// })

// console.log(numbersWithInternationalCode)

const phoneNumbers = ['7876519385', '7583958601', '7159023672', '7563829046', '7567231983']


const validatedPhoneNumbers = phoneNumbers.map(
    function (num) {
        return `+44 ${num}`
    }
).filter(
    function (num) {
        return num.length == 14
    })

console.log(validatedPhoneNumbers)

