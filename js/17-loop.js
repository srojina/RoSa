/* cart database */
let cartItems = [
  {
    name: "Ram",
    items: [
      { name: "watch", price: 1000 },
      { name: "keybord", price: 500 },
    ],
  },
  {
    name: "hari",
    items: [
      { name: "watch", price: 2000 },
      { name: "keybord", price: 5000 },
    ],
  },
  {
    name: "sita",
    items: [],
  },
  {
    name: "shyam",
    items: [],
  },
];

/* code here */
let filteredCartItems = [];
cartItems.forEach((cartItem) => {
  if (cartItem.items.length > 0) {
    filteredCartItems.push(cartItem);
  }
});

console.log(filteredCartItems);

/*eligible students */

let user1 = {
  name: "Ram",
  gender: "Male",
  paidStatus: false,
  hasScholarship: false,
  hasMetAttendant: false,
};

let user2 = {
  name: "Sita",
  gender: "Female",
  paidStatus: false,
  hasScholarship: true,
  hasMetAttendant: false,
};

let user3 = {
  name: "Shyam",
  gender: "Male",
  paidStatus: false,
  hasScholarship: true,
  hasMetAttendant: true,
};

// code Here//
let students = [user1, user2, user3];
let eligibleStudents = [];
let nonEligibleStudents = [];

students.forEach((student) => {
  if (
    student.hasScholarship ||
    (student.paidStatus && student.hasMetAttendant === true)
  ) {
    eligibleStudents.push(student);
  } else {
    nonEligibleStudents.push(student);
  }
});

console.log("eligible students", eligibleStudents);
console.log("non eligible students", nonEligibleStudents);


eligibleStudents = students.filter((student)=>{
  if (!((student.hasScholarship || student.paidStatus && student.hasMetAttendant)){
return true })