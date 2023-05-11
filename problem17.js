// per chair wood quantity ---> 3 cft;
// per table wood quantity ---> 10 cft;
// per bed wood quantity ---> 50 cft;
function woodQuantity(chair,table,bed){
    const eachChairWood = 3;
    const eachTableWood = 10;
    const eachBedWood = 50;
    const chairWood = eachChairWood * chair;
    const tableWood = eachTableWood * table;
    const bedWood = eachBedWood * bed;
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;

}

const result = woodQuantity(2,2,5);
console.log(result);
