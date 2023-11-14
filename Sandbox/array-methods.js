// const numberArray = ['one', 'two', 'three'];
// const newNumberArray = numberArray.map((word) => `<li>${word}</li>`);
// document.getElementById('myList').innerHTML = newNumberArray.join();

const gradeArray = ['A', 'B', 'A', 'F', 'D', 'C'];
const gpaArray = gradeArray.map(function(grade){
    switch(grade){
        case 'A':
            return 4;
        case 'B':
            return 3;
        case 'C':
            return 2;
        case 'D':
            return 1;
        case 'F':
            return 0;
    }
});
console.log(gpaArray); // [4, 3, 4, 0, 1, 2]


const gpa = gpaArray.reduce((total, gpa) => total + gpa, 0) / gpaArray.length;
console.log(gpa); // 2.333333

const fruitArray = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const alphabeticallyObeseWords = fruitArray.filter((fruit) => fruit.length > 6);
console.log(alphabeticallyObeseWords); // watermelon

const array = [12, 34, 21, 54];
const luckNumber = 21;
console.log(array.indexOf(luckNumber)); //  2
console.log(array.indexOf(50));         // -1
