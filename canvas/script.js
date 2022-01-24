// canvas - WEBGL

// #d9b68e
// #904e2e

const canvas = document.querySelector('#canvas');
canvas.width = 400; // 50
canvas.height = 400;

const ctx = canvas.getContext('2d');

const pawnWhite = new Image();
pawnWhite.src = './images/pawnWhite.png';
// pawnWhite.width = 30;
// pawnWhite.height = 30;
const pawnBlack = new Image();
pawnBlack.src = './images/pawnBlack.png';

pawnWhite.addEventListener('load' , () => {
    for(var k = 0; k < 8; k++){
        ctx.drawImage(pawnBlack , (k * 50) + 10 , 60 , 30 , 30);
        ctx.drawImage(pawnWhite , (k * 50) + 10 , 310 , 30 , 30);
    }
})


for(let i = 0; i < 8; i++){
    let color;

    for(let j = 0; j < 8; j++){
        if(i % 2 === 0){
            if(j % 2 === 0){
                color = '#d9b68e';
            } else {
                color = '#904e2e';
            }
        } else {
            if(j % 2 === 0){
                color = '#904e2e';
            } else {
                color = '#d9b68e';
            }
        }
        ctx.fillStyle = color;
        ctx.fillRect(i * 50 , j * 50 , 50 , 50);
    }

}