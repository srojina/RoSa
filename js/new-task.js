let user1 = {
    name: "Ram",
    gender: "Male",
    paidStatus: false
  };
  
  let user2 = {
    name: "Sita",
    gender: "Female",
    paidStatus: true
  };
  
  let user3 = {
    name: "Shyam",
    gender: "Male",
    paidStatus: false
  };
  
  function formatOutput(user) {
    let prefix;
    let canAttend;
  
    if (user.gender === "Male") {
      prefix = "Mr. ";
    } else {
      prefix = "Mrs.";
    }
  
    if (user.paidStatus) {
      canAttend = "can attend exam.";
    } else {
      canAttend = "cannot attend exam.";
    }
  
    return `${prefix}${user.name} ${canAttend}`;
  }
  
  console.log(formatOutput(user1));
  console.log(formatOutput(user2));
  console.log(formatOutput(user3));