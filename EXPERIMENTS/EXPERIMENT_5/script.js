// // Pop up message shows like alert box
// let userName = prompt("What is your name?");

// alert("Welcome, " + userName + "!");
// // the message on the webpage using document.write().
// document.write("<h2>Hello " + userName + "! Welcome here.</h2>");


// let age = prompt("Enter your age:");

// if (age >= 18 && age <= 60) {
//   alert("You are eligible to vote!");
//   document.write("<p>You are eligible to vote!</p>");
// } else if (age > 60) {
//   alert("You are a senior citizen voter!");
//   document.write("<p>You are a senior citizen voter.</p>");
// } else {
//   alert("You are not eligible yet.");
//   document.write("<p>You are not eligible yet. Come back when you're 18!</p>");
// }

// ✅ Ternary 
// let message =
//   age >= 18
//     ? (age > 60 ? "You are a senior citizen voter." : "You are eligible to vote!")
//     : "You are not eligible yet.";

// console.log(message);



let numbers = [2, 4, 6]; //map
let doubled = numbers.map(num => num * 2);
console.log(doubled); 

let names = ["Alex", "Bob", "Charlie"]; //forEach
names.forEach(name => console.log("Hello", name));

let ages = [12, 25, 18, 40, 15]; //filter
let adults = ages.filter(age => age >= 18);
console.log(adults); 

let nums = [10, 20, 30];   //reduce
let total = nums.reduce((sum, num) => sum + num, 0);
console.log(total); 



