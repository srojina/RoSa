console.log("js connected");

/* variable*/
greeting = "hi";
console.log("greeting", greeting);

console.log("hi Ram");
console.log("hi Sita");
console.log("hi Hari");

age = 10;
// person name="ram"// wrong
// personname="ram"// wrong //difficult to read.
person_name = "Ram"; //snake_case
personName = "Sita"; //camelCase

// We ca use
// 1position="static"//  wrong
position1 = "static";
position2 = "relative";

console.log(person_name, "age is", age);
console.log(personName, "age is", age);

// name="ram"// wrong
fullName = "Ram";
// class=10  //wrong
grade = 10;
isActive = false;

fullName = "Hari Bdr.";
isActive = true;

console.log(fullName);
console.log(isActive);

/* let vs cost */

var shape = "circle";
var shape = "square";
var shape = "oval";
console.log(shape);

let color = "red";
console.log(color);
// let color="red" //cannot redeclare varaiable already create using let keyword
color = "blue";
color = "black";

/* decleration vs initilization */
let size; //decleration
size = "small"; //initilization
size = "medium"; // re-initilization
size = "large"; //re-initilization

console.log(size);

let price = 1000;
price = 500;
console.log(price);

const PI = 3.14; // surumia initilaized garna parxa const ma
// PI = 3.14 // wrong
console.log(PI);

const ROLE = "customer"; //suppose fetched from database
ROLE = "admin";
console.log(ROLE);

let apiData = "";
apiData = "products data";
console.log(apiData);

/* Data Type */

let userName = "Ram";
userName = "Ram";
let userAge = "22";
let userActiveStatus = "true";

/*
1.text - string
2.number - number
          -whole number
          -decimal/float/double
3.true/false - boolen
4.undefined(unique data types) // in js only
5.null // empty values
*/

let count; //undefined datatypes //
console.log("count", count);

let userData = null;
/* on button click, fetch users data 
userData = "user data"
*/

let pricePrice = 1000;
pricePrice = "One thouusand"; // yoh in lekha painxa //
console.log(price);
