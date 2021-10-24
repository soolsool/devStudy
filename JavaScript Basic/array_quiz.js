'use strict';
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.toString());
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    let fruits_array = fruits.split(',');
    console.log(fruits_array);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    let array2 = array.slice(2);
    console.log(array2);
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
    let scores = students.filter(function(element){
        if(element.score>=90){
            return element.name;
        }
    });
    console.log(scores);
}
 
// Q6. make an array of enrolled students
{
    let enrolled = students.filter(function(student){
        if(student.enrolled==true){
            return student.name;
        }
    });
    console.log(enrolled);
}
  
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    let scores = [];
    for(let student of students){
        scores.push(student.score);
    }
}
  
// Q8. check if there is a student with the score lower than 50
{
    let less = students.some( x => {
        return x.score<50;
    });
    console.log(less);
}
  
// Q9. compute students' average score
{
    let result = 0;
    let average = students.map(function(student){
        result += student.score;
    });
    console.log(result /= students.length);
}
  
// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}
  
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{

}