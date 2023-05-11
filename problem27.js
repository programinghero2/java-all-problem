// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।
function isBestFriend(friend1,friend2){
    if(friend1['name'] == friend2['friend'] && friend2['name'] == friend1['friend']){
        return true;
    }
    return false;
}
const friend1 = {
    name:'abul',
    friend:'kabul'
}
const friend2 = {
    name:'kabul',
    friend:'sabul'
}
const result = isBestFriend(friend1,friend2);
console.log(result);
