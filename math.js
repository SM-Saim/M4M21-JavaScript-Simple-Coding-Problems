// Math
// Math keyword er moddei opetaton gula halaite hobe
// Iwant 5*6 using Math.pow
const value = Math.pow(5, 6);
console.log(value);

// set someting basd on the difference of numbers using Math.abs
const num1 = 20;
const num2 = 50;
const gap = Math.abs(num1 - num2);
if (gap < 5) {
  console.log("You both can be friends");
} else {
  console.log("You both can not be friends");
}

// Round- jekono sonka k e nearest purno sonkhai niea asbe.
const number = 2.6777;
const fullNumber = Math.round(number);
console.log(fullNumber);

// ceil- mane jei sonkai ase tar uporer purno sonkha tai chole jabe
// floor-mane jei sonkai ase tar nicher purno sonkha tai chole jabe
const num = 34.256;
const final = Math.ceil(num);
const finalFloor = Math.floor(num);
console.log(final);
console.log(finalFloor);

// Random -shudu random number likle 0-1 jekono ekta ramdom number diea dibe.
// er sathe kisu gunn kore dile taile 0-1 er baireo ramdom number print korte parbe.
// Type-1
console.log(Math.random());
//Type-2
console.log(Math.random() * 100);
//Type-3
const random = Math.random() * 100;
const roundNumber = Math.round(random);
console.log(roundNumber);

// Ex:4
for (let i = 0; i < 20; i++) {
  const numb = Math.round(Math.random() * 6);
  console.log(numb);
}
