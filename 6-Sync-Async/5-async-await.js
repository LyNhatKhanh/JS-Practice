var fs = require('fs');

function readFilePromise(path) {
    // Promise nhận 1 tham số là 1 hàm và hàm có 2 tham số:
    // - resolve: thực hiện khi hàm thực hiện xong 
    // - reject: thực hiện khi hàm bị lỗi
    return new Promise(function (resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function (err, data) {
            if (err)
                return reject(err);
            else
                return resolve(data);
        });
    });

}

// Dùng để gọi các method của async await => phải khai báo 'async' trước function
async function run() {
    var file1 = await readFilePromise('./6-Sync-Async/file1.txt');
    var file2 = await readFilePromise('./6-Sync-Async/file2.txt');
    var file3 = await readFilePromise('./6-Sync-Async/file3.txt');
    // console.log(file1,file2,file3);
    return [file1,file2,file3];
}
run().then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log(err);
});