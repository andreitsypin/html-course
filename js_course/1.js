// let a = 124;
// let b = 123.5;
// let c = true;
// let d = "Hello";
// let d1 = 'World';
// let e;
// // null undefined NaN

// let obj = { key: "value"};
// let obj1 = [1,2,4,5];
// let data = new Date();
// let random = Math.random();
// console.log(a);

// a = "privet";

// console.log(a);
// console.log(1+1);
// console.log(1-1);
// console.log(2*3);
// console.log(4/2);
// console.log(4%2);
// console.log(a++);
// console.log(a--);
// console.log(random);

// console.log("1" + 1);
// console.log("2" - 1);
// console.log("2" + "2");
// console.log(2 + +"1");
// console.log(+"2" - +"1");
// console.log(+a);
// console.log(Number("   23   "));
// console.log(Number(" "));
// console.log(Number(""));
// console.log(Number("asdgasdg"));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Boolean(123));
// console.log(Boolean(" "));
// console.log(Boolean(""));
// console.log(Boolean("asdgasd"));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// // if (123 / 2 == 1) {
// //     console.log("Да")
// // }
// // else if (1 == 1) {
// //     console.log("Нет");
// // }

// // let x = 3;
// // let y = 7;

// // if (x>2){
// //     if (y > 5){
// //         console.log("да да")
// //     }
// // }

// // // && - И || - или ! - не

// // if (!x>2 && y>5){
// //     console.log("да да да")
// // }

// // // == ===

// // let k = 2;
// // let l = "2";
// // console.log(k == l);
// // console.log(k === l);
// // console.log(k != l);
// // console.log(k !== l);

// let x1 = 4;
// console.log(Math.sqrt(4));

// console.log(Math.PI);

// console.log(Math.abs(-4));
// console.log(Math.floor(4.7));
// console.log(Math.ceil(4.4));
// console.log(Math.round(4.4));
// console.log(Math.round(4.6));
// console.log(Math.max(1,2,3,4,5,6));
// console.log(Math.min(1,2,3,4,5,6));

// console.log(Math.pow(2,4));

// console.log(Math.sin(Math.PI / 2));
// console.log(Math.round(Math.cos(Math.PI / 2)));

// console.log(Math.random());

// let min = -100;
// let max = 100;

// let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNumber);

// let day = 2;
// let dayName;
// switch (day){
//     case 1:
//         dayName = "Понедельник";
//         break;
//     case 2:
//         dayName = "вторник";
//         break;
//     default:
//         dayName = "не знаю";
// }

// let s1 = 1 == 1 ? "da" : "net";

// console.log(dayName)

// let n = prompt("Введите ваше имя:", "Гость");
// if (n !== "") {
// alert("Привет, " + n + "!");
// }
// else {
// alert("Вы отменили ввод имени.");
// }

// for (let i = 0; i< 10; i++){
//     console.log(i);
// }

// let x = 10;

// let s = `sasdag\n
// \tasdgasdgas\n
// `;

// while (x > 0){
//     console.log(x);
//     x--;
// }

// do{
//     console.log(x);
//     x--;
// } while(x > 10);
// console.log(s);

// let val = prompt("Введите день 1-7: ");
// switch (+val) {
//   case 1:
//     alert("П");
//     break;
//   case 2:
//     alert("Вт");
//     break;
//   case 3:
//     alert("Ср");
//     break;
//   case 4:
//     alert("Ч");
//     break;
//   case 5:
//     alert("Пт");
//     break;
//   case 6:
//     alert("С");
//     break;
//   case 7:
//     alert("ВС");
//     break;
//   default:
//     alert("hz");
//     break;
// }

// let a = 5;
// let b = "asdgas";


// console.log(a/0);
// console.log(b/0);


// let arr = [1,2,3,4,5,6,7];
// let arr1 = new Array(5);

// console.log(arr1.toString());
// console.log(arr1[0]);
// console.log(arr[0]);

// arr.push(4);
// console.log(arr.toString());
// arr.pop();
// console.log(arr.toString());
// arr.shift();
// console.log(arr.toString());
// arr.unshift(0);
// console.log(arr.toString());

// let a = arr.splice(1,2);
// console.log(a);
// console.log(arr.toString());

// let a1 = arr.splice(1, 0, 10);
// console.log(a1);
// console.log(arr.toString());

// let a2 = arr.splice(1, 1, 10);
// console.log(a2);
// console.log(arr.toString());


