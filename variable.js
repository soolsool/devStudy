//Whole-script strict mode syntax
//Javascript is very flexible
//flexible === dangerous
//added ECMAScript 5

// 1. Use Strict 
// added in ES5
//use this for Valina Javascript.
'use strict';

//2. Variable, rw(read/write) - 메모리에 값을 읽고 쓰는 게 가능
// let (added in ES6)

{
    let name = 'sool';
    console.log(name);
    name = 'hello';
    console.log(name);
}

//var (don't ever use this!)
//var hoisting (move declation from bottom to top)
//has no block scope

//3. constant, r(read only)
// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons
// - security 
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol - 값 자체가 메모리에 저장
// object, box container - object의 reference를 통해 담겨 있는 메모리 참조
// function, first-class function (function도 변수처럼 할당 가능)

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt(fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string 
const char = 'c';
const brenden = 'brenden';
const greeting = 'hello' + brenden;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brenden}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

//object, real-life object, data structure
const sool = {name: 'sool', age: 29};
console.log(sool.name);

// 5. Dynamic typing: dynamically typed language
// 런타임 환경에서 오류가 많이 남
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));