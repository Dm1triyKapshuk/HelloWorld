// Задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
  if (numbs[i] == 0) break;
  console.log(numbs[i]);
}
//Задание 2

const item = [1, 5, 4, 10, 0, 3];
console.log(item[4])

//Задание 3

let num = [1, 3, 5, 10, 20];

num = num.join(' ');
console.log(num)
//Задание 4
let arr = [
  [1, 1, 1,],
  [1, 1, 1,],
  [1, 1, 1,],
];
for (let arrIn of arr) {
  for (let element of arrIn) {
    console.log(element);
  }
}
// Задание 5

let age = [1, 1, 1];

age.push(2, 2, 2,);
console.log(age);
//Задание 6

let product = [9, 8, 7, 'a', 6, 5]

product.sort()
console.log(product)
product.pop()
console.log(product)
//Задание 7

let digit = [9, 8, 7, 6, 5];
items = digit.includes(Number(prompt('Введите число от 1 до 10')));

if (items === true) {
  console.log('Такое число есть в массиве');
} else {
  console.log('Такого числа нет в массиве');
}

//Задание 8

let reverse = a => a.split('') 
.reverse() 
.join('');  

console.log(reverse('abcdef'))

//Задание 9
let arr2 = [
  [1, 2, 3],
  [4, 5, 6]
];
for (let arrIn of arr2) {
  for (el  of arrIn) {
    console.log(el)
  }
}
//Задание 10
let arr1 = [2, 5, 3, 5, 6, 8, 9, 1, 4, 3];

let i = 0;
while(arr1[i+1] !== undefined) {
  console.log (arr1[i] + arr1[i + 1]); i++
}
console.log (arr1[i]);