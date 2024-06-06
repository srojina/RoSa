
let users = ["ram","Hari","Shyam"]

/* research on : nested objects*/
let person1 = {
    name: "Hari",
    age: 22,
    contact: 98765677,

/*address , pernament address: district, provience, wrd, temoprary address: district,provience,ward */
}
console.log(person1);

let person2 = {
    name: "Sagar",
    age: 23,
    contact: 987656789,
     pernmaentaddress : {
        provience: "Gandaki",
        district:"Gorkha",
        tole:"abc",
        municipaltity:{
            name:"Shaidh Lakhan",
            ward: 9,
        },
    },
    temopraryaddress :{
            provience: "Bagmati",
            district:"Chitwan",
            tole:"xyz",
            municipaltity:{
                name:"Ratnanagar",
                ward: 15,
        },
    },
}
console.log(person2)


// console.log(friends);
//console.log(courses);
//console.log(products);


let courseGTitle = "mern"
let courseDuration = "3 months"
let courseTopics = ["html","Css","js"]
let courseTiming = "4-5"


let course ={
    title:"mern",
    duration: "3 months",
    topics: ["html","css","js"],
    timing:"4-5"
}