let fruits = [
  {
    name: "Kiwi",
    quantity: 10,
  },
  {
    name: "orange",
    quantity: 4,
  },
  {
    name: "apple",
    quantity: 5,
  },
];

// console.log("there is", fruits[0].quantity, "kg kiwi.");
// console.log("there is", fruits[1].quantity, "kg orange. ");
// console.log("there is", fruits[2].quantity, "kg apple.");

for (let index = 0; index <= 2; index++) {
  console.log("there is", fruits[index].quantity, "kg", fruits[index].name);
}

