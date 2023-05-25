var coffeeMachine = {
    makeCoffee: function(onFinish) {
        console.log("Making coffee ....")
        onFinish()
    }
};

var beep = function () {                // function beep() {}
    console.log('tit tit ... ');
};
console.log(coffeeMachine.makeCoffee(beep))

console.log(coffeeMachine.makeCoffee(function() {
    console.log('Bip bip... ');
}))