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

// function Quiz(question , answers , correctAnswer){
//     this.question = question,
//     this.answers = answers,
//     this.correctAnswer = correctAnswer
// }

// Quiz.prototype.printQuestion = function(){
    // console.log(this.question);
    // for(let i = 0; i < this.answers.length; i++){
    //     console.log(`${i}: ${this.answers[i]}`)
    // }
// }

// Quiz.prototype.checkAnswer = function(hariu){
//     if(hariu === this.correctAnswer){
//         console.log('Зөв хариуллаа. Баяр хүргэе')
//     } else {
//         console.log('Буруу хариуллаа. Дахин оролдоно уу...')
//     }
// }

// const question = new Quiz('Улаанбаатар хот хэдэн онд байгуулагдсан бэ?' , [1760 , 1639 , 1921 , 1991] , 1);
// const question1 = new Quiz('Монгол хэлний цагаан толгой хэдэн үсэгтэй вэ?' , [26 , 33 , 21 , 35] , 3);

// // 5 asuult uusgeed, buh asuultiig daraallaar n garaj ireh

// const questions = [question , question1];

// function init(){
//     questions.forEach(asuult => {
//         asuult.printQuestion();
//         asuult.checkAnswer(+prompt('Зөв хариултыг оруул...'))
//     })
// }

// ES6
// let , const , () => {} , `` , {}

// class 

// function User(username , email){
//     this.username = username,
//     this.email = email
// }

// User.prototype.getName = function(){
//     return this.username;
// }

// methodical function - static
// protypical function - object-s handdag function

const questionContainer = document.querySelector('#questionContainer')



class Quiz {
    constructor(question , answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.correct = false;
        this.selected = null;
    }

    printQuestion(q , list){
        q.innerHTML = this.question;
        for(let i = 0; i < this.answers.length; i++){
            list.insertAdjacentHTML('beforeend' , `
                <div class="flex gap-3 items-center">
                    <input name="answer" id="answer_${i}" type="radio">
                    <label class="text-lg" for="answer_${i}">${this.answers[i]}</label>
                </div>
            `)
        }
    }

    checkAnswer(hariu){
        if(hariu === this.correctAnswer){
            console.log('Зөв хариуллаа. Баяр хүргэе')
            this.correct = true;
        } else {
            console.log('Буруу хариуллаа. Дахин оролдоно уу...')
        }
        this.selected = hariu;
    }
}

const question = new Quiz('Улаанбаатар хот хэдэн онд байгуулагдсан бэ?' , [1760 , 1639 , 1921 , 1991] , 1);
const question1 = new Quiz('Монгол хэлний цагаан толгой хэдэн үсэгтэй вэ?' , [26 , 33 , 21 , 35] , 3);

// 5 asuult uusgeed, buh asuultiig daraallaar n garaj ireh

const questions = [question , question1];

function init(){
    let i = 0;
    function start(){
        if(i === questions.length) return;
        questionContainer.innerHTML = '';
        const q = document.createElement('h1');
        const li = document.createElement('div');
        const btnContainer = document.createElement('div');
        const btnNext = document.createElement('button');
        const btnPrev = document.createElement('button');
        
        
        
        btnContainer.className = 'flex justify-between mt-5';
        btnNext.className = 'py-3 px-8 transition duration-300 hover:text-white hover:bg-opacity-100 rounded-xl border-2 border-indigo-500 bg-indigo-500 text-indigo-500 font-bold bg-opacity-30';
        btnPrev.className = 'py-3 px-8 transition duration-300 hover:text-white hover:bg-opacity-100 rounded-xl border-2 border-indigo-500 bg-indigo-500 text-indigo-500 font-bold bg-opacity-30';
        btnNext.textContent = 'Next';
        btnPrev.textContent = 'Prev';
        btnNext.id = 'next';
        btnPrev.id = 'prev';

        if(i === questions.length - 1){
            btnNext.innerText = 'Дуусгах'
        }
        
        btnContainer.append(btnPrev)
        btnContainer.append(btnNext)
        
        li.className = 'flex flex-col gap-4 mt-5';
        q.className = 'font-bold text-2xl text-gray-700';
        questionContainer.append(q);
        questionContainer.append(li);
        questionContainer.append(btnContainer)
        
        
        questions[i].printQuestion(q , li);
        btnNext.addEventListener('click' , () => {
            const inp = document.querySelector('input[name="answer"]:checked');
            if(inp){
                const answer = +inp.id.split('_')[1]
                questions[i].checkAnswer(answer);
                if(i === questions.length - 1){
                    return
                }
                i++;
                start()
            } else {
                i++;
                start()
            }
        })
    }
    start()
};