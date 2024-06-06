

function detectgender()
{
let genders = ["Male","Female","Others"]
let index = Math.random() * genders.length;
let genderindex = Math.floor(index);

return genders[genderindex];
}
console.log(detectgender());

// let genders = ["Male","Female","Others"]
// let index = Math.random() * genders.length;
// let genderindex = Math.floor(index);
// console.log(genders[genderindex]);


function detectreligion(){
let religions = ["Hindu","Muslim","Budhhist","Sikh","Christian"]
let int = Math.random() * religions.length;
let religionsindex = Math.floor(int);
return religions[religionsindex]
}
console.log(detectreligion());

// let religions = ["Hindu","Muslim","Budhhist","Sikh","Christian"]
// let int = Math.random() * religions.length;
// let religionsindex = Math.floor(int);
// console.log(religions[religionsindex]);


function findprov(){
    let proviences = ["one","two","three","four"]
    let hello = Math.random() * proviences.length;
    let provienceindex = Math.floor(hello);
    return proviences[provienceindex]
}
console.log(findprov());

// let proviences = ["one","two","three","four"]
// let hello = Math.random() * proviences.length;
// let provienceindex = Math.floor(hello);
// console.log(proviences[provienceindex]);


 
   
//let hello = Math.flooor(Math.random() * proviences.length); correct//

