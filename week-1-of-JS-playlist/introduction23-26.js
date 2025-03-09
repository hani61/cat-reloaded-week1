
// Your Solutions
console.log(100000); // 100000
console.log(1_00_000); // 100000
console.log(10 ** 5); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(1e5); // 100000
console.log(100000.00); // 100000
num1 = 100000
console.log(num1); // 100000
function oneHundredThousand(){
  return 100000
}
console.log(oneHundredThousand()); // 100000
for (i = 100000 ;i < 100001; i++){
  console.log(i); // 100000
}

console.log("100000"); // 100000

// التكليف 02 إستخدم MIN_SAFE_INTEGER لتخرج بالنتيجة المطلوبة في المثال

console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991

//تكليف 3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16 

// تكليف 4
let myVar = "100.56789 Views";

console.log(Math.floor(parseInt(myVar))); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57

// تكليف 5
let num = 10;

console.log(num - Number(Number.isInteger(num)) - Number(Number.isInteger(num)) - Number(Number.isInteger(num)) - Number(Number.isInteger(num))-Number(Number.isInteger(num))-Number(Number.isInteger(num))-Number(Number.isInteger(num))-Number(Number.isInteger(num))); // 2

// تكليف 6
let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(Math.trunc(flt)); // 10

// تكليف 7
console.log(Math.random() * 4)