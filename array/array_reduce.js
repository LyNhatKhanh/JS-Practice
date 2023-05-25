// =========== reduce: giam array => chi con 1 phan tu ===========

// let num = [2,4,5,6,7]

// let sumAll = num.reduce(function(a,b) {
//     console.log(a,b, '=', a+b)
//     return a+b
// })
// console.log(sumAll)

let orders = [
    { name: 'A', quantity: 3, unitPrice: 2000 },
    { name: 'B', quantity: 5, unitPrice: 5000 },
    { name: 'C', quantity: 4, unitPrice: 10000 }
];

let orderNames = orders.map(function(a) {
    console.log(a.name,a.quantity,a.unitPrice);
    return a.quantity * a.unitPrice
});
let total = orderNames.reduce(function(a,b) {
    return a+b
});
console.log('Tong se la:',total)