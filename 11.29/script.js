// Primitive - Number , String , Boolean , null , undefined
// Non-Primitive - Object , Array , Regular Expressions

// const regex = /nom/gi;

// const hasToo = /.{8}/;
// const hasCapLetter = /[^A-Za-z0-9_]/g;

// ||
// i - ignore the case
// ^ (carret) - ymar temdegteer ehlehiig zaana
//            - herev [] dotor orj tuhain tuhain temdegtuudiig ignore hiine
// $ - ymar temdegteer togsohiig zaana
// . - ymar ch temdegt bj bolohiig zaana
// [] - haaltan dotorh temdegt butiig shalgana
// \d - digit - toon ogogdliig shalgana
// \D - toon bus ogogdluud
// \w - special character-s busad buh ogogdol
// \W - buh special character-g shuuj avna
// \s - buh white space-g shuuj avna
// \S - white space-s busad buh ogogdol
// {3,} - hamgiin bagadaa taarah elementiin too
// {3,6} - 
// {,6}
// ? - temdegtiin araas orj irj bui temdegtiig shalgah
// + - temdegt dor hayj ng udaa taarah 
// * - 0 bolon tuunees ih temdegt taarah

// const sentence = "12gfffhfd";

// console.log(sentence.match(hasToo));
// console.log(hasCapLetter.test(sentence));

const input = document.querySelector('#input');
const ptags = document.querySelectorAll('.requirement')

input.addEventListener('input', function(){
    var regEx = [/[a-z]/ , /[A-Z]/ , /\d/ , /\W/ , /.{8,}/ ];
    regEx.forEach((rxp , index) => {
        if(rxp.test(input.value)){
            ptags[index].classList.remove('text-red-400');
            ptags[index].classList.add('text-gray-400');
            ptags[index].classList.add('line-through');
        } else {
            ptags[index].classList.add('text-red-400');
            ptags[index].classList.remove('text-gray-400');
            ptags[index].classList.remove('line-through');
        }
    });

    var regExpGeneral = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?=.{8,})/;
    if(regExpGeneral.test(input.value)){
        console.log(true)
    }
})

// password strength shalgah programm bichih
// new Array
// 1. Zaaval jijig useg orson bh
// 2. Zaaval tom useg orson bn
// 3. Zaaval too orson bh
// 4. Zaaval temdegt orson bh
// 5. hamgiin bagadaa 8 elementtei bh 

// HEX code shalgah Regular Expressions bichih

// #ff0000
// #f00
// #ff0
// #0f0