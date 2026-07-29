//Add a node behind a particular postion in a linked list;
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insert(value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }

    display(){
        if(!this.head) return;
        let current = this.head;
        let result = '';
        while(current){
            result+=current.value + '->';
            current = current.next;
        }
        console.log(result+'null');
    }

    addAtParticular(target,value){
        if(!this.head) return -1;

        let node = new Node(value);
        let current = this.head;

        while(current){
            if(current.value === target){
                node.next = current.next;
                current.next = node;
                return;
            }
            current = current.next;
        }
        return -1;
    }
}
const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);
list.display();
list.addAtParticular(30,60);
list.display();