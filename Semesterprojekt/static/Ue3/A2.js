// Web Engineering Uebung 3 - Part 2: Advanced Functional JavaScript Programming

// +++++++++++++++ Binary helper functions +++++++++++++++
function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

function square(x) {
    return x*x;
}

// +++++++++++++++ Exercises +++++++++++++++
// Make a function that makes a publish/subscribe object. It will reliably deliver all publications to all subscribers in the
// right order. Example:
// my_pubsub = pubsub();
// my_pubsub.subscribe(alert);
// my_pubsub.publish("It works!"); // alert("It works!")
// used help: https://attacomsian.com/blog/javascript-iterate-objects

function print(str){
    console.log(str);
}

function pubsub(){
    const pubsub = {};
    const subscribers = [];
    pubsub.subscribe = function(f){
        subscribers.push(f);
    }
    pubsub.publish = function(str){
        for(const Function in subscribers){
            subscribers[Function](str);
        }
    }
    return pubsub;
}

console.log("\n");
console.log("Test fuer Aufgabe 'publish/subscribe' ")
// 1. test function print
print("Hello from test function print()");
// 2. test publish/subscribe
my_pubsub = pubsub();
my_pubsub.subscribe(print);
my_pubsub.publish("test1");
my_pubsub.subscribe(print);
my_pubsub.publish("test2");

// Make a factory that makes functions that generate unique symbols.
// gensym = gensymf('G');
// gensym() // 'G0'
// gensym() // 'G1'
// gensym() // 'G2'
// gensym() // 'G3'

