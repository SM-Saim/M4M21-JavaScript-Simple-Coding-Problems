// fibonacci=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
/*
fibo[3]=fibo[2]+fibo[1]
fibo[4]=fibo[3]+fibo[2]
fibo[70]=fibo[69]+fibo[68]
fibo[n]=fibo[n-1]+fibo[n-2]
fibo[i]=fibo[i-1]+fibo[i-2]
*/
// Tar mane fibo series e ami jei maan ta chaibo, obbosoi er ager 2ta maan thaka lagbe.

const fibo = [0, 1];
for (let i = 2; i <= 20; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
