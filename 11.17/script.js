// Document 
const wrap = document.querySelector('.wrap');


function createBox(){
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    wrap.append(box)
}