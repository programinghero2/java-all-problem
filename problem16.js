// show output from 1-50
// if the number is divisible by 3 instead of the number show 'foo'
// if the number is divisible by 5 instead of the number show 'bar'
// if the number is divisible by 3 and 5 instead of the number show 'foobar'
let startPoint = 1;
while(startPoint <= 50){
    if((startPoint % 3 == 0) && (startPoint % 5 == 0)){
        console.log('foobar');
    }
    else if(startPoint % 5 === 0){
        console.log('bar');
    }
    else if(startPoint % 3 === 0){
        console.log('foo');
    }
    else{
        console.log(startPoint)
    }
    startPoint++
}
// for(let i = 1; i <= 50; i++){
//     if((i % 3 == 0) && (i % 5 == 0) ){
//         console.log('foobar');
//     }
//     else if(i % 5 === 0){
//         console.log('bar');
//     }
//     else if(i % 3 === 0 && i % 5 ){
//         console.log('foo');
//     }
//     else{
//         console.log(i)
//     }
// }
