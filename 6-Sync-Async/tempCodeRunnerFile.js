ise = require('promise-fs')

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
//     .catch(onError)