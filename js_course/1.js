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

let s = "hello";
let s1 = 'hello';
console.log(s[1]);
console.log(s.charAt(1));
console.log(s.length);
console.log("hello".includes("ell"));
console.log('hello'.indexOf('l'));
console.log('hello'.lastIndexOf('l'));
console.log('hello'.startsWith('hel'));
console.log('hello'.endsWith('llo'));
console.log("hello".slice(-3,-1));
console.log("hello".slice(1,3));
console.log("hello".substring(1,4));
console.log("hello world".replace("world", 'python'));
console.log("a-b-c".replaceAll("-", '_'));
console.log('Hello'.toLowerCase());
console.log('Hello'.toUpperCase());
console.log('     Hello     '.trim());
console.log('     Hello     '.trimEnd());
console.log('     Hello     '.trimStart());
console.log("a,b,c".split(','));
let a = 5;
console.log(`a = ${a}`);
console.log('a = ' + a);
console.log('ha'.repeat(5));


function foo(){
    console.log("foo");
}

foo();


const sum = function(a, b = 5){
    let c = 5;
    return a + b + c;
}

console.log(sum(5,2));

const mul = (a, b) => { 
    return a * b;
};

console.log(mul(5, 2));

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let arr2 = [
    [9,8,7],
    [6,5,4],
    [3,2,1]
]

console.log(arr.reduce((sum, x) => {
    return sum + x.reduce((total, y) => {return total + y;}, 0)
}, 0));

let res = arr.map((x, i) => { 
    return x.map((y, j) =>  {return y + arr2[i][j];});
});

let num = 2;
let res1 = arr.map((x, i) => { 
    return x.map((y, j) =>  {return y * num;});
});

console.log(res);
console.log(res1);
//reduce(acc, x, i, arr)
//map(x, i, arr)

let array = [1,2,3,4,5,67,8,9,0];
let max = -Infinity;
let min = Infinity;
array.forEach(x => {max = max < x ? x : max;
    min = min > x? x : min;
});
console.log(min);
console.log(max);