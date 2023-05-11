// আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
// উত্তর হিসেবে সংখ্যা রিটার্ন করবে
// approach 1:
function paperRequirements(f1Copyquantity,s2Copyquantity,t3Copyquantity){
    const fristBookpaper = 100;
    const secondBookpaper = 200;
    const thirdBookpaper = 300;
    const fristBookPaperneed = f1Copyquantity * fristBookpaper;
    const secondBookpaperneed = s2Copyquantity * secondBookpaper;
    const thirdBookpaperneed = t3Copyquantity * thirdBookpaper;
    const totalPaper = fristBookPaperneed + secondBookpaperneed + thirdBookpaperneed;
    return totalPaper;  

}
const result = paperRequirements(2,2,2);
console.log(result);

// approach 2:
function paperRequirements(firstBook, secondBook, thirdBook) {
    const totalPages = (firstBook * 100) + (secondBook * 200) + (thirdBook * 300);
    return totalPages;
  }
const result1 = paperRequirements(2,2,2);
console.log(result1);  