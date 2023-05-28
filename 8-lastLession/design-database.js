let readlineSync = require("readline-sync");

var classes = [
    { 
        id: 0,
        name: '1A',
        teacher: {
            name: 'Hang',
            age: 24
        },
        students: [
            { name: 'Khanh', age: 22, height: 175 },
            { name: 'Hanh', age: 22, height: 165 },
            { name: 'Anh', age: 22, height: 168 },
        ]
    },
    { 
        id: 1,
        name: '2A',
        teacher: {
            name: 'Khanh',
            age: 30
        },
        students: [
            { name: 'Hang', age: 23, height: 168 },
            { name: 'An', age: 23, height: 175 },
            { name: 'Anh', age: 23, height: 178 },
        ]
    },
    { 
        id: 2,
        name: '3A',
        teacher: {
            name: 'Huong',
            age: 52
        },
        students: [
            { name: 'Khanh', age: 22, height: 175 },
            { name: 'Hang', age: 24, height: 168 },
            { name: 'Ngan', age: 28, height: 188 },
        ]
    },
    { 
        id: 3,
        name: '4A',
        teacher: {
            name: 'Vinh',
            age: 50
        },
        students: [
            { name: 'Huong', age: 25, height: 159 },
            { name: 'Hanh', age: 22, height: 167 },
            { name: 'Anh', age: 22, height: 164 },
        ]
    },
    { 
        id: 4,
        name: '5A',
        teacher: {
            name: 'Trung',
            age: 24
        },
        students: [
            { name: 'Trung', age: 28, height: 175 },
            { name: 'Hung', age: 26, height: 169 },
            { name: 'Anh', age: 22, height: 168 },
        ]
    },
];

function whichClassofTeacher(name) {
    var rs = classes.find(function(x) {
        if (x.teacher === name)
            return x.name;
        else
            return console.log('Khong co!');
    })
}

var teacherName = readlineSync.question('Ban muon tim giao vien nao?');
whichClassofTeacher(teacherName);
