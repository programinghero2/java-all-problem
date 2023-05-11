// check if a number is prime
function getPrimeNum(num){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
const num = 0;
const result = getPrimeNum(num);
console.log(result);
