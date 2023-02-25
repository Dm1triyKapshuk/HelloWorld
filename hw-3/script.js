// Задание 1
let password = 'пароль';

let enterThePassword = String(prompt('Введите пароль'));

if (enterThePassword === password) {
    console.log ('Пароль введен верно');
} else {
    console.log ('Пароль введен неправильно');
}

//Задание 2
let c = 3;
c = prompt('Введите число')
 if (c > 0 && c < 10 ) {
    console.log ('Верно')
 } else {
    console.log ('Неверно')
 }

//Задание 3
let d = 7;
let e = 5;
 if (d > 100 || e > 100) {
    console.log ('Верно')
 } else {
    console.log ('Неверно')
 }

 //Задание 4
let a = 2;
let b = 3;

alert(a + b)
// Задание 5
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 1 :
        console.log('Зима');
        break;
    case 2 :
        console.log('Зима');
        break;
    case 3 :
        console.log('Весна');
        break;
    case 4 :
        console.log('Весна');
        break;
    case 5 :
        console.log('Весна');
        break;
    case 6 :
        console.log('Лето');
        break;
    case 7 :
        console.log('Лето');
        break; 
    case 8 :
        console.log('Лето');
        break;
    case 9 :
        console.log('Осень');
        break;     
    case 10 :
        console.log('Осень');
        break;
    case 11 :
        console.log('Осень');
        break;
    case 12 :
        console.log('Зима');
        break;
    default:
        console.log('Неверно')
        break;    
}
 //Задание 6
 // Задание 7
 let number = Number(prompt("Пожалуйста, введите любое число"));

 if (number) {
     console.log('Является числом')
 } else {
    console.log('Не явлется числом')
 }
 if (number%2) {
    alert('Нечетное')
 } else {
    alert('Четное')
 }

 //Задание 8
 let clientOS = 1 || 0;
 if (clientOS = 0) {
    alert('Установите версию приложения для iOS по ссылке')
 } else if(clientOS = 1) {
    alert('Установите версию приложения для Android по ссылке')
 }
//Задание 9
