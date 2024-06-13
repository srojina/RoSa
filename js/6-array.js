let students = [
  {
    name: "Hari",
    courses: [{ title: "mern" }],
  },
];

console.log(students);
let classes = ["one", "two", "three"]; // section ABC , classteacher , students

console.log(classes);

//let carts = ["watch", "keyboard", "mouse", "watch"]
/*who ordered watch: name,email,address:homeadress:street name,ward-no,office address,
quantity of watch ordered
rate of the product
total price of the product
date of the product ordered*/

let carts = [
  {
    items: "watch",
    customers: [
      {
        name: "rojina",
        email: "rojina12@gmail.com",
        address: {
          home: "chitwan",
          streetname: "bishal chowk",
          ward: 5,
        },
        quantity: 1,
      },
      {
        name: "suprim",
        email: "suprim12@gmail.com",
        address: {
          home: "tandi",
          streetname: "bikas chowk",
          ward: 6,
        },
        quantity: 3,
      },
    ],
  },
  {
    items: "keyboard",
    customer: [
      {
        name: "sagar",
        email: "sagar123@gmail.com",
        address: {
          home: "gorkha",
          streetname: "sami chowk",
          ward: 7,
        },
        quantity: 2,
      },
      {
        name: "sita",
        email: "sita222@gmail.com",
        address: {
          home: "kawasoti",
          streetname: "triveni chowk",
          ward: 7,
        },
        quantity: 4,
      },
    ],
  },
  {
    items: "watch",
    customer: [
      {
        name: "Muna",
        email: "muna12@gmail.com",
        address: {
          home: "ktm",
          streetname: "gongabu chowk",
          ward: 2,
        },
        quantity: 2,
      },
      {
        name: "Aavash",
        email: "aavash2@gmail.com",
        address: {
          home: "dhading",
          streetname: "Himal chowk",
          ward: 3,
        },
        quantity: 4,
      },
    ],
  },
];
console.log(carts);

carts = [
  {
    productTitle: "watch",
    quantity: 12,
    rate: 12300,
    date: "12-13",
    user: {
      name: "Sagar",
      email: "sagar12@gmail.com",
      address: {
        homeAddress: {},
        officeAddress: {},
      },
    },
  },
];
