import Node from "./node.js"

export default class LinkedList {
    constructor(){
        this.head = this.tail = null
    }

    //add to end of the list (tail). (value)
    append(value){
        if (!this.tail){
            this.head = this.tail = new Node(value)
        }else{
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
        }
    }
    

    //add to beginning of list (head). (value)
    prepend(value){
        if(!this.head){
            this.head = this.tail = new Node(value)
        }else{
            let oldHead = this.head 
            this.head = new Node(value)
            this.head.next = oldHead
        }
    }

    //returns total number of nodes in list
    size(){
        let count = 0
        let pointer = this.head
        while (pointer !== null){
            count++
            pointer = pointer.next
        }
    }

    //returns the first node in the list
    head(){
        console.log(head(), this.head)
        return this.head
    }

    //the last node in the list
    tail(){
        let tail = this.head;
        while (tail.next != null){
            tail = tail.nextNode
        }
        console.log(tail(), this.tail)
        return this.tail
    }

    //returns the node at the given index. (index)
    at()

    //removes the last element from the list
    pop()

    //returns true in value passed in is in the list, false if not. (value)
    contains()

    //returns index of the node containing value, or null if not found. (value)
    find()

    // inserts a new node with provided value at given index (value, index)
    insertAt()

    //removes node at given index. (index)
    removeAt()

    //represent your LinkedList objects as stringsm so you can print them out and preview them in the console
    //format: ( value ) -> (value) -> (value) -> null
    toString()
}