function makeTransaction(quantity, pricePerDroid) { 
    const totalPrice = quantity * pricePerDroid;    
    return `"You ordered ${quantity} droids worth ${(totalPrice)} credits!"`;    
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);
makeTransaction(6, 1800);

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
console.log(makeTransaction(6, 1800));