let genders = ["Male","Female","Others"]
let religions = ["Hindu","Muslim","Budhhist","Sikh","Christian"]
let proviences = ["one","two","three","four"]

/* TODO : print random gander, random religion, random proviences */

/*
let randomGenderIndex = Math.floor(Math.random() * genders.length)
console.log(genders[randomGenderIndex])

let randomGReligionIndex = Math.floor(Math.random() * religions.length)
console.log([randomGReligionIndex])

let randomGProvienceIndex = Math.floor(Math.random() * proviences.length)
console.log([randomGProvienceIndex])
*/


function generateRandomValue(arr){
    let randomIndex = Math.floor(Math.random() * arr.length)
    console.log(arr[randomIndex])
}
generateRandomValue(genders)
generateRandomValue(religions)
generateRandomValue(proviences)





