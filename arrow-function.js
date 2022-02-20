// 1st syestem we make function
function addNum(num1, num2){
    return num1 + num2;
}
const sum = addNum(25, 25);
console.log(sum);   // retunr 50


// 2nd system we make function
const addNum2 = function addNum2(num1, num2){
    return num1 + num2;
}
const sum2 = addNum2(25, 25);
console.log(sum2);   // retunr 50


// 3rd syetem we make function (annonimous) 
const addNum3 = function (num1, num2){
    return num1 + num2;
}
const sum3 = addNum3(25,25);
console.log(sum3);   // retunr 50



// 4th system we make function. it's called arrow function. arrow means ( => )
const addNum4 = (num1 , num2) => num1 + num2;

const sum4 = addNum4(25,25);
console.log(sum4);   // retunr 50