// let arr2 = arr.sort((a,b) => a - b);
// console.log(arr2);

// console.log(arr2.reverse());

// let arr3 = new Array(5).fill(0);
// console.log(arr3.toString());

// let arr4 = arr2.slice(1, 5);
// console.log(arr4);

// console.log(arr2.concat(arr4));

// let arr5 = arr4.map(x => x * 2);
// console.log(arr5);
// console.log(arr4);

// let arr6 = arr4.filter(x => x > 5);
// console.log(arr6);

// console.log(arr4.includes(4));
// console.log(arr4.indexOf(4));
// console.log(arr4.find(x => x < 5));
// console.log(arr4.findIndex(x => x < 5));
// console.log(arr4.some(x => x < 5));
// console.log(arr4.every(x => x < 5));
// console.log(arr4);
// arr4.forEach(x => console.log(x));
// console.log(arr4);

// console.log(arr4.join(" "));

// let v = "1,2,3,4,5".split(",");

// console.log(arr4);

// //reduce(acc, current, index, array) => {
// // return новое_значение_acc;}, начальное значение acc);

// let sum = arr4.filter(x => x > 5).map(x => x * 2).reduce((acc, x) => {return x % 2 == 0 ? acc + 1: acc;}, 0);
// console.log(sum);

// let s = "hello";
// let s1 = 'hello';
// console.log(s[1]);
// console.log(s.charAt(1));
// console.log(s.length);
// console.log("hello".includes("ell"));
// console.log('hello'.indexOf('l'));
// console.log('hello'.lastIndexOf('l'));
// console.log('hello'.startsWith('hel'));
// console.log('hello'.endsWith('llo'));
// console.log("hello".slice(-3,-1));
// console.log("hello".slice(1,3));
// console.log("hello".substring(1,4));
// console.log("hello world".replace("world", 'python'));
// console.log("a-b-c".replaceAll("-", '_'));
// console.log('Hello'.toLowerCase());
// console.log('Hello'.toUpperCase());
// console.log('     Hello     '.trim());
// console.log('     Hello     '.trimEnd());
// console.log('     Hello     '.trimStart());
// console.log("a,b,c".split(','));
// let a = 5;
// console.log(`a = ${a}`);
// console.log('a = ' + a);
// console.log('ha'.repeat(5));


// function foo(){
//     console.log("foo");
// }

// foo();


// const sum = function(a, b = 5){
//     let c = 5;
//     return a + b + c;
// }

// console.log(sum(5,2));

// const mul = (a, b) => { 
//     return a * b;
// };

// console.log(mul(5, 2));

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// let arr2 = [
//     [9,8,7],
//     [6,5,4],
//     [3,2,1]
// ]

// console.log(arr.reduce((sum, x) => {
//     return sum + x.reduce((total, y) => {return total + y;}, 0)
// }, 0));

// let res = arr.map((x, i) => { 
//     return x.map((y, j) =>  {return y + arr2[i][j];});
// });

// let num = 2;
// let res1 = arr.map((x, i) => { 
//     return x.map((y, j) =>  {return y * num;});
// });

// console.log(res);
// console.log(res1);
// //reduce(acc, x, i, arr)
// //map(x, i, arr)

// let array = [1,2,3,4,5,67,8,9,0];
// let max = -Infinity;
// let min = Infinity;
// array.forEach(x => {max = max < x ? x : max;
//     min = min > x? x : min;
// });
// console.log(min);
// console.log(max);


// let user = {
//     name: "Alex",
//     age: 25,
//     "day of birth": "12.12.12",
// };

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["day of birth"]);
// user.name = "Oleg";
// console.log(user.name);


// let user1 = user;

// user1.age = 30;
// console.log(user1 == user);

// user.surname = "Ivanov";
// console.log(user);

// delete user.surname;

// console.log(user);

// let key = "role";

// let user2 = {
//     [key] : "admin",
// }

// console.log(user2);

// let numbers = {
//     "+7": "Россия",
//     "+1": "США",
//     "+41": "Германия",
//     "+35": "Швеция",
// }
// console.log(numbers.numb === undefined);

// console.log("0" in numbers);

// for (key in numbers){
//     console.log(+key);
//     console.log(numbers[key]);
// }

// let user3 = {
//     name: "John",
//     age: 30,
// }

// user3.sayHi = function(){
//     console.log("HI");
// }

// function foo1(){
//     console.log("foo1");
// }

// user3.foo = foo1;

