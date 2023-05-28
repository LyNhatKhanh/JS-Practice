// setInterval
// clearInterval
// setInterval(fn, ms); // fn sẽ chạy liên tục sau mỗi ms (Giống đồng hồ)
// var i = 0;
// var clock = setInterval(function () {
//     ++i;
//     console.log(i);
//     if (i === 10) {
//         clearInterval(clock);
//         console.log('finish');
//     }
// }, 1000)

// BT: function count from 1 to 10
// return promise

function count(a, b) {
    return new Promise(resolve => {
        let count = setInterval(() => {
            console.log(a);
            if (a++ === b) {
                resolve(clearInterval(count));
            }
        }, 500);
    });
}

count(1, 10).then(() => {
    console.log('Done');
})
