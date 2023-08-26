// swaping the numbers with out using swap
let num1 = 5;
let num2 = 7;
// wrong approch
// num1 = num2;
// num2 = num1;

// Approch-1
// let temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(num1, num2);

// Approch-2
// Destructuring: mane ekta items er structure poriborton kora.
// Destructuring 2 vabe hoi. 1. object to object 2. Array to Array. amra ekane array to array kortesi.
[num1, num2] = [num2, num1];
console.log(num1, num2);
