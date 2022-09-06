'use strict';

//filter

const names = ['Ivan', 'Ann', 'Mike', 'Voldemart'];

const shortNames = names.filter((name) => name.length < 5);


names.forEach(name => {
    return name.length < 5;
})

// map
const answers = ['IvAn', "aNna", 'HELLO'];

const lowAnswers = answers.map(answer => answer.toLowerCase());


var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }

var arrLength = arr.map(item => item.length)

alert( arrLength ); // 4,5,2,5


// every/some

const some = [4, 'qwer', 'sfdsf'];

some.every(item => typeof(item) == 'number');
some.some(item => typeof(item) == 'number');


//reduce

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, cur) => sum + cur);

const fruits = ['apple', 'pear', 'plum'];

// const result = fruits.reduce((sum, cur) => sum + ', ' + cur);
const result = fruits.reduce((sum, cur) => `${sum}, ${cur}`);
console.log(result);


arr = [1,2,3,4,5]
function getSums(arr) {
    let array = [];
    if (!arr.length) return array;

    var totalSum = arr.reduce((sum, cur) => {
        array.push(sum);
        return sum + cur;
    });
    array.push(totalSum);
    return array;
}
getSums(arr);

//-------------------------

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

// const newArr = Object.entries(obj);

// console.log(newArr);
const newArr = Object.entries(obj)
.filter(arr => arr.includes('person'))
.map(arr => arr[0]);
console.log(newArr);

// practice


camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

function camelize(str) {
    return str
    .split('-')
    .map((item, i) => (i == 0) ? item : item[0].toUpperCase() + item.slice(1))
    .join('');
}