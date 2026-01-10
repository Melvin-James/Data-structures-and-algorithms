class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class linkedList{
    constructor(){
        this.head = null;
    }
    insertAtEnd(value){
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
    reverse(){
        if(!this.head) return;
        let prev = null;
        let current = this.head;
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
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
list.insertAtEnd(10);
list.insertAtEnd(45);
list.insertAtEnd(30);
list.insertAtEnd(5);
list.display();
list.reverse();
list.display();