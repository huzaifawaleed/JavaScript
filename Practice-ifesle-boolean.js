//Create a variable isLoggedIn = true. Write an if-else statement to print:

let isLoggedIn = true

if(isLoggedIn == true){
    console.log("Log in Successfully")
}
else if(isLoggedIn == false){
    console.log("Log in first")
}


//Write a function that checks if a person is eligible to vote.

function Check(){
    let age = 17

    if(age >= 18){
        console.log("You are eligible to vote")
    }
    else if(age < 18){
    console.log("You are not eligible to vote")
    }
}
Check();

//Write a function that checks if a string contains the word "JavaScript" (use .includes()).
function Check1(Text){
    return Text.includes("Huzaifa")
}
console.log(Check1("I am Huzaifa"))




//Write a function that takes a name and returns "Good Morning, <name>!".

let Name = "Huzaifa"
function greeting(Name){
    return `Good AfterNoon ${Name}`
}
console.log(greeting(Name))



//Write a function that takes a number and returns:

//"Fizz" if divisible by 3,

//"Buzz" if divisible by 5,

//"FizzBuzz" if divisible by both,

//The number itself otherwise.



function fizzBuzz(num) {
  if (num % 4 === 0 && num % 7 === 0) {
    return "FizzBuzz";
  } else if (num % 4 === 0) {
    return "Fizz";
  } else if (num % 7 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}
console.log(fizzBuzz(28)); // FizzBuzz
console.log(fizzBuzz(8));  // Fizz
console.log(fizzBuzz(14)); // Buzz
console.log(fizzBuzz(2));  // 7



//Write a function isPasswordStrong(password) that checks:
//Length ≥ 8
//Contains "@" symbol
//Return true or false.


let password = "huzaif@a"   // This is a variable 
function isPasswordStrong(password){   // Here 'password' is parameter in the function 
   if (password.length >= 8 && password.includes(("@"))) {
    return true
   }
   else{ 
   return false
   }
}
console.log(isPasswordStrong(password)) // Here giving the argument when call the function




//Write a function that takes a user's marks and returns a grade.

let marks = 45

function result(marks){
    if (marks >= 80 && marks <= 100) {
        return 'A'
    }

    else if (marks >= 70 && marks <= 79) {
        return 'B'
    }

    else if (marks >= 60 && marks <= 69) {
        return 'C'
    }

    else if (marks >= 50 && marks <= 59) {
        return 'D'
    }
    else{
        return 'F'
    }
}
console.log(result(marks))