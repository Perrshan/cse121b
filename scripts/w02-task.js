/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullname = 'Xave Perry';
let currentYear = '2024';
let profilePicture = 'images/pictureofmyself.JPG';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullname}`);

/* Step 5 - Array */

let favoriteFoods = ['Taco Salad', 'Potatoes', 'Chicken and rice', 'Anything my wife makes'];
let anotherFavoriteFood = 'Navajo Tacos';

foodElement.innerHTML = favoriteFoods;

favoriteFoods.push(anotherFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`;





