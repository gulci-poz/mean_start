function parent() {
    var message = 'Hello World';

    function child() {
        alert(message);
    }

    return child;
}

// closure to nie tylko funkcja, ale również środowisko, w którym zostala utworzona
//dla przykładu, do event handlera nie trzeba przekazywać stanu scope, ponieważ closure dysponuje wszystkimi zmiennymi
var childFN = parent();
childFN();
