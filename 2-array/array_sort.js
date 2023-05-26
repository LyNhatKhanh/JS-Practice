/* =========== sort: sap xep mang theo thu tu (mac dinh tu nho -> lon) ===========
    Quy tac:
        return value < 0
            a will come before b
        return value > 0 
            b will come before a 
        return 0
            stay unchanged
*/

// nums = [4, 3, 25, 6, 36, 7, 90];

// let sort = nums.sort(function (a, b) {
//   return a - b;
// });
// console.log(sort);

// let descSort = nums.sort(function (a, b) {
//   return b - a;
// });
// console.log(sort);

var products = [
  { name: "bim bim", price: 5000, stock: 20 },
  { name: "sting", price: 10000, stock: 15 },
  { name: "nutri", price: 12000, stock: 20 },
  { name: "tra sua", price: 25000, stock: 5 },
];

var nameSort = products.sort(function (x, y) {
  return x.name.localeCompare(y.name);
});
console.log(nameSort);
