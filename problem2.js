// write a function and input parameter take a array and get the largest number this array.
function getLargest(arr){
    let largestNumber = arr[0];
    for(let  i = 0; i < arr.length; i++){
        const element = arr[i];
        if(element > largestNumber){
            largestNumber = element;
        }
    }
    return largestNumber;
}
const number = [3,6,2,56,32,5,89,32];
const getReturn = getLargest(number);
console.log(getReturn);