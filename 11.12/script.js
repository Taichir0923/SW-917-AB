// DOM - document object model
// object
// window
const title = document.querySelector("#title");

function changeStyle (){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    title.className = 'headin';
    title.textContent = "<i>Italic</i>";
    title.style.color = `rgb(${red}, ${green}, ${blue})`;
}

// innerHTML - html bichih
// innerText - text bichih
// textContent - text bichne

function clearStyle (){
    title.className = '';
    title.style.color = "#000";
}

// title.style.color = '#ffff00';
// title.style.fontSize = "3rem";

// camel case => camelCase
// background-color => backgroundColor

// var obj = {
    // ner: "Narada",
    // mergejil: "designer"
// }

// obj.ner = "John"

// class js reserved word => ( className )
// for => htmlFor
// placeholder

// 1. CSS ashiglan title zagvar hiih. 
// 2. html tag n tuhain css class-g aguulaagui bh
// 3. button tag  uusgeed tuhain tovchiig darah uyd, h1 tag dr css dotorh class-g nemj og


// 1. heading tag-g js dotor oruul
// 2. heading tag dotor class nemj ogoh function bich
// 3. button tag-n onclick attribute dotor function duudah


// busar selectors
// event
// create element

// 