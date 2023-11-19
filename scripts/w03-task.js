/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){ 
let addNumber1 = Number(document.querySelector('#add1').value);
let addNumber2 = Number(document.querySelector('#add2').value);


document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;
const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

const GetTotalDue = () => {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let checkbox = document.getElementById('member').checked;

    if(checkbox){
        subtotal *= .80
    }

    document.querySelector('#total').textContent = `$ ${subtotal.toFixed(2)}`;
};

document.querySelector('#getTotal').addEventListener('click', GetTotalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').textContent = numberArray;
/* Output Odds Only Array */
const oddNumbers = numberArray.filter((number) => (number % 2) == 1);
document.querySelector('#odds').textContent = oddNumbers;
/* Output Evens Only Array */
const evenNumbers = numberArray.filter((number) => (number % 2) == 0);
document.querySelector('#evens').textContent = evenNumbers;
/* Output Sum of Org. Array */
const sumNumbers = numberArray.reduce((total, number) => total + number, 0);
document.querySelector('#sumOfArray').textContent = sumNumbers;
/* Output Multiplied by 2 Array */
const multNumbers = numberArray.map((number) => number * 2);
document.querySelector('#multiplied').textContent = multNumbers;
/* Output Sum of Multiplied by 2 Array */
const sumMultNumbers = multNumbers.reduce((total, number) => total + number);
document.querySelector('#sumOfMultiplied').textContent = sumMultNumbers;
