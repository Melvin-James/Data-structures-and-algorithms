// delete front and back node of target node SLL
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

    
    deleteFrontBack(target) {
        let curr = this.head;
        let prev = null;
        let prevPrev = null;

        if(this.head.value === target){
            this.head.next = this.head.next.next;
            return;
        }

        while(curr.next){
            if(curr.value === target) {
                if(!prevPrev){
                    this.head = curr;
                    curr.next = curr.next.next;
                    return;
                }else if(!curr.next.next){
                    prevPrev.next = curr;
                    return;
                }else if(curr.next.next){
                    prevPrev.next = curr;
                    curr.next = curr.next.next;
                    return;
                }
            }
            prevPrev = prev;
            prev = curr;
            curr = curr.next
        }
        prevPrev.next = curr;
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
list.deleteFrontBack(20);
list.display();
