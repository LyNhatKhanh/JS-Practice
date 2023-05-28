// Chương trình không phải dừng lại đợi, không bị block ở chỗ đọc file. Vẫn chạy ở chỗ khác, nhưng trong hàm vẫn chờ nhau đọc từng file 1-2-3
//     // var file1 = yield readFilePromise('./6-Sync-Async/file1.txt');
//     // var file2 = yield readFilePromise('./6-Sync-Async/file2.txt');
//     // var file3 = yield readFilePromise('./6-Sync-Async/file3.txt');
//     var values = yield [
//         readFilePromise('./6-Sync-Async/file1.txt'),
//         readFilePromise('./6-Sync-Async/file2.txt'),
//         readFilePromise('./6-Sync-Async/file3.txt')
//     ];
//     return values;
// }).then(function (file1) {
//     console.log(file1);
// }).catch(function (err) {
//     console.log(err);
// });
// console.log('hello');