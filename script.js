// Өгөгдлийн төрөл
// 5 Primitive datatypes

// 1. String - текст төвтэй дата - "gfdk", 'gfdgd', "56"
// 2. Number - тоон төрлийн дата - 1234567890
// 3. Boolean - true (1), false (0)
// 4. undefined - тодорхогүй
// 5. null - хоосон

// variable - хувьсагч

// var ner = "Narada";
// var nas = 20;
// var mergejil;
// // JS reserved words
// console.log("Сайн байна уу... Миний нэрийг " + ner + " гэдэг. Би " + nas + " настай...");
// Math operators + - * /

// remainder operator %

// 
// var x = 5;
// var y = 6;

// x = x + y; // += 11
// x += y; // 17
// x -= y; 

// x++; // x = x + 1;
// x--; // x = x - 1;
// 5м өргөнтэй, 8м урттай тэгш өнцөгтийн периметрийг ол...
// urt2 + urgun2 = diameter2
// var urgun = 5;
// var urt = 8;
// var p = (urgun**2 + urt**2) ** (1/2)
// var d = Math.sqrt((Math.pow(urgun, 2) + Math.pow(urt, 2)))
// Math.PI
// parseInt => Integer
// parseFloat => float

// 10м радиустай тойргийн урт, талбайг тус тусад нь ол...
// talbai = PI * r2
// urt = PI * D
// var r = +prompt("Радиусын уртыг оруул");
// var a = Math.PI * Math.pow(r, 2);
// var l = Math.PI * (r * 2);

// var x = 15;
// var y = x.toString();

// var z = "32.5"
// var sum = x + +z

// bitwise >> << 

// https://github.com/Taichir0923/SW-917-AB

// condition, loop
// <, >, =, !, &, |
// =
// ==
// ===

// if statement
// ternary operator ? :
// switch case

// if else
// var nas = 18;
// <= , >=,

// if else if
// and - && , or - ||

// if(nas >= 18){ // true
//     alert('Adult');
// } else { // false
//     alert('Child')
// }
// var nas = +prompt('Насаа оруул');
// nas 0-12 baga nas, 13-17, osvor nas
// 18-25 ider zaluu nas
// 25-35 zaluu nas
// 35-50 
// if(nas >= 0 && nas <= 12){
//     console.log('baga nas')
// } else if (nas >= 13 && nas < 18){
//     console.log('osvor nas')
// } else {
//     console.log('adult')
// }

// ternary operator
// nas >= 0 && nas <= 12 ? console.log('baga nas') : 
// nas >= 13 && nas <= 17 ? console.log('osvor nas') : console.log('adult')

// switch(true){
//     case nas >= 0 && nas < 13:
//         console.log('child');
//         break;
//     case nas >= 12 && nas < 18:
//         console.log('osvor nas');
//         break;
//     default:   console.log('adult');
// }

// loop davtalj
// for loop, while, do while, for in, for of
// for(huvisagch, condition, action){}
// forEach, filter

// 100 hurtel buh sondgoi toog consold hevle
// for(var i = 0; i <= 10; i++){
//     if(i%2 !== 1){
//         console.log(i)
//     }
// }
// var i = 0;
// var word = "Hello"
// do {
//     console.log(word[i]);
//     i++;
// }
// while(i < word.length)

// String methods

// "hello world".length
// "hello world"[7] = "o";

// var x = "1234573984789";
// var sum = 0;
// for(var i = 0; i < x.length; i++){
//     if(+x[i]%2 === 0){
//         sum += +x[i];
//     }
// }

// 10**0 === 1
// 10**1 === 10
// 10**2 === 100


// var x = 245;
// var counter = 0;
// for(var i = 1; i <= 245; i++){
//     if(x%i === 0){
//         console.log(i)
//         counter++;
//     }
// }

// Non-Primitive data types
// Arrays, Object, Regular Expressions
// Array - Массив

