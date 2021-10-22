// Function 
// - fundamental building block in the program
// - subprogram can be used multiple times
// - perfroms a task or calcutates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234)

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const sool = {name:'sool'};
changeName(sool);
console.log(sool);

// 3. Default parameters (Added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'globl'; //global variable
function printMessage(){
    let message = 'hello'; //local variable
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
//bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created whent the execution reaches it.
const print = function (){ //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
//anonymous function
const printYes = function () {
    console.log('yes!');
}

// name function
// better debugging in debugger's stack traces
// recursions
const printNo = function () {
    console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow funciton
// always anonymous
// const simplePrint = function() {
//     console.log('simplePrint!');
// }
const simplePrint = () => console.log('simplePrint!');

//IIFE: Immediatley Invoked Function Expression
(function hello(){ 
    console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

const calculate = function(command, a, b){
    switch(command){
        // default: 
        //     return(`${command}는 올바른 양식이 아닙니다.`); 
        //     break;
        case('add'):
            return(`${a} + ${b} = ${a + b}`);
            break;
        case('substract'):
            return(`${a} - ${b} = ${a - b}`);
            break;
        case('divide'):
            return(`${a} / ${b} = ${a / b}`);
            break;
        case('multiply'):
            return(`${a} * ${b} = ${a * b}`);
            break;
        case('remainder'):
            return(`a = ${a}, b = ${b}`);
            break;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('remainder', 3, 4));