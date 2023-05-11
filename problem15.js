// একটা অ্যারে থেকে সকল ডুপ্লিকেট আইটেম ডিলিট করে নুতুন একটা অ্যারে পাওয়ার প্রোগ্রাম
const arr = ['sajid','ashik','sajid','masum','ashik','masum','romjan','sajid','romjan'];
function deleteDuplicate(arr){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        if(newArray.includes(element) == false){
            newArray.push(element);
        }

    }
    return newArray;
}
const result = deleteDuplicate(arr);
console.log(result);