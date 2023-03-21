// Задание 1
//Написать функцию, которая на вход принимает массив чисел и callback-функцию. Функция должна 
//возвращать целое число, в зависимости от callback это может быть сумма всех чисел массива, произведение. 
//Функции, вычисляющие произведение и сумму чисел массива, также необходимо реализовать
function mult(a, b) {
    return a * b;
}

function sum(a, b) {
    return a + b;
}
function getResult(array, callBack) {
    const result = array.reduce(callBack);
    console.log(result);
}

getResult([3, 4, 1, 9], mult);
getResult([3, 4, 1, 9], sum);

// Задание 2 


function comareNum(a, b ) {
    return a - b;
}

function compareUser(a, b) { 
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
}
function sort(arr, compareFunction) {
    for (let i = 0; i < arr.length; i++) {
				for (let j = i; j < arr.length; j++) {
						const condition = compareFunction 
                            ? compareFunction(arr[i], arr[j]) > 0 
                            : arr[i].toString() > arr[j].toString(); 
						if (condition) {
								let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

users.sort(compareUser); // передаем в качестве параметра наш callback, но уже для User
console.log(users);

//Задание 3

function reversArr() {
    arr.reverse()
}

function stringOrNumber(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 1;
        if(isNaN(arr[i] && arr.splice(i, 1)));
    }
    return arr;
}

function each(arr, callback) {
    callback(arr);
}

const arr = [1, '4', 9, 'two'];
each(arr, reversArr,);
console.log(arr)

//Задание 4 
const timer = (newDate)=> {
    const interval = setInterval(()=> {
        console.log(new Date);

    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
      }, newDate * 3000)
}
timer(10);

//Задание 5
function calling() {
    console.log('Звоню!')
};

function beeps() {
    setTimeout(() => {
        console.log('Идут гудки...')
    }, 1000);
}

function talk() {
   setTimeout(()=>{
    console.log('Разговор')
   }, 2000) 
   
}

calling();
talk();
beeps();
