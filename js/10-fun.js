// let fruits = ["apple","orange","grapes","kiwi"]
// fruits.push("banana")
// console.log(fruits)




// let user = []
// singnup('ram')
// singnup('shyam')

// console.log(user)


/* Create random users having random background */

let users = [];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function signup(name) {
    let provinces = ["Province 1", "Province 2", "Province 3", "Province 4", "Province 5", "Province 6", "Province 7"];
    let genders = ["Male", "Female", "Other"];
    let religions = ["Hindu", "Buddhist", "Christian", "Muslim", "Other"];

    let newUser = {
        name: name,
        province: getRandomElement(provinces),
        gender: getRandomElement(genders),
        religion: getRandomElement(religions)
    };
    users.push(newUser);
}

signup("Sagar");
signup("Rojina");
signup("Aaisa");

console.log(users);