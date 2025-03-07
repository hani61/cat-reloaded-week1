// تكليف 1
// code 1 injects javascript code before html document page is loaded completed
// code 2 injects javascript code in a window function that calls onload function which it waits for the page until it's loaded to inject the code inside the function
// code 3 injects javascript code after the html document is loaded completely
// تكليف 2
h1 = document.createElement("h1")
h1.innerText = "Elzero"
document.body.appendChild(h1)
document.querySelector("h1").style.color = "Blue"
document.querySelector("h1").style.fontWeight = "Bold"
document.querySelector("h1").style.textAlign = "Center"
document.querySelector("h1").style.fontFamily = "Arial"
document.querySelector("h1").style.fontSize = "80px"

// تكليف 3
console.log(
  '%cElZero %cweb %cSchool',
  'color: red;  font-size: 40px','color: green; font-weight: bold; font-size: 40px','background-color: blue; font-size: 40px'
);


// تكليف 4
const group1 = 'Group 1';
console.group(group1);
console.info('Message one');
console.info('Message two');
console.group('Child Group');
console.info('Message one');
console.info('Message two');
console.group('Grand Child Group');
console.info('Message one');
console.info('Message two');
console.groupEnd(group1);
const group2 = 'Group 2';
console.group(group2);
console.info('Message one');
console.info('Message two');
console.groupEnd(group2);

// تكليف 5
let Elzero1 = [
  {
    value: 'Elzero',
    
  },
  {
    value: 'Ahmed',
  },
  {
    value: 'Sameh',
  },
  {
    value: 'Gamal'
  },
  {
    value: 'Aya'
  }
];
console.table(Elzero1);

// تكليف 6
/*  الطريقة الاولى
console.log("Iam In Console");
document.write("Iam In Page");
*/
if (false){ // الطريقة الثانية
console.log("Iam In Console");
document.write("Iam In Page");
}