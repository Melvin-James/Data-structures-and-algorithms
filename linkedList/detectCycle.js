class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    Constructor(){
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
    detectCycle(){
        if(!this.head) return false;
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next;
            if(slow === fast) return true;
        }
        return false;
    }
}
const list = new LinkedList();
list.insert(20);
list.insert(10);
list.insert(60);
list.insert(30);