// 1. Gallery , 2. Todo list , 3. Calculator , 4. Quiz
// OOP - Object Oriented Programming
// 1. object , 2. function

// this

// let obj = {
//     name: 'Narada',
//     sayHi: function (){
//         this.mergejil = 'mergejil';
//         console.log(this)
//     }
// }

// constructor function - blueprint of object - prototype

// Array , Object , Function , Number , Boolean , String

// ES5 => ES6

// function User(username , email){
//     this.username = username,
//     this.email = email
// }

// User.prototype.sayHi = function(){
//     alert('Sainuu. Bi ' + this.username + ' baina...');
// }

// User.prototype.getName = function(){
//     return this.username;
// }

// User.prototype.setName = function(arg){
//     if(typeof arg === 'string'){
//         const checkLetters = /[A-Za-z]/;
//         if(checkLetters.test(arg)){
//             this.username = arg;
//         } else {
//             alert('Буруу утга оруулсан байна...');
//         }
//     } else {
//         alert('Буруу утга оруулсан байна...');
//     }
// }



// const user = new User("Steve" , "steve@mail.com");
// const user1 = new User("John" , "john@mail.com");

// 1. Asuult
// 2. Variants 
/**
 * {
 *    question: "Ulaanbaatar hot heden ond baiguulagdsan be?",
 *    answers: [1760 , 1639 , 1921 , 1991],
 *    correctAnswer: 1
 * }
 */

function Quiz(question , answers , correctAnswer){
    this.question = question,
    this.answers = answers,
    this.correctAnswer = correctAnswer
}

Quiz.prototype.printQuestion = function(){
    console.log(this.question);
    for(let i = 0; i < this.answers.length; i++){
        console.log(`${i}: ${this.answers[i]}`)
    }
}

Quiz.prototype.checkAnswer = function(hariu){
    if(hariu === this.correctAnswer){
        console.log('Зөв хариуллаа. Баяр хүргэе')
    } else {
        console.log('Буруу хариуллаа. Дахин оролдоно уу...')
    }
}

const question = new Quiz('Улаанбаатар хот хэдэн онд байгуулагдсан бэ?' , [1760 , 1639 , 1921 , 1991] , 1);
const question1 = new Quiz('Монгол хэлний цагаан толгой хэдэн үсэгтэй вэ?' , [26 , 33 , 21 , 35] , 3);

// 5 asuult uusgeed, buh asuultiig daraallaar n garaj ireh

const questions = [question , question1];

function init(){
    questions.forEach(asuult => {
        asuult.printQuestion();
        asuult.checkAnswer(+prompt('Зөв хариултыг оруул...'))
    })
}