function gensymf(str){
    let i = 0;
    return function(){
        console.log(str + i);
        ++i;
    }
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'gensym' ")
gensym = gensymf('G');
gensym() // 'G0'
gensym() // 'G1'
gensym() // 'G2'
gensym() // 'G3'

// Make a function that returns a function that will return the next fibonacci number.
// Example: var fib = fibonaccif(0, 1);

function fibonaccif(x,y){
    let index = 0;
    let prelast = x;
    let last = y;
    return function(){
        if (index === 0){
            console.log(prelast);
            ++index;
        }
        else if (index === 1){
            console.log(last);
            ++index;
        }
        else {
            let fibonacci = prelast + last;
            console.log(fibonacci);
            prelast = last;
            last = fibonacci;
        }
    }
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'fibonacci' ")
fib = fibonaccif(0,1);
fib() // 0
fib() // 1
fib() // 1
fib() // 2
fib() // 3
fib() // 5
fib() // 8
fib() // 13


// Write a function that adds from many invocations, until it sees an empty invocation.
// addg(3)(4)(5)() // 12
// addg(1)(2)(4)(8)() // 15

function addg(x){
    let sum = x;
    return function execution(y){
        if(y === undefined){
            return sum;
        }
        sum += y;
        return execution;
    }
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'addg' ")
test1 = addg(3)(4)(5)() // 12
console.log(test1);
test2 = addg(1)(2)(4)(8)() // 15
console.log(test2);

// Write a function that will take a binary function and apply it to many invocations. Examples:
// applyg(add)(3)(4)(5)() // 12
// applyg(add)(1)(2)(4)(8)() // 15

function applyg(binaryfunction){
    let res = 0;
    return function execution(y){
        if(y === undefined){
            return res;
        }
        res = binaryfunction(res, y);
        return execution;
    }
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'applyg' ")
test1 = applyg(add)(3)(4)(5)() // 12
console.log(test1);
test2 = applyg(add)(1)(2)(4)(8)() // 15
console.log(test2);


// Write a function m that takes a value and an optional source string and returns them in an object.
// JSON.stringify(m(1)) // {"value": 1, "source": "1"}
// JSON.stringify(m(Math.PI, "pi")) // {"value": 3.14159..., "source": "pi"}

function m(value, str){
    const m = new Object();
    m.value = value;
    m.source = (str == null) ? "" + value : "" + source;
    return m;
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'object return' ")
console.log(JSON.stringify(m(1))) // {"value": 1, "source": "1"}
console.log(JSON.stringify(m(Math.PI, "pi"))) // {"value": 3.14159..., "source": "pi"}

// Write a function addm that takes two m objects and returns an m object.
// JSON.stringify(addm(m(3), m(4))) // {"value": 7, "source": "(3+4)"}
function addm(m1, m2){
    const m = new Object();
    m.value = m1.value + m2.value;
    m.source = "(" + m1.source + "+" + m2.source + ")";
    return m;
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'double object return' ")
console.log(JSON.stringify(addm(m(3), m(4)))) // {"value": 7, "source": "(3+4)"}


// Write a function binarymf that takes a binary function and a string and returns a function that acts on m objects.
// addm = binarymf(add, "+");
// JSON.stringify(addm(m(3), m(4))) // {"value": 7, "source": "(3+4)"}



function m(value, str){
    const m = new Object();
    m.value = value;
    if(str == null){
        m.source = "" + value;
    }
    else {
        m.source = "" + str;
    }
    return m;
}

function binarymf(f, symbol){
    return function(m1, m2){
        const m = new Object();
        m.value = f(m1.value, m2.value);
        m.source = "(" + m1.source + symbol + m2.source + ")";
        return m;
    }
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'binarymf' ")
addm = binarymf(add, "+");
test1 = JSON.stringify(addm(m(3), m(4)));
console.log(test1);

mulm = binarymf(mul, "*");
test2 = JSON.stringify(mulm(m(5), m(5)));
console.log(test2);

// Modify function binarymf so that the functions it produces can accept arguments that are either numbers or m objects.
// addm = binarymf(add, "+");
// JSON.stringify(addm(3, 4)) // {"value": 7, "source": "(3+4)"}

/*function binarymf(f, operation){
    return function(m1, m2){
        if(typeof m1 == "number"){
            if(typeof m2 == "number"){
                const m = new Object();
                m.value = f(m1, m2);
                m.source = "(" + m1 + operation + m2 + ")";
                return m;
            }
            else {
                const m = new Object();
                m.value = f(m1, m2.value);
                m.source = "(" + m1 + operation + m2.source + ")";
                return m;
            }
        }
        else if(typeof m2 == "number"){
            const m = new Object();
            m.value = f(m1.value, m2);
            m.source = "(" + m1.source + operation + m2 + ")";
            return m;
        }
        else {
            const m = new Object();
            m.value = f(m1.value, m2.value);
            m.source = "(" + m1.source + operation + m2.source + ")";
            return m;
        }
    }
}*/

function binarymf(f, operation){
    return function(m1, m2){
        let arg1;
        let arg2;
        arg1 = typeof m1 == "number" ? m1 : m1.value;
        arg2 = typeof m2 == "number" ? m2 : m2.value;

        const m = new Object();
        m.value = f(arg1, arg2);
        m.source = "(" + arg1 + operation + arg2 + ")";
        return m;
    }
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'binarymf - 2' ")
addm = binarymf(add, "+");

// if both are m objects
test1 = JSON.stringify(addm(m(3), m(4)));
console.log(test1);
// if m1 is number
test1 = JSON.stringify(addm(3, m(4)));
console.log(test1);
// if m2 is number
test1 = JSON.stringify(addm(m(3), 4));
console.log(test1);
// if both are numbers
test1 = JSON.stringify(addm(3, 4));
console.log(test1);
// multiplication with one m object and one number
mulm = binarymf(mul, "*");
test2 = JSON.stringify(mulm(m(5), 5));
console.log(test2);

// Write function unarymf, which is like binarymf except that it acts on unary functions.
// squarem = unarymf(square, "square");
// JSON.stringify(squarem(4)) // {"value": 16, "source": "(square 4)"}

function unarymf(operation, name) {
    return function(x) {
        return obj = {
            value: operation(x),
            source: "(" + name + " " + x + ")"
        }
    }
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'unarymf' ")
addm = binarymf(add, "+");
squarem = unarymf(square, "square");
test = JSON.stringify(squarem(4)) // {"value": 16, "source": "(square 4)"}
console.log(test);


// Write a function that takes the lengths of two sides of a triangle and computes the length of the hypotenuse. (Hint: c2 = a2 + b2)
// hyp(3, 4) // 5
function hyp(x,y){
    return Math.sqrt(x*x + y*y);
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'Pythagoras' ")
console.log(hyp(3, 4)) // 5


// Write a function that evaluates array expressions.
// hypa = [ Math.sqrt, [ add, [mul, 3, 3], [mul, 4, 4] ] ];
// exp(hypa) // 5
function exp(arr){
    if (Array.isArray(arr)){
        let f = arr[0];
        let params = arr.slice(1).map(elem => Array.isArray(elem) ? exp(elem) : elem);
        return f(...params);
    }
    else {
        return arg;
    }
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'hypa' ")
hypa = [ Math.sqrt, [ add, [mul, 3, 3], [mul, 4, 4] ] ];
test = exp(hypa)
console.log(test); // 5


// Make a function that stores a value in a variable.
// var variable; store(5); // variable === 5
var variable;
function store(x){
    variable = x;
}

//Test
console.log("\n");
console.log("Test fuer Aufgabe 'store' ")
store(5);
console.log(variable); // 5

// Make a function that takes a binary function, two functions that provide operands, and a function that takes the result.
// quatre( add, identityf(3), identityf(4), store ); // variable === 7
var variable;
function store(x){
    variable = x;
}
function quatre(operation, if1, if2, res){
    res(operation(if1, if2));
}

function identifyf(value){
    return value;
}

// Test
console.log("\n");
console.log("Test fuer Aufgabe 'quatre' ")
test = quatre(add, identifyf(2), identifyf(3), store);
console.log(variable); // 5


// Make a function that takes a unary function, and returns a function that takes an argument and a callback.
// sqrtc = unaryc(Math.sqrt);
// sqrt(81, store) // variable === 9
var variable;
function store(x){
    variable = x;
}
function unaryc(f){
    return function (value, callback){
        callback(f(value));
    }
}

//Test
console.log("\n");
console.log("Test fuer Aufgabe 'unaryc' ")
sqrtc = unaryc(Math.sqrt);
sqrtc(81, store)
console.log(variable); // variable === 9

// Make a function that takes a binary function, and returns a function that takes two arguments and a callback.
// addc = binaryc(add); addc(4, 5, store) // variable === 9
// mulc = binaryc(mul); mulc(2, 3, store) // variable === 6
var variable;
function store(x){
    variable = x;
}
function binaryc(f){
    return function (x, y, callbackf){
        callbackf(f(x,y));
    }
}


// Test
console.log("\n");
console.log("Test fuer Aufgabe 'biaryc' ")
addc = binaryc(add); addc(4, 5, store) // variable === 9
console.log(variable);
mulc = binaryc(mul); mulc(2, 3, store) // variable === 6
console.log(variable);