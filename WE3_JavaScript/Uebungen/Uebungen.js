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
function applyf(binaryfunction){
    return function (x) {
        return binaryfunction(x);
    }
}

var test = applyf(addf)(2)(3);
console.log(test);

// Schreiben Sie eine Funktion curry() (von Currying), die eine binäre Funktion und ein Argument nimmt,
// um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegen nimmt, z.B. add3 = curry(add, 3);
// add3(4) ergibt 7. curry(mul, 5)(6) ergibt 30.
function curry(binaryfunction, x){
    // logic already implemented in fictive binary function
        return binaryfunction(x);
}

var test = curry(addf, 2)(3)
console.log(test)


// Erzeugen Sie die inc-Funktion mit Hilfe einer der Funktionen addf, applyf und curry aus den letzten Aufgaben,
// ohne die Funktion inc() selbst zu implementieren. (inc(x) soll immer x + 1 ergeben und lässt sich natürlich
// auch direkt implementieren. Das ist aber hier nicht die Aufgabe.) Vielleicht schaffen Sie es auch, drei Varianten
// der inc()-Implementierung zu schreiben?
function inc1(x){
    return addf(x)(1);
}
function inc2(x){
    return applyf(addf)(x)(1);
}
function inc3(x){
    return curry(addf, x)(1);
}

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

console.log((3).add(2));
Number.prototype.add = demethodize(add);
var test = add(2,3);
console.log(test);

// Schreiben Sie eine Funktion twice(), die eine binäre Funktion in eine unäre Funktion umwandelt, die den einen Parameter
// zweimal weiter reicht. Z.B. var double = twice(add); double(11) soll 22 ergeben; var square = twice(mul); square(11)
// soll mul(11,11) === 121 ergeben.

function twice(binaryfunction){
    return function(x){
        return binaryfunction(x,x);
    }
}

// currently binary method add
console.log("Test fuer Aufgabe 'twice' ")
var test = add(2,3);
console.log(test);
// methodize binary to unary function that executes the implemented operation twice
double = twice(add);
var test = double(3);
console.log(test);

var test = mul(4,3);
console.log(test);
square = twice(mul);
var test = square(4);
console.log(test);

// Schreiben Sie eine Funktion composeu(), die zwei unäre Funktionen in eine einzelne unäre Funktion transformiert,
// die beide nacheinander aufruft, z.B. soll composeu(double, square)(3) genau 36 ergeben.
function composeu(unaryfunction1, unaryfunction2){
    return function(x) {
        var a = unaryfunction1(x);
        return unaryfunction2(a);
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
    return function(x,y, z){
        var a = binaryfunction1(x,y);
        return binaryfunction2(a,z);
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
    var executed = false;
    return function(x,y){
        if(executed === false){
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