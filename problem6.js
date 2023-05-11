// conut numbers divisible by 3 from 1-20.
function getCount(){

    let count = 0;
    for( let i = 1; i <= 20; i++){
        if(i % 3 == 0){
            count++;
        }
    }
    return count; 
}
const getReturn = getCount();
console.log(getReturn);