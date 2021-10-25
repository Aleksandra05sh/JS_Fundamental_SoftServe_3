'use strict'

/*Задание №1.
Есть следующий код:
let names = {
   first: "Tom",
   second: "Sam",
   third: "Ray"
};
console.log(/* Ваш код /); // "Первый: -Tom-, Второй - "Sam", Третий => 'Ray'"
Допишите код используя интерполяцию, чтобы в консоли браузера появилась строка, которая написана в комментариях.*/


let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray"
 };
 console.log(`Первый: -${names.first}-, Второй - "${names.second}", Третий => '${names.third}'`);  // "Первый: -Tom-, Второй - "Sam", Третий => 'Ray'"