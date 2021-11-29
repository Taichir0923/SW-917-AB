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

const input = document.querySelector('#input')

input.addEventListener('input', function(){
    var hasToo = /\d/;
    if(hasToo.test(input.value)){
        console.log('too aguulsan bna...')
    }
})

// password strength shalgah programm bichih

// 1. Zaaval jijig useg orson bh
// 2. Zaaval tom useg orson bn
// 3. Zaaval too orson bh
// 4. Zaaval temdegt orson bh
// 5. hamgiin bagadaa 8 elementtei bh 