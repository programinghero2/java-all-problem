// get the cheapest phone this array
const phones = [
    {name: 'samsung', price: 12000, color:'black'},
    {name: 'walton', price: 10000, color:'white'},
    {name: 'oppo', price: 15000, color:'light dark'},
    {name: 'iphone', price:150000, color : 'blue' },
    {name: 'nokia', price:20000, color:'red'}
];

function cheapestPhone(phones){
    let chepestPrice = phones[0].price;
    for( let i = 0; i < phones.length; i++){
        const perPhone = phones[i];
        if(perPhone.price < chepestPrice){
            chepestPrice = perPhone;
        }
    }
    return chepestPrice;

}
const result = cheapestPhone(phones);
console.log(result);