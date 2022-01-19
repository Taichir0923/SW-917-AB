class BudgetApp {
    insertButton;
    modal;
    closeModal;
    description;
    amount;
    date;
    insert;
    type;
    budget;
    table
    constructor(){
        this.insertButton = document.querySelector('#insert');
        this.modal = document.querySelector('.backdrop');
        this.closeModal = document.querySelector('#close');
        this.description = document.querySelector("#description");
        this.amount = document.querySelector("#amount");
        this.date = document.querySelector("#date");
        this.type = document.querySelector("#type");
        this.table = document.querySelector("#table");
        this.insert = document.querySelector("#insertBtn");
        this.budget = [];

        this.open();
        this.updateUI()
    }

    openModal(){
        this.modal.classList.add('openModal')
    }

    closeHandler(){
        this.modal.classList.remove('openModal')
    }

    insertHandler(){
        if(
            this.description.value.trim() !== '' &&
            this.amount.value.trim() !== '' &&
            this.date.value !== ''
        ){
            const formData = {
                description: this.description.value,
                type: this.type.value,
                amount: +this.amount.value,
                date: this.date.value,
                id: Math.random().toString().split('.')[1]
            }
            this.budget.push(formData);
            this.updateUI();
            this.clearForm();
            this.closeHandler();
        } else {
            alert('invalid input')
        }
    }

    open(){
        this.insertButton.addEventListener('click' , this.openModal.bind(this));

        this.closeModal.addEventListener('click' , this.closeHandler.bind(this));

        this.insert.addEventListener('click', this.insertHandler.bind(this))
    }

    clearForm(){
        this.description.value = '';
        this.amount.value = '';
        this.date.value = ''
    }

    updateUI(){
        this.table.innerHTML = '';
        this.budget.forEach(budget => {
            this.table.insertAdjacentHTML('afterbegin' , `
                <tr class="border-b">
                    <td class="py-2 flex items-center gap-4">
                        <p>${budget.description}</p>
                        <i class="fas ${budget.type == '+' ? 'fa-arrow-up text-green-400' : 'fa-arrow-down text-red-400'}"></i>
                    </td>
                    <td class="text-center py-2 text-[#666]">${budget.date}</td>
                    <td class="text-center py-2 ${budget.type == '+' ? 'text-green-400' : 'text-red-400'}">${budget.type == '-' ? '-' : ''}${budget.amount}</td>
                </tr>
            `)
        })
    }
}

const app = new BudgetApp();

// call , bind , apply

// webkit