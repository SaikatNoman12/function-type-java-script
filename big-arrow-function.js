
//  use multiple parameter for addition 
const add = (num1, num2, num3) => num1 + num2 + num3;
const result = add(100, 200, 200);
console.log(result);  // return 500


// use multiple parameter for multiplication
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result2 = multiply(10,10,10);
console.log(result2);   // return 1000;


// use one parameter
const colageRoll = roll => roll;     // you use bracket for parameter. 
const myRoll = colageRoll(343420);
console.log(myRoll);


// use one parameter
const number = (num1) => num1;
const numberOutput = number(120);
console.log(numberOutput);   // return 120


// use no parameter
const names = () => "Abdullah Al Nomaan";
const myNames = names();
console.log(myNames);


// use arrow funtion for multiline code
const results = (num1, num2) => {
    const add = num1 + num2;
    const sub = num1 - num2;
    const multiply = add * sub;
    return multiply;
}

const myResults = results(10, 5);
console.log(myResults);   // return 75






