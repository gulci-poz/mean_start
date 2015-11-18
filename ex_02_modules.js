//zgodnie z CommonJS moduł jest zawarty w jednym pliku i ma wyizolowany scope, który przechowuje jego zmienne
//obiekt exports eksponuje funkcje na zewnątrz
//require() metoda pozwala załadować moduł
//module obiekt do przechowywania metadanych o module; zawiera wskaźnik do exports jako property; implementacja exports jako samodzielnego obiektu zmieniła użycie module

//mamy moduł hello.js

var message = 'Hello';

//sayHello to preperty obiektu exports
exports.sayHello = function() {
    console.log(message);
}

//w aplikacji np. server.js mamy następujący kod
//node najpierw szuka folderu hello, a jeśli go nie znajdzie to szuka pliku .js
//potem szuka modułu w folderze node_modules

var hello = require('./hello');
hello.sayHello();

//==================================================

//można eksponować pojedynczą funkcję za pomocą wskaźnika module.exports
//możemy podać ścieżkę względną lub bezwzględną, gdy moduł jest w innym miejscu na dysku
//można użyć modułów folderowych (przydatne przy pisaniu third party modules):
//w folderze musi być plik package.json, a tam w main ścieżka do głównego pliku .js; jeśli nie ma pliku package.json albo nie ma sekcji main, to node próbuje wczytać z folderu plik index.js

module.exports = function() {
    var message = 'Hello';
    console.log(message);
}

//i dalej mamy

var hello = require('./hello');
hello()
