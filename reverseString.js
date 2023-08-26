// Reverse a string and Reverse words in a sentence
// note that , length 4, kintu index 3 projonto, tali length -1 hoise.
function reverseSrting(string) {
  let value = "";
  for (let i = string.length - 1; i >= 0; i--) {
    let result = string[i];
    value = value + result;
  }
  return value;
}
let sentence = "Be the best";
let outPut = reverseSrting(sentence);
console.log("Reverse sentence", outPut);

//Reverse a stentence where word will not be revesed, only sentence will be revrsed

function words(line) {
  let split = line.split(" ");
  console.log(split);

  let final = [];
  for (let i = split.length - 1; i >= 0; i--) {
    let element = split[i];
    final.push(element);
  }
  return final.join(" ");
}
let sen = "I will shine on tomorrow";
let results = words(sen);
console.log(results);
