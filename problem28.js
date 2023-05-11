// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 

// ভিডিও ভালো করে দেখবে। 

// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 

// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 

function oilPrice(disel,patrol,octan){
    const perliterDisel = 114;
    const perliterPatrol = 130;
    const perliterOctan = 135;
    const diselPrice = disel * 114;
    const patrolPrice = patrol * 130;
    const octanPrice = octan * 135;
    const totalPrice = diselPrice + patrolPrice + octanPrice;
    return totalPrice;
}

const result = oilPrice(30,20,10);
console.log(result);