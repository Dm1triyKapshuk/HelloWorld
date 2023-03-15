// Задание 1
let item = ('Привет')

console.log(item.toUpperCase())

//Задание 2


let searchOfWords = ['Кошка', 'Кит', 'Комар', 'Носорог'];

let search = 'ко'

let searchFilter = getSortSearch(searchOfWords, search);

function getSortSearch(arr, str) {
  let newArr = [];

  for (let key of arr){
    if ( key.toUpperCase().startsWith(str.toUpperCase())) {
      newArr.push(key);
    }
  }
  return newArr
}

console.log(`Отсортированный массив : ${searchFilter}`)
//Задание 3
function round (maxValue, minValue){
  return Math.round(maxValue, minValue)
}
console.log(round(32.58884, 32.58884))

function ceil (maxValue, minValue){
  return Math.ceil(maxValue, minValue)
}
console.log(ceil(32.58884, 32.58884))

function floor (maxValue, minValue){
  return Math.floor(maxValue, minValue)
}
console.log(floor(32.58884, 32.58884))

//Задание 4
console.log(Math.max(52, 53, 49, 77, 21, 32))
console.log(Math.min(52, 53, 49, 77, 21, 32))


// Задание 5
function random(minValue, maxValue) {
  return Math.round (Math.random() * maxValue);
}
console.log(random(0, 10))
//Задание 6
function getRandomArr(randomNumber) {
  let array = [];
  let arrLength = Math.floor(randomNumber / 2)
  for (let i = 0; i < arrLength; i++) {
  array.push(Math.round(Math.random() * randomNumber));
  }
  console.log(array);
  }
  getRandomArr(Number(prompt('Введите любое число')));

//Задание 7
let randomValue = (maxValue, minValue) => {
  let randomResult = Math.round(Math.random() * (maxValue - minValue) + minValue);
  console.log(randomResult);
  }
  randomValue(Number(prompt('Введите любое число')), Number(prompt('Введите любое число, значение которого меньше, чем у первого чиcла')));


//Задание 8
let currentDate = new Date();
console.log(currentDate);

//Задание 9
let date = new Date("14 March 2023");
date.setDate(date.getDate() + 73);
console.log(date)
//Задание 10
let myDate = new Date()
function cuerrentDate(myDate) {
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Июня", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

  let date = myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' +  days[myDate.getDay()]
  console.log(date)
}
cuerrentDate(myDate)
// Задание 11
function fruitsGame(params) {
  let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  fruits = fruits.sort(() => Math.random() - 0.5);
  alert('Запомните первый и последний элемент массива:' + '\n' + '\n' + fruits);
  let firstFruits = fruits[0].toLowerCase();
  let lastFruits = fruits[fruits.length - 1].toLowerCase();
  console.log(firstFruits);
  console.log(lastFruits);
  let firstFruitss = (String(prompt('Чему равнялся первый элемент массива?'))).toLowerCase();
  let lastFruitss = (String(prompt('Чему равнялся последний элемент массива?'))).toLowerCase();
  if (firstFruitss === firstFruits && lastFruitss === lastFruits) {
  alert('Вы угадали!');
  } else
  if (firstFruitss === firstFruits || lastFruitss === lastFruits) {
  alert('Вы были близки к победе!');
  } else {
  alert('Вы ошиблись!');
  }
  }