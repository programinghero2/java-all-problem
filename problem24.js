// একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
const arr = ['sajid','ashik','jonayed','masum','shoaib'];
function bestFriend(arr){
    let largestLength = arr[0].length;
    let largestName = arr[0];
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        const lengthElement = element.length;
        if(lengthElement > largestLength){
            largestLength = lengthElement;
            largestName = element; 
        }

    }
    return largestName;
}
const result = bestFriend(arr);
console.log(result);

