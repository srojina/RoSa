let usersData = [
    {
        name:"ram",
        age: 23,
        contact:77777
    },
    {
        name:"Hari",
        age:-22,   //change this to 22 
        contact:11111
    },
    {
        name:"Shyam",
        age:21,
        contact:222222
    }
]
console.log(usersData[1].age)
userData[1].age = 15
console.log(usersData)

let users =["ram","Hai","Shaym"]
console.log(users[1])
users[1]="Hari"



let person = {
    name: "hari",
    age: 12,
    contact: 12321343,
    address: {
      permananetAddress: {
        province: "1",
        district: "jhapa",
        tole: "abc",
        municipality: {
          name: "jhapa nagarpalika",
          ward: 5,
        },
      },
      temporaryAddress: {
        province: "3",
        district: "kathamdnu",
        tole: "balaju",
        municipality: {
          name: "kathmandu nagarpalika",
          ward: 15,
        },
    },
},
}


let students = [
  {
    name: "ram",
    courses: [
      {
        title: "web",
      },
      {
        title: "ux",
      }
    ],
  },
  {
    name: "hari",
    courses: [
      { title: "mern" }
    ],
  }, {
    name: "sita",
    courses: [
      {
        title: "web",

      },
      {
        title: "ux",//change this ui ux
      },
    ],
  },
]
console.log(students)
students[2].courses[1].title = "Ui Ux";
console.log(students[2].courses[1].title);
students[2].courses[0].title = "js";


let classes = [
  {
    class: "one",

    sections: [
      {
        group: "A",
        classTeacher: "ram bdr"
      },
      {
        student: 1,
      }

    ],

  },
  {
    class: "two",
    sections: [
      {
        group: "B",
        classTeacher: "mukunda sharma"
      },
      {
        student: 12,
      },
    ],
  },
  {
    class: "three",
    sections: [
      {
        group: "c",
        classTeacher: "surdhan shauda"
      },
      {
        student: 34,
      },
    ],
  },

]
console.log(classes)
classes[2].sections[1].student = 90;
