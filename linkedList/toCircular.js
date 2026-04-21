//Convert linked list into circular
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class List{
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
    makeCircular(){
        if(!this.head) return;
        let current = this.head;
        while(current && current.next){
            current = current.next;
        }
        current.next = this.head;
    }
}
const list = new List();
list.insert(30)
list.insert(40)
list.insert(50)
list.makeCircular();