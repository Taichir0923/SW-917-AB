class BudgetApp {
    insertButton;
    constructor(){
        this.insertButton = document.querySelector('#insert');

        this.test();
    }

    insertHandler(){
        console.log(this.insertButton)
    }

    test(){
        this.insertButton.addEventListener('click' , this.insertHandler.bind(this));
    }
}

const app = new BudgetApp();

// call , bind , apply

// webkit