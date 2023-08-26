// Who is the tallest? Find the max number in an array
function tallest(value) {
  let taller = value[0];
  for (let i = 1; i < value.length; i++) {
    let number = value[i];

    if (number > taller) {
      taller = number;
    }
  }
  return taller;
}
let arr = [167, 190, 120, 165, 137];
let result = tallest(arr);
console.log(result, " is the tallest");

// Who is the lowest? Find the min number in an array
function lowest(num) {
  let low = num[0];
  for (let j = 1; j < num.length; j++) {
    let value = num[j];
    if (low > value) {
      low = value;
    }
  }
  return low;
}
let ar = [345, 54, 123, 78, 554, 344, 245];
let finalresult = lowest(ar);
console.log(finalresult, "is the lowest");

function add(a, b) {
  return a + b;
}
console.log(add("adam" + "eve"));

