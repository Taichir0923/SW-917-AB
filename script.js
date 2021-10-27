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
var i = 0;
var word = "Hello"
do {
    console.log(word[i]);
    i++;
}
while(i < word.length)
