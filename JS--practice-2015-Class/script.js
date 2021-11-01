'use strict'
/*Задание №1.
Напишите класс, который описывает MP3 плеер.*/

const playList =[
  {
    singer: "Sting",
    title: "Desert of Rose",
  }, {
    singer: "Sting",
    title: "Shape of My Heart",
  }, {
    singer: "NK",
    title: "Красное вино",
  }, {
    singer: "Ed Sheeran",
    title: "Bad habits",
  }, {
    singer: "Imagine Dragons",
    title: "Wrecked",
  },
];

class MP3 {
  constructor() {
    this._isOn = false;
    this._isPlay = false;
    this._playList = playList;
    this._favoriteSongs = [];
    this._currentSongNumber = 0;
  }

  onOff() {
    this._isOn = !this._isOn;
  }
  
  get isOn() {
    return this._isOn;
  }
  
  playStop() {
    this._isPlay = !this._isPlay;
  }
  
  get isPlay() {
    return this._isPlay;
  }
  
  nextSong() {
    if (this._currentSongNumber < this._playList.length - 1) {
      this._currentSongNumber++;
    } else {
      this._currentSongNumber = 0;
    }
  } 

  previousSong () {
    if (this._currentSongNumber > 0) {
      this._currentSongNumber--;
    } else {
      this._currentSongNumber = this._playList.length-1;
    }
  }
  
  get currentSongTitle() {
    return this._playList[this._currentSongNumber].title;
  }
  
  get currentSongSinger() {
    return this._playList[this._currentSongNumber].singer;
  }
  
  addToFavorite() {
    const isSongFavorite = this._favoriteSongs.find(item => this.currentSongTitle === item.title);
    if (!isSongFavorite) {
      this._favoriteSongs.push(this._playList[this._currentSongNumber]);
    }
  }  
}  

const mp3Player = new MP3;

/*Задание №2.
Напишите класс Геометрическая фигура, определите в нем приватные свойства для задания центра фигуры. Для доступа к этим свойствам определите необходимые метод/методы.
На основе этого класса создайте два новых (наследники) – Прямоугольник и Круг. В этих классах определите особые приватные свойства. (Например, длина диагонали для Прямоугольника и радиус для Круга). В каждый из классов добавьте публичный метод info(), который выводит на экран всю доступную информацию о фигуре.*/

//Вариант 1 https://learn.javascript.ru/private-protected-properties-methods

class Validator {
  static isCoordinateValid(coordinate) {
    if (typeof coordinate === "number" && !isNaN(coordinate) && isFinite(coordinate)) {
      return true;
    } else {
      return false;
    }
  }

  static isLengthValid = function(value) {
    if (typeof value === "number" &&  value > 0 && isFinite(value)){
      return true;
    } else {
      return false;
    }
  }
} 

class GeometricFigure {
  #axisX = 0;
  #axisY = 0;

  constructor(x, y) {
    if (Validator.isCoordinateValid(x)){
      this.#axisX = x;
    }

    if (Validator.isCoordinateValid(y)) {
      this.#axisY = y;
    }
  }

  get axisX() {
   return this.#axisX;
  }

  set axisX(x) {
    if (Validator.isCoordinateValid(x)){
    this.#axisX = x;
    }
  }

  get axisY() {
    return this.#axisY;
  }

  set axisY(y) {
    if (Validator.isCoordinateValid(y)){
    this.#axisY = y;
    }
  }  
}

class Rectangle extends GeometricFigure{
  #diagonalLength = 1;

  constructor(x, y, diagonal){
    super(x, y);
    if (Validator.isLengthValid(diagonal)){
      this.#diagonalLength = diagonal;
    } 
  }

  get info() {
    console.log(`Координаты фигуры:
    x: ${this.axisX}
    y: ${this.axisY}
    диагональ: ${this.#diagonalLength}`)
  }
}

class Circle extends GeometricFigure{
  #radiusLength = 1;
  constructor(x, y, radius){
    super(x, y);
    if (Validator.isLengthValid(radius)){
      this.#radiusLength = radius;
    }
  }

  get info() {
    console.log(`Координаты фигуры:
    x: ${this.axisX}
    y: ${this.axisY}
    радиус: ${this.#radiusLength}`)
  }
}


const rectangle1 = new Rectangle(1, 2, 15)
rectangle1.axisY = 12;
rectangle1.info;
const circle1 = new Circle(1, 2, 15)
circle1.axisY = 33;
circle1.info;


//Вариант 2


class GeometricFigure2 {

  constructor(x, y) {
    if (Validator.isCoordinateValid(x)){
      this.__axisX = x;
    } else {
      this.__axisX = 0;
    }

    if (Validator.isCoordinateValid(y)) {
      this.__axisY = y;
    } else {
      this.__axisY = 0;
    }
  }

  get axisX() {
   return this.__axisX;
  }

  set axisX(x) {
    if (Validator.isCoordinateValid(x)){
    this.__axisX = x;
    }
  }

