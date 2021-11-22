// Document 
const wrap = document.querySelector('.wrap');
const imgPath = document.querySelector('#img');
const btn = document.querySelector('.btn');
const backdrop = document.querySelector('.backdrop')
// const zurag = document.createElement('img')
// zurag.setAttribute('src', 'gfdjk')


// function createBox(){
//     if(imgPath.value.trim() !== ''){
//         const box = document.createElement('div');
//         const img = document.createElement('img');
//         const icon = document.createElement('i');
//         icon.setAttribute('class' , 'fas fa-times');
//         img.setAttribute('src' , imgPath.value)
//         box.setAttribute('class', 'box');
//         box.append(img);
//         box.append(icon);
//         wrap.append(box);
    
//         imgPath.value = '';
//         icon.onclick = function(){ // Anonymous function
//             box.remove()
//         } 
//     } else {
//         alert('Зураг оруул...')
//     }
// }

// insertAdjacentHTML

// function test(){
//     return function(arg){
//         return arg;
//     }
// }

// const bla = test()("hahaha");

// wrap.insertAdjacentHTML('beforebegin', "<h1>previous sibling</h1>") // 1. position, 2. html tag
// wrap.insertAdjacentHTML('afterbegin', "<h1>After begin</h1>");
// wrap.insertAdjacentHTML('afterbegin', "<h1>After</h1>");

// wrap.insertAdjacentHTML('beforeend', "<h1>Last child</h1>")
// wrap.insertAdjacentHTML('beforeend', "<h1>Last</h1>")

// wrap.insertAdjacentHTML('afterend', "<h1>next sibling</h1>")

// []
// index++

btn.addEventListener('click', function(){
    createBox()
    imgPath.value = '';
}) // 1. event , 2. callback
function createBox(){
    if(imgPath.value.trim() !== ''){
        wrap.insertAdjacentHTML('afterbegin', `
            <div class="box">
                <i id="delete" class="fas fa-times"></i>
                <img id='zurag' src="${imgPath.value}">
            </div>
        `)

        imgPath.value = ''
    } else {
        alert('zurag oldsongui')
    }
}

// event listener

document.addEventListener('click', function(event){
    if(event.target.id === "delete"){
        event.target.parentNode.remove()
    }
    if(event.target.id === 'zurag'){
        backdrop.children[0].children[0].src = event.target.src
        backdrop.classList.add('modalOpen');
    }

    if(event.target.id === 'close' || event.target.classList.contains('modalOpen')){
        backdrop.classList.remove('modalOpen');
    }

})

document.addEventListener('keydown' , function(event){
    if(event.keyCode === 13){
        createBox();
    }
    if(event.keyCode === 27){
        backdrop.classList.remove('modalOpen');
    }
})

// modal box hiine

// getElementsByClassName - HTML Collections
// querySelectorAll - NodeList