const lyrics = "What is faint will soon be clear";
const searchWord = "soon";

const doesExist = lyrics.toLowerCase().includes(searchWord.toLowerCase());
console.log(doesExist);
// ---------------------------------------------------------------------
// indexOf() diea check kora
const lyric = "Sometimes I am alone, sometines not, hello";
console.log(lyric.indexOf("helo"));

// ---------------------------------------------------------------------
// startsWith and endsWith

const names = "Hello, there.";
console.log(names.startsWith("Hello"));

const file = "notice.pdf";
console.log(file.endsWith("pdf"));
