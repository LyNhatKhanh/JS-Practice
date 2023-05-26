// =========== map: bien doi cac phan tu ben trong cua array ===========

// var nums =  [1,2,3,4];
// var squaredNums = nums.map(function(x) {
//     return x*x
// })
// console.log(squaredNums)

let rectangle = [
    { width: 10, height: 5 },
    { width: 15, height: 25 },
    { width: 105, height: 50 }
];
let areaRectangle = rectangle.map(function(a) {
    return a.width * a.height;
});
console.log(areaRectangle);
// console.log(areaRectangle.join());
