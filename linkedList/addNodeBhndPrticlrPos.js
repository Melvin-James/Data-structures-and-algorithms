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
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
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


    addBefPos(position,value){
        let node = new Node(value);
        if(position === 0) {
            node.next = this.head;
            this.head = node;
            return;
        }
        let index = 0;
        let curr = this.head;
        let prev = null;
        while(index < position){
            prev = curr;
            curr = curr.next;
            index++;
        }
        prev.next = node;
        node.next = curr;
        return;
        
    }
}
const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);
list.display();
list.addBefPos(2,20);
list.display();