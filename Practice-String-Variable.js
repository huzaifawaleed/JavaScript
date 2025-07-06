// Create a variable userName and assign your name to it. Write a function that returns a greeting: "Hello, <userName>!".


// simple method

let userName = "Huzaifa Waleed"


function greet(userName){
return userName
}
console.log("hello" + greet(userName))



//concatenation method
//  let username = "Huzaifa Waleed"

// function greet(){
// return `Hello, ${username}`
// }
// console.log(greet())


//Concatenate two strings: first name and last name stored in two variables and print the full name.

let firstName = "Huzaifa"
let lastName = "Waleed"
console.log(`${firstName} ${lastName}`)  // By using Template Literals
//console.log(firstName + " " + lastName)


//Create a variable city and write a function that prints "You live in <city>".

let city = "Karachi"

function address(){
    return `I live in ${city}`
}
console.log(address())


//Write a function that takes a string and returns its length.

function abc(Text){
    return Text.length
}
console.log(abc("Huzaifa"))
// This is returning the typeof 
function abcd(Text){
    return typeof Text
}
console.log(abcd(true))

//Write a function that takes a sentence and returns the sentence in all uppercase letters

function my(Text){
    return Text.toUpperCase();
}
console.log(my("huzaifa"))

function my1(Text){
    return Text.toLowerCase();
}
console.log(my1("HUZAIFA"))
