const Jim = 84;
const Dela = 99;
const Chinku = 77;
if (Jim > Dela && Jim > Chinku) {
  console.log("Jim will get the cake");
} else if (Dela > Jim && Dela > Chinku) {
  console.log("Dela will get the cake");
} else {
  console.log("Chinku will get the cake");
}

// Homework-1
// Write a function that will take 3 numbers and return max numbers
// 1st time do it with if-else, 2nd time do it using Math.max or Math.min

// Homework-1 using if-else
function max() {
  const Jim = 84;
  const Dela = 99;
  const Chinku = 77;
  if (Jim > Dela && Jim > Chinku) {
    return "Jim will get the cake";
  } else if (Dela > Jim && Dela > Chinku) {
    return "Dela will get the cake";
  } else {
    return "Chinku will get the cake";
  }
}
let result = max();
console.log(result);

// Homework-1  using Math.max

function mathMax() {
  let Jim = 84;
  let Dela = 99;
  let Chinku = 77;

  const value = Math.max(Jim, Dela, Chinku) + " will get the delicious cake";
  return value;
}
let final = mathMax();
console.log(final);

// Homework-2
// Write a function that will take 3 parameters and will return the min number
// 1st time do it with if-else, 2nd time do it using Math.max or Math.min

// Homework-2 using if else  min number

function minNumber(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return "Dela got the lowest number";
  } else if (num2 < num1 && num2 < num3) {
    return "Jim got the lowest number";
  } else {
    return "Chanku got the lowest number";
  }
}
let dela = 55;
let jim = 78;
let chanku = 67;

let finalResult = minNumber(dela, jim, chanku);
console.log(finalResult);

//Homework 2 using Math.min
function minNum(num1, num2, num3) {
  let results = Math.min(num1, num2, num3) + " will get the lowest number";
  return results;
}

let Della = 55;
let Jimi = 78;
let Chankuu = 67;

let finalResults = minNum(Della, Jimi, Chankuu);
console.log(finalResult);
