// find the largest number of an array
function getLargest(arr){
    let largestNumber = arr[0];
    for( let i = 0; i < arr.length; i++){
        const eachElement = arr[i];
        if(eachElement > largestNumber){
            largestNumber = eachElement;
        }
    }
    return largestNumber;
}
const arr = [10,35,45,85,98,86,16,15];
const result = getLargest(arr);
console.log(result);