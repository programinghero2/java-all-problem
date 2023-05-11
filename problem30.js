// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
function radianToDegree(radian){
    const degree = 57.2958;
    const multiplicationDeg = radian * degree;
    const fixed = multiplicationDeg.toFixed(2);
    const finalDegree = parseFloat(fixed);
    return finalDegree;
}
const result = radianToDegree(25);
console.log(result);