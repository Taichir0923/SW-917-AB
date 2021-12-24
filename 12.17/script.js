// OOP - Local Storage
// Хэрэглэгч бүртгэдэг систем
// Өөрийн аккаунтаар нэвтэрч орно.
// CRUD - Create Read Update Delete ( Article - Нийтлэл )
// Timeline - Бүх нийтлэл байрлах хэсэг
// Нийтлэл унших хэсэг
// Сэтгэгдэл бичих хэсэг
// Сэтгэгдэл бичихийн тулд заавал нэвтэрсэн байх ёстой

// IIFE - Immediately Invoked Function Expression

// const iife = (() => {
//     return 12
// })()

// const model = (() => {
//     class Quiz {
//         constructor(question){
//             this.question = question
//         }
//     }

//     class Student {
//         constructor(username){
//             this.username = username
//         }
//     }

//     return {
//         Quiz: Quiz,
//         User: Student
//     }
// })()

// const ui = (() => {
//     const question = new model.Quiz('How are you?');
//     question.printQuestion(document.body)
// })()


// const student = new model.User('Narada')

// MVC - Model , View , Controller
// function test(){
//     return 5
// }

// const x = test();


// function init(){
//     return function(){
//         return function(arg){
//             console.log(arg)
//         }
//     }
// }

// Гэрт , export , import
// named export , default export


// JavaScript - Destruction

// array destruction
// let arr = [12 , 13 , 14];
// let [,, z] = arr;
// // console.log(z);

// // object destruction
// let obj = {
//     ner: "Narada",
//     mergejil: 'designer',
//     data: '12-14-18'
// }

// let { mergejil , ner: username , data } = obj;
// let {data: haha} = localStorage

// 1. Хэрэглэгч бүртгэх

// username , email , password , id , number

// Model - өгөгдлийн загварыг гаргах
// controller - хэрэглэгч бүртгэх функц
// View - DOM элементүүдийг программчлах
const form = document.querySelector('#form');
import { registerUser , login } from "./controller.js";

form.addEventListener('submit' , e => {
    e.preventDefault();
    registerUser({
        username: 'blabla',
        email: 'narada@mail.com',
        number: 99887766,
        avatar: 'bjkghsfdkjgs',
        password: 'jdfjgfhsk'
    })
})