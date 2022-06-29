//https://www.youtube.com/watch?v=poQXNp9ItL4
//Examples of function first citizen 
function sayHello() {
    return "Hello World"
}

function greet(fnMessage){
    console.log(fnMessage());
}

let fn = sayHello;

fn()
sayHello()

greet(sayHello);

function sayNewHello() {
 return function(){
     return "Hello World";
 }
}

let fn2 = sayNewHello();

//Higher Order Function?
//function that takes function as argument or returns it
//same as the ones above


//functional composition example
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
//making trip and wrapindiv reusable
const result = wrapInDiv(trim(input));

//lodash? a library that can simplify the function result above

//Currying
//instead of separating arguments with comma, we separate them with parenthesis
function add(a) {
    return function(b) {
        return a + b;
    };
}
add(1)(2);

const add2 = a => b => a + b;
add2(1)(2);

//pure functions
//same arguments same results
//cannot be random, no current date, no global state since it can be overidden
//no mutation of parameters

var globalVar;
function nonPure (a) { // this is a none pure func since glbalVar may change
    return a + globalVar; // result must be predictable
}

//immutability
//Pure functions cannot change or mutate
//once object is created, it cannot be changed
//JS can mutate objects
//const is not immutable since its restriction is only reassignment
//example
let myname = "sample";// original string not affected
let newName = myname.toUpperCase();
//advantage: predictable, faster to detect changes, 
    //concurrency - doing more than one thing, confident that you will not make any changes to existing ones

//immutability implementation
const person = {myname : "John"};
//wrong
person.myname = "new Name"
//create new copy of person object
const updated = Object.assign ({}, person,{myname: "new Name"})
//syntax 
//object.assign(<new object>, derived object, <new properties, can be new or update>)
//better way, spread operator, still same as object.assign()
const newUpdated = {...person, myname : "new Name"};

//Libraries that offer real immutable data structures
//immutable, immer, mori

