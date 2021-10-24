'use stirct';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
// Converts a JavaScript value to a JavaScript Object Notation (JSON) string
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
    // 함수는 오브젝트의 데이터가 아니라서 제외, 자바스크립트 자체 데이터도 제외
};

json = JSON.stringify(rabbit);
console.log(json);
json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'sool' : value;
});
console.log(json);

//2 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
