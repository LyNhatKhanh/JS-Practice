var moment = require('moment');

// var now = new Date();
// var myBirthday = new Date(2001,1,24);

var now = moment('2023-08-07');
console.log(now.fromNow());
console.log(now.format('DD.MM.YYYY'));