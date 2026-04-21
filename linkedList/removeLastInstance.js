//Remove last instance of a value from a singley linked list
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
    removeLastInstance(target){
        if(!this.head) return;
        let lastPrev = null;
        let prev = null;
        let targetNode = null;
        let current = this.head;
        while(current){
            if(current.value === target){
                lastPrev = prev;
                targetNode = current;
            }
            prev = current;
            current = current.next;
        }
        if(targetNode){
            if(lastPrev===null){
                this.head = this.head.next;
            }else{
                lastPrev.next = targetNode.next;
            }
        }
    }
    display(){
        if(!this.head) return;
        let result = '';
        let current = this.head;
        while(current){
            result+=current.value + ' -> ';
            current = current.next;
        }
        console.log(result+'null');
    }
}
const list = new List();
list.insert(60);
list.insert(50);
list.insert(40);
list.insert(30);
list.insert(50);
list.display();
list.removeLastInstance(50);
list.display();