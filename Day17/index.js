"use strict";
//unioun type "|"
let userId = 101;
userId = "dg05";
console.log(userId);
function hello(id) {
    console.log(id);
}
hello("hellme");
// let method=HTTPmethod;
method = "get";
function HandleResponse(response) {
}
//type narrowing
function processInput(value) {
    if (typeof value === "string") {
        console.log(value.toLocaleUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
processInput("hello");
processInput(10.9830);