// var numbers = ["Narada", 12, true] // new Array
// array methods
// "gjdjfl".slice()
// var x = 5; x.toString()

// push
// numbers.push(456, 457, 458);

// pop
// numbers.pop();
// numbers.pop();
// numbers.pop();

// splice
// numbers.splice(2, 1)

// unshift()
// numbers.unshift("shine utga", "dahiad ng", "gg");

// // shift()
// numbers.shift();
// numbers.shift();
// numbers.shift();

// reverse()
// var newArr = numbers.reverse()
// for(var i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// Too, boolean, String холилдсон 10ш өгөгдөл агуулсан массив үүсгэ. Үүсгэсэн массив дотроос дан Стринг төрлийн өгөгдлийг консолд хэвлэ.
// typeof 123 === "number"

// Object - property: value

// [{}, {}, {}]



// var student = {
//     ner: "Narada",
//     year: 3,
//     email: "narada@mail.com",
//     number: 80008877
// }
// var student1 = {
//     ner: "Baigal",
//     year: 2,
//     email: "baigal@example.com",
//     number: 99009999
// }

// var student2 = {
//     ner: "Мөнгөн-шагай",
//     year: 1,
//     email: "shagai@example.com",
//     number: 88008989
// }

// var student3 = {
//     ner: "Choijoo",
//     year: 4,
//     email: "choijoo@example.com",
//     number: 99099999
// }

// var student4 = {
//     ner: "Бөхбилигт",
//     year: 2,
//     email: "boh@example.com",
//     number: 99159999
// }

// var student5 = {
//     ner: "Баяр",
//     year: 2,
//     email: "bayr@example.com",
//     number: 85159999
// }
// var students = [student, student1, student2, student3, student4, student5];

// var email = prompt('Хайх имэйл оруул');
// var found = false;

// var mobiUsers = [];

// for(var i = 0; i < students.length; i++){
//     if(email === students[i].email){
//         console.log(students[i])
//         found = true;
//     }

//     if(students[i].number.toString().slice(0, 2) === "99" || students[i].number.toString().slice(0, 2) === "95" || students[i].number.toString().slice(0, 2) === "94" || students[i].number.toString().slice(0, 2) === "85"){
//         mobiUsers.push(students[i]);
//     }
// };

// if(!found){ // true
//     alert('Хэрэглэгч олдсонгүй')
// }

// 1. Имэйлээр хайлт хийж тухайн оюутны датаг консолд хэвлэ.
// 2. Имэйл олдоогүй тохиолдолд хэрэглэгч олдсонгүй гэсэн alert ажиллуул...
// 3. Мобикомын дугаартай бүх оюутнуудын датаг нэг массивт хадгал

// function
// function findByEmail(){
//     var email = prompt('Хайх имэйл оруул');
//     var found = false;
//     var result = "Хэрэглэгч олдсонгүй";

//     for(var i = 0; i < students.length; i++){
//         if(email === students[i].email){
//             result = students[i];
//             found = true;
//         }
//     };

//     if(found){ // true
//         return result
//     }

//     return result;
// }

// // local variable
// // global variable

// var y = 12; // global

// function test(){
//     var x = 5; // local
//     var kk = 13;
//     return x + kk
// }

// var z = test();

// // console.log(x);

// var userFound = findByEmail();

// parameter function

// function nasToots(on){
//     return 2021 - on;
// }

// var person1 = nasToots(2001);
// var person2 = nasToots(2002);
// var person3 = nasToots(2003);

// оролт: 5 0 0
// гаралт: 2
// тайлбар: тэгтэй тэнцүү тоо нэг ширхэг байгаа учир гаралт = 1

// function ex1(a, b, c){
//     var counter = 0;
//     if(a === 0){
//         counter++;
//     }
//     if(b === 0){
//         counter++;
//     }
//     if(c === 0){
//         counter++;
//     }

//     return counter;
// }

