// count the number of a vowel in a string using switch statement.
function countVowels(str){
    let count = 0;
    for( let i = 0; i < str.length; i++){
        const eachStr = str[i];
        switch(eachStr){
            case 'a':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'i':
                count++;
                break;
            case 'o':
                count++;
                break;
            case 'u':
                count++;
                break;
            default:

        }
    }
    return count;
}
const str = 'sajid hasan';
const getVowelnumbers = countVowels(str);
console.log(getVowelnumbers);