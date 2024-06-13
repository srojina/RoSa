/* cart database */

let cartItems = [
  {
    user: {
      name: "Ram",
      adress: "abc",
      items: [
        { name: "watch", price: 1000 },
        { name: "keybord", price: 500 },
      ],
    },
  },
  {
    user: {
      name: "Hari",
      adress: "xyz",
      items: [
        { name: "watch", price: 2000 },
        { name: "keybord", price: 5000 },
      ],
    },
  },
  {
    user: {
      name: "Sita",
      adress: "xyz",
      items: [
        { name: "watch", price: 1000 },
        { name: "keybord", price: 500 },
        { name: "mouse", price: 500 },
      ],
    },
  },
];
/* 
    expected output in console
    ram has orderd of 1500
    hari has orderd of 7000
    sita has orderd of 2000
*/

// //ans//

for (let index = 0; index < cartItems.length; index++) {
  let user = cartItems[index].user;
  let total = 0;
  for (let j = 0; j < user.items.length; j++) {
    total += user.items[j].price;
  }
  console.log(`${user.name} has ordered of ${total}`);
}

console.log("\n");


for (let index = 0; index < cartItems.length; index++) {
  let element = cartItems[index];
  let userName = element.user.name;
  let total = 0;

  let subItems = element.user.items;

  for (let subItemindex = 0; subItemindex < subItems.length; subItemindex++) {
    total = total + subItems[subItemindex].price;
  }

  console.log(`${userName} has ordered of Rs. ${total}`); // templete literal //srring literal
}

console.log("\n");



cartItems.forEach((cartItem) => {
  let total = 0;
  cartItem.user.items.forEach((subItem) => {
    total = total + subItem.price;
  });
  console.log(`${cartItem.user.name} has ordered of rs.${total}`);
});
