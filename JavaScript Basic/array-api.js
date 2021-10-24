'use strict';
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(', and');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    let result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(0,2) => 기존 배열이 변경됨
    const result = array.slice(2,5);
    console.log(result);
}
  
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];
  
  // Q5. find a student with the score 90
{
    //predicate => 함수구나, this, value, index, obj 네개의 인자, boolean 값으로 정의. predicate가 true로 첫번째로 찾아진 요소를 return 
    //thisArg
    const result = students.find((student) => student.score === 90);
    console.log(result);
}
 
// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled == true);
    console.log(result);
}
  
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}
  
// Q8. check if there is a student with the score lower than 50
{
     console.clear();
     const result = students.some((student) => student.score<=50);
     console.log(result);
     //every는 모든 학생의 점수가 50점 이하여야 false가 나옴
}
  
// Q9. compute students' average score
{
    console.clear();
    //콜백함수나 이니셜값 전달, 배열안에 모든 요소를 호출, 콜백함수 리턴값은 누적된 값
    //prev는 이전 값을 반환
    const result = students.reduce((prev, curr) => prev + curr.score,0);
    console.log(result / students.length);
}
  
// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result);
}
  
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a,b) => b - a)
        .join();
    console.log(result);
}