// Promise: constractor function (new Promise())
/*
Promise là gì? Promise nghĩa đen là hứa, bạn hứa là bạn sẽ làm điều gì thì có 2 trường hợp: bạn làm được và làm không được,
bạn làm được là resolved việc đó bạn làm không được nghĩa là bạn bị stuck chỗ nào và bạn phải vứt cục stuck đó ra (error hay exception). 
Và hứa thì bạn có thể hứa được nhiều điều không nhất thiết chỉ là một điều.
*/

// Có 2 phương thức chính: then(): trả về 1 promise (là Chính nó), catch():

// quy tắc đặt tên của promise (function on___()) => đã xong 1 cái gì đó 

// var fsPromise = require('promise-fs')

// // fsPromise.readFile('./6-Sync-Async/file2.txt', { encoding: 'utf8'})
// //     .then(function (data) {
// //         console.log(data);
// //     })
// //     .catch(function (err) {
// //         console.log(err);
// //     })

// function onDone(data) {
//     console.log(data);
// }

// function onError(err) {
//     console.log(err);
// }

// function readFile(path) {
//     return fsPromise.readFile(path, { encoding: 'utf8' });
// }

// readFile('./6-Sync-Async/file1.txt')
//     .then(onDone)
//     .then(function () {
//         return readFile('./6-Sync-Async/file2.txt'); // phải trả về (return) ở đây, nếu không sẽ chạy tiếp xuống dưới
//     })
//     .then(onDone)
//     .then(function () {
//         return readFile('./6-Sync-Async/file3.txt');
//     })
//     .then(onDone)
//     .catch(onError);

// =================== Create a promise ===================

var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function (err, data) {
            if (err)
                return reject(err);
            else
                return resolve(data);
        });
    });

}

// readFilePromise('./6-Sync-Async/file2.txt')
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

readFilePromise('./6-Sync-Async/file1.txt')
    .then(function (data) {
        console.log(data);
        return readFilePromise('./6-Sync-Async/file2.txt');
    })
    .then(function (data) {
        console.log(data);
        return readFilePromise('./6-Sync-Async/file3.txt');
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    })

Promise.all([
    readFilePromise('./6-Sync-Async/file1.txt'),
    readFilePromise('./6-Sync-Async/file2.txt'),
    readFilePromise('./6-Sync-Async/file3.txt')
]).then(function (result) {     // Khi 3 promise trên đều resolve thì result = 3*data
    console.log(result);
}).catch(function (err) {
    console.log(err);
})