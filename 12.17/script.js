// OOP - Local Storage
// Хэрэглэгч бүртгэдэг систем
// Өөрийн аккаунтаар нэвтэрч орно.
// CRUD - Create Read Update Delete ( Article - Нийтлэл )
// Timeline - Бүх нийтлэл байрлах хэсэг
// Нийтлэл унших хэсэг
// Сэтгэгдэл бичих хэсэг
// Сэтгэгдэл бичихийн тулд заавал нэвтэрсэн байх ёстой

// IIFE - Immediately Invoked Function Expression

const iife = (() => {
    return 12
})()

const model = (() => {
    class Quiz {
        constructor(question){
            this.question = question
        }
    }

    class Student {
        constructor(username){
            this.username = username
        }
    }

    return {
        Quiz: Quiz,
        User: Student
    }
})()

const ui = (() => {
    const question = new model.Quiz('How are you?');
    question.printQuestion(document.body)
})()


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