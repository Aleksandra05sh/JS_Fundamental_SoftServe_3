'use strict'

/*Задание №1.
Есть следующий код:
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]
Допишите код используя деструктуризацию, чтобы в консоли браузера появились строки, которые написаны в комментариях.*/

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]


/*Задание №2.
Есть следующий код:
let names = {
   first: "Tom",
   second: "Sam",
   third: "Ray", 
   fourth: "Bob"
};
let {/ Ваш код /} = names;
console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"
Допишите код используя деструктуризацию, чтобы в консоли браузера появились строки, которые написаны в комментариях.*/

let names = {
  first: "Tom",
  second: "Sam",
  third: "Ray", 
  fourth: "Bob"
 };
 let {first: f, third: x2, fifth = "Name №5"} = names;
 console.log(f); // "Tom"
 console.log(x2); // "Ray"
 console.log(fifth); // "Name №5"



/*Задание №3.
Есть следующий код:
let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let / Ваш код / = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26
Допишите код используя деструктуризацию, чтобы в консоли браузера появились строки, которые написаны в комментариях.*/


let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let {names:[name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26