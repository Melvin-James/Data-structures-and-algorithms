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
        while(current && current.next){
            current = current.next;
        }
        current.next = node;
    }
    removeMid(){
        if(!this.head) return;
        //handle single node
        if(!this.head.next){
            this.head = null;
            return;
        }
        let prev = null;
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = slow.next;
    }
    display(){
        let result = '';
        let current = this.head;
        while(current){
            result+=current.value+' -> ';
            current = current.next;
        }
        console.log(result+'null');
    }
}
const list = new linkedList();
list.insert(10);
list.insert(45);
list.insert(30);
list.insert(11);
list.insert(5);
list.display();
list.removeMid();
list.display();
list.removeMid();
list.display();
list.removeMid();
list.display();