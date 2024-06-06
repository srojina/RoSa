let student1 = {
    name: "Ram",
    gender: "Male",
    paidStatus: false,
    hasScholorship: true,
    
  };
  
  let student2 = {
    name: "Sita",
    gender: "Female",
    paidStatus: false,
    hasScholorship: false,
   
  };
  
  let student3 = {
    name: "Shyam",
    gender: "Male",
    paidStatus: true,
    hasScholorship: true,
    
  };


/*
if(student1.paidStatus){
    console.log(student1.name,"can give exam.");
  }
  else{
    console.log(student1.name,"can't give exam.");
  }
  */

  function checkeligibility(student){
    let prefix="Mr.";
    if (student.gender=="female"){
      prefix="Mrs.";
    }
  
    if (student.paidStatus ) {
            console.log(student.name, "can give exam.")
        }
        else if(student.hasScholorship == true){
            console.log( student.name, " can give exam.")
        }
        else {
            console.log( student.name, " can't give exam.")
        }
    }

  checkeligibility(student1)
  checkeligibility(student2)
  checkeligibility(student3)
        



   