  get axisY() {
    return this.__axisY;
  }

  set axisY(y) {
    if (Validator.isCoordinateValid(y)){
    this.__axisY = y;
    }
  }  
}

class Rectangle2 extends GeometricFigure2{
  constructor(x, y, diagonal){
    super(x, y);
    if (Validator.isLengthValid(diagonal)){
      this.__diagonalLength = diagonal;
    } else {
      this.__diagonalLength = 1;
    }
  }

  get info() {
    console.log(`Координаты фигуры:
    x: ${this.axisX}
    y: ${this.axisY}
    диагональ: ${this.__diagonalLength}`)
  }
}

class Circle2 extends GeometricFigure2{
  constructor(x, y, radius){
    super(x, y);
    if (Validator.isLengthValid(radius)){
      this.__radiusLength = radius;
    } else {
      this.__radiusLength = 1;
    }
  }

  get info() {
    console.log(`Координаты фигуры:
    x: ${this.axisX}
    y: ${this.axisY}
    радиус: ${this.__radiusLength}`)
  }
}

const rectangle2 = new Rectangle2(1, 2, 15)
rectangle2.axisY = 12;
rectangle2.info;
const circle2 = new Circle2(1, 2, 15)
circle2.axisY = 33;
circle2.info;


/*Задание №3.
Напишите класс Квадрат, определите защищенное свойство для хранения значения стороны. Для доступа к этому свойству определите необходимые метод/методы. Также определите публичный метод, который возвращает периметр.
На основе этого класса создайте класс Куб и переопределите метод получения периметра.
Реализуйте 2 версии текущего задания, используя следующие способы переопределения:
1. Без расширения (полностью переопределить метод родителя);
2. С расширением (использовать результат метода родителя для дальнейших расчетов).*/


class Square {
  constructor(unverifiedSide) {
    if(Square.sideValid(unverifiedSide)){
      this._side = unverifiedSide;
    } else {
      this._side = 1;
    }  
  }

  get side() {
    return this._side 
  }

  set side(unverifiedSide){
    if(Square.sideValid(unverifiedSide)){
      this._side = unverifiedSide;
    } 
  }
  
  get perimeterP() {
    return this._side * 4
  }

  static sideValid(side) {
    if (typeof side === "number" && side > 0 && isFinite(side)) {
      return true;
    } else {
      return false;
    }
  };
}

// 1. Без расширения (полностью переопределить метод родителя);

class Cube1 extends Square {
  constructor(unverifiedSide) { 
    super(unverifiedSide)
  }
  get perimeterP() {
    return this.side * 12
  }
}

// 2. С расширением (использовать результат метода родителя для дальнейших расчетов)

class Cube2 extends Square {
  constructor(unverifiedSide) {
    super(unverifiedSide)
  }
  get perimeterP() {
    return super.perimeterP * 3; 
  }
}


const sq1 = new Square(-5);
const scube = new Cube1(5);
scube.side = 10;
const scube2 = new Cube2(5);


/*Задание №4.
Напишите класс Круг и реализуйте следующий функционал:
1. Определите конструктор, который запрашивает координаты центра круга, его радиус и инициализирует объект;
2. Определите метод получения длины окружности для текущего объекта (L = 2 * π * R);
3. Определите статический метод, который принимает радиус и возвращает длину окружности для заданного радиуса (L = 2 * π * R);
4. Определите метод получения объекта-круга, который возвращает копию текущего объекта;
5. Определите статический метод, который принимает координаты центра круг, его радиус и возвращает объект круга с заданными параметрами;
6. Определите метод проверки попадания точки в круг;
7. Определите метод преобразования текущего состояния объекта в символьную строку (toString()).*/

class Circle4 {
  constructor(x, y, r){
    this._centerX = x;
    this._centerY  = y;
    this._radius = r;
  }
  //2
  get circleLenght() { 
    return 2 * Math.PI * this._radius;
  }

  //3
  static calkCircleLenght(r) {
    return 2 * Math.PI * r;
  }

  //4
  cloneCircle() {
    return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this))
  }

  //5
  createCircle(x, y, r){
    return new Circle4(x, y, r); 
  }

  //6
  isInCircle(x, y) {
    const lXSquare = Math.pow((x - this._centerX), 2);
    const lYSquare = Math.pow((y - this._centerY), 2);
    const lRSquare = Math.pow(this._radius, 2);
    if ((lXSquare + lYSquare) < lRSquare) {
      return true
    } else {
      return false;
    }
  }

  //7
  toString(){
    console.log(`Координаты центра круга:  
    x: ${this._centerX};
    y: ${this._centerY};
    радиус: ${this._radius}
    длина окружности: ${this.circleLenght}.`)
  }
} 

const a = new Circle4(1, 2, 5);
console.dir(a)
console.dir(a.cloneCircle())
console.dir(a.createCircle(1, 2, 3))
console.log(a.isInCircle(-10, 2))
a.toString()