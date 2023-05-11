// write a function findLeapYear() that will take the array[2023,2024,2025,2028,2030] 
// as the input parameter and will check if each year is leap year .
//  if a year is a leap year insert that year in a new array, raturn the new array and print the result.
function findLeapYear(arr){
    let newArr = [];
    for( let i = 0; i < arr.length; i++){
        const eachItem = arr[i];
        if((eachItem % 4 == 0 && eachItem % 100 !== 0) || (eachItem % 400 == 0)){
            newArr.push(eachItem);
        }

    }
    return newArr;
}
const arr = [2023,2024,2025,2028,2030,2031,2021,2031];
const result = findLeapYear(arr);
console.log(result);