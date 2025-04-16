/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
*/

// data 1
var massMark1 = 78;
var heightMark1 = 1.69;
var massJohn1 = 92;
var heightJohn1 = 1.95;

//data2
var massMark2 = 95;
var heightMark2 = 1.88;
var massJohn2 = 85;
var heightJohn2 = 1.76;

//tinhs bmi
function calBMI(mass, height) {
  return mass / (height * height);
}

//cal data 1
var markBMI1 = calBMI(massMark1, heightMark1);
var johnBMI1 = calBMI(massJohn1, heightJohn1);

//cal data 2
var markBMI2 = calBMI(massMark2, heightMark2);
var johnBMI2 = calBMI(massJohn2, heightJohn2);

//compare BMI
var markHigherBMI1 = markBMI1 > johnBMI1;
var markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Nguyên Vũ - 22002885");
console.log("Câu 2");

function compareBMI(markBMI, johnBMI, dataset) {
  if (markBMI > johnBMI) {
    console.log(
      `Dataset ${dataset}: Mark's BMI (${markBMI.toFixed(
        2
      )}) is higher than John's (${johnBMI.toFixed(2)})!`
    );
  } else if (johnBMI > markBMI) {
    console.log(
      `Dataset ${dataset}: John's BMI (${johnBMI.toFixed(
        2
      )}) is higher than Mark's (${markBMI.toFixed(2)})!`
    );
  } else {
    console.log(
      `Dataset ${dataset}: Mark and John have the same BMI (${markBMI.toFixed(
        2
      )})!`
    );
  }
}

compareBMI(markBMI1, johnBMI1, 1);

compareBMI(markBMI2, johnBMI2, 2);
