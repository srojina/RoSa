let number = [1, 2, 3, 4, 5];
let doubelNumbers = [];

// let numbers = [1,2,3,4,5];
// for(i=0; i<numbers.length; i++){
//     numbers[i]= numbers[i]*2
// }
// console.log(numbers)

number.forEach((number) => {
  doubelNumbers.push(number * 2);
});
console.log(doubelNumbers);

console.log("\n");

let oddNumbers = number.filter((number) => {
  if (number % 2 !== 0) {
    return true;
  }
});

console.log("\n");
let tripleNumbers = number.map((numbers) => {
  return numbers * 3;
});
console.log(tripleNumbers);

console.log("\n");

const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;
console.log(sum(10, 20));
console.log(sum(20, 20));

console.log("\n");

const quadraple1 = (number) => number * 4;
console.log(quadraple1(6));
console.log(quadraple1(4));

console.log("\n");

let names = ["Ram", "Hari", "Shyam", "Gita"];
let users = [];

names.forEach((name, index) => {
  users.push({
    name: name,
    email: `${name}@gmail,com`,
    password: `${name}${index}`,
  });
});
console.log(users);

console.log("\n");

let fakeUsers = names.map((name, index) => {
  return {
    name,
    email: `${name}@gmail,com`,
    password: `${name}${index}`,
  };
});
console.log(fakeUsers);

console.log("\n");
/* asynchronous task */

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //    resolve("products data recieved")
  }, 200);
});
console.log(promise);

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("error", err);
  });
console.log("after promise");


