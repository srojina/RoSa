
/* templete literal*/

let input1 = 1
let input2 = 2
let result1 = input1 + input2
console.log( "the sum of " +  +input1 + " and "  + input2 + " is " + result1)  //output: 3

let input3 = 3
let input4 = 4
let result2 = input3 + input4
console.log(input3 + "+" + input4 + "=" + result2) //Output: 7

let input5 = 5
let input6 = 6
let result3 = input5 + input6
console.log(input5 + "+" + input6 + "=" + result3)  //Output: 11

let input7 = 100
let input8 = 500
let result4 = input7 + input8
console.log(input7 + "+" + input8 + "=" + result4)  // Output : 600



/* function // group */

/* call the function 0r execute function */

function double(input){
    console.log("double of " + input + " is " +input*2)
}
double(2)
double(100)
double(3)

function triple(input){
    console.log("triple of " + input+ " is " +input*3)
}
triple(3)
triple(4)



function sum(firstInput,secondInput){
    console.log("firstinput",firstInput)
    console.log("secondinput",secondInput)

    let result = firstInput + secondInput
    console.log(firstInput+ "+" +secondInput + "=" +result)
}
sum(1,2)
sum(77,33)

/* while calling sum (1,2) internally js sets as
let firstInput = 1
let secondInput =2 
*/
