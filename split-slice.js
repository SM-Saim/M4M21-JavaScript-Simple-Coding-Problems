//split -alada alada onshe vag kore fela
const line = "Sometimes I am alone, sometines not, hello";
console.log(line.split(" ")); // space er jaiga theke alada kore dibe
console.log(line.split(",")); // comma jekane jekane ase oi onujaii alada kore dibe
console.log(line.split("")); //not space mane sob items e alada kore dibe induding space

// slice -mane choto ekta tukra
const lyrics = "What is faint will soon be clear";
console.log(lyrics.slice(8, 13));

//substring -slice er moto
const line1 = "What is lotted, can not be blotted";
console.log(line1.substring(8, 14));

// trim -start,ending er white space baad dibe
const sentences = "   hello, there! ";
console.log(sentences.trim());

// join- Eta array er jonno.Eta holo protita string er pore ki diea join korbo seta bole dea
const value = ["Sometimes I am alone", " sometines not", " hello", " hello"];
console.log(value.join("."));

// splice - etao array er modde kaj kore
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// splice er mane holo koto number index theke, koto ta item delete korbo,okane ki ad korbo.
// *splice(startIndex,deleteCount,insertItem,insertItem)
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