// user3.sayHi();
// user3.foo();

// let user4 = {
//     name: "john",
//     foo2() {
//         console.log(this.name + "foo2");
//     } 
// }
// user4.foo2();

// let admin1 = user4;
// user4 = null;
// admin1.foo2();


// function User(name){
//     this.name = name;
//     this.IsAdmin = false;
//     this.foo3 = function(){
//         console.log("Меня зовут " + this.name);
//     }    
// }

// let user5 = new User("Jack");
// user5.foo3();

// console.log(user5?.country?.city);

// console.log(Object.keys(user5));
// console.log(Object.values(user5));
// console.log(Object.entries(user5));

// let user6 = Object.assign({}, user5);
// let user7 = {...user5};
// console.log(user7);
// console.log(user6);

// let deepCopy = structuredClone(user4);

// let animal = {
//     eats: true,
//     sleep() {
//         this.isSleep = true;
//     }
// }

// let rabbit = {
//     jumps: true,
// }

// rabbit.__proto__ = animal;

// console.log(rabbit.eats);

// rabbit.sleep();

// console.log(rabbit.isSleep);
// console.log(animal.isSleep);

// {
//     let mes = "hello";
//     console.log(mes);
// }

// {
//     let mes = "hello222";
//     console.log(mes);
// }

// function sayHiBye(firstname, lastname){

//     function getfullname(){
//         return firstname + " " + lastname;
//     }

//     console.log("Hello " + getfullname());
//     console.log("Bye " + getfullname());
// }

// sayHiBye("Oleg", "Petrov");


// function makeCounter() {
//     let count = 0;

//     return function() {
//         return count++;
//     }
// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());



// class MyClass{
//     constructor(){}
//     method1(){}
//     method2(){}
//     ...
// }

// new MyClass();


// class User {
//     constructor(name){
//         this.name = name;
//     }

//     foo1(){
//         console.log(this.name);
//     }
// }

// let user = new User("Иван");
// let user1 = new User();
// user1.foo1();
// user.foo1();

// let user2 = new User("Олег");

// let Member = class {
//     ...
// }

// function makeClass(s){
//     return class{
//         foo(){
//             console.log(s);
//         }
//     }
// }

// let Member = makeClass("agsdg");

// new Member().foo();


// class User{
//     surname = "Ivanov";

//     constructor(name){
//         this.name = name;
//     }

//     get name(){
//         return this._name;
//     }

//     set name(value){
//         if (value.length < 4){
//             console.log("Имя короткое");
//             return;
//         }
//         this._name = value;
//     }
// }

// let user = new User("Ivan");
// console.log(user.name);

// console.log(user)


// // class MyClass {
// //     prop = value;
// //     constructor(...){

// //     }
// //     method(...){

// //     }
// //     get something(...){...}
// //     set something(...){...}
// // }


