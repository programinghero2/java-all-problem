// simple interest 
// For fist 2 years - interest rate 10% per year
// For next more than 2 years - interest rate 20% per year
function getInterst(amount,year){
    if(year <= 2){
        const interstfor2Years = (amount * 10 * 2) / 100;
        return interstfor2Years;
    }
    else if(year > 2){
        const interstfor2Years = (amount * 10 * 2) / 100;
        const remeningYear = (year - 2);
        const interstforMore2Years = (amount * 20 * remeningYear) / 100;
        const returnInterst = interstfor2Years + interstforMore2Years;
        return returnInterst;
    }

}
const amount = 1000;
const year = 7;
const result = getInterst(amount,year);
console.log(result);