# Promises

## static
Es gibt statische Promises, die z.B. mit 'Promise.resolve' aufgerufen werden können. Beispielcode:
```
function print(str){
    console.log("coming from print(): " + str);
}
Promise.resolve("hello promise world").then(print);
```
"hello promise world" wird dann ausgegeben. So kann man bequem einen asynchronen Call machen, ohne selbst ein Promise definieren zu müssen. Die Funktionalität ist in der print()-Funktion gekapselt und alles was übergeben wird, ist ein Parameter.

## Spezielle Promises
### Beispiel 1
#### Normale Funktionssyntax
Möchte man kompliziertere Logik ausdrücken, kann man selbst ein Promise erstellen. In diesem definiert man, WANN ein Promise resolved oder rejected werden soll (umgesetzt mit Math.random()) und verweist auf die Funktionen, die in den entsprechenden Fällen aufgerufen werden sollen. Diese wurden vorher als Parameter übergeben:
```
const prom = new Promise(function(resolve_function, reject_function){
    console.log("in prom");
    // this if is in 50% of cases true
    if(Math.random() < 0.5) {
        resolve_function("Promise resolved");
    }
    else {
        reject_function("Promise rejected");
    }
});

function resolve_function(str){
    console.log("resolve_function: " + str);
}

function reject_function(str){
    console.log("reject_function: " + str);
}

prom.then(resolve_function, reject_function); //output: either "resolve_function: Promise resolved" or "reject_function: Promise rejected!"
```

#### Funktionssyntax mit Arrow-Function
```
// prom als arrow function
const prom2 = new Promise((resolve_function, reject_function) => {
    console.log("in prom2");
    // this if is in 50% of cases true
    if(Math.random() < 0.5) {
        resolve_function("Promise resolved");
    }
    else {
        reject_function("Promise rejected");
    }
})

prom2.then(resolve_function, reject_function);
```

### Beispiel 2
Hier wurde in dem Promise eine weitere Funktion, setTimeout aufgerufen. Es wurde ebenfalls mit arrow-functions gearbeitet: 
```
const prom3 = new Promise(resolve => {
    // resolve = console.log 
    // Die setTimeout-Funktion nimmt als ersten Paramter eine Funktion an, die nach Ablauf der Zeit ausgeführt werden soll 
    // und als zweiten Parameter die Zeit in Milisekunden, die ablaufen soll 
    // wir übergeben als ersten Paramter einfach unsere Funktion resolve (also console.log) 
    // sowie den Paramter für sie (der String, der auf der Konsole ausgegeben werden soll)
    // der Unterstrich dient nur als Platzhaltervariable, die die Funktion enthält
    setTimeout(_=> resolve("Promise resolved, displayed after 1 Second"), 100);
})

// Input-Funktion für das Promise ist console.log
prom3.then(console.log);
```





