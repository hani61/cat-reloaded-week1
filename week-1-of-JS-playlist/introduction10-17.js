// تكليف 1
// Add Variables Here
var numberOne = 10;
var numberTwo = 20;
var concat = numberOne.toString().concat(numberTwo.toString())
// Ouput
console.log(""+ numberOne + numberTwo); // Normal Concatenate => 1020
console.log(concat); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(`${numberOne.toString()}${numberTwo.toString()}`); // Template Literals Way => String


console.log("" + numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/

// تكليف 2
var elzero = document.createElement("a")
elzero.innerHTML = "object"
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// تكليف 3
let learning = '\`I\'m In' + '\n' +
'\\ \\' + '\n' +
'Love \\ \\ \"\"\" \'\'\'' + '\n' +
'++ With ++' + '\n' +
'\\\"\"\"\\\"\"\"' + '\n' +
'\"\"JavaScript\"\"\`\`'
console.log(learning);

// تكليف 4
let a = 21;
let b = 20;


let part1 = `_${a}_${b}`
let part2 = `${a}_${b}`
let part3 = `${a}_${b}_`
console.log(part1+part2+part2+part3); // _21_2021_2021_2021_20_