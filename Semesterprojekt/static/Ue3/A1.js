// Web Engineering Uebung 3 - Part 1: Java Script functions

// +++++++++++++++ Binary helper functions +++++++++++++++
function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

// +++++++++++++++ Exercises +++++++++++++++
//Schreiben Sie eine Funktion identity_function(), die ein Argument als Parameter entgegen nimmt und eine
// Funktion zurück gibt, die dieses Argument zurück gibt.Schreiben Sie eine Funktion identity_function(),
// die ein Argument als Parameter entgegen nimmt und eine Funktion zurück gibt, die dieses Argument zurück gibt.
function identify_function(name){
    return function(){return name;};
}

var test = identify_function( "hello")();
console.log(test);

// Schreiben Sie eine Addier-Funktion addf(), so dass addf(x)(y) genau x + y zurück gibt.
// (Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die auf y angewandt wird.)
function addf(x){
    return function(y){ return x + y;};
}

var test = addf(2)(3);
console.log(test);

//Schreiben Sie eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine Funktion addf berechnet,
// die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern.
// Entsprechend applyf(mul)(5)(6) soll 30 liefern, wenn mul die binäre Multiplikation ist.
function add(x,y){
    return x + y;
}

function applyf(f){
    return function (x) {
        return function(y) {
            return f(x,y);
        }
    }
}

console.log("\n");
console.log("Test fuer Aufgabe 'applyf' ")
console.log(applyf(add)(5)(2));
console.log(applyf(mul)(5)(6));


// Schreiben Sie eine Funktion curry() (von Currying), die eine binäre Funktion und ein Argument nimmt,
// um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegen nimmt, z.B. add3 = curry(add, 3);
// add3(4) ergibt 7. curry(mul, 5)(6) ergibt 30.

function mul(x,y){
    return x*y;
}

function curry(binaryfunction, x){
    return function (y){
        return binaryfunction(x,y);
    }
}

console.log("\n");
console.log("Test fuer Aufgabe 'curry' ");
var test = curry(add, 2)(3);
var test1 = curry(mul, 5)(6);
console.log(test);
console.log(test1);


// Erzeugen Sie die inc-Funktion mit Hilfe einer der Funktionen addf, applyf und curry aus den letzten Aufgaben,
// ohne die Funktion inc() selbst zu implementieren. (inc(x) soll immer x + 1 ergeben und lässt sich natürlich
// auch direkt implementieren. Das ist aber hier nicht die Aufgabe.) Vielleicht schaffen Sie es auch, drei Varianten
// der inc()-Implementierung zu schreiben?
function inc1(x){
    return addf(x)(1);
}
function inc2(x){
    return applyf(add)(x)(1);
}
function inc3(x){
    return curry(add, x)(1);
}

console.log("\n");
console.log("Test fuer Aufgabe 'inc' ");
var test1 = inc1(1);
var test2 = inc2(1);
var test3 = inc3(1);
console.log(test1, test2, test3)

// Schreiben Sie eine Funktion methodize(), die eine binäre Funktion (z.B. add, mul) in eine unäre Methode
// verwandelt. Nach Number.prototype.add = methodize(add); soll (3).add(4) genau 7 ergeben.
// wahrsch falsch
/*function methodize(binaryfunction){
   binaryfunction = new function binaryfunction(x) {
       return this + x;
    }
}*/

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

//methodize
function methodize(binaryfunction){
    return function(x){
        return binaryfunction(this, x);
    }
}

console.log("\n");
console.log("Test fuer Aufgabe 'methodize' ");
var test = add(3, 2);
console.log(test);
Number.prototype.add = methodize(add);
console.log((3).add(2));

