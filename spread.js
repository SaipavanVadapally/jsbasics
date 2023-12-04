const kellysPets = ['dog', 'cat', 'fish']
const jessiesPets = ['snake', 'rat', 'piglet']
let allPets = [...kellysPets, ...jessiesPets]
allPets = [...allPets, 'goat']

// console.log(allPets)

const kellysPetsNames = {dog: 'Benny', cat: 'Whisky', fish: 'Nemo'}
const jessiesPetsNames = {snake: 'Silver', rat: 'Barnie', piglet: 'Dave'}
const allPetsNames = {...kellysPetsNames, ...jessiesPetsNames}

const franksPetsNames = {...kellysPetsNames}

kellysPetsNames.dog = 'Gail'

// console.log(kellysPetsNames)
// console.log(franksPetsNames)

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lettersArr = [...letters]

console.log(lettersArr)
