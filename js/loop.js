/*
loop
  - for loop
     when we know the exact number of iterations.

  - while

syntax:
for(startingPoint ; condition; mutator){

}

*/



// for( let startingPointPoint=0; startingPoint < 10; startingPoint++){       // we can write index instead of start  //
// console.log(sgtartingPoint) 
// // }

// // /*
// // 0
// // 1
// // 2
// // */

// console.log("end of loop");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}



let fruits = ["apple","orange","kiwi","pear","mango"]
/*
in index 0 , there is apple
in index 1 , there is orange
in index 2 , there is kiwi
*/

for (let i = 0; i <= 2; i++) {
    console.log(i);
    console.log( "in index 0:",fruits[i])

}

for(let index=0; index<=5; index++){
  // console.log({index})
  console.log("in index",index, "there is", fruits[index])
}

// let fruit = ["apple", "orange", "kiwi"];
// for (let i = 0; i < fruit.length; i++) {
//   console.log(` In index[${i}]: there is ${fruit[i]}`);
// }



let users= [
  {userName: 'Ram', password:" password"},
  {userName: 'Hari', password: "password1"},
  {userName: 'Shyam',password: "password2"}
]
// login ("Ram","password")        // login success
// login ("Hari","password")       // login failed

function checkUser(userName, password) {
  for (let i = 0; i < users.length; i++) {
      if (users[i].userName ===userName && users[i].password === password) {
          console.log("login sucess");
          return true ;
      }
  }
  
console.log("login failed")
}
checkUser("Ram","password")

// function login(userName,password) {
//     if (checkUser(userName.password)){
//         console.log(`Login success: ${userName.password}`);
//     } else {
//         console.log(`Login failed: ${userName.password}`);
//     }
// }