// class Animal {
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed){
//         this.speed = speed;
//         console.log(`${this.name} бежит со скоростью ${this.speed}`);
//     }

//     stop(){
//         this.speed = 0;
//         console.log(`${this.name} стоит`);
//     }
// }

// let animal = new Animal("питомец");

// class Rabbit extends Animal{
//     constructor(name, legCount){
//         super(name);
//         this.legCount = legCount;
//     }

//     hide(){
//         console.log(`${this.name} прячется!`);
//     }

//     stop(){
//         super.stop();
//         this.hide();
//     }
// }

// let rabbit = new Rabbit("кроль", 4);
// rabbit.run(5);
// rabbit.stop();

// class MathHelper{
//     static sum(a,b){
//         return a + b;
//     }

//     static pi = 3.14;
// }

// // let m = new MathHelper();
// // m.sum(4,5);
// console.log(MathHelper.sum(4,6));
// console.log(MathHelper.pi);

// let date = new Date(2025,0,1);


// class MyClass {
//     _op = 0;
//     #op2 = 200;

//     get op2(){
//         return this.#op2;
//     }

//     #foo2(value){
//         if (value < 0) 
//             throw new Error("нельзя");
//         this._op = value;
//     }
//     // set op(value){
//     //     if (value < 0) throw new Error("нельзя");
//     //     this._op = value;
//     // }
//     get op(){
//         return this._op;
//     }
// }
// let n = new MyClass();

// // n.#foo2(200);

// console.log(n.op2);
// // n.op2 = 12;
// // console.log(n.op2);
// n.op = 15;
// console.log(n.op);
// console.log(n);
// console.log(!undefined);

// let header = document.createElement("h1");
// let paragraph = document.createElement("p");
// header.textContent = "Новый блок";
// paragraph.textContent = "Новый блок 2";
// document.body.appendChild(header);
// document.body.appendChild(paragraph);
// console.log(document.documentElement);
// console.log(document.head);
// header.id = 'idElem';
// header.className = 'my-class';
// // header.style.fontSize = "45px";
// // header.style.fontWeight = "100";
// // header.style.border = "2px solid red";
// // header.style.borderRadius = "20px";
// header.classList.add("h1");
// let list = document.createElement("ul");
// let first = document.createElement("li");
// let third = document.createElement("li");
// first.textContent = "первый";
// third.textContent = "третий";
// list.appendChild(first);
// list.appendChild(third);
// document.body.appendChild(list);
// let second = document.createElement("li");
// second.textContent = "второй";
// //insert.before(новый_элемент, перед_чем_вставлять)
// list.insertBefore(second, third);
// let child = list.childNodes;
// child.forEach((node) => {console.log(node);});
// let child2 = list.children;
// Array.from(child2).forEach((node2) => {console.log(node2.textContent);});

// let element = document.getElementById("idElem");
// console.log(element.textContent);
// element.style.color = "blue";

// let elements = document.getElementsByClassName("myClass");
// console.log(elements.length);
// Array.from(elements).forEach(node => {node.style.fontSize = "45px";});

// let tags = document.getElementsByTagName("div");
// console.log(tags.length);
// Array.from(tags).forEach(node => {node.style.color = "red";});

// header.classList.remove("h1");


let header = document.createElement("h1");

header.textContent = "новый блок";

document.body.appendChild(header);

let ul = document.createElement("ul");
let li = document.createElement("li");

li.textContent = "1234213";

ul.appendChild(li);
document.body.appendChild(ul);

ul.id = "ul";

ul.className = "my-class";

ul.classList.add("my-class1");


ul.style.backgroundColor = "red";

let first = document.createElement("li");

first.textContent  = "первый";

ul.insertBefore(first, li);

let child = ul.childNodes;
let child1 = ul.children;

let element = document.getElementById("ul");
console.log(element);

let element1 = document.getElementsByClassName("my-class");
console.log(Array.from(element1));

let element2 = document.getElementsByTagName("li");
console.log(element2.length);


function foo(){
    console.log("нажали на кнопку1");
}

let btn = document.getElementById("myBtn");

btn.addEventListener("click", foo);


btn.addEventListener("click", function(event){
        console.log("нажали на кнопку2");
        event.stopImmediatePropagation();
})

btn.addEventListener("click", function(){
        console.log("нажали на кнопку3");
})

function foo2(){
    console.log("Мышь наведена на элемент");
}


ul.addEventListener("mouseover", foo2);

function foo3(event) {
    console.log("нажата " + event.key);
}

document.addEventListener("keydown", foo3);


function changeColor() {
    let elem = document.getElementById("notBtn");
    elem.style.backgroundColor = "orange";
    elem.style.borderColor = "red";

}

// // document.removeEventListener

document.addEventListener("keydown", function(event) {
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.key);
    console.log(event.code);
    if (event.key == "Enter"){
        event.preventDefault();
        console.log("такая кнопка не обрабатывается")
    }
});

//preventDefault()


//stopPropagation()

document.getElementById("link").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Стандартное действие отменено");
});


document.getElementById("parent").addEventListener("click", function(){
    console.log("Нажали на родительский элемент");
});

document.getElementById("child").addEventListener("click", function(event){
    console.log("Нажали на дочерний элемент");
    event.stopPropagation();
});


document.addEventListener("DOMContentLoaded", () => {
    let drag = document.getElementById("draggable");
    let offsetX, offsetY, isDragging = false;


    drag.addEventListener("mousedown", (event) =>{
        isDragging = true;

        offsetX = event.clientX - drag.getBoundingClientRect().left;
        offsetY = event.clientY - drag.getBoundingClientRect().top;

        drag.style.cursor = "grabbing";
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });

    function onMouseMove(event){
        if(isDragging){
            let x = event.clientX - offsetX;
            let y = event.clientY - offsetY;
            drag.style.left = `${x}px`;
            drag.style.top = `${y}px`;
        }
    }

    function onMouseUp(){
        isDragging = false;
        drag.style.cursor = 'grab';

        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    }
});

document.addEventListener("mous")