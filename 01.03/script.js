// JSON - JavaScript Object Notation
// Class , constructor
// destructions , /Arrays and Object/

// JSON - нэг төрлийн обжект
// REST API

// "[{}, {}, {}]"
// stringify - JS objectuudiig string bolgoj ogno
// parse - json ogogdliig js object bolgoj ogno

/**
 * {
 *      ner: "",
 *      utas: "",
 *      email: "",
 *      password: ""
 * }
 */

// Class - blueprint of JS object

// const user = {
//     ner: "Narada",
//     getName: function(){
//         return this.ner
//     }
// }

// user.hobbies = ['bbc' , 'abc']

// class User { // OOP
//     constructor(name){
//         this.ner = name
//     }

//     getName(){
//         return this.ner
//     }
// }
// Data Structure
// Linked List
class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const node = new Node(val);
        if(!this.length){
            this.head = node;
            this.tail = this.head;
        } else {
            let oldTail = this.tail;
            oldTail.next = node;
            this.tail = node;
        }

        this.length++;
        return this.length;
    }

    pop(){
        if(!this.length){
            return undefined;
        }

        let deleteNode;

        if(this.length === 1){
            deleteNode = this.head;
            this.head = null;
            this.tail = null;
        } else {
            let newTail = this.head;
            deleteNode = newTail.next;
            while(deleteNode.next){
                newTail = newTail.next;
                deleteNode = newTail.next;
            }
            newTail.next = null;
            this.tail = newTail
        }

        this.length--;
        return deleteNode.val;
    }
}

const sll = new SinglyLinkedList();
sll.push(12);
sll.push(13);
sll.push(14);
sll.push(15);
sll.push(16);

// shift , unshift functsuudiig bichih.