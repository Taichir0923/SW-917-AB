const input = document.querySelector("input[type=\"text\"]");

function calculate(){
    input.value = eval(input.value)
}

function printNums(num){
    if(num === '='){
        calculate()
    } else {
        input.value += num;
    }
}