// Schreiben Sie eine Funktion demethodize(), die eine unäre Methode (z.B. add, mul) in eine binäre Funktion umwandelt.
// demethodize(Number.prototype.add)(5, 6) soll 11 ergeben.
function demethodize(unaryfunction){
    return function(x,y){
        return unaryfunction.call(x,y);
    }
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'demethodize' ");
console.log((3).add(2));
var test = demethodize(Number.prototype.add)(5,6);
console.log(test);

// Schreiben Sie eine Funktion twice(), die eine binäre Funktion in eine unäre Funktion umwandelt, die den einen Parameter
// zweimal weiter reicht. Z.B. var double = twice(add); double(11) soll 22 ergeben; var square = twice(mul); square(11)
// soll mul(11,11) === 121 ergeben.

function twice(binaryfunction){
    return function(x){
        return binaryfunction(x,x);
    }
}

console.log("\n");
console.log("Test fuer Aufgabe 'twice' ")
// currently binary method add
var test = add(3,3);
var test1 = mul(11, 11);
console.log(test, test1);
// methodize binary functions to unary functions that executes the implemented operation twice
double = twice(add);
square = twice(mul);
// test add
var test = double(3);
console.log("Expected: 2*3 = 6. Result: " + test);
// test mul
var test = square(11);
console.log("Expected: 11^2 = 121. Result: " + test);


// Schreiben Sie eine Funktion composeu(), die zwei unäre Funktionen in eine einzelne unäre Funktion transformiert,
// die beide nacheinander aufruft, z.B. soll composeu(double, square)(3) genau 36 ergeben.
function composeu(unaryfunction1, unaryfunction2){
    return function(x) {
        let res = unaryfunction1(x);
        return unaryfunction2(res);
    }
}

console.log("\n");
console.log("Test fuer Aufgabe 'composeu' ")
var test = double(3);
console.log(test);
var test = square(3);
console.log(test);
var test = composeu(double, square)(3);
console.log(test);

// Schreiben Sie eine Funktion composeb(), die zwei binäre Funktionen in eine einzelne Funktion transformiert,
// die beide nacheinander aufruft, z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben.
function composeb(binaryfunction1, binaryfunction2){
    return function(x,y,z){
        var res = binaryfunction1(x,y);
        return binaryfunction2(res,z);
    }
}

console.log("\n");
console.log("Test fuer Aufgabe 'composeb' ")
var test = add(2,3);
console.log("expected: 2+3 = 5. Result: " + test);
var test = mul(4,3);
console.log("expected: 4*3 = 12. Result: " + test);
var test = composeb(add, mul)(2,3,5);
console.log("expected: (2+3)*5 = 25. Result: " + test);


// Schreiben Sie eine Funktion once(), die einer anderen Funktion nur einmal erlaubt, aufgerufen zu werden,
// z.B. add_once = once(add); add_once(3, 4) soll beim ersten Mal 7 ergeben, beim zweiten Mal soll jedoch
// add_once(3, 4) einen Fehlerabbruch bewirken.

function once(f){
    let executed = false;
    return function(x,y){
        if(!executed){
            executed = true;
            return f(x,y);
        }
        else{
            throw "method can be called only once";
        }
    }
}
console.log("\n");
console.log("Test fuer Aufgabe 'once' ")
var test = add(2,3);
console.log("expected: 2+3 = 5. Result: " + test);
add_once = once(add);
var test = add_once(2,3);
console.log("expected: 2+3 = 5. Result: " + test);
try {
    var test = add_once(2,3);
}
catch(e){
    console.log("expected: 'Fehlermeldung'. Result: " + e);
}

// Schreiben Sie eine Fabrik-Funktion counterf(), die zwei Funktionen inc() und dec() berechnet, die einen Zähler hoch-
// und herunterzählen. Z.B. counter = counterf(10); Dann soll counter.inc() 11 und counter.dec() wieder 10 ergeben.

// via Object
/*function counterf(x){
    counter = new Object();
    counter.value = x;
    counter.inc = function(){
        counter.value += 1;
        return counter.value;
    };
    counter.dec = function(){
        return counter.value -= 1;
    };
    return counter;
}*/

// via let
function counterf(x){
    let counter = x;
    return {
        inc:    function(){
            return ++counter;
        },
        dec:    function(){
            return --counter;
        }
    };
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'fabricfunction' ")
counter = counterf(10);
var test = counter.inc();
console.log(test);
var test = counter.dec();
console.log(test);

// Schreiben Sie eine rücknehmbare Funktion revocable(), die als Parameter eine Funktion nimmt und diese bei Aufruf ausführt.
// Sobald die Funktion aber mit revoke() zurück genommen wurde, führt ein erneuter Aufruf zu einem Fehler. Z.B.
// temp = revocable(alert);
// temp.invoke(7); // führt zu alert(7);
// temp.revoke();
// temp.invoke(8); // Fehlerabbruch!

function revocable(f){
    let temp = new Object();
    let revoked = false;
    temp.revoke = function(){
        revoked = true;
    }
    temp.invoke = function (x) {
        if(!revoked) {
            return f(x);
        }
        else {
            throw "Fehlerabbruch!";
        }
    };
    return temp;
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'revokable' ")
temp = revocable(inc1);
var test = temp.invoke(7); // führt zu alert(7);
console.log("expected: 7+1 = 8. Result: " + test)
temp.revoke();
console.log("method was revoked")
try {
    temp.invoke(8); // Fehlerabbruch!
}
catch(e){
    console.log("Expected: 'Fehlerabbruch!', Result: " + e)
}

// Implementieren Sie ein "Array Wrapper"-Objekt mit den Methoden get, store und append, so dass ein Angreifer keinen Zugriff
// auf das innere, private Array hat.
// used help: https://css-tricks.com/implementing-private-variables-in-javascript/
const ArrayWrapper = () => {
    let array = [];
    const get = () => array;
    const store = (new_array) => {
        array = new_array;
    }
    const append = (element) => {
        array.push(element);
    }
    return {
        get, store, append
    }
};

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'array_wrapper' ")
const testArrayWrapper = ArrayWrapper();
// test store
testArrayWrapper.store([1,2,3]);
console.log("Expected: 1,2,3 Result: " + testArrayWrapper.get());

// test append
testArrayWrapper.append(4);
console.log("Appended '4' to array.")
console.log("Expected: 1,2,3,4 Result: " + testArrayWrapper.get());

// test overwrite
testArrayWrapper.array = [6,7,8];
console.log("Tried to overwrite inner, private array with '6, 7, 8'")
console.log("Expected: 1,2,3,4 Result: " + testArrayWrapper.get());




