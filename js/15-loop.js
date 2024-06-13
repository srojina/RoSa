let number = [1,2,3,4,5]

/* code here */

// console.log(numbers);  // [2,4,6,8,10]



let numbers = [1,2,3,4,5];
for(i=0; i<numbers.length; i++){
    numbers[i]= numbers[i]*2
}
console.log(numbers)



// let doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers);


// const nepaliNames = ["Aarav","Aarya","Aasha","Anisha"]
// // for(i=0; i<=users.length; i++)

// console.log(nepaliNames[0]); 
// console.log(nepaliNames[1]); 
// console.log(nepaliNames[2]); 
// console.log(nepaliNames[3]); 

// nepaliNames.push("Aaisa");
// console.log(nepaliNames)
// const users = []

const nepaliNames = [
    { name: "Aarav", email: "aarav@gmail.com", password: "aarav0" },
    { name: "Aarya", email: "aarya@gmail.com", password: "aarya0" },
    { name: "Aasha", email: "aasha@gmail.com", password: "aasha0" },
    { name: "Anisha", email: "anisha@gmail.com", password: "anisha0" },
  ];
  
  console.log(nepaliNames);
  
  console.log(nepaliNames[0].name );
  console.log(nepaliNames[0].email); 
  console.log(nepaliNames[0].password); 
  
  nepaliNames.push({
    name: "Aaisa",
    email: "aaisa@gmail.com",
    password: "aaisa1",
  });
  console.log(nepaliNames);
  
  