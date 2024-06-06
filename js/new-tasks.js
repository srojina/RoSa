let student1 = {
    name: "Ram",
    gender: "Male",
    paidStatus: false,
    hasScholorship: true,
    hasMetAttendence:true
  };
  
  let student2 = {
    name: "Sita",
    gender: "Female",
    paidStatus: false,
    hasScholorship: false,
    hasMetAttendence: false
  };
  
  let student3 = {
    name: "Shyam",
    gender: "Male",
    paidStatus: true,
    hasScholorship: true,
    hasMetAttendence: false
  };

  

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
        

