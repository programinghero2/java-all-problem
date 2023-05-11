// write two variable and swap their value
// approach 1:
let num1 = 10;
let num2 = 20;
// let  num3 = num2;
// num2 = num1;
// num1 = num3;
// console.log(num1);
// console.log(num2);
// approach 2:
[num1,num2] = [num2, num1];
console.log(num1,num2)