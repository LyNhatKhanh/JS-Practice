// =========== find: giong filter nhung phan tu dau tien TRUE thi khong xet nua => tra ve phan tu ===========

let num = [1,2,3,4]

let findNums = num.find(function(x) {
    return x%2 ===0;
})

console.log(findNums)