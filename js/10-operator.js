/* 
      Arithmetic Operators 
       +  -  /  *  %

       Assignment operators
       =

       comaprion opertors
       ==
       >=
       <=

       logical operators
       AND
       NOR
       NAND

*/

let services = ["one","two","three"]

console.log( 0 % 2)   // 0  // right
console.log( 1 % 2)   // 1  // left
console.log( 2 % 2)   // 0 // right
console.log( 3 % 2)   // 1 // left

let count
count = count + 1
count += 10
  

// count ++   // pre-increment  //
// ++ count  // post-increment //


let user1 ="Ram"
let user2 = "Ram"
console.log(user1 == user2)

let product1={
    name:"mouse",
    price:100,
}
let product2 ={
    name: "keyboard",
    price: 1000
}


console.log(services.length >= 3)

console.log(1 =="1")
console.log("1" + "1") 

/* typecast */
console.log(1 + "1")  //string
console.log(1- "1")  // integer
console.log("asdf"-"ad") 



// ARROW function //



function double(input){
    let output = input * 2
    return output
}

