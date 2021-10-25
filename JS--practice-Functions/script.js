'use strict'

/*Задание №1.
Напишите функцию mul(), которая принимает любое количество параметров разного типа и возвращает произведение параметров типа Number.
Если параметры типа Number отсутствуют, возвращает число 0.
function mul() {
   // Ваш код
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
// Нельзя использовать свойство arguments, но в функцию mul() можно добавить один параметр.*/

function mul(...rest) {
  let arr = rest;
	
	function condition(value){
		return typeof value === 'number';
	};

	function reducer(accumulator, currentValue) {
		return accumulator * currentValue;
	};

	if (arr.some(condition)){
		let arr1 = arr.filter(condition);
		return arr1.reduce(reducer);

 	} else {
		return 0;
	}
}

 console.log(mul(2, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0
 


/*Задание №2.
Есть следующий код:
let calc = {
   x: 2,
   y: 3,
   mul: function () {
      // Ваш код
   }
};
setTimeout(calc.mul(), 2000); // 6, через 2 секунды
Допишите код используя стрелочные функции, чтобы в консоли браузера появилось число, которое написано в комментариях.;*/

let calc = {
   x: 2,
   y: 3,
   mul: function () {
		const func = () => console.log(this.x * this.y);
		return func;
	}
}

setTimeout(calc.mul(), 2000); // 6, через 2 секунды


/*Задание №3.
Есть следующий код:
let server = {
   data: 0,
   convertToString: function (callback) {
      callback((function () {
         return this.data + "";
      }).bind(this));
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return (function (callback) {
         this.result = callback();
      }).bind(this);
   }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"
Измените код используя стрелочные функции, чтобы в коде не использовались методы bind().*/






let server = {
   data: 0,
   convertToString: function (callback) {
      callback( () => {
         return this.data + "";
      });
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return (callback) => {
         this.result = callback();
      };
   }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"