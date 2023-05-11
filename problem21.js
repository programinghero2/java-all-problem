// একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।
const myInformation = {
    name: 'sajid hasan',
    age : 19,
    color: 'dark white',
    height: 5.4
}
const change = 'height';
myInformation[change] = 5.5;
console.log(myInformation)