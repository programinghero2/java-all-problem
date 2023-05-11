// calculate the average of all the numbers that is divisible by 3 from 1-n.
function getAverage(n){
    let getsum = 0;
    let count = 0;
    for( let i = 1; i <= n; i++){
        if(i % 3 == 0){
            getsum += i;
            count++;
        }
    }
    var countAverage = getsum / count;
    return countAverage;
}
const number = 30;
const average = getAverage(number);
console.log(average);