let users = [
    { name: 'Tom', gender: 'Male' },
    { name: 'Maria', gender: 'Female' },
    { name: 'Jason', gender: 'Male' },
    { name: 'Sora', gender: 'Female' },
    { name: 'Teo', gender: 'Male' }
];


let userList = document.getElementById('userList')
let genderFilter = document.getElementById('genderFilter')

render(userList,users);

genderFilter.on('change',function() {

});

function render(container,items) {
    let htmlItems = items.map(function(x){
        return '<li class="list-group-item">' + x.name + '</li>';
    });

    let html = htmlItems.join(' ');
    container.html(html);
};