// function ex10(number){
//     var result = false;
//     var numString = number.toString();
//     if(number === +numString.split('').reverse().join("")){
//         result = true
//     };
//     return result;
// }
// // 456
// // 654
// function ex101(number){
//     var result = false;
//     var numStr = "";

//     for(var i = number.toString().length - 1; i >= 0; i--){
//         numStr += number.toString()[i];
//     }

//     if(number === +numStr){
//         result = true
//     }

//     return result;
// }

// function ex102(number){
//     var result = false;
//     var len = number.toString().length;
//     var arr = []
//     for(var i = 0; i < len; i++){
//         var digit = Math.floor(number / Math.pow(10, i)) % 10;
//         arr.push(digit)
//     }

//     if(+arr.join('') === number){
//         result = true
//     }

//     return result;
// }

// 123 => 123 / 10**0
// 123 % 10 => 3

// 123 => 123 / 10**1
// 12 % 10 => 2

// Stack - Last in First out - LIFO

// operator - +, -, *, /
// operand - 123

// parentheses balance

// [] {} ()

// {[(){[]}]({{[]}})}

// callstack
// callback
// recursion


// stack overflow =? stackoverflow.com
// maximum callstack size exceeded

// function stack1(){
//     stack1(); // => returns sth
// }

// function stack2(){
//     stack1()
// }

// 
// 10 hurtelh toonii niilber
// function upToNum(num){
//     if(num === 1){
//         return num;
//     }
//     return num + upToNum(num - 1);
// }

// callback function - parameter helbereer ashiglaj function

// function testCallback(arg){
//     console.log(arg)
// }

// function cb(arg1){
//     return arg1
// }

// var arr = [15, 16, 17, 18];

// es6 - forEach, filter, map, findIndex
// arr.forEach(function(el, index){
//     console.log(el + " es6: " + index)
// })

// for(var i = 0; i < arr.length; i++){
//     printVal(arr[i], i);
// }

// function printVal(val , index){
//     console.log(val , index)
// }

// for in
// var obj = {
//     ner: "blabla",
//     nas: 123,
//     mergejil: "ghjk"
// }
// for(var pro in obj){
//     console.log(obj[pro])
//     console.log(pro)
// }

// function tri(height, base){
//     return (height * base) / 2
// };

// function ex4(obj){
//     var properties = [];
//     var values = [];
//     for(var pro in obj){
//         properties.push(pro);
//         values.push(obj[pro])
//     }

//     return [properties, values]
// }

// rest parameter
// 5   8
// 3   4
// [[[], [], []], [[], [], []], [[], [], []]]
// var arr = [12, 13, 45, 216, 52, 6];
// var x = [56, ...arr, 100, 101, 102]; // rest operator


// REST PARAMETER
// function testRestParameter(...arg){
//     console.log(arg)
// }

// function ex5(first, len){
//     var result = [];
//     for(var i = 1; i <= len; i++){
//         result.push(first * i)
//     }
//     return result;
// } 

// function ex6(...boxes){
//     var sum = 0;
//     for(var i = 0; i < boxes.length; i++){
//         var volume;

//         if(boxes[i].length !== 0 && boxes[i].length === 3){
//             volume = 1
//             for(var j = 0; j < boxes[i].length; j++){
//                 volume *= boxes[i][j];
//             }
//         } else {
//             volume = 0
//         }
//         sum += volume
//     }
//     return sum
// }

// Sorting Algorithms
// Эрэмблэх

// Bubble sort
// Selection sort
// Insertion Sort
// Quick sort
// Radix Sort
// Quick Radix sort
// Merge Sort

// Implementing Bubble sort

function bubbleSort(arr){
    var soligdson = true;
    for(var i = arr.length - 1; i >= 0; i--){
        soligdson = false;
        for(var j = 0; j < i; j++){
            console.log(arr[j] , arr[j+1])
            if(arr[j] > arr[j + 1]){
                var temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                soligdson = true;
            }
        }
        console.log('one loop')
        if(!soligdson){
            break;
        }
    }
    return arr;
}