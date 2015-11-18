var connect = require('connect')
var app = connect()

//funkcja - middleware
//next to następna funkcja middleware w kolejce do wykonania - podawana przez Connect
//mamy w kodzie end(), a więc będzie to ostatni middleware w kaskadzie obiektu dispatcher przed zakończeniem obsługi żądania HTTP; może też zabraknąć funkcji do wykonania - wtedy kończy się obsługa żądania
//obiekt dispatcher obsługuje żądanie HTTP i układa kaskadę middleware do wykonania
//musi być next() lub end(), inaczej żądanie wiecznie by wisiało

var logger = function(req, res, next) {
    console.log(req.method, req.url);
    next();
};

var appIndexPage = function(req, res, next) {
    res.setHeader('Content Type', 'text/plain');
    res.end('Main Page');
};

var helloWorld = function(req, res, next) {
    res.setHeader('Content Type', 'text/plain');
    res.end('Hello World');
};

var goodbyeWorld = function(req, res, next) {
    res.setHeader('Content Type', 'text/plain');
    res.end('Goodbye World');
};

//rejestrujemy nasz middleware w aplikacji Connect
//wykonanie funkcji middleware w porządku FIFO
//ustalamy montowanie middleware czyli robimy routing

app.use(logger);
//dostaniemy dwie różne kaskady Connect
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
//żądanie na bazową ścieżkę, bez tego w przeglądarce nic byśmy nie dostali, bo byłyby tylko kaskady na konkretne ścieżki (chyba, że to byłaby jedyna)
//w przypadku gdy obsługujemy inne ścieżki, routing na główną ścieżkę musimy dać na końcu, inaczej wszystkie żądania pójdą na główną ścieżkę
app.use('/', appIndexPage);

app.listen(3000);

console.log('Server running at http://localhost:3000/');
