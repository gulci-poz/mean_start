/*
var message = 'Hello';

exports.sayHello = function() {
    console.log(message);
}
*/

//wersja z eksportem pojedynczej funkcji

module.exports = function() {
    var message = 'Hello';
    console.log(message);
}
