// Question 6: You are creating a user profile summary. You have three variables: firstName
// (string), city (string), and isPremiumMember (boolean). Write a single line of code using
// template literals and a ternary operator that generates a sentence like: "Amit from Mumbai
// is a Premium Member." or "Amit from Mumbai is a Regular Member." based on
// the boolean value
let firstName:string="Amit";
let city:string="Mumbai";
let isPremiumMember=false;


console.log(`${firstName} from ${city} is a ${isPremiumMember ? "Premium" : "Regular"} Member. `);

