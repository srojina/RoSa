let countries = [
  {
    code: "af",
    name: "Afghanistan",
    path: "afghanistan",
  },
  {
    code: "np",
    name: "Nepal",
    path: "nepal",
  },
  {
    code: "fr",
    name: "France",
    path: "france",
  },
  {
    code: "it",
    name: "Italy",
    path: "italy",
  },
];

// function countryCode1(countryName) {
//   for (let index = 0; index < countries.length; index++) {
//     let element = countries[index]
//     if (element.name == countryName) {
//       console.log(element.code)
//       return;
//     }
//     }
//     console,log("invalid")
//   }

// countryCode1("Nepal");


/*
falsy values in javascript
  -false
  -0
  -1
  -null
  -""
  -NaN
*/


function countryCode(countryname){
    let countryCode= " "
    for(let index = 0; index < countries.length; index++){
        let element = countries[index]
        if (element.name == countryName){
            countryCode = element.code
            console.log("matched")
            break;
        }else{
            console.log("try another country")
        }
    }
}
if (countryCode){
   console.log("matched country code",countryCode)
}
else{
    console.log("invalid")
}