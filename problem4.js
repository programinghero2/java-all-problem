// write a function and input parameter take a array and get the third largest number this array.
function getSecondlargest(arr){
    let firstLargest = arr[0];
    let secondLargest = arr[0];
    let thirdLargest = arr[0];
    for(let i = 0; i < arr.length; i++){
        const eachElement = arr[i];
        if( eachElement > firstLargest){
            secondLargest = firstLargest;
            firstLargest = eachElement;
        }
        else if(eachElement > secondLargest){
            thirdLargest = secondLargest
            secondLargest = eachElement;
        }
        else if(eachElement > thirdLargest){
            thirdLargest = eachElement;
        }
    }
    return thirdLargest;
}

const arr = [3,6,2,56,32,5,89,60,50,69,70,68];
const getReturn = getSecondlargest(arr);
console.log(getReturn);