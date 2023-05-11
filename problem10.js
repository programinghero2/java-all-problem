// calculate Electricity bill.
// for first 100 unit - 5tk per unit
// for more than 100 unit - 6tk per unit
// for more than 200 unit - 7tk per unit

function getElecticityBill(unit){
    let electricityBill;
    if(unit <= 100){
        const perUnit = 5;
        electricityBill = unit *= perUnit;
    }
    else if(unit <= 200){
        const first100 = 100 * 5;
        const secoend100 = (unit - 100)*6;
        electricityBill = first100 + secoend100; 
    }
    else{
        const first100 = 100 * 5;
        const secoend100 = 100*6;
        const more200 = (unit - 200)*7;
        electricityBill = first100 + secoend100 + more200;
    
    }
    return electricityBill;
}

const unit = 100;
const result = getElecticityBill(unit);
console.log(result);  