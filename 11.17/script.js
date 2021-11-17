// Document 
const wrap = document.querySelector('.wrap');
const imgPath = document.querySelector('#img');
// const zurag = document.createElement('img')
// zurag.setAttribute('src', 'gfdjk')


function createBox(){
    const box = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src' , imgPath.value)
    box.setAttribute('class', 'box');
    box.append(img);
    wrap.append(box);
    imgPath.value = '';
}