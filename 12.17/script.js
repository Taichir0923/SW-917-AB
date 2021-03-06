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
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const avatar = document.querySelector('#avatar');
const number = document.querySelector('#number');
import { registerUser } from "./controller.js";
import { resetForm } from './views.js';


form.addEventListener('submit' , e => {
    e.preventDefault();
    if(
        username.value.trim() !== '' &&
        email.value.trim() !== '' &&
        number.value.trim() !== '' &&
        avatar.value.trim() !== '' &&
        password.value.trim() !== '' &&
        passwordConfirm.value.trim() !== ''
    ) {
        if(password.value === passwordConfirm.value){
            registerUser({
                username: username.value,
                email: email.value,
                number: number.value,
                avatar: avatar.value,
                password: password.value
            });
            swal('Амжилттай бүртгэгдлээ' , {
                icon: 'success'
            })
            resetForm(username , email , number , avatar , passwordConfirm , password);
        } else {
            swal({
                icon: 'warning',
                text: 'Нууц үг таарахгүй байна',
                title: 'Уучлаарай'
            })
        }
    } else {
        swal('Уучлаарай өгөгдөл дутуу байна', {
            icon: 'warning'
        })
    }
})