// count the number of a vowel in a string using if else.
function conuntVowel(str){
    let vowelCount = 0;
    for( let i = 0; i < str.length; i++){
        const eachstr = str[i];
        if(eachstr == 'a'){
            vowelCount++;
        }
        else if(eachstr == 'e'){
            vowelCount++;
        }
        else if(eachstr == 'i'){
            vowelCount++;

        }
        else if(eachstr == 'o'){
            vowelCount++;
        }
        else if(eachstr == 'u'){
            vowelCount++;
        }
    }
    return vowelCount;
}
const str = 'sajid Hasan';
const getReturn = conuntVowel(str);
console.log(getReturn);