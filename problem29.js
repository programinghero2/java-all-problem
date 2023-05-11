// file extension check
// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।
function isJavaScriptFile(fileName) {
    // Get the extension of the file
    const arr = fileName.split('.');
    const fileExtension = arr.pop();
    // Check if the file extension is js
    if (fileExtension === 'js') {
      return true;
    }
    
    return false;
  }

  const String = 'imagejs.png';
  const result = isJavaScriptFile(String);
  console.log(result);