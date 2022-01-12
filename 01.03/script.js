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
        this.next = null;
    }
}

// Stack
// QUEUE

// Tree

// Matrix
// Graph


// [12 , 13 , 14 , 15]

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

    shift(){
        if(!this.length){
            return undefined;
        }

        let deleteNode;

        if(this.length === 1){
            deleteNode = this.head;
            this.head = null;
            this.tail = null;
        } else {
            deleteNode = this.head;
            this.head = deleteNode.next;
            deleteNode.next = null;
        }

        this.length--;
        return deleteNode.val;
    }

    unshift(val){
        const node = new Node(val);
        if(!this.length){
            this.head = node;
            this.tail = this.head;
        } else {
            const oldHead = this.head;
            node.next = oldHead;
            this.head = node;
        }

        this.length++;
        return this.length;
    }

    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        let counter = 0;
        let node = this.head;
        while(counter < index){
            node = node.next;
            counter++;
        }
        return node;
    }

    set(index , value){
        let nodeToChange = this.get(index);
        if(!nodeToChange) return false;
        nodeToChange.val = value;
        return true;
    }

    insert(index , value){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);

        const node = new Node(value);
        const prev = this.get(index - 1);
        node.next = prev.next;
        prev.next = node;
        this.length++;
        return this.length;
    }
}

const sll = new SinglyLinkedList();
sll.push(12);
sll.push(13);
sll.push(14);
sll.push(15);
sll.push(16);

// shift , unshift functsuudiig bichih.


// insert
// remove

// reverse
// print


// dll - pop , push , shift , unshift , get , set , insert , remove , print , reverse()