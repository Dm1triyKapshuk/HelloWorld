// Задание 1
   function minimumValue(a, b) {
    if (a > b) {
      console.log(b);
    } else {
      console.log(a);
    }
   }

   minimumValue(8, 4);
   minimumValue(6, 6);
//Задание 2
  function number() {
    let even = prompt('Введите число');
    
    if (even % 2 == 0) {
      console.log('Число четное');
    } else {
      console.log('Число нечетное');
    }
  }
  number();

//Задание 3.1
 function square (a) {
  let mult = a * a;
  console.log(`Квадрат числа равен ${mult}`)
 }
 square(5)
//Задание 3.2
function squaredSecond() {

  let b = Number(prompt(`Введите число`));
  resultat = b ** 2;
  return b ** 2;
}
squaredSecond(5);
alert(resultat)

//Задание 4
 function age() {
  let a = Number(prompt('Сколько вам лет?'))
  if (a <= 12) {
    alert('Привет друг!')
  } else {
    alert('Добро пожаловать!')
  }
 }
 age()
// Задание 5
  let num1 = Number(prompt('Введите первое число'));
  let num2 = Number(prompt('Введите второе число'));

  multipleNum( num1, num2 );

  function multipleNum(a , b) {
    checkNum ( a ) && checkNum ( b ) ? alert(a * b) : alert('Одно или оба значения не являются числом');

  }

  function checkNum(num) {
    if (!isNaN (num) &&
    num !== '' &&
    num !== null ) return true;
    return false;
    
  }
//Задание 6
  const userNum = prompt("Введите число");
  const result = userNum ** 3;

  const isNumValidCubed = (userNum, result) => {
    if (!isNaN(userNum)) {
      return (`${userNum} в кубе равняется ${result}`);
    } else {
      return ('Переданное число не является числом');
    }
  };
  console.log(isNumValidCubed(userNum, result));
  //Задание 7
  function seasons() {
    const month = Number(prompt('Введите номер месяца'))
    if (month <= 2 || month === 12) {
      return alert('Зима')
    } else {
      alert('Вы ввели не правильный параметр')
    }
    if (month = 3 || month === 4 || month === 5) {
      return alert('Весна')
    } else {
      return alert('Вы ввели не правильный параметр')
    } 
    if (month = 6 || month === 7 || month === 8) {
      return alert('Лето')
    } else {
      alert('Вы ввели не правильный параметр')
    }
    if (month = 9 || month === 10 || month === 11) {
      return alert('Осень')
    } else {
       alert('Вы ввели не правильный параметр')
    }
  } 
  