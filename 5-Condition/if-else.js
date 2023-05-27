
function countBill(bills) {
    let total = 0;
    // for (let bill of bills) {
    //     // total += bill.value;
    //     if (bill.fake === fake)

    // }
    for (let key in bills) {
        if(bills[key].fake) {
            console.log('To tien thu ' + key + ': ' + bills[key].value + ' la tien gia!');
        } else
            total += bills[key].value;
    }

    return total;
}

var bills = [
    { value: 10000},
    { value: 20000},
    { value: 50000, fake: true },
    { value: 100000},
]

console.log(countBill(bills))
