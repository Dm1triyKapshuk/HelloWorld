// Задание 1
   let i = 1;

   let n = Number(prompt('Сколько раз вам сказать привет?'));

   while (i <= n) {
    console.log('Привет!');
    i++;
   }
//Задание 2
  for (let index = 1; index <= 5; index++) {
    console.log(index);
  }
//Задание 3
  for (let item = 7; item <= 22; item++) {
    console.log('item');
  }
 //Задание 4

  const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
  };
 for (let item in obj) {
    console.log(`${item} - зарплата ${obj[item]} долларов`)
 }
// Задание 5
   let c = 1000;
   let num = 0;
   while ( c >= 50 ) {
    c = c / 2;
    num++;
   }
   console.log(num)
 //Задание 6
  for (let p = 5; p<= 31; p++) {
    if (p % 7 == 0) {
        console.log(`Сегодня пятница, ${p} число. Необходимо сделать отчет`);
        continue;
    }
  }